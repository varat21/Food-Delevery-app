// custom hook

import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(navigator.onLine); // Initial status based on current network state

  useEffect(() => {
    const handleOffline = () => {
      setOnlineStatus(false); // Set to false when offline
    };

    const handleOnline = () => {
      setOnlineStatus(true); // Set to true when back online
    };

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
