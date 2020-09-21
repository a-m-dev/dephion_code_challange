import * as Yup from "yup";

import { passwordRegex, loginUserNameRegex } from "utils/regexUtils";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(loginUserNameRegex, "min 5, only upper and lower")
    .required("name is required"),
  email: Yup.string()
    .email("Email is not correct")
    .required("email is required"),
  password: Yup.string()
    .matches(passwordRegex, "min 6 char, lower and upper case")
    .required("Password field is required"),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref("password"), null])
    .required("Password confirm is required"),
});

export default validationSchema;
