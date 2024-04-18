const { CustomAPIError } = require('../errors')
const { StatusCodes } = require('http-status-code')
const errorHandlerMiddleware = (err. req, res, next) => {
    if (err instanceof Custom CustomAPIError) {
        return res.status(err.statusCode).json({ msg: err.message})
    }
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err })
}

module.exports = errorHandlerMiddleware