step 1: npm init

after the install node-modules(collection of dependencies))

step 2: install Bundlers (vite, parcel)

to "npm install -D parcel" here -D means dev-dependency

-> Difference btw ~ and ^ in dev dependencies
like: "parcel": "^2.8.3" here ^ it upgrade the minor version of dependencies but ~ upgrades major versions of dependencies

Our project(as package.json) depend on webpack(parcel, vite), and webpack as a project it has own dependencies and those has his own dependencies called "transitive dependencies"

step 3: create gitignore file and write /node_modules in it

step4: "npx parcel index.html" to ignite my app, creating a server four aur app in localhost

step5: install react "npm i react" and import it using: import React from "react";.
install react-dom "npm i react-dom" to using: import ReactDom from "react-dom/client".

step6: change your <script src="App.js"></script> to <script type="module" src="App.js"></script>

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
