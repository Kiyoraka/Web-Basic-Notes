// github.js
const GITHUB_NOTES = {
    title: 'GitHub Version Control',
    sections: [
        {
            title: 'What is GitHub?',
            content: `GitHub is like a cloud drive for your code - but way cooler! It helps you save different versions of your work and collaborate with others.
            
Key Points:
• Stores your code online safely
• Tracks all changes you make
• Lets you work with other people
• Free to use for basic features

Think of it like:
• A time machine for your code
• A social network for programmers
• A backup system for your projects
• A place to show off your work`
        },
        {
            title: 'Getting Started with GitHub',
            content: `Let's set up your GitHub account!

1. Create GitHub Account:
• Go to github.com
• Click "Sign Up"
• Choose a username (pick wisely - it's your coding identity!)
• Enter your email
• Create a strong password
• Verify your account

2. Create Personal Access Token (PAT):
• Click your profile picture → Settings
• Scroll to "Developer settings" (bottom left)
• Click "Personal access tokens" → "Tokens (classic)"
• Generate new token
• Select scopes (at least 'repo' and 'workflow')
• Copy and save your token safely!

3. First Time Setup:
• Download Git: 
https://git-scm.com/downloads

• For new users, get Setup-Git.bat:
https://github.com/Kiyoraka/Git-OneClick/tree/main/New-User

• Run Setup-Git.bat and follow the prompts
• Enter your name and email when asked
• Enter your GitHub repo URL when prompted
• Use your GitHub username and PAT when asked`
        },
        {
            title: 'Basic Git Commands',
            content: `Important commands you'll use often:

1. Starting Commands:
\`\`\`bash
git init            # Start a new repository
git clone URL       # Copy a repository from GitHub
git status         # Check what's changed
\`\`\`

For easier setup, use Basic Setup-Git.bat:
https://github.com/Kiyoraka/Git-OneClick/tree/main/Basic

2. Making Changes:
\`\`\`bash
git add .                # Add all changes
git commit -m "message"  # Save changes
git push                 # Send to GitHub
git pull                # Get latest changes
\`\`\`

3. Checking Changes:
\`\`\`bash
git log              # View history
git diff             # See what changed
git checkout branch  # Switch branches
\`\`\`

Remember:
• Commit often
• Write clear commit messages
• Pull before pushing
• Keep your code up to date`
        },
        {
            title: 'Working with .gitignore',
            content: `The .gitignore file tells Git what files to ignore:

Example .gitignore:
\`\`\`
# Folders to ignore
/temp/
/node_modules/
/build/

# Files to ignore
*.log
*.tmp
*.exe
config.json
.env

# IDE specific
.vscode/
.idea/
\`\`\`

Common Things to Ignore:
• Temporary files
• Build files
• Log files
• Secret information
• Personal settings

Tips:
• Create .gitignore before first commit
• Use patterns (* for wildcards)
• Check templates for your language
• Keep sensitive data out`
        },
        {
            title: 'Daily GitHub Workflow',
            content: `Regular steps when working on projects:

1. Starting Work:
• Pull latest changes
\`\`\`bash
git pull origin main
\`\`\`

2. Making Changes:
• Create new branch for features
\`\`\`bash
git checkout -b feature-name
\`\`\`

3. Saving Work:
• Check what changed
\`\`\`bash
git status
git diff
\`\`\`
• Add and commit changes
\`\`\`bash
git add .
git commit -m "Added new feature"
\`\`\`

4. Sharing Work:
• Push to GitHub
\`\`\`bash
git push origin feature-name
\`\`\`

Best Practices:
• Work in branches
• Commit related changes together
• Test before pushing
• Keep commits small and focused`
        },
        {
            title: 'GitHub Desktop Alternative',
            content: `If you prefer using a visual tool instead of commands:

GitHub Desktop Features:
• Easy to use interface
• Visual diff viewer
• Simple commit process
• Branch visualization

Get GitHub Desktop:
https://desktop.github.com

Steps to Use:
1. Download and install
2. Log in with GitHub account
3. Clone repositories
4. Make changes visually
5. Commit and push with clicks

Benefits:
• No commands to memorize
• See changes visually
• Easy branch management
• Perfect for beginners

Note: Learning command line is still valuable!`
        },
        {
            title: 'Tips and Tricks',
            content: `Helpful tips for using GitHub:

1. Repository Organization:
• Use clear folder structure
• Keep README.md updated
• Add project documentation
• Use descriptive file names

2. Commit Messages:
• Start with action verb
• Keep under 50 characters
• Explain why, not what
• Reference issues if any

3. Safety Tips:
• Never commit passwords
• Back up local work
• Don't force push to main
• Review changes before pushing

4. Collaboration Tips:
• Communicate with team
• Review others' code
• Keep branches up to date
• Use issues for tracking

Remember:
• Practice regularly
• Learn from mistakes
• Ask for help when needed
• Keep improving your skills`
        }
    ]
};

export default GITHUB_NOTES;