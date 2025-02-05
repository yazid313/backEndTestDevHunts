import { DataTypes } from "sequelize";

const interest = {
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: { args: true, msg: "tidak boleh null" },
      notNull: { args: true, msg: "tidak boleh null" },
    },
  },
  my_interest: DataTypes.STRING,
};
export default interest;
