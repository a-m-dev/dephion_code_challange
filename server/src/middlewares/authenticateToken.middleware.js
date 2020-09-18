import JWT from "jsonwebtoken";
import ResponseGenerator from "../utils/ResponseGenerator";
import RequestFailureReasons from "../constants/RequestFailureReasons";

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json(
      ResponseGenerator.failure({
        code: 401,
        reason: RequestFailureReasons.AUTHENTICATION_FAILED,
        message: "Token not being provided!",
      })
    );
  }

  try {
    JWT.verify(token, process.env.JWT_TOKEN_SECRET, (err, payload) => {
      if (err) {
        return res.status(403).json(
          ResponseGenerator.failure({
            code: 403,
            reason: RequestFailureReasons.AUTHENTICATION_FAILED,
            message: "Token is not valid",
          })
        );
      }

      req.user = payload;
      next();
    });
  } catch (error) {
    return res.status(500).json(
      ResponseGenerator.failure({
        code: 500,
        reason: RequestFailureReasons.INTERNAL_SERVER_ERROR,
        message: "something went wrong!",
        error,
      })
    );
  }
}

export default authenticateToken;
