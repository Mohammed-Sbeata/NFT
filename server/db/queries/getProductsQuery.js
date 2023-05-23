const connection = require('../config/connection');

const getAllPostsQuery = () => {
    const sql = {
        text: 'SELECT * from products',
    }
    return connection.query(sql);
}
module.exports = getAllPostsQuery;