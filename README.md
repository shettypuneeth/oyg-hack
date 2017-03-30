# webpack2-react-starter
Webpack 2 starter kit with React and React Router v4

## Requirements
* node `^4.5.0`
* npm `^3.0.0`

## Getting Started

### Install from source

First, clone the project:

```bash
$ git clone https://github.com/shettypuneeth/webpack2-react-starter.git <my-project-name>
$ cd <my-project-name>
```
Then install dependencies and check to see it works.

```bash
$ npm install    # Install project dependencies
$ npm run start  # Compile and launch
```

NPM scripts:

|`npm run <script>`|Description|
|------------------|-----------|
|`start`|Serves your app at `localhost:8080`. HMR will be enabled in development.|
|`build`|Compiles the application to disk (`~/dist` by default).|

### ADD MIXPANEL SECRET to file
Add a new file called mixpanelSecret.js
and the key mentioned on slack
