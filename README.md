# deepset pipeline

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template. On top of that, it contains:

- TypeScript
- ESLint
- [Ant Design](https://ant.design/)
- [React Router](https://reactrouter.com)
- [Husky](https://typicode.github.io/husky)

## Prerequisites

Copy `.env` as `.env.local`. Override `REACT_APP_API_BASE_URL` to point the application to a specific API url.

## Running the Development Mode

```bash
npm install
npm start
```

Open [http://localhost:3000/app](http://localhost:3000/app) to view the application in the browser.
The page will reload if you make edits.

## Running Tests

Currently, tests using Jest and React Testing Library are supported.

To launch the test runner in the interactive watch mode:

```bash
npm test
```

More info
[here](https://facebook.github.io/create-react-app/docs/running-tests).

## Running Lints

```bash
npm run lint
```

## Building the Application

```bash
npm run build
```

Builds the app for production to the `build` folder.

It correctly bundles React in production mode and optimizes the build for the
best performance.

The build is minified and the filenames include the hashes - your app is ready
to be deployed!

More info [here](https://facebook.github.io/create-react-app/docs/deployment).

## Commiting changes

`npm run lint` and `npm test` are executed automatically when changes are being pushed to the repo. There might be some known issues with the tool we utilize https://github.com/typicode/husky/issues/332. In case of any issues the linting and tests execution can be skipped by the following command: 

```bash
git push --no-verify
```