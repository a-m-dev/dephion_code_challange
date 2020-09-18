import ResponseGenerator from "../utils/ResponseGenerator";

export default function globalErrorHandler(err, req, res, next) {
  res.status(err.status || 500).json(
    ResponseGenerator.failure({
      code: err.status || 500,
      message: err.message,
      error: err,
    })
  );
}
