// App.js
import React from "react";
import ReactDOM from "react-dom/client";
// const headerTag = document.createElement('h1');
// headerTag.innerHTML = 'Hello world from Javascript!';
// const rootTag = document.getElementById('root');
// rootTag.appendChild(headerTag);


const i1 = React.createElement('i', {}, "Hello world from React JS!")
const heading = React.createElement('h1', {id: 'header'}, i1);
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(heading);


const tag1 = React.createElement('div', {id: 'parent'},
  React.createElement('div', {id: 'child'},
    [ React.createElement('h2', {key: 'header2'}, "This is H1 tag"),
      React.createElement ('h3', {key: 'header3'}, "This is H2 tag")
    ]
  )
)
const root2 = ReactDOM.createRoot(document.getElementById('root2'))
setTimeout(() => root2.render(tag1), 2000)