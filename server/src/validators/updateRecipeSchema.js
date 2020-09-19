import Joi from "@hapi/joi";

const updateRecipeValidationSchema = Joi.object({
  recipeId: Joi.string().required().messages({
    "any.required": "ID is not provided!",
  }),
  name: Joi.string().min(3).max(25).required().messages({
    "any.required": "name is required for updation",
  }),
  cover: Joi.any()
    .meta({ swaggerType: "file" })
    .allow("")
    .description("image file")
    .optional(),
  numberOfServing: Joi.number(),
  cookingTime: Joi.number(),
  ingredients: Joi.array().items(Joi.string()),
  preparationSteps: Joi.array().items(Joi.string()),
});

export default updateRecipeValidationSchema;
