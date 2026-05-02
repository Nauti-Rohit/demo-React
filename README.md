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

step7: creating a script for development("start": "parcel index.html") and production("build": "parcel build index.html") in package.json, So now we have to write "npm run start" or "npm start" in place of npx parcel index.html for starting our application in development server.

JSX: It is a javascript Syntax, which is easier to create react syntax. it is not part of react.>

jsx is not html inside the js. it is html/xml like sytax.
after rendering the Babel transpiles the code to understand for the Browser

jsx code -Babeltranslator-> React.createElement-> ReactElement-Js Object -> HtmlElement(render) -Browser-> executor

JS Engine = interpreter/compiler

for Using attribute in jsx write it always in camelCase: like: className.

if in the JSX writes a single line of code, it need not to write between the round brackets. But if their is the multiple lines of code then always use round Brackets.

Component:

- Class Based component(using js class)
- Function based component(using js function)

A function is returning the react element called functional component

- Functional Components(we can use the normal function by arrow function is good industries practice.)
const HeadingComponent = () => (
  <h1 className="heading">Hello! i am not Rohit Nautiyal</h1>
);

- Component composition: if one component rendering in the other one component called component composition
const HeadingComponent1 = () => (
  <div id="container">
    <HeadingComponent />
    <h1 className="heading1">Hello! i am Rohit Nautiyal</h1>
  </div>
);

JSX helps keep your app safe from Cross-Site Scripting (XSS) attacks.

These three thinks are the same:

- <Title/>
- <title></Title>
- {Title()}

Creating a food app:

Planing: "nautiFood"
Header: logo | nav inks | cart
Body: search bar, restro card,
Footer: copywrite

Component:
header: logo, nav items,
body: search, card container, card and resto details
footer: copywrite, links. address, contact

Config Driven UI: It means your UI is not hardcoded in components, but instead controlled by a configuration object (JSON, JS object, or API response). config comes from backend Ex. UI can be different based on city, Month, Occasion etc...

we can decide the file structure of our porject.
Developer are using ample of extention like jsx, tsx and js. you can write anything according your choice. all are did same things.

Use always key whenever "key" props in show data, its imp because Key prop helps React uniquely identify elements during re-rendering for efficient updates.
React compares the old UI and new UI during re-rendering (this is called reconciliation).

do not follow this type Ex-
{items.map((item, index) => (
<Component key={index} data={item} />
))}
Using index as key is usually not recommended because if items are added/removed/reordered, React may update the wrong component.

when you have no choice then only can use index. as a last option better to not passing key.

Their is two types of Export/Import:
1- Default Export  
(export default Header;) (import Header from "./components/Header";)
2- Named Export  
(export const CDN_Url) (import { CDN_Url } from "../utils/constants";)

Props: Passing argument to component is called props, Or dynamically passing some data to component you passing as a props.

Monolith Architecture:
all the code in a same service

Microservice Architecture:
seprate of conerrn and single responsibility principle
