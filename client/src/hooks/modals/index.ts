import { ModalContext } from "../modals/authModal";
import { useContext } from "react";

const useModal = () => {
    const context = useContext(ModalContext);
    if(!context){
        throw new Error("No valid context")
    }    
    return context
}

export default useModal;