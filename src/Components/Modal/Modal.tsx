import { memo } from "react";
import ModalTitle from "./ModalTitle";
import { ModalProps } from "./types";
import { Dialog, DialogContent } from "@mui/material";
import { useAppDispatch } from "../../Utils/appHooks";
import { clearPatientDataAction } from "../../Redux/Patient/PatientSlice";
const Modal = ({ modalValue, children, maxWidth }: ModalProps) => {
  const dispatch = useAppDispatch();
  const { showModal, types, setShowModal, edit, title } = modalValue;
  // func to close modal
  const handleClose = () => {
    const clearData = ["view", "patient"];
    // clear data if we close view modal
    setShowModal(false);
    clearData?.includes(types) && dispatch(clearPatientDataAction());
  };
  //for checking title to display or not when state is in create mode
  const checkTitleToDisplay = ["view"];
  return (
    <>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={showModal}
        maxWidth={maxWidth}
      >
        {/* modal title */}
        <ModalTitle
          id="customized-dialog-title"
          onClose={handleClose}
          types={types}
        >
          {edit
            ? `Edit ${title}`
            : checkTitleToDisplay?.includes(types)
            ? title
            : `Create ${title}`}
        </ModalTitle>
        {/* display children i.e components */}
        <DialogContent dividers>{children} </DialogContent>
      </Dialog>
    </>
  );
};

export default memo(Modal);
