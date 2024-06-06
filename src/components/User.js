import { useEffect, useState } from "react";
import { GITHUB_PROFILE_URL } from "../utils/constants";

const User = (props) => {
  const [count,setCount] = useState(1)
  const increaseCount = () => setCount(count => count+1)

  useEffect(() => { getUserInfo() }, []);
  const getUserInfo = async () => {
    const resp = await fetch(GITHUB_PROFILE_URL);
    const data = await resp.json();
    return () => {
      console.log('returning function of useEffect will execute on unloading of the component');
    }
  }
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