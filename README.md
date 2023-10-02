# Prossima AI

This repo is used to build and host the website of Prossima Dev, which belongs to the Prossima Suite.

Prossima Dev website is built using React Framework.

## Installation
Open a terminal and clone the repository:
```shell
git clone https://github.com/Prossima-Art/prossima-dev
```
Make sure you have installed the [Git](https://git-scm.com/downloads) tool.

Then navigate to the new folder:
```shell
cd prossima-dev
```
and install all dependencies:
```shell
npm install
```
then run it:
```shell
npm start
```
Make sure that you have already installed the [node.js](https://nodejs.org/es/).
Finally, open the browser at http://localhost:3000/ for visualizing the website. 

## Issues
The package mysql2 is required to make CRUD operations and has to be installed:
```shell
npm install mysql2
```
and inserted in the code as:
```js
import mysql from 'mysql2/promise'
```
but it has a lot of issues. This is because versions of webpack>5 doesnt include polyfill by default. This guys [here](https://www.alchemy.com/blog/how-to-polyfill-node-core-modules-in-webpack-5) relate quite well the issue and manage to resolve it.

However, we took an alternative way that consists in making the following steps:

1. In case it was not installed, install browserify and crypto-browserify. More info [here](https://stackoverflow.com/questions/68271637/module-not-found-error-cant-resolve-crypto-in)
2. Modify the webpack.config.js inside node_modules/react-scripts/config/. More info [here](https://stackoverflow.com/questions/68271637/module-not-found-error-cant-resolve-crypto-in)
3. Install the rest of modules (stream, timers, zlib, net, tls):
```shell
npm install stream timers zlib net tls
```
4. In case the errors persits, they might be related to the zlib packages. (Can't resolve './zlib_bindings'). In that case, remove zlib package, and
5. Modify again webpack.config.js inside node_modules/react-scripts/config/
```js
resolve: {
    fallback: {
        zlib: require.resolve("browserify-zlib"),
    }
}
```