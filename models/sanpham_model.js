const {model} = require('mongoose');
var db = require('./db');
//định nghĩa cấu trúc model
const DlSchema = new db.mongoose.Schema(
    //truyền vào đối tượng định nghĩa cấu trúc
    {
        name: {type: String, required : true}, // required : true : dữ liệu bắt buộc nhập
        price: {type: Number, required : false},
        title: {type: String, required : false},
    },
    {
        collection: "Duleu_1"
    }
);

// định nghĩa model
let DlModel = db.mongoose.model('DlModel', DlSchema);



module.exports = {DlModel};