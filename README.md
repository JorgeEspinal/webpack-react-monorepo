# Getting Started with a monorepo

This project was create using [Webpack](https://webpack.js.org/) and [React](https://react.dev/). The purpose for this project was to find a way to use an external component as external module to be using in different project inside this repository.

In the root of the repository, we have a package.json file with a workspace property for external components. And for each of those components, we have a specific package.json

And finally, in the folder website that is the main project that call this component as dependencies, we add in our webpack.config.js alias.

## Available Scripts

### `npm start`

Runs this command in the root location of this repository,
Open [http://localhost:9000](http://localhost:9000) to view it in the browser.
