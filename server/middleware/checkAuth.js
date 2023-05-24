const { verifyToken } = require('../utils/jwt');

const checkAuth = (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    res.clearCookie('token');
    return res.status(401).json({ message: 'Unauthenticated!' });
  } else {
    verifyToken(token)
      .then(decoded => {
        req.user = decoded;
        next();
      })
      .catch(() => {
        res.clearCookie('token');
        return res.status(401).json({ message:'Unauthorized!' });
      });
  }
};

module.exports = checkAuth;