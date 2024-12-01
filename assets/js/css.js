// css.js
const CSS_NOTES = {
    title: 'CSS (Cascading Style Sheets)',
    sections: [
        {
            title: 'What is CSS?',
            content: `CSS is like the fashion designer for websites! It makes web pages look pretty and cool.
            
Key Points:
• CSS stands for Cascading Style Sheets
• It controls how websites look (colors, sizes, layouts)
• Works together with HTML like best friends
• Makes websites look awesome on phones, tablets, and computers`
        },
        {
            title: 'How to Use CSS',
            content: `There are three ways to add CSS to your website:

\`\`\`css
/* 1. Inline CSS (directly in HTML) */
<p style="color: blue;">Blue text!</p>

/* 2. Internal CSS (in HTML head) */
<style>
    p { color: blue; }
</style>

/* 3. External CSS (separate file) */
/* In a .css file */
p { color: blue; }
\`\`\`

Tips:
• External CSS is usually the best choice
• Keep your styles organized in one place
• Easier to change everything at once`
        },
        {
            title: 'Colors and Backgrounds',
            content: `Make your website colorful and fun!

Common Color Properties:
• color: Changes text color
• background-color: Changes background color
• border-color: Changes border color

Cool Effects:
• gradient backgrounds
• transparent colors
• shadow effects

Example:
\`\`\`css
.cool-box {
    color: purple;
    background-color: lightblue;
    box-shadow: 0 0 10px blue;
}
\`\`\``
        },
        {
            title: 'Layout and Positioning',
            content: `Control where everything goes on your page:

Flexbox (Modern Way):
• display: flex;
• Makes organizing things super easy
• Great for navigation menus
• Perfect for responsive designs

Grid (Also Modern):
• display: grid;
• Like organizing things in a table
• Great for photo galleries
• Perfect for complex layouts

Example:
\`\`\`css
.nav-menu {
    display: flex;
    justify-content: space-between;
    padding: 10px;
}
\`\`\``
        },
        {
            title: 'Making Sites Look Good on All Devices',
            content: `Make your website look awesome everywhere!

Media Queries:
• Change styles based on screen size
• Perfect for phones and tablets
• Makes your site responsive

Example:
\`\`\`css
/* For phones */
@media screen and (max-width: 600px) {
    .menu {
        font-size: larger;
    }
}
\`\`\`

Tips:
• Always test on different devices
• Start with mobile design first
• Use flexible sizes (%, rem) instead of fixed sizes (px)`
        }
    ]
};

export default CSS_NOTES;