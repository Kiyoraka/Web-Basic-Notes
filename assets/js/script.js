// Topics data
const TOPICS = [
    {
        id: 'html',
        title: 'HTML',
        icon: 'fa-globe'
    },
    {
        id: 'php',
        title: 'PHP',
        icon: 'fa-file'
    },
    {
        id: 'mysql',
        title: 'MySQL Database',
        icon: 'fa-database'
    },
    {
        id: 'crud',
        title: 'CRUD Operations',
        icon: 'fa-code'
    },
    {
        id: 'erd',
        title: 'Entity Relationship Diagram',
        icon: 'fa-project-diagram'
    },
    {
        id: 'dfd',
        title: 'Data Flow Diagram',
        icon: 'fa-sitemap'
    },
    {
        id: 'github',
        title: 'GitHub',
        icon: 'fa-code-fork'
    }
];


// Importing notes
import HTML_NOTES from './html.js';

// Create a mapping of topic content
const TOPIC_CONTENT = {
    'html': HTML_NOTES,
    // Add other topics as they are created
};

let currentIndex = 0;
let currentFontSize = 1; // Base font size multiplier
let isAnimating = false;

// DOM Elements
const slider = document.getElementById('notesSlider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const currentPageSpan = document.getElementById('currentPage');
const totalPagesSpan = document.getElementById('totalPages');
const themeToggle = document.querySelector('.theme-toggle');
const topicsBtn = document.getElementById('topicsBtn');
const fontSizeBtn = document.getElementById('fontSizeBtn');

// Font size controls
const MIN_FONT_SIZE = 0.8;
const MAX_FONT_SIZE = 1.4;
const FONT_SIZE_STEP = 0.2;

// Animation timing
const ANIMATION_DURATION = 300; // milliseconds

function cycleFontSize() {
    currentFontSize += FONT_SIZE_STEP;
    if (currentFontSize > MAX_FONT_SIZE) {
        currentFontSize = MIN_FONT_SIZE;
    }
    
    const content = document.querySelector('.notes-content');
    if (content) {
        content.style.fontSize = `${currentFontSize}em`;
        localStorage.setItem('fontSize', currentFontSize.toString());
    }
}

// Theme handling
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    themeToggle.innerHTML = theme === 'dark' 
        ? '<i class="fas fa-sun"></i>' 
        : '<i class="fas fa-moon"></i>';
}

