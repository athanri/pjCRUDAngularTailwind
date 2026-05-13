# CrudAngular

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.11 with **Tailwind CSS** configured for styling.

## Prerequisites

- Node.js (v20 or higher)
- npm (v10 or higher)

## Installation

1. Install dependencies:
```bash
npm install
```

## Development server

To start a local development server, run:

```bash
npm start
```

or

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Tailwind CSS

This project includes Tailwind CSS v3 pre-configured. You can use Tailwind utility classes directly in your HTML templates:

```html
<div class="flex items-center justify-center h-screen bg-gray-100">
  <p class="text-2xl font-bold text-blue-600">Welcome to Angular + Tailwind CSS!</p>
</div>
```

### Customizing Tailwind

To customize Tailwind CSS, edit the `tailwind.config.js` file in the project root. For more information, visit [Tailwind CSS Documentation](https://tailwindcss.com/docs).

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
