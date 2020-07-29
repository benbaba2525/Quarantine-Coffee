var orm = require('../config/orm.js');

var lattes = {
    selectAllLattes: function(cb) {
        orm.selectAllLattes("lattes", function(res) {
            cb(res);
        });
    },
    insertLatte: function(cols, vals, cb) {
        orm.insertLatte("lattes", cols, vals, function(res) {
            cb(res);
        });
    },
    updateLatte: function(objColVals, condition, cb) {
        orm.updateLatte("lattes", objColVals, condition, function(res) {
            cb(res);
        });
    },
    deleteLatte: function(condition, cb) {
        orm.deleteLatte("lattes", condition, function(res) {
            cb(res);
        });
    }
};

module.exports = lattes;