import Bcrypt from "bcryptjs";
import {
  Model as UserModel,
  propGeneral as userPropGeneral,
} from "./user.model";
import JWT from "jsonwebtoken";
import ResponseGenerator from "../../utils/ResponseGenerator";
import RequestFailureReasons from "../../constants/RequestFailureReasons";
import AppConfig from "../../utils/AppConfig";

const UserController = {};

/**
 * Login
 */
UserController.login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    let foundUser = await UserModel.findOne({ email }).exec();

    foundUser = foundUser && foundUser.toJSON();

    if (foundUser) {
      Bcrypt.compare(password, foundUser.password, async (err, result) => {
        if (err) {
          return res.status(401).json(
            ResponseGenerator.failure({
              code: 401,
              reason: RequestFailureReasons.AUTHENTICATION_FAILED,
              message: "password is not correct",
            })
          );
        }

        if (result) {
          const token = JWT.sign(
            {
              user_id: foundUser._id,
              email: foundUser.email,
              name: foundUser.name,
              avatar: foundUser.avatar,
            },
            process.env.JWT_TOKEN_SECRET,
            {
              expiresIn: AppConfig.jwt.token_expiration_due,
            }
          );

          return res.status(200).json(
            ResponseGenerator.success({
              code: 200,
              message: "Login OK!",
              result: {
                token,
                type: "Bearer",
                expiresAt:
                  new Date().getTime() +
                  parseInt(AppConfig.jwt.token_expiration_due) *
                    (60 * 60 * 24) *
                    1000,
                userData: {
                  _id: foundUser._id,
                  name: foundUser.name,
                  email: foundUser.email,
                  avatar: foundUser.avatar,
                  recipes: foundUser.recipes,
                  favorites: foundUser.favorites,
                  followingCategories: foundUser.followingCategories,
                },
              },
            })
          );
        } else {
          return res.status(401).json(
            ResponseGenerator.failure({
              code: 401,
              reason: RequestFailureReasons.AUTHENTICATION_FAILED,
              message: "Password is incorrect",
            })
          );
        }
      });
    } else {
      return res.status(401).json(
        ResponseGenerator.failure({
          code: 401,
          message: "User not found",
          reason: RequestFailureReasons.AUTHENTICATION_FAILED,
        })
      );
    }
  } catch (error) {
    console.log(error);
    return res.status(401).json(
      ResponseGenerator.failure({
        code: 401,
        message: "Cannot login user",
        reason: RequestFailureReasons.AUTHENTICATION_FAILED,
        error,
      })
    );
  }
};

/**
 * Register
 */
