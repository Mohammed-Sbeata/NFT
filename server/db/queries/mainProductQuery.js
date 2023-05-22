const connection = require('../config/connection');

const userSignupQuery = () => {
    const sql = {
        text: 'INSERT INTO users (username, email, password) VALUES ($1,$2,$3) RETURNING id,username,password',
    };
    return connection.query(sql);
};

module.exports = userSignupQuery;
