import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
  render() {
    return <div>
      <h1>About - Class Compoent</h1>
      <h2>This is about understanding react</h2>
      <User name="Venkata Dathatreya K"/>
      <UserClass name="Dathatreya K V" location="Hyd"/>
    </div>
  }
}

export default About;