## Installation

Before running the tests, you need to install all dependencies. Use the npm package manager:

```bash
npm install
Running Tests
Once all dependencies are installed, you can run the tests using the following command:

bash
Copy code
npm test
This will launch the Cypress test runner, which will execute all tests defined in the project.

Project Structure
bash
Copy code
cypress/
  ├── fixtures/          # Fixture files (e.g., JSON files)
  ├── integration/       # Tests
  ├── plugins/           # Cypress plugins
  └── support/           # Custom commands and helper methods
