import { useEffect, useState } from "react"


export default checkOnlineStatus = ()=> {
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    const online = () => {
      setOnlineStatus(true);
      console.log('Online');
    }
    const offline = () => {
      setOnlineStatus(false);
      console.log('Offline');
    }

    window.addEventListener('online', online);
    window.addEventListener('offline', offline);
    return () => {
      window.removeEventListener('online', online);
      window.removeEventListener('offline', offline);
    }

  }, []);

  return onlineStatus;
}
