For React with Typscript

1. First install Visual Studio Code IDE

2. Install latest lts version of NodeJS - https://nodejs.org/en , for now using v20.16.0 , this will install npm as well
   NodeJS to run or create new react app instance , to create new app , older node version will not affect our code

3. check node version in cmd

   > node --version

4. Create react app using :
   Create react app (https://create-react-app.dev/) , then one advanced can use Vite (https://vitejs.dev/ easy and recommended , new)

For now use create react app

to create new app with name myapp under D:\apps\react

> d:
> cd D:\apps\react
> npx create-react-app my-app

if got issue use,
npx create-react-app@latest my-app

5. Open Visual Studio Code , drag the folder and can open terminal inside that using Ctrl + ~

6. to start the app , you can access by http://localhost:3000/
   > npm start

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
