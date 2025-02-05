import db from "../db/config/db.js";
import user from "./user.js";
import token from "./akses_token.js";
import about from "./about.js";
import interest from "./interest.js";

const userControl = db.define("user", user, {
  tableName: "users",
});
const tokenControl = db.define("token", token, {
  tableName: "akses_tokens",
});
const aboutControl = db.define("about", about, {
  tableName: "abouts",
});
const interestControl = db.define("interest", interest, {
  tableName: "interests",
});

//relasi token
userControl.hasMany(tokenControl, {
  foreignKey: "user_id",
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
});
tokenControl.belongsTo(userControl, {
  foreignKey: "user_id",
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
});

//relasi about
userControl.hasMany(aboutControl, {
  foreignKey: "user_id",
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
});
aboutControl.belongsTo(userControl, {
  foreignKey: "user_id",
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
});

//relasi interest
userControl.hasMany(interestControl, {
  foreignKey: "user_id",
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
});
interestControl.belongsTo(userControl, {
  foreignKey: "user_id",
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
});

db.sync();

export { userControl, tokenControl, aboutControl, interestControl };
