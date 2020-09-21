import * as Yup from "yup";

import { passwordRegex } from "utils/regexUtils";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email is not correct")
    .required("email is required"),
  password: Yup.string()
    .matches(passwordRegex, "min 6 char, lower and upper case")
    .required("Password field is required"),
});

export default validationSchema;
