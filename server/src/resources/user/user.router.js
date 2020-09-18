import Router from "express";

import UserController from "./user.controller";
import dataValidator from "../../middlewares/dataValidator.middleware";
// middlewares
import ValidatorParserTypes from "../../constants/ValidatorParserTypes";
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

export default UserRouter;
