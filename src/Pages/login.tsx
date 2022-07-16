import { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormControl,
  Grid,
  Input,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import AppButton from "../Components/Button/AppButton";
import TextError from "../Components/TextError/TextError";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Login = () => {
  const [expanded, setExpanded] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  // for handling visibility icon
  const handlePassword = () => {
    setShowPassword((prev: boolean) => !prev);
  };
  // initial values for the login form
  const initialValues: any = {
    email: "",
    password: "",
  };
  //validation rule for the form field in formik
  const validationSchema = Yup.object().shape({
    branch: Yup.object().nullable().required("Please select branch"),
    email: Yup.string().required("Required").email("Invalid email format"),
    password: Yup.string()
      .required("Please enter your password")
      .min(4, "Password should be at least 4 characters"),
    rememberMe: Yup.bool(),
  });
  // submit handler
  const onSubmit = (values: any) => {
    console.log("i am runnign");
    // const data = { userName, password, branch: branch?.id };
    // dispatch(login(data));
  };
  return (
    <Card sx={{ margin: "80px auto", maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: red[500], marginLeft: "120px" }}
            aria-label="login"
          ></Avatar>
        }
        // title="Shrimp and Chorizo Paella"
        // subheader="September 14, 2016"
      />

      <CardContent>
        <Formik
          enableReinitialize
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => {
            return (
              <Form autoComplete="off">
                <Grid>
                  <FormControl sx={{ my: 2 }} fullWidth variant="standard">
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <Input
                      id="email"
                      name="email"
                      onChange={(e) => {
                        formik.setFieldValue("email", e.target.value);
                      }}
                    />
                    <ErrorMessage name="email" component={TextError} />
                  </FormControl>
                  <FormControl sx={{ my: 2 }} fullWidth variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">
                      Password
                    </InputLabel>
                    <Input
                      id="standard-adornment-password"
                      type={showPassword ? "text" : "password"}
                      name="password"
                      onChange={(e) => {
                        formik.setFieldValue("password", e.target.value);
                      }}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handlePassword}
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                    <ErrorMessage name="password" component={TextError} />
                  </FormControl>
                  <AppButton
                    title="LOGIN"
                    loading={false}
                    handleSubmit={onSubmit}
                  />
                </Grid>
              </Form>
            );
          }}
        </Formik>
      </CardContent>
    </Card>
  );
};
export default Login;
