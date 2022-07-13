import React from "react";
import ModalTitle from "./ModalTitle";
import { ModalProps } from "./types";
import { Dialog, DialogContent, Typography } from "@mui/material";

const Modal = ({ modalValue, children, maxWidth }: ModalProps) => {
  const { showModal, types, setShowModal, edit, title } = modalValue;
  console.log(types, "types in modal");
  const handleClose = () => {
    // clearViewDetailData?.includes(types)
    setShowModal(false);
  };

  //for checking title to display or not when state is in edit mode
  const checkTitleToDisplayInEdit = ["quickUpdate"];
  //for checking title to display or not when state is in create mode
  const checkTitleToDisplay = ["print"];
  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={showModal}
        maxWidth={maxWidth}
      >
        <ModalTitle
          id="customized-dialog-title"
          onClose={handleClose}
          types={types}
        >
          {edit
            ? checkTitleToDisplayInEdit?.includes(types)
              ? title
              : `Edit ${title}`
            : checkTitleToDisplay?.includes(types)
            ? title
            : `Create ${title}`}
        </ModalTitle>

        <DialogContent dividers>{children} </DialogContent>
      </Dialog>
    </div>
  );
};

export default React.memo(Modal);
