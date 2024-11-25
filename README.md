# App-Development Test
At Floatplane our user-facing applications are built using MobX for state management and React for UI elements. We have a strong emphasis on keeping data and rendering code separate. We also use Typescript with very strict typing rules.

Write a simple example of a React and MobX application to show an infinite scroll-to-load feed of posts from a floatplane creator. It doesn’t need to be anything fancy, but does need to be presentable.

Endpoints: Use those endpoints to get a list of creators and then the posts per creator. The query parameters are example values in bold.

List Creators GET https://www.floatplane.com/api/v3/creator/list?search=linus

List BlogPosts for Creator GET https://www.floatplane.com/api/v3/content/creator?id=59f94c0bdd241b70349eb72b&limit=20&fetchAfter=5

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
