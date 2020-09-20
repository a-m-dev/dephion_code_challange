import {
  Model as CategoryModel,
  propGeneral as categoryPropGeneral,
} from "./category.model";
import { Model as UserModel } from "../user/user.model";
import {
  propGeneral as userPropGeneral,
  propMini as userPropMini,
} from "../user/user.model";
import ResponseGenerator from "../../utils/ResponseGenerator";
import RequestFailureReasons from "../../constants/RequestFailureReasons";

const CategoryController = {};

/**
 * Create Category
 */
CategoryController.createCategory = async (req, res, next) => {
  const userId = req.user.user_id;
  const { name, description } = req.body;
  const cover = (req.file && req.file.path) || undefined;

  if (!cover) {
    return res.status(400).json(
      ResponseGenerator.failure({
        code: 400,
        reason: RequestFailureReasons.BAD_REQUEST,
        message: "provide Cover!",
      })
    );
  }

  try {
    let foundedCategory = await CategoryModel.findOne({ name });

    foundedCategory = foundedCategory && foundedCategory.toJSON();

    if (foundedCategory) {
      return res.status(409).json(
        ResponseGenerator.failure({
          code: 409,
          reason: RequestFailureReasons.RESOURCE_EXSISTS_ALREADY,
          message: "category exsists!",
        })
      );
    } else {
      const newCategory = new CategoryModel({
        name,
        description,
        cover,
        recipesCount: 0,
        followers: 0,
        creator: userId,
      });

      let createdCategory = await newCategory
        .save()
        .then((t) => t.populate("creator", userPropMini).execPopulate());

      createdCategory = createdCategory.toJSON();

      return res.status(201).json(
        ResponseGenerator.success({
          code: 201,
          message: "Category created",
          result: {
            _id: createdCategory._id,
            name: createdCategory.name,
            cover: createdCategory.cover,
            description: createdCategory.description,
            recipesCount: createdCategory.recipesCount,
            followers: createdCategory.followers,
            creator: createdCategory.creator,
          },
        })
      );
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json(
      ResponseGenerator.failure({
        code: 500,
        reason: RequestFailureReasons.INTERNAL_SERVER_ERROR,
        message: "there was a problem on creating category",
      })
    );
  }
};

/**
 * get Category list
 */
CategoryController.getCategoryList = async (req, res, next) => {
  try {
    const getAllCategories = await CategoryModel.find()
      .populate("creator", userPropMini)
      .exec();

    return res.status(200).json(
      ResponseGenerator.success({
        code: 200,
        message: "categories here",
        result: {
          allCategories: getAllCategories.length,
          categories: getAllCategories.map((cat) => {
            let resultCat = cat.toJSON();

            return {
              _id: resultCat._id,
              name: resultCat.name,
              cover: resultCat.cover,
              description: resultCat.description,
              recipesCount: resultCat.recipesCount,
              followers: resultCat.followers,
              creator: resultCat.creator,
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
        message: "went wrong!",
        reason: RequestFailureReasons.INTERNAL_SERVER_ERROR,
      })
    );
  }
};

/**
 * get top Categories
 */
CategoryController.getTopCategories = async (req, res, next) => {
  try {
    const getAllCategories = await CategoryModel.find()
      .sort({ followers: 1 })
      .populate("creator", userPropMini)
      .limit(5)
      .exec();

    return res.status(200).json(
      ResponseGenerator.success({
        code: 200,
        message: "categories here",
        result: {
          allCategories: getAllCategories.length,
          categories: getAllCategories.map((cat) => {
            let resultCat = cat.toJSON();

            return {
              _id: resultCat._id,
              name: resultCat.name,
              cover: resultCat.cover,
              description: resultCat.description,
              recipesCount: resultCat.recipesCount,
              followers: resultCat.followers,
              creator: resultCat.creator,
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
        message: "went wrong!",
        reason: RequestFailureReasons.INTERNAL_SERVER_ERROR,
      })
    );
  }
};

/**
 * Search category
 */
CategoryController.searchCategoryList = async (req, res, next) => {
  const { q } = req.query;

  try {
    const result = await CategoryModel.find({
      $or: [{ name: new RegExp(q, "gi") }],
    }).populate("creator", userPropMini);

    return res.status(200).json(
      ResponseGenerator.success({
        code: 200,
        message: "search done!",
        result: {
          allCategories: result.length,
          categories: result.map((cat) => {
            let resultCat = cat.toJSON();

            return {
              _id: resultCat._id,
              name: resultCat.name,
              cover: resultCat.cover,
              description: resultCat.description,
              recipesCount: resultCat.recipesCount,
              followers: resultCat.followers,
              creator: resultCat.creator,
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
        message: "went wrong!",
        reason: RequestFailureReasons.INTERNAL_SERVER_ERROR,
      })
    );
  }
};

/**
 *  Follow Category
 */
CategoryController.followCategory = async (req, res, next) => {
  const userId = req.user.user_id;
  const { categoryId } = req.body;

  try {
    let foundUser = await UserModel.findOne({ _id: userId });
    foundUser = foundUser && foundUser.toJSON();

    const findIndex = foundUser.followingCategories.findIndex(
      (item) => String(item) === categoryId
    );

    let followingArr = [];
    if (findIndex === -1)
      followingArr = [...foundUser.followingCategories, categoryId];
    else
      followingArr = [
        ...foundUser.followingCategories.slice(0, findIndex),
        ...foundUser.followingCategories.slice(
          findIndex + 1,
          foundUser.followingCategories.length
        ),
      ];

    let userData = await UserModel.findOneAndUpdate(
      { _id: userId },
      { followingCategories: followingArr },
      { new: true }
    );

    let updateCategory = await CategoryModel.findOneAndUpdate(
      { _id: categoryId },
      { $inc: { followers: findIndex === -1 ? 1 : -1 } },
      { new: true }
    );

    return res.status(200).json(
      ResponseGenerator.success({
        code: 200,
        message: "uodate was OK",
        result: {
          userData: {
            _id: userData._id,
            name: userData.name,
            email: userData.email,
            avatar: userData.avatar,
            followingCategories: userData.followingCategories,
          },
          categoryData: {
            _id: updateCategory._id,
            name: updateCategory.name,
            cover: updateCategory.cover,
            description: updateCategory.description,
            recipesCount: updateCategory.recipesCount,
            followers: updateCategory.followers,
            creator: updateCategory.creator,
          },
        },
      })
    );
  } catch (error) {
    console.log(error);
    return res.status(500).json(
      ResponseGenerator.failure({
        code: 500,
        reason: RequestFailureReasons.INTERNAL_SERVER_ERROR,
        message: "some thing went wrong",
      })
    );
  }
};

export default CategoryController;
