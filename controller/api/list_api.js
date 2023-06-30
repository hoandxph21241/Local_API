var model = require("../../models/sanpham_model");

exports.listUser = async (req, res, next) => {
  msg = "Danh sach Du Lieu";

  try {
    let list = await model.DlModel.find();
    console.log(list);
    //   return  res.status(200).json({msg: 'lấy địa chỉ thành công', data: list});
    return res.status(200).json(list);
    // Log List
  } catch (error) {
    return res.status(204).json({ msg: "không có dữ liệu" + error.message });
  }

  // res.status(200).json({msg});
};
exports.Dladd = async (req, res, next) => {
  let list = await model.DlModel.find();
  if (req.method === "POST") {
    // Nếu các thông tin nhập hợp lệ, tiến hành tạo một object mới cho model và lưu vào CSDL
    let objSP = new model.DlModel({
      name: req.body.name,
      price: req.body.price,
      title: req.body.title,
    });

    try {
      let new_sp = await objSP.save();
      console.log(new_sp);
      msg = "Thêm mới thành công";
    } catch (error) {
      msg = "Lỗi " + error.message;
      console.log(error);
    }
    return res.status(200).json(list);
  }
};
exports.editDl = async (req, res, next) => {
  let msg = "";
  let idsp = req.params.idsp;
  try {
    let objSP = await model.DlModel.findById(idsp);
    if (!objSP) {
      return res.status(404).json({ message: "Không tìm thấy sản phẩm" });
    }

    if (req.method === "POST") {
      objSP.name = req.body.name;
      objSP.price = req.body.price;
      objSP.title = req.body.title;

      // lưu các thay đổi vào CSDL
      try {
        await objSP.save();
        msg = "Cập nhật thành công";
        console.log(objSP);
      } catch (error) {
        msg = "Lỗi " + error.message;
        console.log(error);
      }
    }

    return res.status(200).json({ message: msg, data: objSP });
  } catch (error) {
    return res.status(500).json({ message: "Lỗi server" });
  }
};
exports.deleteDl = async (req, res, next) => {
  let idsp = req.params.idsp;
  try {
    let objSP = await model.DlModel.findById(idsp);
    if (!objSP) {
      return res.status(404).json({ message: "Không tìm thấy sản phẩm" });
    }

    // xóa dữ liệu từ CSDL
    try {
      await model.DlModel.findByIdAndDelete(idsp);
      return res.status(200).json({ message: "Xóa thành công" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Lỗi server" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Lỗi server" });
  }
};

