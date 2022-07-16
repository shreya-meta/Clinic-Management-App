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
  Autocomplete,
} from "@mui/material";
import { doctorProps, specialityProps } from "./types";
import { useAppDispatch } from "../../Utils/appHooks";
import { doctorsSelector } from "../../Redux/Doctor/selector";
import { AppContext } from "../../Utils/AppUtils";
import TextError from "../../Components/TextError/TextError";
import { useAppSelector } from "../../Utils/appHooks";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { createDoctor, getSpecialities } from "../../Redux/Doctor/thunk";
import { useAppStyles } from "../../Utils/AppStyles";
const CreateDoctor = () => {
  const { edit, doctor, specialities } = useAppSelector(doctorsSelector);
  console.log(specialities, "specialities");
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
    speciality: edit ? (doctor?.speciality ? doctor?.speciality : []) : [],
    visiting_hours: edit
      ? doctor?.visiting_hours
        ? doctor?.visiting_hours
        : ""
      : "",
    email: edit ? (doctor?.email ? doctor?.email : "") : "",
    picture: edit ? (doctor?.picture ? doctor?.picture : "") : "",
    type: "",
    phone_no: edit ? (doctor?.phone_no ? doctor?.phone_no : "") : "",
    password: "",
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
    speciality: Yup.array().min(1, "Required."),
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
  const loadSpecialityOptions = () =>
    specialities?.length === 0 && dispatch(getSpecialities());
  const getBase64 = (file: any, cb: any) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      cb(reader.result);
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
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
            console.log(values.picture, "values in formik");
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
                      variant="outlined"
                      onChange={(e) => {
                        setFieldValue("name", e.target.value.trimStart());
                      }}
                    />
                    <ErrorMessage name="name" component={TextError} />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      name="visiting_hours"
                      autoFocus
                      value={values.visiting_hours}
                      id="visiting_hours"
                      label="Visiting Hours"
                      size="small"
                      variant="outlined"
                      onChange={(e) => {
                        setFieldValue(
                          "visiting_hours",
                          e.target.value.trimStart()
                        );
                      }}
                    />
                    <ErrorMessage name="visiting_hours" component={TextError} />
                  </Grid>
                  <Grid item xs={6}>
                    <Autocomplete
                      id="virtualize-demo"
                      options={specialities}
                      value={values.speciality}
                      multiple
                      getOptionLabel={(option) => option?.name}
                      onChange={(e: object, values: specialityProps[]) => {
                        values !== null
                          ? setFieldValue("speciality", values)
                          : setFieldValue("speciality", null);
                      }}
                      isOptionEqualToValue={(option, value) =>
                        option?.id === value?.id
                      }
                      onFocus={() => loadSpecialityOptions()}
                      renderInput={(params) => (
                        <TextField
                          required
                          {...params}
                          variant="outlined"
                          label="Speciality"
                          fullWidth
                        />
                      )}
                    />
                    <ErrorMessage name="speciality" component={TextError} />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      name="email"
                      required
                      value={values.email}
                      id="email"
                      label="Email"
                      size="small"
                      variant="outlined"
                      onChange={(e) => {
                        setFieldValue("email", e.target.value.trimStart());
                        // handleChangeEmail(e);
                      }}
                    />
                    <ErrorMessage name="email" component={TextError} />
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      type="number"
                      name="phone_no"
                      value={values.phone_no}
                      id="phone_no"
                      label="Phone Number"
                      size="small"
                      variant="outlined"
                      onChange={(e) => {
                        setFieldValue("phone_no", e.target.value.trimStart());
                      }}
                    />
                    <ErrorMessage name="phone_no" component={TextError} />
                  </Grid>
                  {!edit && (
                    <Grid item xs={6}>
                      <TextField
                        type={showPassword ? "text" : "password"}
                        required
                        variant="outlined"
                        name="password"
                        value={values.password}
                        size="small"
                        label="Password"
                        placeholder="Enter your password"
                        onChange={(e) => {
                          setFieldValue("password", e.target.value);
                        }}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton onClick={handlePassword} edge="end">
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
                      <ErrorMessage name="password" component={TextError} />
                    </Grid>
                  )}
                  {/* <Grid item xs={6}>
                    <DropzoneArea
                      onChange={(files) => {
                        const blob = new Blob(files, {
                          type: "text/plain",
                        });
                        getBase64(blob, (result: any) => {
                          var idCardBase64 = result;
                          console.log(idCardBase64, "idCardBase64");
                        });
                        let image = URL.createObjectURL(blob);
                        console.log(files[0], "image");
                        setFieldValue("picture", files[0]);
                      }}
                      initialFiles={
                        [
                          // {
                          //   path: "signature (1).png",
                          // },
                        ]
                      }
                      showAlerts={false}
                      filesLimit={1}
                      acceptedFiles={["image/jpeg", "image/png", "image/bmp"]}
                    />
                    <ErrorMessage name="picture" component={TextError} />
                  </Grid> */}
                  <Grid item xs={6}>
                    <Grid>
                      <input
                        type="file"
                        name="picture"
                        onChange={(event) => {
                          let files = event?.target?.files;
                          //@ts-ignore
                          const blob = new Blob(files, {
                            type: "text/plain",
                          });
                          getBase64(blob, (result: string) => {
                            setFieldValue("picture", result);
                          });
                          for (const file of event.target.files as any) {
                            setFieldValue("type", file.type);
                          }
                        }}
                      />
                    </Grid>
                    <Grid>
                      <img
                        src="data:image/jpg;base64,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"
                        // alt={URL.createObjectURL(values.picture as any)}
                        alt=""
                        className="img-thumbnail mt-1"
                        height={100}
                        width={100}
                      />
                    </Grid>
                    <ErrorMessage name="picture" component={TextError} />
                  </Grid>
                </Grid>
                <Grid container justifyContent="center">
                  <Grid item sx={{ mt: 2 }}>
                    <Button
                      type="submit"
                      disabled={loading}
                      variant="contained"
                    >
                      SAVE
                    </Button>
                  </Grid>
                </Grid>
              </Form>
            );
          }}
        </Formik>
      </Grid>
    </>
  );
};

export default React.memo(CreateDoctor);
