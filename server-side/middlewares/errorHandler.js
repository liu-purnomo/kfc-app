const errorHandler = (err, req, res, next) => {

    let code;
    let message;

    switch (err.name) {
        case 'SequelizeValidationError':
            code = 400;
            message = err.errors[0].message
            break;

        case 'SequelizeUniqueConstraintError':
            code = 400;
            message = err.errors[0].message
            break;

        case 'Unauthorized':
            code = 400;
            message = 'Invalid email/password'
            break;

        case 'EmailRequired':
            code = 400;
            message = 'Email is required'
            break;

        case 'PasswordRequired':
            code = 400;
            message = 'Password is required'
            break;

        case 'InvalidToken':
            code = 400;
            message = 'Invalid access token'
            break;

        case 'NotFound':
            code = 400;
            message = 'Data not found'
            break;

        default:
            code = 500;
            message = 'Internal Server Error';
            break;
    }

    res.status(code).json({
        message,
    });
};

module.exports = errorHandler