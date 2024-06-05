import { Component } from 'react';

class UserClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 3,
      count2: 3
    };
  }
  render() {
    const {name, location} = this.props;
    return (
      <div className="user-card">
        <h2>Count: {this.state.count}</h2>
        <h2>Count2: {this.state.count2}</h2>
        <button onClick={() => this.setState({count: this.state.count + 1})}>Increase Count</button>
        <button onClick={() => this.setState({count2: this.state.count2 + 1})}>Increase Count2</button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: #dathatreyakv</h4>
      </div>
    );
  }
}

export default UserClass;