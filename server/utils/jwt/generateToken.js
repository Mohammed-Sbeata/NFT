const { sign } = require('jsonwebtoken');

const { TOKEN_SECRET } = process.env;
const generateToken = (payload) => new Promise((resolve, reject) => {
  sign(payload, TOKEN_SECRET, (err, token) => {
    if (err) {
      reject(err);
    } else {
      resolve(token);
    }
  });
});

module.exports = generateToken;
