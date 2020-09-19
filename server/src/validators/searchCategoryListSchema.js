import Joi from "@hapi/joi";

const searchCategoryListSchema = Joi.object({
  q: Joi.string().min(1).required().messages({
    "any.required": "Query is required",
  }),
});

export default searchCategoryListSchema;
