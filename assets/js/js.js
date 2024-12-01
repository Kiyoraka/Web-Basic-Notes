
// javascript.js
const JS_NOTES = {
    title: 'JavaScript (The Fun Programming Language)',
    sections: [
        {
            title: 'What is JavaScript?',
            content: `JavaScript makes websites come alive! It's like giving superpowers to your web pages.
            
Key Points:
• Makes websites interactive and fun
• Can respond to clicks, typing, and other actions
• Creates animations and cool effects
• Can talk to other websites and get information`
        },
        {
            title: 'Basic Concepts',
            content: `Let's learn the basics of JavaScript:

Variables (Storing Information):
\`\`\`javascript
let playerName = "Alex";
let score = 100;
let isGameOver = false;
\`\`\`

Functions (Making Things Happen):
\`\`\`javascript
function jumpPlayer() {
    // Make player jump
    console.log("Boing!");
}
\`\`\`

Comments help explain your code!`
        },
        {
            title: 'Making Things Happen',
            content: `Respond to user actions and make your site interactive:

Event Listeners:
\`\`\`javascript
// When someone clicks a button
button.addEventListener('click', function() {
    alert("You clicked me!");
});
\`\`\`

Common Events:
• click - When clicking something
• hover - When moving mouse over something
• keypress - When pressing keyboard keys
• submit - When submitting forms`
        },
        {
            title: 'Creating Cool Effects',
            content: `Make your website more exciting with effects:

Animations:
\`\`\`javascript
// Make something move
function moveElement() {
    element.style.left = "100px";
    element.style.transform = "rotate(360deg)";
}
\`\`\`

Timers and Intervals:
• setTimeout - Do something after a delay
• setInterval - Do something repeatedly
• Perfect for games and animations`
        },
        {
            title: 'Working with Data',
            content: `Store and use information in your programs:

Arrays (Lists):
\`\`\`javascript
let fruits = ["apple", "banana", "orange"];
fruits.push("grape");  // Add new fruit
\`\`\`

Objects (Collections):
\`\`\`javascript
let player = {
    name: "Alex",
    score: 100,
    lives: 3
};
\`\`\`

Tips:
• Use arrays for lists of similar things
• Use objects to group related information
• Always check if data exists before using it`
        }
    ]
};

export default JS_NOTES;