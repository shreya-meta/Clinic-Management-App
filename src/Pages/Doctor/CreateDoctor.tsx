import React, { useContext, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { DropzoneArea } from "react-mui-dropzone";
import * as Yup from "yup";
import {
  Autocomplete,
  Grid,
  TextareaAutosize,
  TextField,
  IconButton,
  InputAdornment,
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
  const {  edit, doctor } = useAppSelector(doctorsSelector);
  const { rows ,setShowModal} = useContext(AppContext);
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
    name: edit ? doctor?.name : "",
    speciality: edit ? doctor?.speciality : "",
    visiting_hours: edit ? doctor?.visiting_hours : "",
    email: edit ? doctor?.email : "",
    picture: edit ? doctor?.picture : "",
    group: edit ? doctor?.group : null,
    password: "",
    confirmPassword: "",
  };

  let photo: any = doctor?.photo;
  //validation rules of the form
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Required")
      .min(
        4,
        "name must have at least 4 characters and all should be in lowercase."
      ),
    email: Yup.string().required("Required").email("Invalid email format"),
    pciture: Yup.mixed().test(
      "FILE_SIZE",
      "File size greater than 2.00MB",
      (value) => {
        return !value || (value && value.size <= 2097152);
      }
    ),
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
            ...values
          })
        );
      }
      setLock(false);
      setShowModal(false);
    }
  };
  const loadSpecialityOptions = () => {
    setFocus(true);
    dispatch(getAllUserGroup());
  };
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
                          name="firstName"
                          autoFocus
                          value={formik?.values?.firstName}
                          id="firstName"
                          label="First Name"
                          variant="outlined"
                          onChange={(e) => {
                            formik.setFieldValue(
                              "firstName",
                              e.target.value.trimStart()
                            );
                          }}
                        />
                        <ErrorMessage name="firstName" component={TextError} />
                      </Grid>
                      <Grid item xs={4}>
                        <TextField
                          name="middleName"
                          value={formik.values.middleName}
                          id="middleName"
                          label="Middle Name"
                          variant="outlined"
                          onChange={(e) => {
                            formik.setFieldValue(
                              "middleName",
                              e.target.value.trimStart()
                            );
                          }}
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <TextField
                          name="lastName"
                          value={formik.values.lastName}
                          id="lastName"
                          label="Last Name"
                          variant="outlined"
                          onChange={(e) => {
                            formik.setFieldValue(
                              "lastName",
                              e.target.value.trimStart()
                            );
                          }}
                        />
                        {/* <ErrorMessage
                              name="lastName"
                              component={TextError}
                            /> */}
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
                          name="address"
                          value={formik.values.address}
                          id="address"
                          label="Address"
                          variant="outlined"
                          onChange={(e) => {
                            formik.setFieldValue(
                              "address",
                              e.target.value.trimStart()
                            );
                          }}
                        />
                        {/* <ErrorMessage
                              name="address"
                              component={TextError}
                            /> */}
                      </Grid>
                      <Grid item xs={4}>
                        <TextField
                          id="date"
                          name="birthDate"
                          label="Date of Birth"
                          type="date"
                          value={formik.values.birthDate}
                          variant="outlined"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          inputProps={{
                            max: todayDate,
                          }}
                          onChange={(e) => {
                            formik.setFieldValue("birthDate", e.target.value);
                          }}
                        />
                        <ErrorMessage name="birthDate" component={TextError} />
                      </Grid>
                      <Grid item xs={4}>
                        <TextField
                          type="number"
                          name="mobileNo"
                          value={formik.values.mobileNo}
                          id="mobileNo"
                          label="Mobile Number"
                          variant="outlined"
                          onChange={(e) => {
                            formik.setFieldValue(
                              "mobileNo",
                              e.target.value.trimStart()
                            );
                          }}
                        />
                        {/* <ErrorMessage
                              name="mobileNo"
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

                      <Grid item xs={4}>
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
                      </Grid>

                      <Grid item xs={4}>
                        <Autocomplete
                          id="filter-demo"
                          options={genders}
                          value={formik.values.gender}
                          getOptionLabel={(option) => option.name}
                          // filterOptions={filterOptions}
                          isOptionEqualToValue={(option, value) =>
                            option?.id === value?.id
                          }
                          onChange={(event: any, value: any) => {
                            if (value !== null) {
                              formik.setFieldValue("gender", value);
                            } else {
                              formik.setFieldValue("gender", null);
                            }
                          }}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              label="Gender"
                              variant="outlined"
                            />
                          )}
                        />
                        <ErrorMessage name="gender" component={TextError} />
                      </Grid>
                      <Grid item xs={4}>
                        <DropzoneArea
                          onChange={(files) => {
                            formik.setFieldValue("photo", files[0]);
                          }}
                          showAlerts={false}
                          filesLimit={1}
                          initialFiles={user ? [photo] : undefined}
                          acceptedFiles={[
                            "image/jpeg",
                            "image/png",
                            "image/bmp",
                          ]}
                        />
                      </Grid>
                      {edit && (
                        <Grid item xs={4}>
                          <TextareaAutosize
                            required
                            value={formik.values.remarks}
                            aria-label="minimum height"
                            name="remarks"
                            minRows={2}
                            placeholder="Enter Remarks"
                            onChange={(e) => {
                              formik.setFieldValue(
                                "remarks",
                                e.target.value.trimStart()
                              );
                            }}
                          />
                          <ErrorMessage name="remarks" component={TextError} />
                        </Grid>
                      )}

                      <Grid item xs={12}>
                        <Field type="checkbox" name="active" id="active" />
                        <label htmlFor="active">Active</label>
                      </Grid>
                    </Grid>
                    <Grid container justifyContent="center">
                      <Grid item>
                        <Button
                          type="submit"
                          title={edit ? "Update" : "Submit"}
                          loading={loading}
                          disabled={lock || loading}
                        />
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
