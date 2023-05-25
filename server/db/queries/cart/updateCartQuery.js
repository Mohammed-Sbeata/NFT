const connection = require('../../config/connection');

const updateCartQuery = (userId, productId, like) => {
    console.log(userId, productId, like, 'zzzzz');
    const sql = {
        text: 'UPDATE cart SET likes = $3 WHERE userId = $1 AND productId = $2 RETURNING *;',
        values: [userId, productId, like],
    };
    return connection.query(sql);
};

module.exports = updateCartQuery;
