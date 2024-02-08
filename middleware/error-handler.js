const { CustomAPIError } = require("../errors/custom-error");
const errrorHandler = (err, req, res, next) => {
  //   console.log(err.message);
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res.status(err.status).json({ msg: "Something went wrong" });
};

module.exports = errrorHandler;
