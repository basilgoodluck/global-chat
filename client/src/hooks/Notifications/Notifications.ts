import { createContext } from "react";

interface Notification {
    message: string,
    status: "success" | "fail" 
};

interface NotificationType {
    notification: Notification | null,
    setNotification: (e: Notification) => void,
    clearNotification: () => void
};

export const NotificationContext = createContext<NotificationType | undefined>(undefined);