import { useState, useEffect } from "react";

const useOnlineStatus = () => {
    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {
        function handelOnline() {
            setIsOnline(true)
        }

        function handelOffline() {
            setIsOnline(false)
        }

        window.addEventListener("online", handelOnline);
        window.addEventListener("offline", handelOffline);

        return () => {
            window.removeEventListener("online", handelOnline);
            window.removeEventListener("offline", handelOffline);
        }

    }, [])

    return isOnline
}


export default  useOnlineStatus;