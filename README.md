# Phone Catalog

A responsive e-commerce frontend for browsing phones, viewing product details, managing favorites, and a shopping cart.

The project was built with React and TypeScript using a modular, feature-based architecture. It includes client-side routing, API integration, persistent local state, internationalization, theme switching, sorting, pagination, and responsive layouts.

## Demo

[DEMO LINK](https://a1daros.github.io/react-ts_phone_catalog/)

## Technologies

- React 18
- TypeScript
- Vite
- React Router
- SCSS Modules
- Context API
- i18next / react-i18next
- Bulma
- Font Awesome
- classnames
- React Transition Group
- Cypress
- ESLint
- Stylelint
- Prettier

## Architecture

The application follows a feature-based architecture with shared components, hooks, contexts, services, and TypeScript types.

### Feature Modules

The `modules` directory contains the main application features:

- **Home** — landing page with product and category sliders.
- **Catalog** — product listing with sorting and pagination.
- **Product Details** — detailed product information and suggested products.
- **Favorites** — management of favorite products.
- **Cart** — shopping cart with product quantity management.
- **Not Found** — fallback page for invalid routes.

### Shared Layer

Reusable functionality is organized in the `shared` module:

- **UI components** — buttons, icons, loaders, selectors, toggles, and other reusable elements.
- **Layout** — shared header and footer.
- **Product components** — reusable product cards and product lists.
- **Hooks** — reusable logic for debouncing, local storage, pagination, query parameters, and sliders.
- **i18n** — internationalization configuration and translation resources.
- **Types** — centralized TypeScript type definitions.

### State Management

The application uses React Context for global state management:

- **`CartContext`** — manages shopping cart state.
- **`FavoritesContext`** — manages favorite products.
- **`ThemeContext`** — manages the application theme.

The `useLocalStorage` hook is used to persist client-side data between sessions.

### API Layer

API-related logic is isolated in the `services` directory:

- `client.ts` — API client configuration.
- `product.api.ts` — product-related API requests.

This separation keeps data fetching independent from presentation components and feature-specific UI logic.

## Features

- Responsive product catalog
- Product browsing and detailed product pages
- Product sorting
- Pagination
- Search with debounced input
- Query parameter synchronization
- Suggested products
- Add/remove products from favorites
- Shopping cart management
- Persistent cart and favorites state
- Light and dark themes
- English and Ukrainian localization
- Responsive sliders
- Loading and error states
- Client-side routing
- 404 Not Found page
- Cypress end-to-end testing

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/A1daros/react-ts_phone_catalog.git
```

2. Navigate to the project directory:

```bash
cd react-ts_phone_catalog
```

3. Install dependencies:

```bash
npm install
```

4. Run the project locally:

```bash
npm start
```
