import React from "react";
import ModalTitle from "./ModalTitle";
import { ModalProps } from "./types";
import { Dialog, DialogContent } from "@mui/material";
import { useAppDispatch } from "../../Utils/appHooks";
import { clearPatientDataAction } from "../../Redux/Patient/PatientSlice";

const Modal = ({ modalValue, children, maxWidth }: ModalProps) => {
  const dispatch = useAppDispatch();
  const { showModal, types, setShowModal, edit, title } = modalValue;
  // const { appointmentModal } = useAppSelector(patientSelector);
  const handleClose = () => {
    // clearViewDetailData?.includes(types)
    setShowModal(false);
    types === "view" && dispatch(clearPatientDataAction());
  };

  //for checking title to display or not when state is in edit mode
  const checkTitleToDisplayInEdit = ["quickUpdate", "view"];
  //for checking title to display or not when state is in create mode
  const checkTitleToDisplay = ["view"];
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
