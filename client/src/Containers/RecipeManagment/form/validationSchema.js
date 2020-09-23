import * as Yup from "yup";

// const FILE_SIZE = 160 * 1024;
// const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

const validationSchema = Yup.object().shape({
  name: Yup.string().required("name is required"),
  categoryId: Yup.string().required("category is required"),
  cookingTime: Yup.number()
    .min(1, "should be more than 1")
    .required("Cooking time is required"),
  numberOfServing: Yup.number()
    .min(1, "should be more than 1")
    .required("how many people is for?"),
  // ingredients: Yup.array()
  //   .of(Yup.string())
  //   .min(0)
  //   .required("You might include the ingredients"),
  // preparationSteps: Yup.array()
  //   .of(Yup.string())
  //   .min(0)
  //   .required("Provide some steps to preparatoion"),
  // cover: Yup.mixed()
  //   .required("A file is required")
  //   .test(
  //     "fileSize",
  //     "File too large",
  //     (value) => value && value.size <= FILE_SIZE
  //   )
  //   .test(
  //     "fileFormat",
  //     "Unsupported Format",
  //     (value) =>
  //       console.log({ value }) ||
  //       (value && SUPPORTED_FORMATS.includes(value.type))
  //   ),
});

export default validationSchema;
