const connection = require('../../config/connection');

const checkLikeQuery = (userId, productId) => {
    const sql = {
        text: 'SELECT likes FROM cart WHERE userId = $1 AND productId = $2',
        values: [userId, productId],
    };
    return connection.query(sql);
};

module.exports = checkLikeQuery;