UserController.register = async (req, res, next) => {
  const { name, email, password } = req.body;

  try {
    const foundUser = await UserModel.findOne({ email: email }).exec();

    if (!foundUser) {
      console.log("User creation triggered");
      Bcrypt.hash(password, 12, async (err, hash) => {
        if (err) {
          return res.status(500).json(
            ResponseGenerator.failure({
              code: 500,
              message: "Hash Generation Failed!",
              reason: RequestFailureReasons.HASH_GENERATION_FAILED,
              error: err,
            })
          );
        } else {
          // Create user should happen
          const newUser = new UserModel({
            name,
            email,
            password: hash,
            avatar: "/s/images/avatar.png",
            recipes: [],
            favorites: [],
            followingCategories: [],
          });

          try {
            let createdUser = await newUser.save();
            createdUser = createdUser.toJSON();
            return res.status(201).json(
              ResponseGenerator.success({
                code: 201,
                message: `User ${name} created successfully`,
                result: {
                  _id: createdUser._id,
                  name: createdUser.name,
                  email: createdUser.email,
                  avatar: createdUser.avatar,
                  recipes: createdUser.recipes,
                  favorites: createdUser.favorites,
                  followingCategories: createdUser.followingCategories,
                },
              })
            );
          } catch (error) {
            return res.status(400).json(
              ResponseGenerator.failure({
                code: 400,
                reason: RequestFailureReasons.USER_CREATION_FAILED,
                message: "cannot create user",
                error,
              })
            );
          }
        }
      });
    } else {
      let message = "";

      if (foundUser.name === name) message = "username is taken before!";
      else if (foundUser.email === email) message = "Email is taken before!";
      else message = "Something went wrong!";

      return res.status(409).json(
        ResponseGenerator.failure({
          code: 409,
          reason: RequestFailureReasons.USER_ALREADY_EXISTS,
          message,
        })
      );
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json(
      ResponseGenerator.failure({
        code: 500,
        reason: RequestFailureReasons.INTERNAL_SERVER_ERROR,
        message: "Error during registration!",
        error,
      })
    );
  }
};

/**
 *
 * Get User List
 */
UserController.getUserList = async (req, res, next) => {
  try {
    const getAllUsers = await UserModel.find().exec();

    return res.status(200).json(
      ResponseGenerator.success({
        code: 200,
        message: "user list is ok",
        result: {
          users: getAllUsers.map((user) => {
            let resultUser = user.toJSON();

            return {
              _id: resultUser._id,
              name: resultUser.name,
              email: resultUser.email,
              avatar: resultUser.avatar,
              recipes: resultUser.recipes,
              favorites: resultUser.favorites,
              followingCategories: resultUser.followingCategories,
            };
          }),
        },
      })
    );
  } catch (error) {
    console.log(error);
    return res.status(500).json(
      ResponseGenerator.failure({
        code: 500,
        message: "Something is wrong with server",
        reason: RequestFailureReasons.INTERNAL_SERVER_ERROR,
        error,
      })
    );
  }
};

/**
 * Get User Data
 */
UserController.getUserData = async (req, res, next) => {
  const userID = req.user.user_id;

  try {
    const foundUser = await UserModel.findOne({ _id: userID }).exec();

    return res.status(200).json(
      ResponseGenerator.success({
        code: 200,
        message: "user data is ready",
        result: {
          _id: foundUser._id,
          name: foundUser.name,
          email: foundUser.email,
          avatar: foundUser.avatar,
          recipes: foundUser.recipes,
          favorites: foundUser.favorites,
          followingCategories: foundUser.followingCategories,
        },
      })
    );
  } catch (error) {
    console.log(error);
    return res.status(500).json(
      ResponseGenerator.failure({
        code: 500,
        reason: RequestFailureReasons.INTERNAL_SERVER_ERROR,
        message: "Something went wrong!",
        error,
      })
    );
  }
};

/**
 * Update User Data
 */
UserController.updateUserData = async (req, res, next) => {
  let updatables = req.body;
  const { user_id } = req.user;

  console.log({ user_id, updatables });

  try {
    // manage password
    let password = req.body.password;
    if (password) {
      const salted = Bcrypt.genSaltSync(12);
      password = Bcrypt.hashSync(req.body.password, salted);
      updatables = { ...updatables, password };
    }

    // manage avatar
    let avatar = req.file && req.file.path;
    if (avatar) {
      updatables = { ...updatables, avatar };
    }

    const result = await UserModel.findOneAndUpdate(
      { _id: user_id },
      { ...updatables },
      { new: true }
    );

    return res.status(200).json(
      ResponseGenerator.success({
        code: 200,
        messasge: "User data has been updated!",
        result: {
          _id: result._id,
          name: result.name,
          email: result.email,
          avatar: result.avatar,
          recipes: result.recipes,
          favorites: result.favorites,
          followingCategories: result.followingCategories,
        },
      })
    );
  } catch (error) {
    console.log(error);
    return res.status(500).json(
      ResponseGenerator.failure({
        code: 500,
        reason: RequestFailureReasons.INTERNAL_SERVER_ERROR,
        message: "There is a problem with server!",
        error,
      })
    );
  }
};

export default UserController;
