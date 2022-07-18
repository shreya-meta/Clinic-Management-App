import React, { useState, useEffect, Suspense, lazy } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Layout from "../../Components/Layout";
import AppTable from "../../Components/Table/AppTable";
import { doctorsSelector } from "../../Redux/Doctor/selector";
import { getDoctors } from "../../Redux/Doctor/thunk";
import { useAppDispatch, useAppSelector } from "../../Utils/appHooks";
import { AppContext } from "../../Utils/AppUtils";
import CreateDoctor from "./CreateDoctor";
import Doctor from "./Doctor";
const Modal = lazy(() => import("../../Components/Modal/Modal"));

const DoctorListing = () => {
  // state for opening and closing Modal
  const [showModal, setShowModal] = useState(false);
  //Handle Open Modal
  const handleClickOpen = () => {
    console.log("I am");
    setShowModal(true);
  };
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  // initialize the redux hook
  const dispatch = useAppDispatch();
  const { doctors, loading } = useAppSelector(doctorsSelector);
  // const { doctors, loading } = useSelector(doctorsSelector);
  // console.log(doctors, "doctors");
  //state for searching
  const [search, setSearch] = useState<string>("");
  const types = "doctor";
  const title = "Doctor";
  const ModalValue = {
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
    rows: doctors,
    setShowModal,
    loading,
    page,
    setPage,
    rowsPerPage,
    setRowsPerPage,
  };
  console.log(doctors, "doctors in index page");

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
