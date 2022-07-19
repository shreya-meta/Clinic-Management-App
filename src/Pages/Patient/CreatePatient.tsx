import React, { useContext, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { DropzoneArea } from "react-mui-dropzone";
import * as Yup from "yup";
import { Grid, TextField } from "@mui/material";
import { createPatientProps, patientProps } from "./types";
import { useAppDispatch } from "../../Utils/appHooks";
import TextError from "../../Components/TextError/TextError";
import { useAppSelector } from "../../Utils/appHooks";
import { useAppStyles } from "../../Utils/AppStyles";
import AppButton from "../../Components/Button/AppButton";
import { getAge } from "../../Utils/dateConverter";
import { createPatient, updatePatient } from "../../Redux/Patient/thunk";
import { patientSelector } from "../../Redux/Patient/selector";
const CreatePatient = ({ setShowModal }: createPatientProps) => {
  const { edit, patient, loading } = useAppSelector(patientSelector);
  // props
  const dispatch = useAppDispatch();
  //initial state of the form
  const initialState: patientProps = {
    // name: edit ? (doctor?.name ? doctor?.name : "") : "",
    // dobDate: edit ? (doctor?.dobDate ? doctor?.dobDate : null) : null,
    name: edit ? (patient?.name ? patient?.name : "") : "",
    dobDate: edit ? (patient?.dobDate ? patient?.dobDate : "") : "",
    age: edit ? (patient?.age ? patient?.age : "") : "",
    sex: edit ? (patient?.sex ? patient?.sex : "") : "",
    location: edit ? (patient?.location ? patient?.location : "") : "",
  };
  const classes = useAppStyles();
  //validation rules of the form
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Required")
      .min(
        4,
        "name must have at least 4 characters and all should be in lowercase."
      ),
    age: Yup.string().required("Required"),
    sex: Yup.string().required("Required"),
    location: Yup.string().required("Required"),
  });
  const onSubmit = (values: patientProps) => {
    if (edit) {
      // dispatching update action
      dispatch(updatePatient(values, patient?.id!));
    } else {
      // dispatching create action
      dispatch(createPatient(values));
    }
    setShowModal(false);
  };
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
                  <Grid item xs={4}>
                    <TextField
                      className={classes.textWidth}
                      name="name"
                      autoFocus
                      value={values.name}
                      id="name"
                      label="Name"
                      size="small"
                      variant="outlined"
                      onChange={(e) => {
                        setFieldValue("name", e.target.value.trimStart());
                      }}
                    />
                    <ErrorMessage name="name" component={TextError} />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      id="date"
                      name="dobDate"
                      label="Date of Birth"
                      type="date"
                      value={values.dobDate}
                      variant="outlined"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      onChange={(e) => {
                        setFieldValue("dobDate", e.target.value);
                        setFieldValue("age", getAge(e.target.value));
                      }}
                    />

                    <ErrorMessage name="dobDate" component={TextError} />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      className={classes.textWidth}
                      name="age"
                      value={values.age}
                      id="Age"
                      label="age"
                      size="small"
                      variant="outlined"
                      onChange={(e) => {
                        setFieldValue("age", e.target.value.trimStart());
                      }}
                    />
                    <ErrorMessage name="age" component={TextError} />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      className={classes.textWidth}
                      name="sex"
                      value={values.sex}
                      id="Sex"
                      label="sex"
                      size="small"
                      variant="outlined"
                      onChange={(e) => {
                        setFieldValue("sex", e.target.value.trimStart());
                      }}
                    />
                    <ErrorMessage name="sex" component={TextError} />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      className={classes.textWidth}
                      name="location"
                      value={values.location}
                      id="location"
                      label="Location"
                      size="small"
                      variant="outlined"
                      onChange={(e) => {
                        setFieldValue("location", e.target.value.trimStart());
                      }}
                    />
                    <ErrorMessage name="location" component={TextError} />
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

export default React.memo(CreatePatient);
