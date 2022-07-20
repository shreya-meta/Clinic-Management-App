import { memo, useState, useEffect, Suspense, lazy } from "react";
import Layout from "../../Components/Layout";
import { getAppointments } from "../../Redux/Appointment/thunk";
import { getSearchedDataSuccessAction } from "../../Redux/Patient/PatientSlice";
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
  //state for searching
  const [search, setSearch] = useState("");
  // define types and title
  const types = "patient";
  const title = "Patient";
  // modal value
  const ModalValue = {
    edit,
    showModal,
    types,
    setShowModal,
    title,
  };
  // provider value for appointment view modal
  const AppointmentModalValue = {
    edit: false,
    showModal,
    types: "view",
    setShowModal,
    title: " View Appointment History",
  };
  //provider value
  const providerValue = {
    setShowModal,
    loading: loadingPatient,
    page,
    setPage,
    rowsPerPage,
    setRowsPerPage,
    types,
  };
  // dispatch  thunk when dependency changed
  useEffect(() => {
    // dispatch appointments
    dispatch(getAppointments());
    // when search is empty dispatch get method
    if (search === "") {
      dispatch(getPatients());
    } else {
      // filter data that matches searched values with name
      let searchedValue = patients.filter((row: patientProps) => {
        const { name } = row;
        return name.toLowerCase().includes(search.toLowerCase());
      });
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

export default memo(PatientListing);
