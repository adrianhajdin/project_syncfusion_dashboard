import React, { useState, useRef, useEffect } from "react";
import {
  DialogComponent,
  AnimationSettingsModel,
} from "@syncfusion/ej2-react-popups";
import "./modal-dialog.css";
import CardData from "../../../entities/flowCard";

interface ModalProps {
  data: CardData | null; // Replace 'any' with the actual type of your data
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ data, onClose }) => {
  const dialogInstance = useRef<DialogComponent>(null);
  const animationSettings: AnimationSettingsModel = { effect: "Zoom" };
  const [status, setStatus] = useState<boolean>(true);
  const header = () => {
    return (
      <div>
        <span className="e-avatar template-image e-avatar-xsmall e-avatar-circle"></span>
        <div id="dlg-template" title="Nancy" className="e-icon-settings">
          Nancy
        </div>
      </div>
    );
  };
  const footerTemplate = () => {
    return (
      <div>
        <input
          id="inVal"
          className="e-input"
          type="text"
          placeholder="Enter your message here!"
        />
        <button
          id="sendButton"
          className="e-control e-btn e-primary"
          data-ripple="true"
        >
          Send
        </button>
      </div>
    );
  };

  const dialogClose = (): void => {
    setStatus(false);
    onClose(); // Call the onClose function when the dialog is closed
  };

  const dialogOpen = (): void => {
    setStatus(true);
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
            header={header}
            width="335px"
            content="Your current software version is up to date."
            ref={dialogInstance}
            target="#target"
            visible={status}
            open={dialogOpen}
            close={dialogClose}
			showCloseIcon={true}
			closeOnEscape={true}
			allowDragging={true}
            animationSettings={animationSettings}
			footerTemplate={footerTemplate}
          ></DialogComponent>
        </div>
      </div>
    </div>
  );
};

export default Modal;
