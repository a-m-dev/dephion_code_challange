import { useState, useEffect, useCallback } from "react";
import { apiRequest } from "utils/api";
import { RequestMethods } from "Constants";
import { toast } from "react-toastify";
import apiEndpoints from "utils/api/apiEndpoints";
import CategoriesMock from "./mocks/CategoriesMock";
import imageToFileObj from "utils/imageToFileOBJ";
import { reject } from "lodash";

const InitializerManager = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    manageCategories();
  }, []);

  const manageCategories = useCallback(async () => {
    const { status, categories } = await fetchCategories();

    if (status === "OK" && !categories.length) {
      console.log("should create categories...");
      Promise.all(CategoriesMock.map((cat) => handleCreateCategory(cat)))
        .then((results) => {
          setLoading(false);
          window.location.reload();
        })
        .catch((err) => console.log("ERROR IN CREATING THE CATEGORIES", err));
    } else if (status === "OK" && categories.length) {
      setLoading(false);
    } else {
    }
  }, []);

  const fetchCategories = useCallback(async () => {
    const url = apiEndpoints.category.getCategories();
    const method = RequestMethods.GET;

    try {
      const data = await apiRequest({ url, method });
      return { status: "OK", categories: data.data.categories };
    } catch (error) {
      console.log("ERROR DURING INITIAL CATEGORY CALL");
      return { status: "NO_OK", categories: [] };
    }
  }, []);

  const handleCreateCategory = async ({ name, description, cover }) => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);

    const file = await imageToFileObj(cover, "cover.jpg", "image/jpg");
    formData.append("cover", file);

    const url = apiEndpoints.category.createCategory();
    const method = RequestMethods.POST;

    return new Promise((res, rej) => {
      try {
        const data = apiRequest({ url, method, data: formData });
        res(data);
      } catch (error) {
        rej(error);
      }
    });
  };

  return { loading };
};

export default InitializerManager;
