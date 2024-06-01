function handleError(res, error) {
  res
    .status(400)
    .json({
      status: false,
      message: error,
    })
    .end();
}

module.exports = handleError;
