import React, { Dispatch, SetStateAction } from "react";
// modal title props
export interface ModalTitleProps {
  id: string;
  children: React.ReactNode;
  types: string;
  onClose: () => void;
}

// modal props
export interface ModalValue {
  children?: React.ReactNode;
  showModal: boolean;
  // setShowModal: Dispatch<SetStateAction<boolean>>;
  types: string;
  viewImageTypes?: string;
  edit?: boolean;
  title: string;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  selectDepartment?: boolean;
  selectTest?: boolean;
  selectCustomer?: boolean;
}
export interface ModalProps {
  modalValue: ModalValue;
  children: React.ReactNode;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl";
}