// Create topic element HTML
function createTopicElement(topic) {
    const topicContent = TOPIC_CONTENT[topic.id];
    
    if (!topicContent) {
        return `
            <div class="notes-content" style="font-size: ${currentFontSize}em">
                <h2 class="topic-title">
                    <i class="fas ${topic.icon}"></i>
                    ${topic.title}
                </h2>
                <div class="topic-content">
                    <div style="text-align: center; padding: 2rem;">
                        <i class="fas fa-book-open" style="font-size: 3em; color: var(--primary-color); margin-bottom: 1rem;"></i>
                        <p style="color: var(--secondary-color); font-size: 1.2em;">
                            Notes for ${topic.title} will appear here soon!
                        </p>
                        <p style="color: var(--text-color); margin-top: 1rem;">
                            Use the arrows or keyboard to navigate between topics
                        </p>
                    </div>
                </div>
            </div>
        `;
    }

    return `
        <div class="notes-content" style="font-size: ${currentFontSize}em">
            <h2 class="topic-title">
                <i class="fas ${topic.icon}"></i>
                ${topicContent.title}
            </h2>
            <div class="topic-content">
                ${topicContent.sections.map(section => `
                    <div class="notes-section">
                        <h3 class="section-title">${section.title}</h3>
                        <div class="section-content">
                            ${section.content
                                .replace(/</g, '&lt;')
                                .replace(/>/g, '&gt;')
                                .replace(/```([\s\S]*?)```/g, (_, code) => `<pre class="code-block">${code}</pre>`)
                                .replace(/`([^`]+)`/g, '<code>$1</code>')
                                .replace(/\n/g, '<br>')}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// Create topics menu
function createTopicsMenu() {
    const menu = document.createElement('div');
    menu.className = 'topics-menu';
    menu.innerHTML = `
        <div class="topics-menu-content">
            <h3>Choose a Topic</h3>
            <div class="topics-list">
                ${TOPICS.map((topic, index) => `
                    <button class="topic-item ${index === currentIndex ? 'active' : ''}" 
                            data-index="${index}">
                        <i class="fas ${topic.icon}"></i>
                        ${topic.title}
                    </button>
                `).join('')}
            </div>
        </div>
    `;

    document.body.appendChild(menu);
    
    // Add click listeners to topic items
    menu.querySelectorAll('.topic-item').forEach(item => {
        item.addEventListener('click', () => {
            const newIndex = parseInt(item.dataset.index);
            if (newIndex !== currentIndex) {
                navigateToTopic(newIndex);
            }
            menu.remove();
        });
    });

    // Close menu when clicking outside
    menu.addEventListener('click', (e) => {
        if (e.target === menu) {
            menu.remove();
        }
    });
}

// Navigation functions
function navigateToTopic(newIndex) {
    if (isAnimating || newIndex === currentIndex) return;
    
    isAnimating = true;
    slider.classList.remove('active');
    
    setTimeout(() => {
        currentIndex = newIndex;
        updateSlider();
        setTimeout(() => {
            isAnimating = false;
        }, ANIMATION_DURATION);
    }, ANIMATION_DURATION);
}

// Update the slider display
function updateSlider() {
    const topic = TOPICS[currentIndex];
    slider.innerHTML = createTopicElement(topic);
    
    setTimeout(() => {
        slider.classList.add('active');
    }, 50);
    
    currentPageSpan.textContent = currentIndex + 1;
    totalPagesSpan.textContent = TOPICS.length;
    
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === TOPICS.length - 1;

    // Save current position
    localStorage.setItem('currentTopicIndex', currentIndex.toString());
}

// Touch handling for mobile devices
let touchStartX = 0;
let touchEndX = 0;

function handleTouchStart(e) {
    touchStartX = e.touches[0].clientX;
}

function handleTouchMove(e) {
    touchEndX = e.touches[0].clientX;
}

function handleTouchEnd() {
    const swipeThreshold = 50;
    const swipeDistance = touchEndX - touchStartX;
    
    if (Math.abs(swipeDistance) > swipeThreshold) {
        if (swipeDistance > 0 && currentIndex > 0) {
            navigateToTopic(currentIndex - 1);
        } else if (swipeDistance < 0 && currentIndex < TOPICS.length - 1) {
            navigateToTopic(currentIndex + 1);
        }
    }
}

// Navigation event listeners
prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        navigateToTopic(currentIndex - 1);
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < TOPICS.length - 1) {
        navigateToTopic(currentIndex + 1);
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' && currentIndex > 0) {
        navigateToTopic(currentIndex - 1);
    } else if (e.key === 'ArrowRight' && currentIndex < TOPICS.length - 1) {
        navigateToTopic(currentIndex + 1);
    }
});

// Touch events for mobile
slider.addEventListener('touchstart', handleTouchStart);
slider.addEventListener('touchmove', handleTouchMove);
slider.addEventListener('touchend', handleTouchEnd);

// Add control button event listeners
topicsBtn.addEventListener('click', createTopicsMenu);
fontSizeBtn.addEventListener('click', cycleFontSize);
themeToggle.addEventListener('click', toggleTheme);

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Load saved preferences
    const savedIndex = parseInt(localStorage.getItem('currentTopicIndex')) || 0;
    const savedFontSize = parseFloat(localStorage.getItem('fontSize')) || 1;
    
    currentIndex = savedIndex;
    currentFontSize = savedFontSize;
    
    initializeTheme();
    updateSlider();

    // Add CSS for topics menu
    const style = document.createElement('style');
    style.textContent = `
        .topics-menu {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
        }

        .topics-menu-content {
            background: var(--card-background);
            padding: 2rem;
            border-radius: 15px;
            box-shadow: 0 4px 15px var(--shadow-color);
            max-width: 90%;
            width: 500px;
        }

        .topics-menu h3 {
            color: var(--primary-color);
            text-align: center;
            margin-bottom: 1.5rem;
            font-size: 1.5rem;
        }

        .topics-list {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }

        .topic-item {
            background: none;
            border: none;
            padding: 1rem;
            text-align: left;
            color: var(--text-color);
            cursor: pointer;
            border-radius: 8px;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 1rem;
        }

        .topic-item:hover {
            background: var(--primary-color);
            color: var(--card-background);
        }

        .topic-item.active {
            background: var(--secondary-color);
            color: var(--card-background);
        }

        .topic-item i {
            width: 24px;
            text-align: center;
        }
    `;
    document.head.appendChild(style);
});