import React, { useState, useEffect, Suspense, lazy } from "react";
import Layout from "../../Components/Layout";
import { getAppointments } from "../../Redux/Appointment/thunk";
import { getSearchedDataSuccessAction } from "../../Redux/Patient/PatientSlice";
import { clearPatientDataAction } from "../../Redux/Patient/PatientSlice";
import { patientSelector } from "../../Redux/Patient/selector";
import { getPatients } from "../../Redux/Patient/thunk";
import { useAppDispatch, useAppSelector } from "../../Utils/appHooks";
import { AppContext } from "../../Utils/AppUtils";
import ViewAppointment from "./ViewAppointment";
import CreatePatient from "./CreatePatient";
import Patient from "./Patient";
import { patientProps } from "./types";
const Modal = lazy(() => import("../../Components/Modal/Modal"));

const PatientListing = () => {
  // state for opening and closing Modal
  const [showModal, setShowModal] = useState(false);
  //Handle Open Modal
  const handleClickOpen = () => {
    setShowModal(true);
  };
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  // initialize the redux hook
  const dispatch = useAppDispatch();
  const { patients, loadingPatient, edit, appointmentModal } =
    useAppSelector(patientSelector);
  // const { doctors, loading } = useSelector(doctorsSelector);
  // console.log(doctors, "doctors");
  //state for searching
  const [search, setSearch] = useState("");
  console.log(search, "test search");
  const types = "patient";
  const title = "Patient";
  const ModalValue = {
    edit,
    showModal,
    types,
    setShowModal,
    title,
  };
  const AppointmentModalValue = {
    edit: false,
    showModal,
    types: "view",
    setShowModal,
    title: " View Appointment History",
  };
  // dispatch our thunk when component first mounts

  const providerValue = {
    setShowModal,
    loadingPatient,
    page,
    setPage,
    rowsPerPage,
    setRowsPerPage,
    types,
  };
  useEffect(() => {
    let searchedValue = patients.filter((row: patientProps) => {
      const { name } = row;
      return name.toLowerCase().includes(search.toLowerCase());
    });
    dispatch(getAppointments());
    if (search === "") {
      dispatch(getPatients());
    } else {
      dispatch(getSearchedDataSuccessAction(searchedValue));
    }
    // : dispatch(searchDoctors());
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
          <Patient />
        </AppContext.Provider>
      </Layout>
      {showModal && (
        <Suspense fallback={<></>}>
          {!appointmentModal ? (
            <Modal modalValue={ModalValue} maxWidth="md">
              <CreatePatient setShowModal={setShowModal} />
            </Modal>
          ) : (
            <Modal modalValue={AppointmentModalValue} maxWidth="md">
              <ViewAppointment />
            </Modal>
          )}
        </Suspense>
      )}
    </>
  );
};

export default React.memo(PatientListing);
