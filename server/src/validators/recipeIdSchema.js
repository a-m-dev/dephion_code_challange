import Joi from "@hapi/joi";

const recipeIdValidatorSchema = Joi.object({
  recipeId: Joi.string().required().messages({
    "any.required": "recipeId field is required",
  }),
});

export default recipeIdValidatorSchema;
