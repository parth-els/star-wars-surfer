# Star Wars Data Explorer

Welcome to the Star Wars Data Explorer! This React app demonstrates key frontend technologies used by our team, including React, TypeScript, Vite, CSS Modules, and the Graphene UI component library. The app fetches data from the public Star Wars API (SWAPI) and presents it in a modern, interactive UI.

## Features

- **Vite + React + TypeScript**: Fast development environment and type safety.
- **Graphene UI Components**: Professional UI with Table, Card, Pagination, Skeleton, Loader, SideSheet, Header, Footer, Search, Stack, and Inline.
- **CSS Modules**: Modular, component-level styling.
- **Star Wars API Integration**: Fetches and displays people and films from SWAPI.
- **Pagination**: Browse through paginated SWAPI data.
- **Search & Filtering**: Real-time search for Star Wars characters.
- **Loading States**: Skeleton and Loader components for smooth UX.
- **Detail View**: Click a table row to view character details and their films in a SideSheet/Card.

## Getting Started

### Prerequisites
- Node.js (v18 or newer recommended)
- npm

### Installation

1. Clone the repository:
   ```sh
   git clone <your-repo-url>
   cd myapp
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
4. Open your browser to the local address shown (e.g., http://localhost:5173/).

## Project Structure

- `src/` — Main source code
  - `components/` — Reusable UI components (TableComp, CardComp, SideSheetComp, etc.)
  - `pages/` — Page-level components (Home, Films, Hero)
  - `assets/` — Static assets (SVGs, images)
  - `App.tsx` — Main app layout
  - `main.tsx` — App entry point
  - `App.css`, `index.css` — Global and base styles
- `public/` — Static files
- `package.json` — Project metadata and dependencies
- `vite.config.ts` — Vite configuration

## Key Technologies

- **React** — UI library
- **TypeScript** — Type safety
- **Vite** — Fast build tool
- **Graphene** — UI component library
- **CSS Modules** — Scoped styles

## Design & Architecture Notes

- All custom styles use CSS Modules for maintainability.
- Data fetching is handled with React hooks and SWAPI endpoints.
- UI is organized with Graphene's layout primitives (Stack, Inline, etc.).
- Pagination and search are fully client-side for responsiveness.
- Code is modular and well-commented for onboarding and maintainability.

## Bonus Features (Optional)
- Toggle between people and films
- Table column sorting
- Unit/integration tests

## References
- [Graphene Documentation](https://www.npmjs.com/package/@elsevier/graphene)
- [SWAPI Docs](https://swapi.dev/documentation)
- [Vite + React + TypeScript Guide](https://vitejs.dev/guide/)
- [CSS Modules Docs](https://github.com/css-modules/css-modules)

## Author
- [PARTH BIDARI](https://github.com/parth-els)

## License
This project is for onboarding and educational purposes.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
