// App.js
import React from "react";
import ReactDOM from "react-dom/client";

// component composition: is nothing by Adding/Using one component inside another component

/** Babel transpiles this JSX into=> React.createElement =>
* React.createElement => creates ReactElement JS object
* JS object => ReactDOM renders this objects as HTML DOM elements
*/
const Title = () => <h1>Sample Title</h1>;
const HeaderComponent = () => <>
  <Title />
  <h2>Subtile from Header HeaderComponent</h2>
</>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeaderComponent />);