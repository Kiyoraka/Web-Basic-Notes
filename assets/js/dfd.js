// dfd.js
const DFD_NOTES = {
    title: 'Data Flow Diagram (DFD)',
    sections: [
        {
            title: 'What is a DFD?',
            content: `A Data Flow Diagram (DFD) is like a map showing how information moves through a system - imagine tracking how a message travels from your phone to your friend's phone!
            
Key Points:
• Shows how data moves in a system
• Helps understand complex processes
• Makes it easier to find problems
• Used to improve systems`
        },
        {
            title: 'Basic Symbols',
            content: `The main symbols used in DFDs:

1. Process (Circle/Oval):
• Shows where data is transformed
• Example: Calculate Total, Verify Password
\`\`\`
    (Calculate)
     Total
\`\`\`

2. Data Flow (Arrow):
• Shows data movement
• Example: Username, Password
\`\`\`
    ----→ Username ----→
\`\`\`

3. Data Store (Two Parallel Lines):
• Where data is stored
• Example: User Database, Game Scores
\`\`\`
    =============
     User Data
    =============
\`\`\`

4. External Entity (Rectangle):
• Outside sources/destinations
• Example: User, Admin, System
\`\`\`
    [  User  ]
\`\`\``
        },
        {
            title: 'DFD Levels',
            content: `DFDs can show different levels of detail:

1. Context Diagram (Level 0):
• The big picture
• Shows main system and external entities
\`\`\`
[User]----→(System)----→[Admin]
\`\`\`

2. Level 1 DFD:
• More detailed
• Shows main processes
\`\`\`
[User]----→(Login)----→(Play Game)----→[Score DB]
\`\`\`

3. Level 2 DFD:
• Even more detailed
• Shows sub-processes
\`\`\`
(Login)
  ↓
(Check Password)----→[User DB]
  ↓
(Create Session)
\`\`\``
        },
        {
            title: 'Real World Example',
            content: `Let's look at a simple game login system:

Game Login DFD:
\`\`\`
[Player]----→(Enter Username/Password)
                        ↓
                 (Verify Login)←----[User DB]
                        ↓
                (Create Session)
                        ↓
                 [Game World]

Data Flows:
• Username/Password data
• Verification result
• Session token
• Player information

Processes:
1. Enter credentials
2. Verify login
3. Create session
4. Load game world`
        },
        {
            title: 'Creating Good DFDs',
            content: `Tips for making clear DFDs:

Best Practices:
• Use clear, simple labels
• Show data flows with arrows
• Number processes
• Keep it neat and organized

Steps to Create a DFD:
1. Identify external entities
2. List main processes
3. Add data stores
4. Draw data flows
5. Review and clean up

Remember:
• Start simple, add detail later
• Use consistent naming
• Show all data flows
• Keep diagrams clear and readable`
        }
    ]
};

export default DFD_NOTES;