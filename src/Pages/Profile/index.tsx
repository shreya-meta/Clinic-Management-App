import React, { useState, Suspense, lazy } from "react";
import Layout from "../../Components/Layout";
import { doctorsSelector } from "../../Redux/Doctor/selector";
import { useAppDispatch, useAppSelector } from "../../Utils/appHooks";
import { AppContext } from "../../Utils/AppUtils";
const Modal = lazy(() => import("../../Components/Modal/Modal"));
const Profile = () => {
  // const { doctors, loading } = useSelector(doctorsSelector);
  //state for searching
  const [search, setSearch] = useState("");
  const types = "doctor";
  const title = "Doctor";
  return (
    <>
      <Layout
        title={title}
        search={search}
        setSearch={setSearch}
        types={types}
      ></Layout>
    </>
  );
};

export default React.memo(Profile);
