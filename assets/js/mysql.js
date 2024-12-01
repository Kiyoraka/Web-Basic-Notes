// mysql.js
const MYSQL_NOTES = {
    title: 'MySQL Database',
    sections: [
        {
            title: 'What is MySQL?',
            content: `MySQL is like a super-organized digital filing cabinet for your website's information!
            
Key Points:
• Stores all kinds of information (users, scores, messages)
• Keeps data organized in tables
• Can find information super fast
• Used by many popular websites and games`
        },
        {
            title: 'Database Basics',
            content: `Understanding how databases work:

Database Structure:
• Database → Contains many tables
• Tables → Like spreadsheets with rows and columns
• Rows → Each piece of information
• Columns → Different types of data

Example Table (Users):
\`\`\`sql
CREATE TABLE users (
    id INT PRIMARY KEY,
    username VARCHAR(50),
    age INT,
    score INT
);
\`\`\`

Think of it like:
• A library (database) with many books (tables)
• Each book has pages (rows) of information
• Each page has specific details (columns)`
        },
        {
            title: 'Basic Commands',
            content: `The most important MySQL commands you'll use:

Adding Data (INSERT):
\`\`\`sql
INSERT INTO users (username, age, score)
VALUES ('Alex', 13, 100);
\`\`\`

Getting Data (SELECT):
\`\`\`sql
-- Get all users
SELECT * FROM users;

-- Get specific user
SELECT * FROM users 
WHERE username = 'Alex';
\`\`\`

Updating Data (UPDATE):
\`\`\`sql
UPDATE users 
SET score = 200 
WHERE username = 'Alex';
\`\`\`

Deleting Data (DELETE):
\`\`\`sql
DELETE FROM users 
WHERE username = 'Alex';
\`\`\``
        },
        {
            title: 'Working with PHP',
            content: `Using MySQL with PHP to make dynamic websites:

Connecting to Database:
\`\`\`php
<?php
$connection = mysqli_connect(
    "localhost",  // Server
    "username",   // Username
    "password",   // Password
    "database"    // Database name
);
\`\`\`

Getting Data:
\`\`\`php
<?php
$query = "SELECT * FROM users";
$result = mysqli_query($connection, $query);

while($row = mysqli_fetch_assoc($result)) {
    echo $row['username'] . "<br>";
}
\`\`\`

Always:
• Check for connection errors
• Protect against SQL injection
• Close the connection when done`
        },
        {
            title: 'Database Design Tips',
            content: `Making your database work better:

Good Practices:
• Give tables clear names (users, scores, messages)
• Each table should focus on one thing
• Use the right data types (INT for numbers, VARCHAR for text)
• Always have a PRIMARY KEY (usually 'id')

Example Game Database:
\`\`\`sql
-- Players table
CREATE TABLE players (
    id INT PRIMARY KEY,
    username VARCHAR(50),
    level INT,
    points INT
);

-- Scores table
CREATE TABLE scores (
    id INT PRIMARY KEY,
    player_id INT,
    game_score INT,
    date_played DATE
);
\`\`\`

Remember:
• Keep it simple
• Plan before you build
• Think about what information you need
• Make backup copies of important data`
        }
    ]
};

export default MYSQL_NOTES;