// App.js
import React from "react";
import ReactDOM from "react-dom/client";

// component composition: is nothing by Adding/Using one component inside another component

/** Babel transpiles this JSX into=> React.createElement =>
* React.createElement => creates ReactElement JS object
* JS object => ReactDOM renders this objects as HTML DOM elements
*/

const Title1 = () => <h1>Arrow function component</h1>;
const titleElement = <h2>Tile ELEMENT</h2>

const HeaderComponent = () => <>
  <Title1> </Title1>
  {Title1()}
  {titleElement}
  <h4>Small Subtile from HeaderComponent</h4>
</>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeaderComponent />);