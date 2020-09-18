function ResponseGenerator() {
  return {
    success({ code, message = "It's OK", result = [] }) {
      return {
        meta: { code, message },
        data: { ...result },
      };
    },
    failure({ code, message = "Something went wrong!", err }) {
      return {
        meta: { code },
        error: { message, ...err },
      };
    },
  };
}

export default ResponseGenerator();
