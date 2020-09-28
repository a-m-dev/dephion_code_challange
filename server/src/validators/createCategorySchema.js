import Joi from "@hapi/joi";

const createCategorySchema = Joi.object({
  name: Joi.string().min(3).max(25).required(),
  description: Joi.string().min(5).max(480).required(),
  cover: Joi.any()
    .meta({ swaggerType: "file" })
    .allow("")
    .description("image file"),
});

export default createCategorySchema;
