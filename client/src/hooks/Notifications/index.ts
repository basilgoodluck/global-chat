import { useContext } from "react";
import { NotificationContext } from "./Notifications";

const useNotification = () => {
    const context = useContext(NotificationContext);
    if(!context){
        throw new Error("No valid context")
    }    
    return context
}

export default useNotification;