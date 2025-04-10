# M Design

A React component library for M class.

## Installation

```bash
npm install m-design
# or
yarn add m-design
```

## Features

- React-based UI component library
- TypeScript support
- Built with Material-UI (@mui)
- Internationalization support (i18next)
- State management with Zustand
- Emotion for styling

## Peer Dependencies

This library requires the following peer dependencies:

- @emotion/react: ^11.11.1
- @emotion/styled: ^11.11.0
- @mui/icons-material: ^6.4.6
- @mui/material: ^6.4.6
- @mui/styles: ^6.4.6
- dayjs: ^1.11.13
- i18next: ^24.2.2
- immer: ^10.1.1
- js-cookie: ^3.0.5
- lucide-react: ^0.477.0
- react: ^18.2.0
- react-dom: ^18.2.0
- react-i18next: ^15.4.1
- zustand: ^5.0.3

## Project Structure

The library exports the following modules:

- Main package: `./dist/esm/index.js` or `./dist/cjs/index.js`
- Utils: `./dist/esm/utils/index.js` or `./dist/cjs/utils/index.js`
- Hooks: `./dist/esm/hooks/index.js` or `./dist/cjs/hooks/index.js`
- Store: `./dist/esm/store/index.js` or `./dist/cjs/store/index.js`
- Constants: `./dist/esm/constants/index.js` or `./dist/cjs/constants/index.js`

## Development

### Available Scripts

- `yarn storybook`: Start Storybook development server
- `yarn build-storybook`: Build Storybook
- `yarn build:dev`: Build development version
- `yarn build:prod`: Build production version
- `yarn clean`: Clean dist directory
- `yarn lint`: Run ESLint
- `yarn type-check`: Run TypeScript type checking
- `yarn generate-stories`: Generate Storybook stories
- `yarn yalc:build`: Build and publish to yalc
- `yarn yalc:push`: Build and push to yalc
- `yarn test`: Run tests
- `yarn test:watch`: Run tests in watch mode
- `yarn test:coverage`: Run tests with coverage report

## License

MIT © [a-fan-l](https://github.com/a-fan-l)

## Repository

[https://github.com/a-fan-l/M-design.git](https://github.com/a-fan-l/M-design.git)