export default function noRouteMatch(re, res, next) {
  const err = new Error("Route Not Found Error");
  err.status = 404;

  next(err);
}
