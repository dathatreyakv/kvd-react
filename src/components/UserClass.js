import { Component } from 'react';

class UserClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {name: 'Loading...',
      location: '',
      avatar_url: 'https://source.unsplash.com/user/c_v_r/1900x800'
    },
      count: 3,
      count2: 3
    };
  }

  async componentDidMount() {
    const resp = await fetch('https://api.github.com/users/dathatreyakv');
    const data = await resp.json();
    this.setState({userInfo: data});
    console.log(data);
  }
  componentDidUpdate() {
    console.log('Component Updated');
  }

  render() {
    const {name, location, avatar_url} = this.state.userInfo;
    return (
      <div className="user-card">
        <h2>Count: {this.state.count}</h2>
        <h2>Count2: {this.state.count2}</h2>
        <img src={avatar_url}/>
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