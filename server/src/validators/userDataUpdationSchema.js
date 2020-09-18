import Joi from "@hapi/joi";
import RegExManager from "../utils/RegexManager";

const userDataUpdationValidatorSchema = Joi.object({
  name: Joi.string()
    .pattern(RegExManager.normalString)
    .min(3)
    .max(30)
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
    .messages({
      "any.required": "Email is required",
    }),
  password: Joi.string().min(4).max(30),
  repeatPassword: Joi.ref("password"),
  avatar: Joi.any()
    .meta({ swaggerType: "file" })
    .optional()
    .allow("")
    .description("image file"),
});

export default userDataUpdationValidatorSchema;
