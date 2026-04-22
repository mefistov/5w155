## TEST Task

## Prerequisites

- Node.js (version 18 or higher)
- npm package manager
- Git

## Installation

1. Clone the repository: `git clone https://github.com/mefistov/5w155.git`
2. Install dependencies: `npm i`
   Navigate to the cloned repository in your system. Install the necessary dependencies using the commandomated fo
3. `npx playwright install` downloads and sets up the browsers locally for your project.
5. Set up .env Variables

````
BASE_URL=https://the-internet.herokuapp.com/login
USERNAME=
PASSWORD=
````

## Features

- **Playwright Testing**: Modern, reliable end-to-end testing framework
- **TypeScript Support**: Strong typing for better code quality
- **Environment Management**: Secure configuration with dotenv

## Prerequisites

- Node.js (version 18 or higher)
- npm package manager
- Git 
- 
## Project Structure
```
    TestTask5w155/
├── src/
│   ├── fixtures/
│   │   └── uiFixture.ts
│   ├── pages/
│   │   ├── BasePage.ts
│   │   ├── LoginPage.ts
│   │   └── SecureAreaPage.ts
│
├── tests/
│   └── UI/
│       └── test.spec.ts
│
├── test-results/
├── playwright-report/
│
├── .env
├── playwright.config.ts
├── tsconfig.json
├── package.json
└── README.md
```
## File Naming

- Test Files / Suites:
    - Use PascalCase (UpperCamelCase) for file names.
    - Example: LoginPage.spec.ts
    - If using a folder, the folder name and its primary entry file should be identical and in PascalCase.
    - Example: Login/LoginPage.spec.ts
- Utilities, and Regular Folders:
    - Use camelCase.
    - Example: util.ts
    - Note: In structures like users/LoginPage/LoginPage.spec.ts, the users folder is a regular feature folder and uses camelCase, while LoginPage represents a test suite or page and follows PascalCase.
- Assets/Test data:
    - Use kebab-case.
    - Example: icon-asset.svg```

## Futher steps:

1. Add new POMs to cover new pages
2. Add new Fixtures to manage combination of pages, credentials and test data
3. Add API service layer to make framework hybrid 
4. Add DB connection layer
