const db = require('../../db/connect');

// getHalls
const getHalls = (req, res, next) => {
    db.query('SELECT * FROM krizevci.halls', (err, result) => {
        if (err) {
            return next(err);
        }
        res.send(result.rows)
    })
}

module.exports = {
    getHalls,
};