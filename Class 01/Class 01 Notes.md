# React Project Setup (Using Vite)

## Overview

This project was created using **Vite**, a modern and efficient build tool designed to provide a faster and smoother development experience compared to traditional tools like Create React App (CRA). Vite offers lightning-fast startup, optimized bundling, and a minimal setup process ideal for modern React projects.

# React Project Setup (Using Vite)

## Overview
This project was created using **Vite**, a fast and modern build tool designed to improve the React development experience. Compared to older tools like Create React App (CRA), Vite provides extremely fast startup times, optimized builds, and a minimal, efficient workflow.

## Project Creation
The setup was started using:
``npm create vite@latest``

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
  ``cd "React Course"``
- Run the dev server:  
  ``npm run dev``

## Node Modules & Git Ignore
The **node_modules** folder is **never pushed to GitHub** because:
- It is extremely large in size.
- It contains packages that can be reinstalled anytime using `npm install`.
- It makes repositories heavy and slow to clone.

By default, Vite (and most modern tools) automatically includes `node_modules/` in the **.gitignore** file, so you don’t need to add it manually.

## CRA vs Vite
The old CRA command is:
``npx create-react-app <app-name>``

However, Vite is preferred because it provides:
- Faster project initialization  
- Quicker development server startup  
- Smaller, optimized builds  
- A more modern development environment  

## Summary
This setup delivers a clean, fast, and modern React development workflow using Vite. The project can be started anytime using `npm run dev`, and unnecessary files like **node_modules** are safely ignored by Git to keep the repository lightweight and efficient.