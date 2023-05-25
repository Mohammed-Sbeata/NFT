const connection = require('../config/connection');

const getAllPostsQuery = () => {
    const sql = {
        text: 'SELECT p.*, c.likes FROM products p LEFT JOIN cart c ON p.id = c.productId AND c.userId = 2;',
    }
    return connection.query(sql);
}
module.exports = getAllPostsQuery;