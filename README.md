# react-rendering-app

Technical Assignment: Nextflow Schema Parsing and React UI Rendering

The project was developed using Typescript and React.

# Clarifications

1_ URL used: The fetching of the json file is done through https://raw.github.com/nf-core/scrnaseq/2.4.1/nextflow_schema.json (instead of https://github.com/nf-core/scrnaseq/blob/2.4.1/nextflow_schema.json) sicne the former URL serves the raw json file.

# Current Issues

1_ Form and Field validations are missing.

# Enhancement Items

1_ To avoid the CORS issue when fetching a JSON file from React a proxy server ( code in cors_server/) is used. This proxy server is expected to provide the json file required, which in this case nextflow_schema.json. A possible enhancement will be to automatically download the json required from any website and make it available to the React server.

2_ Current implementation uses Typescript interfaces, which can be seen in file src/json_to_ts_interfaces.tsx. These interfaces are specific to the JSON file in https://github.com/nf-core/scrnaseq/blob/2.4.1/nextflow_schema.json. A required improvement will be to automate the generation of those interfaces for any JSON file.


# Pre-requisites

The following items needs to be installed prior to running the program:

- Node
- Typescript
- React
- node-fetch
- cors
- express (express is used by the cors-server)

To install Node please follow the instruction on the webpage : https://nodejs.org/en/download.

To install TypeScript please refer to https://www.typescriptlang.org/download.

To install the cors, express and fetch-node modules please run the command 'npm i [npm module or package name]'. To install express please run that command in the /cors-server directory.


# How to Run The Project

The project is composed of two components: cors server and React server. The code for each component is included in its corresponding project subdirectory (/cors-server and /react-server/). 

1_ Clone the repository. The following command can be used:
   git clone https://github.com/jj8081/react-rendering-app.git

2_ Open a terminal and go to the /cors-server directory. There run the command 'node app'. The cors server should start and display the message 'Listening on port 8080'.

3_ Open a second terminal and go to the /react-server directory. There run the command 'npm start'. You should see multiple messages including the message 'You can now view react-rendering-app in the browser.' and a message indicating the url where the react server is running (i.e. Local: http://localhost:3000). A browser window should open at that address and you will see a string message that includes the initial contents of the JSON file.


# How to Stop The Project

Please type 'Control + C' on each of the two terminals open.

# Troubleshoting

This section describes possible error messages and corresponding troubleshoting steps:

<i>Error message</i>

<blockquote>
'react-scripts' is not recognized as an internal or external command,
operable program or batch file.
</blockquote>


<i>Description</i>

This error message may be observed when running 'npm start' on the /react-server directory.


<i>Root Cause</i>

This error is due to a cache issue that may be observed when switching version packages frequently.


<i>Troubleshooting steps</i>

1. Remove /node_modules subdirectory, if present.
2. Remove package-lock.js file in /react-server.
3. On /react-server, run command 'npm cache clean --force'.
4. Run command 'npm i' in the same directory.
5. Run command 'npm start' in the same directory.

The react-server component should start normally after running the steps listed above.


<i>Troubleshooting Reference Link for this Issue</i>

https://stackoverflow.com/questions/52823393/react-scripts-is-not-recognized-as-an-internal-or-external-command


