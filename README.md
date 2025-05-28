# Simple Todo App

A modern, responsive Todo application built with React, TypeScript, and Vite. This application allows users to manage their tasks with a clean and intuitive interface.

![Simple Todo App](https://github.com/yourusername/simple-todo/raw/main/public/screenshot.png)

## Features

- ✅ Create, read, update, and delete tasks
- 🔄 Mark tasks as complete/incomplete
- 📝 Edit task descriptions
- 💾 Persistent storage using local storage
- 🎨 Clean, responsive UI with Tailwind CSS
- ✨ Smooth animations with Framer Motion

## Tech Stack

- **React 19** - A JavaScript library for building user interfaces
- **TypeScript** - Adds static typing to JavaScript
- **Vite** - Next generation frontend tooling
- **Zustand** - A small, fast and scalable state-management solution
- **Tailwind CSS** - A utility-first CSS framework
- **Framer Motion** - A production-ready motion library for React
- **Lucide React** - Beautiful & consistent icons

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/yourusername/simple-todo.git
   cd simple-todo
   ```

2. Install dependencies

   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Build for Production

```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `dist/` directory.

## Project Structure

```
simple-todo/
├── public/            # Static assets
├── src/
│   ├── assets/        # Project assets
│   ├── components/    # React components
│   │   ├── TaskInput.tsx  # Component for adding new tasks
│   │   ├── TaskItem.tsx   # Component for individual task items
│   │   └── Tasks.tsx      # Component for displaying the task list
│   ├── stores/        # State management
│   │   └── useTodoStore.ts  # Zustand store for todo state
│   ├── App.css        # App-specific styles
│   ├── App.tsx        # Main App component
│   ├── index.css      # Global styles
│   └── main.tsx       # Entry point
├── .gitignore         # Git ignore file
├── index.html         # HTML template
├── package.json       # Project dependencies and scripts
├── tsconfig.json      # TypeScript configuration
└── vite.config.ts     # Vite configuration
```

## License

MIT
