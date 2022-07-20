import React, { useState, useEffect, Suspense, lazy } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Layout from "../../Components/Layout";
import AppTable from "../../Components/Table/AppTable";
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
  // const { doctors, loading } = useSelector(doctorsSelector);
  // console.log(doctors, "doctors");
  //state for searching
  const [search, setSearch] = useState("");
  console.log(search, "test search");
  const types = "doctor";
  const title = "Doctor";
  const ModalValue = {
    edit,
    showModal,
    types,
    setShowModal,
    title,
  };
  // dispatch our thunk when component first mounts

  useEffect(() => {
    console.log("inside useEffect");
    dispatch(getDoctors());
  }, [dispatch]);
  const providerValue = {
    setShowModal,
    loading: loadingDoctor,
    page,
    setPage,
    rowsPerPage,
    setRowsPerPage,
    types,
  };
  useEffect(() => {
    if (search === "") {
      dispatch(getDoctors());
    } else {
      // filter with searched values
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

export default React.memo(DoctorListing);
