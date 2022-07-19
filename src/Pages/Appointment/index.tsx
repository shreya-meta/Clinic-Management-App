import React, { useState, useEffect, Suspense, lazy } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Layout from "../../Components/Layout";
import {
  clearDoctorDataAction,
  getSearchedDataSuccessAction,
} from "../../Redux/Doctor/DoctorSlice";
import { useAppDispatch, useAppSelector } from "../../Utils/appHooks";
import { AppContext } from "../../Utils/AppUtils";
import CreateAppointment from "./CreateAppointment";
import Appointment from "./Appointment";
import { appointmentProps } from "./types";
import { appointmentSelector } from "../../Redux/Appointment/selector";
import { getAppointments } from "../../Redux/Appointment/thunk";
const Modal = lazy(() => import("../../Components/Modal/Modal"));
const AppointmentListing = () => {
  // state for opening and closing Modal
  const [showModal, setShowModal] = useState(false);
  //Handle Open Modal
  const handleClickOpen = () => {
    setShowModal(true);
    dispatch(clearDoctorDataAction());
  };
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  // initialize the redux hook
  const dispatch = useAppDispatch();
  const { appointments, loading, edit } = useAppSelector(appointmentSelector);
  //state for searching
  const [search, setSearch] = useState("");
  const types = "appointment";
  const title = "Appointment";
  const ModalValue = {
    edit,
    showModal,
    types,
    setShowModal,
    title,
  };
  const providerValue = {
    setShowModal,
    loading,
    page,
    setPage,
    rowsPerPage,
    setRowsPerPage,
    types,
  };
  // dispatch our thunk when component first mounts
  useEffect(() => {
    let searchedValue = appointments.filter((row: appointmentProps) => {
      const { name } = row;
      return name.toLowerCase().includes(search.toLowerCase());
    });
    if (search === "") {
      dispatch(getAppointments());
    } else {
      dispatch(getSearchedDataSuccessAction(searchedValue));
    }
  }, [search, dispatch]);
  return (
    <>
      <Layout
        handleClickOpen={handleClickOpen}
        title={title}
        search={search}
        setSearch={setSearch}
        types={types}
      >
        <AppContext.Provider value={providerValue}>
          <Appointment />
        </AppContext.Provider>
      </Layout>
      {showModal && (
        <Suspense fallback={<></>}>
          <Modal modalValue={ModalValue} maxWidth="lg">
            <CreateAppointment setShowModal={setShowModal} />
          </Modal>
        </Suspense>
      )}
    </>
  );
};

export default React.memo(AppointmentListing);
