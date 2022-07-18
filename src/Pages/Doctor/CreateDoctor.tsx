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
import { createDoctorProps, doctorProps, specialityProps } from "./types";
import { useAppDispatch } from "../../Utils/appHooks";
import { doctorsSelector } from "../../Redux/Doctor/selector";
import { AppContext } from "../../Utils/AppUtils";
import TextError from "../../Components/TextError/TextError";
import { useAppSelector } from "../../Utils/appHooks";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
  createDoctor,
  getSpecialities,
  updateDoctor,
} from "../../Redux/Doctor/thunk";
import { useAppStyles } from "../../Utils/AppStyles";
import AppButton from "../../Components/Button/AppButton";
const CreateDoctor = ({ setShowModal }: createDoctorProps) => {
  const { edit, doctor, specialities, loading } =
    useAppSelector(doctorsSelector);
  console.log(specialities, "specialities");

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
  console.log(doctor, "doctor edit");
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
    picture: edit
      ? doctor?.picture
        ? doctor?.picture.replace("data:text/plain", `data:${doctor.type}`)
        : ""
      : "",
    type: "",
    phone_no: edit ? (doctor?.phone_no ? doctor?.phone_no : "") : "",
    password: edit ? (doctor?.password ? doctor?.password : "") : "",
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
    if (edit) {
      // dispatching update action
      dispatch(updateDoctor(values, doctor?.id!));
    } else {
      // dispatching create action
      dispatch(createDoctor(values));
    }
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
                          setFieldValue("addedPicture", files && files[0]);
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
                        src={
                          values?.addedPicture
                            ? URL.createObjectURL(values.addedPicture)
                            : values?.picture!
                        }
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
                <AppButton title="SAVE" loading={loading} />
              </Form>
            );
          }}
        </Formik>
      </Grid>
    </>
  );
};

export default React.memo(CreateDoctor);
