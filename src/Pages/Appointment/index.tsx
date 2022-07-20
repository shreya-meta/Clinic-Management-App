import { useState, useEffect, Suspense, lazy, memo } from "react";
import Layout from "../../Components/Layout";
import {
  clearAppointmentDataAction,
  getSearchedDataSuccessAction,
} from "../../Redux/Appointment/AppointmentSlice";
import { useAppDispatch, useAppSelector } from "../../Utils/appHooks";
import { AppContext } from "../../Utils/AppUtils";
import CreateAppointment from "./CreateAppointment";
import Appointment from "./Appointment";
import { appointmentProps } from "./types";
import { appointmentSelector } from "../../Redux/Appointment/selector";
import { getAppointments } from "../../Redux/Appointment/thunk";
import { loginSelector } from "../../Redux/Login/selector";
const Modal = lazy(() => import("../../Components/Modal/Modal"));
const AppointmentListing = () => {
  // state for opening and closing Modal
  const [showModal, setShowModal] = useState(false);
  //Handle Open Modal
  const handleClickOpen = () => {
    setShowModal(true);
    dispatch(clearAppointmentDataAction());
  };
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  // initialize the redux hook
  const dispatch = useAppDispatch();
  const { appointments, loadingAppointment, edit } =
    useAppSelector(appointmentSelector);
  const { loggedUser } = useAppSelector(loginSelector);
  //state for searching
  const [search, setSearch] = useState("");
  // define types and title
  const types = "appointment";
  const title = "Appointment";
  // modal value
  const ModalValue = {
    edit,
    showModal,
    types,
    setShowModal,
    title,
  };
  const providerValue = {
    setShowModal,
    loading: loadingAppointment,
    page,
    setPage,
    rowsPerPage,
    setRowsPerPage,
    types,
  };
  // dispatch thunk when dependency changed
  useEffect(() => {
    // when search is empty dispatch get method
    if (search === "") {
      dispatch(getAppointments(loggedUser?.id && loggedUser?.id));
    } else {
      // filter data that matches searched values with name
      let searchedValue = appointments.filter((row: appointmentProps) => {
        const { slot, doctorDisplay, patientDisplay } = row;
        return (
          slot?.toLowerCase().includes(search.toLowerCase()) ||
          doctorDisplay?.toLowerCase().includes(search.toLowerCase()) ||
          patientDisplay?.toLowerCase().includes(search.toLowerCase())
        );
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

export default memo(AppointmentListing);
