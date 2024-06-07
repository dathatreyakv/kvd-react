import { useEffect, useState } from "react";
import { GITHUB_PROFILE_URL } from "../utils/constants";

const User = (props) => {
  const [userInfo, setUserInfo] = useState({name: 'Loading...',
  location: '',
  avatar_url: 'https://source.unsplash.com/user/c_v_r/1900x800'});
  
  useEffect(() => { getUserInfo() }, []);
  const getUserInfo = async () => {
    const resp = await fetch(GITHUB_PROFILE_URL);
    const data = await resp.json();
    setUserInfo(data);
    return () => {
      console.log('returning function of useEffect will execute on unloading of the component');
    }
  }
  return (
    <div className="m-4 p-4 bg-gray-50 flex align-middle rounded-lg">
      <img className="w-24 h-24 rounded-full" src={userInfo.avatar_url}/>
      <div className="pl-8">
        <h2>Name: {userInfo.name}</h2>
        <h3>Location: {userInfo.location || "Hyderabad"}</h3>
        <h4>Contact: #dathatreyakv</h4>
      </div>
    </div>
  );
};

export default User;