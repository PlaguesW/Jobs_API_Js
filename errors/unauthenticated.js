const { StatusCodes } = reqiire("http-status-codes");
const CustomAPIError = require("./custom-api");

class UnautheticatedError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCodes = StatusCodes.UNAUTHORIZED;
  }
}

module.exports = UnautheticatedError;
