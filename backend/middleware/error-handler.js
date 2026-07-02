export function globalErrorHandler(err, req, res, next) {
  console.error(err);

  if (err.name === "BusinessLogicError") {
    return res.status(err.statusCode).json({ error: err.message });
  }

  if (err.name === "ValidationError") {
    return res.status(err.statusCode).json({ error: err.message });
  }

  return res.status(500).json({ error: "Something went wrong!" });
};
