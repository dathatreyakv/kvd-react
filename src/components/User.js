import { useState } from "react";

const User = (props) => {
  const [count,setCount] = useState(1)
  const increaseCount = () => setCount(count => count+1)
  return (
    <div className="user-card">
      <h2>Count: {count}</h2>
      <button onClick={increaseCount}>Increase Count</button>
      <h2>Name: {props.name}</h2>
      <h3>Location: Hyderabad</h3>
      <h4>Contact: #dathatreyakv</h4>
    </div>
  );
};

export default User;