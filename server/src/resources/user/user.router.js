import Router from "express";

import UserController from "./user.controller";
import ValidatorParserTypes from "../../constants/ValidatorParserTypes";
// middlewares
import dataValidator from "../../middlewares/dataValidator.middleware";
import ImageUploader from "../../middlewares/imageUploader.middleware";
import authenticateToken from "../../middlewares/authenticateToken.middleware";
// Joi Schemas
import loginValidatorSchema from "../../validators/loginSchema";
import registerValidatorSchema from "../../validators/registrationSchema";
import userDataUpdationValidatorSchema from "../../validators/userDataUpdationSchema";

const UserRouter = Router();

UserRouter.route("/login").post(
  dataValidator(loginValidatorSchema, ValidatorParserTypes.BODY),
  UserController.login
);
UserRouter.route("/register").post(
  dataValidator(registerValidatorSchema, ValidatorParserTypes.BODY),
  UserController.register
);

UserRouter.route("/getUserList").get(UserController.getUserList);
UserRouter.route("/getUserData").get(
  authenticateToken,
  UserController.getUserData
);
UserRouter.route("/updateUserData").patch(
  dataValidator(userDataUpdationValidatorSchema),
  ImageUploader.single("avatar"),
  authenticateToken,
  UserController.updateUserData
);

export default UserRouter;
