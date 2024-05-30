// App.js
import React from "react";
import ReactDOM from "react-dom/client";

// component composition: is nothing by Adding/Using one component inside another component

/** Babel transpiles this JSX into=> React.createElement =>
* React.createElement => creates ReactElement JS object
* JS object => ReactDOM renders this objects as HTML DOM elements
*/

const Title1 = () => <h1>Arrow function component - Sample Title1</h1>;

const Title2 = function () {
  return <h2>Anonymus function component - Sample Title2</h2>;
}

function Title3() {
  return <h3>Regular function component - Sample Title3</h3>
}

const HeaderComponent = () => <>
  <Title1/>
  <Title2/>
  <Title3/>
  <h4>Small Subtile from HeaderComponent</h4>
</>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeaderComponent />);