import React, { ReactNode, useState, useEffect } from "react";
import { ModalContext } from "./authModal";

interface Modal {
  target: "register" | "login" | undefined;
  status: "none" | "flex";
}


export const ModalContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [modal, setModalState] = useState<Modal | undefined>({ target: undefined, status: "none"});

  const setModal = (newModal: Modal) => {
    setModalState(newModal);
  };

  const clearModal = () => {
    setModalState(undefined);
  };

  useEffect(() => {
    if (modal?.status === "flex") {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => document.body.classList.remove("overflow-hidden");
  }, [modal?.status]);

  return (
    <ModalContext.Provider value={{ modal, setModal, clearModal }}>
      {children}
    </ModalContext.Provider>
  );
};
