# react-rendering-app
Technical Assignment: Nextflow Schema Parsing and React UI Rendering

The project was developed using Typescript and React.

# Clarifications

1_ URL used: The fetching of the json file is done through https://raw.github.com/nf-core/scrnaseq/2.4.1/nextflow_schema.json (instead of https://github.com/nf-core/scrnaseq/blob/2.4.1/nextflow_schema.json) sicne the former URL serves the raw json file.

# Current issues:

1_ Fetching of the JSON file from React is blocked by CORS policy. Trials were done adding header values but were unsuccessful. The CORS sisue was not observed when fetching the JSON file running the Typescrypt code outside of React. This at this time stops the rendering tests.

2_ Current implementation uses Typescript interfaces, which can be seen in file src/json_to_ts_interfaces.tsx. These interfaces are specific to the JSON file in https://github.com/nf-core/scrnaseq/blob/2.4.1/nextflow_schema.json. A required improvement will be to auotame the generation of those interfaces for any JSON file.

3_ Page rendering is stopped because of the CORS issue at this time.

4_ Form and Field validations are missing. 

# Pre-requiresites

The following needs to be installed prior to run the program:

- Node
- Typescript
- node-fetch
- React

# How to Run The code

1_ Clone the repository. The following command can be used:
   git clone https://github.com/jj8081/react-rendering-app.git

2_ From the project directory run 'npm start'. Note: at this time a fectch failure is observed because of the CORS issue, as mention in the "Current Issues" section above.


Text below is generic React instructions.
  
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

