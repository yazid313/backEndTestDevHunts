import { userControl, interestControl } from "../models/index.js";

const interestIdValidator = async (req, res, next) => {
  const id = req.params.id;

  try {
    // Gunakan Sequelize untuk mencari user berdasarkan user_id
    const respon = await interestControl.findByPk(id);

    if (!respon) {
      return res.status(401).json({ message: "interest_id Tidak Terdaftar!" });
    }

    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
const userIdValidator = async (req, res, next) => {
  const id = req.body.user_id;

  try {
    // Gunakan Sequelize untuk mencari user berdasarkan user_id
    const respon = await userControl.findByPk(id);

    if (!respon) {
      return res.status(401).json({ message: "user_id Tidak Terdaftar!" });
    }

    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteIdValidator = async (req, res, next) => {
  const id = req.params.id;

  try {
    // Gunakan Sequelize untuk mencari user berdasarkan user_id
    const respon = await interestControl.findByPk(id);

    if (!respon) {
      return res.status(401).json({ message: "interest_id Tidak Terdaftar!" });
    }

    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export { interestIdValidator, userIdValidator, deleteIdValidator };
