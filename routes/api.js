var express = require('express');
var router = express.Router();
var list_api = require('../controller/api/list_api');

// url : get /api/users ==> lấy danh sách
router.get('/list', list_api.listUser);
router.post('/list', list_api.Dladd);


router.post('/edit/:idsp', list_api.editDl);
router.delete('/delete/:idsp', list_api.deleteDl);

module.exports = router;