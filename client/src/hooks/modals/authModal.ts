import { createContext } from "react"

interface Modal {
  target: "register" | "login" | undefined;
  status: "none" | "flex";
}

interface ModalContextType {
    modal: Modal | undefined; 
    setModal: (modal: Modal) => void;
    clearModal: () => void;
  }

export const ModalContext = createContext<ModalContextType | undefined>(undefined)