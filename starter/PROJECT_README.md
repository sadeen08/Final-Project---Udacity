# Flashcard Study Application

A flashcard application for creating and studying card sets.

## Installation

```bash
npm install
```

## Running the Application

To build and serve the project with Parcel:

```bash
npm run gulp
```

The application will be available at `http://localhost:1234`

## Testing

### Unit Tests

Run Mocha unit tests:

```bash
npm run gulp test
```

or

```bash
npm test
```

### End-to-End Tests

**Important:** Cypress tests require the server to be running first.

1. In one terminal, start the development server:
   ```bash
   npm run gulp
   ```

2. In another terminal, run the Cypress tests:
   ```bash
   npx gulp cypress
   ```

   Or run Cypress interactively:
   ```bash
   npx cypress open
   ```

## Build

To build the project for production:

```bash
npx parcel build index.html
```

The optimized files will be in the `dist` directory with:
- Minified CSS and JavaScript
- Optimized images
- Concatenated files

## Project Structure

- `src/` - JavaScript source files
- `styles/` - CSS files
- `data/` - Data files
- `test/` - Mocha unit tests
- `cypress/e2e/` - Cypress end-to-end tests
- `dist/` - Built files (generated)

## Technologies

- **Parcel** - Build tool and development server
- **Gulp** - Task automation
- **ESLint** - Code linting
- **Mocha & Chai** - Unit testing
- **Cypress** - End-to-end testing
