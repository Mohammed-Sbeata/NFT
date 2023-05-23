const getProductsQuery = require('../../db/queries/getProductsQuery');

const products = (req, res, next) => {
    getProductsQuery().then((allData) => {
        res.status(200).json({ status: 200, message: 'You have all data to public page succesfully', allData: allData.rows })
    }).catch((err) => next(err));
};

module.exports = products;
