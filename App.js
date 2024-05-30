// App.js
import React from "react";
import ReactDOM from "react-dom/client";
// const headerTag = document.createElement('h1');
// headerTag.innerHTML = 'Hello world from Javascript!';
// const rootTag = document.getElementById('root');
// rootTag.appendChild(headerTag);


// const i1 = React.createElement('i', {}, "Hello world from React JS!")
// const heading = React.createElement('h1', {id: 'header'}, i1);
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(heading);

// const tag1 = React.createElement('div', {id: 'parent'},
//   React.createElement('div', {id: 'child'},
//     [ React.createElement('h2', {key: 'header2'}, "This is H1 tag"),
//       React.createElement ('h3', {key: 'header3'}, "This is H2 tag")
//     ]
//   )
// )
// const root2 = ReactDOM.createRoot(document.getElementById('root2'))
// setTimeout(() => root2.render(tag1), 2000)


/** Babel transpiles this JSX into=> React.createElement =>
* React.createElement => creates ReactElement JS object
* JS object => ReactDOM renders this objects as HTML DOM elements
*/
const h1Tag = <h1 id="header" className="sample">
  This looks like HTML, but not. This is JS-XML which converts to HTML DOM element by multiple stages!🚀
  </h1>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(h1Tag);