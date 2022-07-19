import { memo } from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import { Autocomplete, Grid, TextField } from "@mui/material";
import { appointmentProps, createAppointmentProps } from "./types";
import { useAppDispatch } from "../../Utils/appHooks";
import { appointmentSelector } from "../../Redux/Appointment/selector";
import TextError from "../../Components/TextError/TextError";
import { useAppSelector } from "../../Utils/appHooks";
import { useAppStyles } from "../../Utils/AppStyles";
import AppButton from "../../Components/Button/AppButton";
import {
  createAppointment,
  updateAppointment,
} from "../../Redux/Appointment/thunk";
import { doctorProps } from "../Doctor/types";
import { getDoctors } from "../../Redux/Doctor/thunk";
import { getPatients } from "../../Redux/Patient/thunk";
import { doctorsSelector } from "../../Redux/Doctor/selector";
import { patientSelector } from "../../Redux/Patient/selector";
import { patientProps } from "../Patient/types";
const CreateAppointment = ({ setShowModal }: createAppointmentProps) => {
  const { edit, appointment, loading } = useAppSelector(appointmentSelector);
  const { doctors } = useAppSelector(doctorsSelector);
  const { patients } = useAppSelector(patientSelector);

  // props
  const dispatch = useAppDispatch();
  //initial state of the form
  const initialState: appointmentProps = {
    name: edit ? (appointment?.name ? appointment?.name : "") : "",
    patient: edit ? (appointment?.patient ? appointment?.patient : null) : null,
    slot: edit ? (appointment?.slot ? appointment?.slot : "") : "",
    doctor: edit ? (appointment?.doctor ? appointment?.doctor : null) : null,
    feedback: edit ? (appointment?.feedback ? appointment?.feedback : "") : "",
    isComplete: edit
      ? appointment?.isComplete
        ? appointment?.isComplete
        : false
      : false,
  };
  const classes = useAppStyles();
  //validation rules of the form
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Required")
      .min(4, "name must have at least 4 characters "),
    isComplete: Yup.bool(),
    patient: Yup.object().required("Required").nullable(),
    doctor: Yup.object().required("Required").nullable(),
    feedback: Yup.string(),
  });
  const onSubmit = (values: any) => {
    if (edit) {
      // dispatching update action
      dispatch(updateAppointment(values, appointment?.id!));
    } else {
      // dispatching create action
      dispatch(createAppointment(values));
    }
    setShowModal(false);
  };
  //load doctor options
  const loadDoctorOptions = () =>
    doctors?.length === 0 && dispatch(getDoctors());
  //load patient options
  const loadPatientOptions = () =>
    patients?.length === 0 && dispatch(getPatients());
  return (
    <>
      <Grid className={classes.root}>
        <Formik
          enableReinitialize={false}
          initialValues={initialState}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ values, setFieldValue }) => {
            console.log(values, "values in formik");
            return (
              <Form autoComplete="off" noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      className={classes.textWidth}
                      name="name"
                      autoFocus
                      value={values.name}
                      id="name"
                      label="Name"
                      size="small"
                      required
                      variant="outlined"
                      onChange={(e) => {
                        setFieldValue("name", e.target.value.trimStart());
                      }}
                    />
                    <ErrorMessage name="name" component={TextError} />
                  </Grid>
                  <Grid item xs={6}>
                    <Autocomplete
                      id="virtualize-demo"
                      options={doctors}
                      value={values.doctor}
                      getOptionLabel={(option) => option?.name}
                      onChange={(e: object, values: doctorProps | null) => {
                        values !== null
                          ? setFieldValue("doctor", values)
                          : setFieldValue("doctor", null);
                      }}
                      isOptionEqualToValue={(option, value) =>
                        option?.id === value?.id
                      }
                      onFocus={() => loadDoctorOptions()}
                      renderInput={(params) => (
                        <TextField
                          required
                          {...params}
                          variant="outlined"
                          label="Doctor"
                          fullWidth
                        />
                      )}
                    />
                    <ErrorMessage name="doctor" component={TextError} />
                  </Grid>
                  <Grid item xs={6}>
                    <Autocomplete
                      id="virtualize-demo"
                      options={patients}
                      value={values.patient}
                      getOptionLabel={(option) => option?.name}
                      onChange={(e: object, values: patientProps | null) => {
                        values !== null
                          ? setFieldValue("patient", values)
                          : setFieldValue("patient", null);
                      }}
                      isOptionEqualToValue={(option, value) =>
                        option?.id === value?.id
                      }
                      onFocus={() => loadPatientOptions()}
                      renderInput={(params) => (
                        <TextField
                          required
                          {...params}
                          variant="outlined"
                          label="Patient"
                          fullWidth
                        />
                      )}
                    />
                    <ErrorMessage name="patient" component={TextError} />
                  </Grid>
                  <Grid item xs={12}>
                    <Field type="checkbox" name="active" id="active" />
                    <label htmlFor="active">Active</label>
                  </Grid>
                </Grid>
                <AppButton title="SAVE" loading={loading} />
              </Form>
            );
          }}
        </Formik>
      </Grid>
    </>
  );
};

export default memo(CreateAppointment);
