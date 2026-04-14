=> step 1: npm init

after the install node-modules(collection of dependencies))

=> step 2: install Bundlers (vite, parcel)

to "npm install -D parcel" here -D means dev-dependency

-> Difference btw ~ and ^ in dev dependencies
like: "parcel": "^2.8.3" here ^ it upgrade the minor version of dependencies but ~ upgrades major versions of dependencies

Our project(as package.json) depend on webpack(parcel, vite), and webpack as a project it has own dependencies and those has his own dependencies called "transitive dependencies"

=> step 3: create gitignore file and write /node_modules in it

=> step4: "npx parcel index.html" to ignite my app, creating a server four aur app in localhost

=> step5: install react "npm i react" and import it using: import React from "react";.
install react-dom "npm i react-dom" to using: import ReactDom from "react-dom/client".

=> step6: change your <script src="App.js"></script> to <script type="module" src="App.js"></script>

#Parcel:

- Dev Build
- Local Server
- HMR: Hot Module Replacement
- File watching Algorithm(written in C++)
- Caching- Faster Build(taking less time to execute again)
- Image Optimization
- Minification
- Bundle all files
- compressing all files
- consisting Hashing\*
- code splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error handling
- HTTPs
- Tree Shaking- remove unused code
- Different dev and prod Bundles

=> step7: creating a script for development("start": "parcel index.html") and production("build": "parcel build index.html") in package.json, So now we have to write "npm run start" or "npm start" in place of npx parcel index.html for starting our application in development server.

JSX: It is a javascript Syntax, which is easier to create react syntax. it is not part of react.>

jsx is not html inside the js. it is html/xml like sytax.
after rendering the Babel transpiles the code to understand for the Browser

jsx code -Babeltranslator-> React.createElement-> ReactElement-Js Object -> HtmlElement(render) -Browser-> executor

JS Engine = interpreter/compiler

Use attribute in jsx use always camelCase: like: className
in jsx if write single line need not to write between the round brackets, but if their is the multiple lines use round Bracket always always.
