import { DataTypes } from "sequelize";

const about = {
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: { args: true, msg: "tidak boleh null" },
      notNull: { args: true, msg: "tidak boleh null" },
    },
  },
  display_name: DataTypes.STRING,
  gender: DataTypes.STRING,
  brithday: DataTypes.DATE,
  horoscope: DataTypes.STRING,
  zodiac: DataTypes.STRING,
  height: DataTypes.INTEGER,
  weight: DataTypes.INTEGER,
  photo: DataTypes.STRING,
};

export default about;
