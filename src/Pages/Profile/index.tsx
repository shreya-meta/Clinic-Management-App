import React, { useState, Suspense, lazy } from "react";
import Layout from "../../Components/Layout";
import ProfileInfo from "./Profile";
const Profile = () => {
  // const { doctors, loading } = useSelector(doctorsSelector);
  //state for searching
  const [search, setSearch] = useState("");
  const types = "doctor";
  const title = "Doctor";
  return (
    <>
      <Layout title={title} search={search} setSearch={setSearch} types={types}>
        <ProfileInfo />
      </Layout>
    </>
  );
};

export default React.memo(Profile);
