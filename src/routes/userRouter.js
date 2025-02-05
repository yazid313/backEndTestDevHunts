import { Router } from "express";
import {
  getUserAll,
  createUser,
  updateUser,
  deleteUserById,
  getUserAllById,
} from "../controllers/userController.js";
import {
  createUsernameValidator,
  createEmailValidator,
  userIdValidator,
  updateUsernameValidator,
  updateEmailValidator,
  deleteIdValidator,
} from "../validators/userValidator.js";
import { verifikasi2 } from "../middleware/verifikasi.js";

const router = Router();

router.get("/getAllProfile", getUserAll);
router.get("/getProfileById/:id", getUserAllById);
router.post(
  "/createProfile",
  createUsernameValidator,
  createEmailValidator,
  createUser
);
router.patch(
  "/updateProfile/:id",
  verifikasi2,
  userIdValidator,
  updateUsernameValidator,
  updateEmailValidator,
  updateUser
);
router.delete(
  "/deleteProfile/:id",
  verifikasi2,
  deleteIdValidator,
  deleteUserById
);

export default router;
