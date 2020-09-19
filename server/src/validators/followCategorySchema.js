import Joi from "@hapi/joi";

const followCategorySchema = Joi.object({
  categoryId: Joi.string().required(),
});

export default followCategorySchema;
