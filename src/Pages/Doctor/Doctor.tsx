import React, { useContext } from "react";
import AppTable from "../../Components/Table/AppTable";
import { AppContext } from "../../Utils/AppUtils";
import { doctorColumn } from "./types";

const Doctor = () => {
  const { rows, loading } = useContext(AppContext);
  // const { doctors, loading } = useAppSelector(doctorsSelector);
  console.log(rows, "doctors in doctor");
  // table rows
  const columns: doctorColumn[] = [
    { id: "name", label: "Name" },
    { id: "visiting_hours", label: "Visting Hours" },
    { id: "phone_no", label: "Phone No" },
  ];
  return (
    <>
      <AppTable columns={columns} />
    </>
  );
};

export default React.memo(Doctor);
