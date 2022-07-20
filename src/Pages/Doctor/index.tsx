import React, { useState, useEffect, Suspense, lazy, memo } from "react";
import Layout from "../../Components/Layout";
import {
  clearDoctorDataAction,
  getSearchedDataSuccessAction,
} from "../../Redux/Doctor/DoctorSlice";
import { doctorsSelector } from "../../Redux/Doctor/selector";
import { getDoctors } from "../../Redux/Doctor/thunk";
import { useAppDispatch, useAppSelector } from "../../Utils/appHooks";
import { AppContext } from "../../Utils/AppUtils";
import CreateDoctor from "./CreateDoctor";
import Doctor from "./Doctor";
import { doctorProps, specialityProps } from "./types";
const Modal = lazy(() => import("../../Components/Modal/Modal"));

const DoctorListing = () => {
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
  const { doctors, loadingDoctor, edit } = useAppSelector(doctorsSelector);
  //state for searching
  const [search, setSearch] = useState("");
  // define types and title
  const types = "doctor";
  const title = "Doctor";
  // modal value
  const ModalValue = {
    edit,
    showModal,
    types,
    setShowModal,
    title,
  };
  // dispatch our thunk when component first mounts

  // provider value
  const providerValue = {
    setShowModal,
    loading: loadingDoctor,
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
      dispatch(getDoctors());
    } else {
      // filter data that matches searched values with name and speciality
      let searchedValue = doctors.filter((row: doctorProps) => {
        const { name, speciality } = row;
        return (
          name.toLowerCase().includes(search.toLowerCase()) ||
          speciality?.some((speciality: specialityProps) => {
            return speciality?.name
              ?.toLowerCase()
              .includes(search.toLowerCase());
          })
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
          <Doctor />
        </AppContext.Provider>
      </Layout>
      {showModal && (
        <Suspense fallback={<></>}>
          <Modal modalValue={ModalValue} maxWidth="lg">
            <CreateDoctor setShowModal={setShowModal} />
          </Modal>
        </Suspense>
      )}
    </>
  );
};

export default memo(DoctorListing);
