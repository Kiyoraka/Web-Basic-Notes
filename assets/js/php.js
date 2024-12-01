// php.js
const PHP_NOTES = {
    title: 'PHP (PHP Hypertext Preprocessor)',
    sections: [
        {
            title: 'What is PHP?',
            content: `PHP is like a chef in a restaurant kitchen - it works behind the scenes to make everything happen on your website!
            
Key Points:
• PHP runs on the web server (not in your browser)
• Can create dynamic web pages that change based on user input
• Works great with databases to store information
• Used by millions of websites including Facebook!`
        },
        {
            title: 'Getting Started with PHP',
            content: `Let's learn how PHP works in your web pages:

Basic PHP Structure:
\`\`\`php
<?php
    // Your PHP code goes here
    echo "Hello, World!";
?>
\`\`\`

Variables in PHP:
\`\`\`php
$username = "Alex";  // String
$age = 13;          // Number
$isOnline = true;   // Boolean

// Display the values
echo "Welcome, $username!";
\`\`\`

Remember:
• PHP variables always start with $
• PHP code goes between <?php and ?>
• echo is used to display things`
        },
        {
            title: 'Working with Forms',
            content: `Handle user input from web forms:

Form Processing:
\`\`\`php
<?php
    // Get form data
    $username = $_POST['username'];
    $age = $_POST['age'];

    // Check the data
    if ($age < 13) {
        echo "Sorry, you must be 13 or older!";
    } else {
        echo "Welcome, $username!";
    }
?>
\`\`\`

Important Points:
• $_POST gets data from forms
• $_GET gets data from URLs
• Always check user input for safety!`
        },
        {
            title: 'Arrays and Loops',
            content: `Store and process lists of information:

Arrays (Lists of Things):
\`\`\`php
<?php
    // Simple array
    $fruits = ["apple", "banana", "orange"];

    // Loop through array
    foreach($fruits as $fruit) {
        echo "$fruit is yummy!<br>";
    }

    // Array with keys
    $user = [
        "name" => "Alex",
        "age" => 13,
        "hobby" => "coding"
    ];
?>
\`\`\`

Different Types of Loops:
• for - When you know how many times to loop
• while - When you don't know how many times
• foreach - Perfect for arrays`
        },
        {
            title: 'Functions and Logic',
            content: `Create reusable blocks of code:

Creating Functions:
\`\`\`php
<?php
    function sayHello($name) {
        return "Hello, $name!";
    }

    // Using the function
    echo sayHello("Alex");

    // Function with logic
    function canPlayGame($age) {
        if ($age >= 13) {
            return "You can play!";
        } else {
            return "Sorry, too young!";
        }
    }
?>
\`\`\`

Tips:
• Functions make code reusable
• Use clear names for functions
• Add comments to explain what they do`
        }
    ]
};

export default PHP_NOTES;