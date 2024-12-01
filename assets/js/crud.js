// crud.js
const CRUD_NOTES = {
    title: 'CRUD Operations',
    sections: [
        {
            title: 'What is CRUD?',
            content: `CRUD is like managing your toy collection - you can Create new toys, Read what toys you have, Update their condition, and Delete ones you don't want anymore!
            
Key Points:
• CRUD = Create, Read, Update, Delete
• These are the main operations in most apps
• Used with databases and applications
• Works with any kind of data (users, posts, scores, etc.)`
        },
        {
            title: 'Setting Up Connection',
            content: `Before we can do any CRUD operations, we need to connect to our database!

1. Create a Connection File (connection.php):
\`\`\`php
<?php
// Database configuration
$host = "localhost";    // Usually localhost
$username = "root";     // Your database username
$password = "";         // Your database password
$database = "mydb";     // Your database name

// Create connection
$conn = new mysqli($host, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Optional: Set character set
$conn->set_charset("utf8mb4");

// Now we can use $conn in other files!
\`\`\`

2. Include Connection in Other Files:
\`\`\`php
<?php
// At the start of any file that needs database access
require_once 'connection.php';

// Now you can use $conn for database operations
\`\`\`

3. Good Practices:
• Keep connection details secure
• Use constants for configuration
• Close connection when done
• Handle errors properly

4. Using Environment Variables:
\`\`\`php
<?php
// Using .env file for security
$host = getenv('DB_HOST') ?: 'localhost';
$username = getenv('DB_USER') ?: 'root';
$password = getenv('DB_PASS') ?: '';
$database = getenv('DB_NAME') ?: 'mydb';
\`\`\`

Remember:
• Never share database passwords
• Always check connection errors
• Close connection when finished
• Use secure connection settings`
        },
        {
            title: 'Create Operation',
            content: `Creating new data in your system:

In PHP & MySQL:
\`\`\`php
<?php
// 1. Using MySQL
INSERT INTO users (username, email, age) 
VALUES ('Alex', 'alex@email.com', 13);

// 2. Using PHP
$query = "INSERT INTO users (username, email, age) 
          VALUES (?, ?, ?)";
$stmt = $conn->prepare($query);
$stmt->bind_param("ssi", $username, $email, $age);
$stmt->execute();
\`\`\`

HTML Form Example:
\`\`\`html
<form action="create_user.php" method="POST">
    Username: <input type="text" name="username">
    Email: <input type="email" name="email">
    Age: <input type="number" name="age">
    <button type="submit">Create Account</button>
</form>
\`\`\`

Remember:
• Always validate input data
• Use prepared statements for safety
• Check for errors
• Confirm successful creation`
        },
        {
            title: 'Read Operation',
            content: `Getting data from your system:

Different Ways to Read:
\`\`\`php
<?php
// 1. Get all users
SELECT * FROM users;

// 2. Get specific user
SELECT * FROM users 
WHERE username = 'Alex';

// 3. Get sorted data
SELECT * FROM users 
ORDER BY age DESC;

// PHP Example
$query = "SELECT * FROM users WHERE age >= ?";
$stmt = $conn->prepare($query);
$stmt->bind_param("i", $min_age);
$stmt->execute();
$result = $stmt->get_result();

while($row = $result->fetch_assoc()) {
    echo "Username: " . $row['username'] . "<br>";
}
\`\`\`

Display Example:
\`\`\`html
<table>
    <tr>
        <th>Username</th>
        <th>Email</th>
        <th>Age</th>
    </tr>
    <?php while($user = $result->fetch_assoc()): ?>
    <tr>
        <td><?php echo $user['username']; ?></td>
        <td><?php echo $user['email']; ?></td>
        <td><?php echo $user['age']; ?></td>
    </tr>
    <?php endwhile; ?>
</table>
\`\`\``
        },
        {
            title: 'Update Operation',
            content: `Changing existing data in your system:

Update Examples:
\`\`\`php
<?php
// 1. MySQL Update
UPDATE users 
SET age = 14 
WHERE username = 'Alex';

// 2. PHP Update
$query = "UPDATE users SET email = ? WHERE username = ?";
$stmt = $conn->prepare($query);
$stmt->bind_param("ss", $new_email, $username);
$stmt->execute();
\`\`\`

Update Form:
\`\`\`html
<form action="update_user.php" method="POST">
    <input type="hidden" name="user_id" value="<?php echo $user_id; ?>">
    New Email: <input type="email" name="new_email">
    <button type="submit">Update Email</button>
</form>
\`\`\`

Important Tips:
• Always confirm before updating
• Use WHERE clause carefully
• Verify update success
• Keep update logs if needed`
        },
        {
            title: 'Delete Operation',
            content: `Removing data from your system:

Delete Examples:
\`\`\`php
<?php
// 1. MySQL Delete
DELETE FROM users 
WHERE username = 'Alex';

// 2. PHP Delete with confirmation
$query = "DELETE FROM users WHERE id = ?";
$stmt = $conn->prepare($query);
$stmt->bind_param("i", $user_id);
$stmt->execute();
\`\`\`

Delete Button Example:
\`\`\`html
<form action="delete_user.php" method="POST" 
      onsubmit="return confirm('Are you sure?');">
    <input type="hidden" name="user_id" value="123">
    <button type="submit" class="delete-btn">
        Delete Account
    </button>
</form>
\`\`\`

Safety Tips:
• Always ask for confirmation
• Use soft delete when possible
• Keep backup of deleted data
• Check for related data first`
        },
        {
            title: 'CRUD Best Practices',
            content: `Tips for better CRUD operations:

Security:
• Always validate input data
• Use prepared statements
• Check user permissions
• Sanitize output data

Error Handling:
\`\`\`php
<?php
try {
    // Try to perform CRUD operation
    $stmt->execute();
} catch(Exception $e) {
    // Handle error
    echo "Error: " . $e->getMessage();
}
\`\`\`

User Experience:
• Show clear success/error messages
• Confirm dangerous actions
• Provide undo options
• Keep interface simple

Code Organization:
• Separate database logic
• Use consistent naming
• Comment your code
• Follow coding standards`
        }
    ]
};

export default CRUD_NOTES;