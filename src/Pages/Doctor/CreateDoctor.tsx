import React, { useContext, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { DropzoneArea } from "react-mui-dropzone";
import * as Yup from "yup";
import {
  Grid,
  TextField,
  IconButton,
  InputAdornment,
  Button,
} from "@mui/material";
import { doctorProps } from "./types";
import { useAppDispatch } from "../../Utils/appHooks";
import { doctorsSelector } from "../../Redux/Doctor/selector";
import { AppContext } from "../../Utils/AppUtils";
import TextError from "../../Components/TextError/TextError";
import { useAppSelector } from "../../Utils/appHooks";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { createDoctor } from "../../Redux/Doctor/thunk";
const CreateDoctor = () => {
  const { edit, doctor } = useAppSelector(doctorsSelector);
  const { rows, setShowModal, loading } = useContext(AppContext);

  // props
  const dispatch = useAppDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  //for visibility if password and confirm password
  const handlePassword = () => {
    setShowPassword((prev) => !prev);
  };
  const handleConfirmPassword = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const [lock, setLock] = useState(false);
  // for getting current date
  const current = new Date();
  //initial state of the form
  const initialState: doctorProps = {
    name: edit ? (doctor?.name ? doctor?.name : "") : "",
    speciality: edit ? (doctor?.speciality ? doctor?.speciality : "") : "",
    visiting_hours: edit
      ? doctor?.visiting_hours
        ? doctor?.visiting_hours
        : ""
      : "",
    email: edit ? (doctor?.email ? doctor?.email : "") : "",
    picture: edit ? (doctor?.picture ? doctor?.picture : "") : "",
    phone_no: edit ? (doctor?.phone_no ? doctor?.phone_no : "") : "",
    password: "",
  };
  //validation rules of the form
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Required")
      .min(
        4,
        "name must have at least 4 characters and all should be in lowercase."
      ),
    email: Yup.string().required("Required").email("Invalid email format"),
    picture: Yup.mixed(),
    password: edit
      ? Yup.string()
      : Yup.string()
          .required("Required")
          .matches(
            /^(?=.*[a-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{6,}$/,
            "Must Contain 6 Characters, One alphabet and One Number. "
          ),
    confirmPassword: edit
      ? Yup.string()
      : Yup.string()
          .required("Required")
          .oneOf([Yup.ref("password"), null], "Passwords must match."),
    speciality: Yup.object().required("Required").nullable(),
  });

  const onSubmit = (values: doctorProps) => {
    setLock(true);
    if (edit) {
    } else {
      // dispatching create action
      dispatch(
        createDoctor({
          ...values,
        })
      );
    }
    setLock(false);
    setShowModal(false);
  };
  // const loadSpecialityOptions = () => {
  //   setFocus(true);
  //   dispatch(getAllSpecialityOptions());
  // };
  return (
    <>
      <Grid>
        <Grid>
          <Formik
            enableReinitialize={false}
            initialValues={initialState}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(formik) => {
              return (
                <Form autoComplete="off" noValidate>
                  <Grid>
                    <Grid container spacing={1}>
                      <Grid item xs={4}>
                        <TextField
                          name="name"
                          autoFocus
                          value={formik?.values?.name}
                          id="name"
                          label="Name"
                          variant="outlined"
                          onChange={(e) => {
                            formik.setFieldValue(
                              "name",
                              e.target.value.trimStart()
                            );
                          }}
                        />
                        <ErrorMessage name="name" component={TextError} />
                      </Grid>
                      <Grid item xs={4}>
                        <TextField
                          name="userName"
                          required
                          value={formik.values.userName}
                          id="userName"
                          label="User Name"
                          variant="outlined"
                          onChange={(e) => {
                            formik.setFieldValue(
                              "userName",
                              e.target.value.trim()
                            );
                            setDuplicateValue({
                              url: `/api/v1/user-app/user?user_name=${e.target.value.trim()}`,
                              e: e,
                              edit: edit,
                              editType: user?.userName,
                              setLock: setLock,
                              componentName: "User Name",
                            });

                            // handleChange(e);
                          }}
                        />
                        <ErrorMessage name="userName" component={TextError} />
                      </Grid>
                      <Grid item xs={4}>
                        <TextField
                          name="email"
                          required
                          value={formik.values.email}
                          id="email"
                          label="Email"
                          variant="outlined"
                          onChange={(e) => {
                            formik.setFieldValue(
                              "email",
                              e.target.value.trimStart()
                            );
                            setDuplicateValue({
                              url: `/api/v1/user-app/user?email=${e.target.value.trim()}`,
                              e: e,
                              edit: edit,
                              editType: user?.email,
                              setLock: setLock,
                              componentName: "User email",
                            });
                            // handleChangeEmail(e);
                          }}
                        />
                        <ErrorMessage name="email" component={TextError} />
                      </Grid>

                      <Grid item xs={4}>
                        <TextField
                          type="number"
                          name="phone_no"
                          value={formik.values.phone_no}
                          id="phone_no"
                          label="Mobile Number"
                          variant="outlined"
                          onChange={(e) => {
                            formik.setFieldValue(
                              "phone_no",
                              e.target.value.trimStart()
                            );
                          }}
                        />
                        {/* <ErrorMessage
                              name="phone_no"
                              component={TextError}
                            /> */}
                      </Grid>
                      {!edit && (
                        <>
                          <Grid item xs={4}>
                            <TextField
                              type={showPassword ? "text" : "password"}
                              required
                              variant="outlined"
                              name="password"
                              value={formik.values.password}
                              label="Password"
                              placeholder="Enter your password"
                              onChange={(e) => {
                                formik.setFieldValue(
                                  "password",
                                  e.target.value
                                );
                              }}
                              InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <IconButton
                                      onClick={handlePassword}
                                      edge="end"
                                    >
                                      {showPassword ? (
                                        <VisibilityIcon />
                                      ) : (
                                        <VisibilityOffIcon />
                                      )}
                                    </IconButton>
                                  </InputAdornment>
                                ),
                              }}
                            />
                            <ErrorMessage
                              name="password"
                              component={TextError}
                            />
                          </Grid>
                          <Grid item xs={4}>
                            <TextField
                              type={showConfirmPassword ? "text" : "password"}
                              required
                              variant="outlined"
                              label="Confirm Password"
                              name="confirmPassword"
                              InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <IconButton
                                      onClick={handleConfirmPassword}
                                      edge="end"
                                    >
                                      {showConfirmPassword ? (
                                        <VisibilityIcon />
                                      ) : (
                                        <VisibilityOffIcon />
                                      )}
                                    </IconButton>
                                  </InputAdornment>
                                ),
                              }}
                              value={formik.values.confirmPassword}
                              onChange={(e) => {
                                formik.setFieldValue(
                                  "confirmPassword",
                                  e.target.value
                                );
                              }}
                            />
                            <ErrorMessage
                              name="confirmPassword"
                              component={TextError}
                            />
                          </Grid>
                        </>
                      )}

                      {/* <Grid item xs={4}>
                        <Autocomplete
                          id="virtualize-demo"
                          options={groups}
                          value={formik?.values?.group}
                          getOptionLabel={(option) => option?.name}
                          onChange={(e: object, value: group) => {
                            formik.setFieldValue("group", value);
                          }}
                          isOptionEqualToValue={(option, value) =>
                            option?.id === value?.id
                          }
                          onFocus={() => loadGroupOptions()}
                          renderInput={(params) => (
                            <TextField
                              required
                              {...params}
                              variant="outlined"
                              label="Group"
                              fullWidth
                              onChange={(e) => {
                                setFocus(false);
                                setQuery({
                                  search: e.target.value,
                                  url: `api/v1/user-app/users/user-group?search=${e.target.value.trimStart()}&offset=0&limit=${globalSearchPostPerPage}`,
                                });
                              }}
                            />
                          )}
                        />
                        <ErrorMessage name="group" component={TextError} />
                      </Grid> */}
                      <Grid item xs={4}>
                        <DropzoneArea
                          onChange={(files) => {
                            formik.setFieldValue("picture", files[0]);
                          }}
                          showAlerts={false}
                          filesLimit={1}
                          acceptedFiles={[
                            "image/jpeg",
                            "image/png",
                            "image/bmp",
                          ]}
                        />
                      </Grid>
                    </Grid>
                    <Grid container justifyContent="center">
                      <Grid item>
                        <Button type="submit" disabled={lock || loading} />
                      </Grid>
                    </Grid>
                  </Grid>
                </Form>
              );
            }}
          </Formik>
        </Grid>
      </Grid>
    </>
  );
};

export default React.memo(CreateDoctor);
