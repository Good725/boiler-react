# React Universal Boiler


## Features
- React 16
- A pleasant 😍 developer experience with 🔥 fast bundling, so you can get shit done. This starter takes advantage of tools like, [HappyPack](https://github.com/amireh/happypack) and the [DLL capabilities](http://webpack.github.io/docs/list-of-plugins.html#dllplugin) within Webpack itself. Your rebuilds happen fast because, nobody enjoys waiting around like a  🐢  while assets recompile.

### Demo

[https://boiler.strues.io](https://boiler.strues.io)   

## Usage

### Development
Getting up and running for development is easy.

`git clone git@github.com:strues/react-universal-boiler.git`

`cd react-universal-boiler`

Install the dependencies `yarn`.   
    
Copy the env file `cp .env.example .env`.  

Start development `yarn dev` and your universal React application is running on port 3000.   


### Production
Running the two commands below will compile your application and serve the production ready build.

**Build:** `yarn build`

**Run:** `yarn start`


### Env Variables
```yaml
PORT=3000
# where assets will be "served" from
PUBLIC_PATH=/assets/
# Entry file for Webpack on the server
SERVER_ENTRY=src/entry/server.js
# Entry file for the client
CLIENT_ENTRY=src/entry/client.js
# Output directory for clientside 
CLIENT_OUTPUT=build/assets
# Output directory for the server bundle
SERVER_OUTPUT=build
```


### Notes
> Configuring the development DLLs is handled in `tools/webpack/createWebpackConfig.js` at the bottom in the AutoDLLWebpackPlugin options. Adding dependencies here allows Webpack to bundle them once, and not again during development. This dramatically speeds up rebundle times.

For production, this is handled for you by comparing imports to what's in `node_modules`.


This boilerplate uses babel 7, which is currently in beta. If you plan on using `babel-plugin-transform-decorators-legacy`, please see the [Planning for Babel 7](http://babeljs.io/blog/2017/09/12/planning-for-7.0), particularly Stage 3: Class Properties (from Stage 2)



## Resources
- [`React Redux Links`](https://github.com/markerikson/react-redux-links)


## Alternatives
- [`React, Universally`](https://github.com/ctrlplusb/react-universally)
A starter kit giving you the minimum requirements for a modern universal React application. I contribute to React Universally frequently.

- [`ReactGo`](https://github.com/reactGo/reactGo)
Your One-Stop solution for a full-stack app with ES6/ES2015 React.js featuring universal Redux, React Router, React Router Redux Hot reloading, CSS modules, Express 4.x, and multiple ORMs.

- [`React Cool Starter`](https://github.com/wellyshen/react-cool-starter)
A simple but feature rich starter boilerplate for you to build an universal web app with the best development experience and a focus on performance and best practices.

## Contributing
Pull requests are welcome and encouraged. If I made a mistake, raise an issue and/or fix it and submit a PR. Have a question? I'll do what I can to answer it for you.
