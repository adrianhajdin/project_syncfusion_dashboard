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

  const floatFocus = (args: { target: HTMLInputElement }): void => {
    args.target.parentElement?.classList.add("e-input-focus");
  };
  const floatBlur = (args: { target: HTMLInputElement }): void => {
    console.log(typeof args);
    args.target.parentElement?.classList.remove("e-input-focus");
  };

  const header = () => {
    return (
      <div>
        <div id="dlg-template" title="Nancy" className="e-icon-settings">
          {data?.id}: {data?.data.title}
        </div>
      </div>
    );
  };

  const footerTemplate = () => {
    return (
      <div>
        <button
          id="sendButton"
          className="e-control e-btn e-primary"
          data-ripple="true"
        >
          Save
        </button>
      </div>
    );
  };

  const content = () => {
    return (
      <div className="dialogContent">
        <span className="dialogText">
          <div className="row custom-margin custom-padding-5 material">
            <div className="e-input-group">
              <input
                className="e-input"
                type="text"
                onFocus={floatFocus}
                onBlur={floatBlur}
                placeholder={data?.data.title}
				onChange={updateCardTitle}
              />
            </div>
            <div className="e-input-group">
              <input
                className="e-input"
                onFocus={floatFocus}
                onBlur={floatBlur}
                type="text"
                placeholder={data?.data.subject}
              />
            </div>
          </div>
        </span>
      </div>
    );
  };

  const updateCardTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (data) {
      data.data.title = event.target.value;
    }
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
            content={content}
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
