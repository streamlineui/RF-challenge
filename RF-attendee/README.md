# RainFocus UI Project

## Project Overview

This project was developed using React and SCSS.

## Project Structure

- `src/` — Original React components, stylesheets, and source assets.
- `public/` — Static assets.
- `build/` — Compiled production version of the application.
- `package.json` — Project dependencies and scripts.

## Requirements

- Node.js
- npm

## Running the Application Locally

1. Extract the project ZIP file.
2. Open a terminal inside the project folder.
3. Install dependencies:

   `npm install`

4. Start the development server:

   `npm run dev`

5. Open the localhost URL displayed in the terminal.

## Viewing the Production Build

The compiled production files are located in the `build/` directory.

To preview the production build using Vite:

`npm run preview`

Open the localhost URL displayed in the terminal.

## Notes

The production build is included so the completed application can be reviewed without requiring the reviewer to compile the source code.

`node_modules` is intentionally excluded to reduce the submission size. Dependencies can be restored using `npm install`.
