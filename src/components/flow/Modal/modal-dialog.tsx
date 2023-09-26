import React, { useState, useRef, useEffect } from "react";
import {
  DialogComponent,
  ButtonPropsModel,
  AnimationSettingsModel,
} from "@syncfusion/ej2-react-popups";
import "./modal-dialog.css";
import CardData from "../../../entities/flowCard";

interface ModalProps {
  data: CardData; // Replace 'any' with the actual type of your data
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ data, onClose }) => {
  const dialogInstance = useRef<DialogComponent>(null);
  const animationSettings: AnimationSettingsModel = { effect: "Zoom" };
  const [display, setDisplay] = useState<string>("none");
  const [status, setStatus] = useState<boolean>(true);

  const dialogClose = (): void => {
    setStatus(false);
    setDisplay("inline-block");
    onClose(); // Call the onClose function when the dialog is closed
  };

  const dialogOpen = (): void => {
    setStatus(true);
    setDisplay("none");
  };

  useEffect(() => {
    // Update the dialog content based on the 'data' prop here if needed
  }, [data]);

  return (
    <div className="control-pane">
      <div className="control-section modal-dialog-target">
        <div id="target" className="col-lg-8">
          {/* Rendering modal Dialog by enabling 'isModal' as true */}
          <DialogComponent
            id="modalDialog"
            isModal={true}
            // buttons={buttons}
            header="Software Update"
            width="335px"
            content="Your current software version is up to date."
            ref={dialogInstance}
            target="#target"
            visible={status}
            open={dialogOpen}
            close={dialogClose}
            animationSettings={animationSettings}
          ></DialogComponent>
        </div>
      </div>
    </div>
  );
};

export default Modal;
