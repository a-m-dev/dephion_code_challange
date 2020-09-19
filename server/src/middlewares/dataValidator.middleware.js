import ResponseGenerator from "../utils/ResponseGenerator";
import ValidatorParserTypes from "../constants/ValidatorParserTypes";
import RequestFailureReasons from "../constants/RequestFailureReasons";

function dataValidator(schema, parseType) {
  return (req, res, next) => {
    let dataToParse;

    switch (parseType) {
      case ValidatorParserTypes.BODY:
        dataToParse = req.body;
        break;

      case ValidatorParserTypes.PARAM:
        dataToParse = req.params;
        break;

      case ValidatorParserTypes.BODY_PARAM:
        dataToParse = { ...req.params, ...req.body };
        break;

      case ValidatorParserTypes.QUERY:
        dataToParse = { ...req.query };
        break;

      default:
        dataToParse = req.body;
        break;
    }

    const { valid, error } = schema.validate(dataToParse);

    console.log(
      `[ Data Validator ]: ${JSON.stringify({ valid, error }, null, 2)}`
    );

    if (error !== undefined) {
      const errorMessage =
        error.hasOwnProperty("details") &&
        error.details.map((item) => item.message).join(", ");

      return res.status(422).json(
        ResponseGenerator.failure({
          code: 422,
          reason: RequestFailureReasons.VALIDATION_ERROR,
          message: errorMessage,
          // error,
        })
      );
    } else {
      next();
    }
  };
}

export default dataValidator;
