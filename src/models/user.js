import { Sequelize, DataTypes } from "sequelize";
import { encrypt } from "../validators/passwordValidation.js";

const user = {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { args: true, msg: "tidak boleh null" },
      notNull: { args: true, msg: "tidak boleh null" },
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: { args: true, msg: "tidak boleh null" },
      notNull: { args: true, msg: "tidak boleh null" },
      isEmail: { args: true, msg: "email salah" },
    },

    set(value) {
      this.setDataValue("email", value.toLowerCase());
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { args: true, msg: "tidak boleh null" },
      notNull: { args: true, msg: "tidak boleh null" },
    },

    set(value) {
      this.setDataValue("password", encrypt(value, 10));
    },
  },
};
export default user;
