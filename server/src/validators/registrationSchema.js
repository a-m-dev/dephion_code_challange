import Joi from "@hapi/joi";
import RegExManager from "../utils/RegexManager";

const registrationValidatorSchema = Joi.object({
  name: Joi.string()
    .pattern(RegExManager.normalString)
    .min(3)
    .max(30)
    .required()
    .messages({
      "any.required": "name field is required",
    }),
  email: Joi.string()
    .email({
      allowUnicode: false,
      minDomainSegments: 2,
      tlds: { alow: ["com", "net"] },
    })
    .pattern(RegExManager.validateEmail)
    .required()
    .messages({
      "any.required": "Email is required",
    }),
  password: Joi.string()
    .min(4)
    .max(30)
    .required()
    .messages({ "any.required": "password is required" }),
  repeatPassword: Joi.ref("password"),
});

export default registrationValidatorSchema;
