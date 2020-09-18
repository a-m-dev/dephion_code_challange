import Joi from "@hapi/joi";

const loginValidatorSchema = Joi.object({
  email: Joi.string()
    .email({
      allowUnicode: false,
      minDomainSegments: 2,
      tlds: { alow: ["com", "net"] },
    })
    .required()
    .messages({
      "any.required": "Email is Required...",
    }),
  password: Joi.string().min(4).max(30).required().messages({
    "any.required": "password is essential!",
  }),
});

export default loginValidatorSchema;
