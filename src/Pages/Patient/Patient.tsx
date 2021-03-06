import { memo } from "react";
import AppTable from "../../Components/Table/AppTable";
import { patientSelector } from "../../Redux/Patient/selector";
import { useAppSelector } from "../../Utils/appHooks";
import { patientColumn } from "./types";

const Patient = () => {
  const { patients } = useAppSelector(patientSelector);
  // table rows
  const columns: patientColumn[] = [
    { id: "name", label: "Name" },
    { id: "age", label: "Age" },
    { id: "sex", label: "Sex" },
    { id: "location", label: "Location" },
  ];
  // const rowsValue=
  return (
    <>
      <AppTable columns={columns} rowsValue={patients} />
    </>
  );
};

export default memo(Patient);
