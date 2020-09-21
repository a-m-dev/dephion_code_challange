import * as Yup from "yup";

import { passwordRegex, loginUserNameRegex } from "utils/regexUtils";

function equalTo(ref, msg) {
  return Yup.mixed().test({
    name: "equalTo",
    exclusive: false,
    message: msg || "${path} must be the same as ${reference}",
    params: {
      reference: ref.path,
    },
    test: function (value) {
      return value === this.resolve(ref);
    },
  });
}
Yup.addMethod(Yup.string, "equalTo", equalTo);

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
    .equalTo(Yup.ref("password"), "Passwords must match")
    .required("Required"),
});

export default validationSchema;
