const jwt = require('jsonwebtoken');
const ErrorWrapper = require('../errors/ErrorWrapper');

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) {
    return res.status(401).json(new ErrorWrapper(401, 'Access denied. No token provided.'));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json(new ErrorWrapper(400, 'Invalid token.'));
  }
};

module.exports = authMiddleware;