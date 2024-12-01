// erd.js
const ERD_NOTES = {
    title: 'Entity Relationship Diagram (ERD)',
    sections: [
        {
            title: 'What is an ERD?',
            content: `An Entity Relationship Diagram (ERD) is like a map that shows how different pieces of information in a database are connected - just like how we draw maps to show how places are connected!
            
Key Points:
• Shows how different data is related
• Helps plan databases before building them
• Makes it easier to understand complex systems
• Used by developers to organize information`
        },
        {
            title: 'Basic Components',
            content: `The main parts of an ERD are like building blocks:

1. Entities (The Things):
• Rectangles represent entities
• Example entities: Users, Products, Orders
\`\`\`
[  USER  ]      [  PRODUCT  ]
\`\`\`

2. Attributes (The Details):
• Ovals show attributes (properties)
• Example: User has name, age, email
\`\`\`
    (name)
      |
[  USER  ]---(email)
      |
    (age)
\`\`\`

3. Relationships (The Connections):
• Diamond shapes show how things connect
• Example: User "places" Order
\`\`\`
[USER]----<places>----[ORDER]
\`\`\``
        },
        {
            title: 'Relationship Types',
            content: `How different things can be connected:

1. One-to-One (1:1):
• One thing connects to exactly one other thing
• Example: One user has one profile
\`\`\`
[USER]----1----<has>----1----[PROFILE]
\`\`\`

2. One-to-Many (1:N):
• One thing connects to many other things
• Example: One user can have many orders
\`\`\`
[USER]----1----<places>----N----[ORDER]
\`\`\`

3. Many-to-Many (M:N):
• Many things connect to many other things
• Example: Students can take many classes, and classes can have many students
\`\`\`
[STUDENT]----N----<takes>----M----[CLASS]
\`\`\``
        },
        {
            title: 'Real World Example',
            content: `Let's look at a simple game database:

Game Database ERD:
\`\`\`
[PLAYER]----1----<has>----N----[SCORE]
   |
   |----1----<belongs to>----N----[TEAM]
   |
   |----N----<collects>----M----[ITEM]

PLAYER attributes:
- PlayerID (primary key)
- Username
- Level
- JoinDate

SCORE attributes:
- ScoreID (primary key)
- Points
- GameDate
- PlayerID (foreign key)

TEAM attributes:
- TeamID (primary key)
- TeamName
- CreatedDate

ITEM attributes:
- ItemID (primary key)
- ItemName
- Rarity
\`\`\`

This shows:
• Players can have many scores
• Players can belong to teams
• Players can collect many items
• Items can be collected by many players`
        },
        {
            title: 'Tips for Creating ERDs',
            content: `How to make good ERDs:

Best Practices:
• Start with main entities (big things first)
• Add attributes (details) carefully
• Draw relationships clearly
• Use proper symbols consistently

Common Mistakes to Avoid:
• Making relationships too complicated
• Forgetting primary keys
• Missing important attributes
• Having unclear relationship names

Planning Steps:
1. List all main entities
2. Add important attributes
3. Draw relationships
4. Review and simplify
5. Check everything makes sense`
        }
    ]
};

export default ERD_NOTES;