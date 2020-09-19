import Joi from "@hapi/joi";

const createRecipeSchema = Joi.object({
  name: Joi.string().min(3).max(25).required().messages({
    "any.required": "name is required",
  }),
  cover: Joi.any()
    .meta({ swaggerType: "file" })
    .allow("")
    .description("image file")
    .optional(),
  numberOfServing: Joi.number().required().messages({
    "any.required": "numberOfServing is required",
  }),
  cookingTime: Joi.number().required().messages({
    "any.required": "cookingTime is required",
  }),
  ingredients: Joi.array().items(Joi.string()).required(),
  preparationSteps: Joi.array().items(Joi.string()).required(),
});

export default createRecipeSchema;
