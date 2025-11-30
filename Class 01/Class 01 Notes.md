# React Project Setup (Using Vite)

## Overview

This project was created using **Vite**, a fast and modern build tool designed to improve the React development experience. Compared to older tools like Create React App (CRA), Vite provides extremely fast startup times, optimized builds, and a minimal, efficient workflow.

## Project Creation

The setup was started using:
`npm create vite@latest`

During the interactive setup, these options were selected:

- **Project Name:** React Course
- **Package Name:** react-course
- **Framework:** React
- **Variant:** JavaScript
- **Rolldown-Vite:** No
- **Install & Start Automatically:** Yes

Vite generated the project structure and installed approximately 203 dependencies. After installation, the development server started automatically.

## Development Server

Once installed, the app became available at:

- **Local URL:** `http://localhost:5173/`

To start the server manually:

- Move into the project directory:  
   `cd "React Course"`
- Run the dev server:  
   `npm run dev`

## Node Modules & Git Ignore

The __node_modules__ folder is __never pushed to GitHub__ because:

- It is extremely large in size.
- It contains packages that can be reinstalled anytime using `npm install`.
- It makes repositories heavy and slow to clone.

By default, Vite (and most modern tools) automatically includes `node_modules/` in the __.gitignore__ file, so you don’t need to add it manually.

## CRA vs Vite

The old CRA command is:
`npx create-react-app <app-name>`

However, Vite is preferred because it provides:

- Faster project initialization
- Quicker development server startup
- Smaller, optimized builds
- A more modern development environment

## Summary

This setup delivers a clean, fast, and modern React development workflow using Vite. The project can be started anytime using `npm run dev`, and unnecessary files like __node_modules__ are safely ignored by Git to keep the repository lightweight and efficient.