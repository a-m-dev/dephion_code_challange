import Router from "express";

import UserController from "./user.controller";
import ValidatorParserTypes from "../../constants/ValidatorParserTypes";
// middlewares
import dataValidator from "../../middlewares/dataValidator.middleware";
import authenticateToken from "../../middlewares/authenticateToken.middleware";
// Joi Schemas
import loginValidatorSchema from "../../validators/loginSchema";
import registerValidatorSchema from "../../validators/registrationSchema";

const UserRouter = Router();

UserRouter.route("/login").post(
  dataValidator(loginValidatorSchema, ValidatorParserTypes.BODY),
  UserController.login
);
UserRouter.route("/register").post(
  dataValidator(registerValidatorSchema, ValidatorParserTypes.BODY),
  UserController.register
);

UserRouter.route("/getUserData").get(
  authenticateToken,
  UserController.getUserData
);

export default UserRouter;
