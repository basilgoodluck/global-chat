import { useState } from "react";
import { NotificationContext } from "./Notifications";

interface Notification {
    message: string,
    status: "success" | "fail" 
};


const NotificationContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [notification, setNotificationState] = useState<Notification | null>(null);
    
    const setNotification = (newNotification: Notification) => {
        setNotificationState(newNotification)

        setTimeout(() => setNotificationState(null), 6000)
    }

    const clearNotification = () => {
        setNotificationState(null)
    };

    return (
        <>
            <NotificationContext.Provider value={{notification, setNotification, clearNotification}}>
                { children }
            </NotificationContext.Provider>
        </>
    )

};

export default NotificationContextProvider
