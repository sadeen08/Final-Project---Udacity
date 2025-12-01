# Running Cypress Tests - Instructions

## Important Note
Cypress tests require the development server to be running on http://localhost:1234

## Option 1: Two Terminal Approach (Recommended)

### Terminal 1 - Start the server:
```bash
cd /Users/sadeen/Downloads/nd0011-c4-starter-main/starter
npm run gulp
```
Keep this terminal running.

### Terminal 2 - Run Cypress tests:
```bash
cd /Users/sadeen/Downloads/nd0011-c4-starter-main/starter
npx cypress run
```

## Option 2: Run Cypress Interactively

### Terminal 1 - Start the server:
```bash
cd /Users/sadeen/Downloads/nd0011-c4-starter-main/starter
npm run gulp
```

### Terminal 2 - Open Cypress UI:
```bash
cd /Users/sadeen/Downloads/nd0011-c4-starter-main/starter
npx cypress open
```
Select "E2E Testing" and run your tests interactively.

## Verification

### Unit Tests (No server needed):
```bash
npm test
```
Should show: 4 passing tests

### Build Verification:
```bash
npx parcel build index.html
```
Check the `dist/` folder for optimized files.

## Cypress Tests Coverage

### Navigation Tests (navigation.cy.js):
1. Navigate to Card Sets page
2. Navigate to About page  
3. Navigate to Home page

### Form Tests (form.cy.js):
1. Create Set Form - Happy path (valid input)
2. Create Set Form - Unhappy path (empty input)
3. Add Card Form - Happy path (valid input)
4. Add Card Form - Unhappy path (empty term)
5. Add Card Form - Unhappy path (empty description)
6. Add Card Form - Unhappy path (both empty)

## Troubleshooting

If Cypress can't connect to the server:
1. Make sure the development server is running in another terminal
2. Verify http://localhost:1234 is accessible in your browser
3. Wait a few seconds after starting the server before running tests
