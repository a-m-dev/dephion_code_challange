import Router from "express";

import CategoryController from "./category.controller";
import ValidatorParserTypes from "../../constants/ValidatorParserTypes";
// middlewares
import dataValidator from "../../middlewares/dataValidator.middleware";
import ImageUploader from "../../middlewares/imageUploader.middleware";
import authenticateToken from "../../middlewares/authenticateToken.middleware";
// validation schemas
import createCategorySchema from "../../validators/createCategorySchema";
import searchCategoryListSchema from "../../validators/searchCategoryListSchema";
import followCategorySchema from "../../validators/followCategorySchema";

const CategoryRouter = Router();

CategoryRouter.route("/createCategory").post(
  ImageUploader.single("cover"),
  dataValidator(createCategorySchema, ValidatorParserTypes.BODY),
  authenticateToken,
  CategoryController.createCategory
);

CategoryRouter.route("/getCategoryById/:categoryId").get(
  CategoryController.getCategoryById
);

CategoryRouter.route("/getCategoryList").get(
  CategoryController.getCategoryList
);

CategoryRouter.route("/getTopCategories").get(
  CategoryController.getTopCategories
);

CategoryRouter.route("/searchCategoryList").get(
  dataValidator(searchCategoryListSchema, ValidatorParserTypes.QUERY),
  CategoryController.searchCategoryList
);

CategoryRouter.route("/followCategory").put(
  dataValidator(followCategorySchema),
  authenticateToken,
  CategoryController.followCategory
);

export default CategoryRouter;
