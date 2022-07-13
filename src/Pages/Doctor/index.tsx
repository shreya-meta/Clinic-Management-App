import { useState, useEffect, Suspense, lazy } from "react";
import Layout from "../../Components/Layout";
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
  return (
    <>
      <Layout
        handleClickOpen={handleClickOpen}
        title={title}
        search={search}
        setSearch={setSearch}
        types={types}
      >
        <Doctor />
      </Layout>
      {showModal && (
        <Suspense fallback={<></>}>
          <Modal modalValue={ModalValue} maxWidth="lg">
            <CreateDoctor />
          </Modal>
        </Suspense>
      )}
    </>
  );
};

export default DoctorListing;
