# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Installation

```bash
npm install
npm run dev
```

<!-- Git Usuage -->

```bash

git add .
git commit -m "Message here"
git push

```
<!-- Components Usage -->

## Chart

```jsx
const categories = [
  "Category1",
  "Category2",
  "Category3",
  "Category4",
  "Category5",
];
const data = [10, 20, 30, 40, 50];

<BarChart categories={categories} data={data} />;
```
