import { Router } from "express";
import {
  getAboutAll,
  getAboutAllById,
  createAbout,
  updateAbout,
  deleteAboutById,
  getAboutAndUsersById,
} from "../controllers/aboutController.js";
import upload from "../validators/imageValidation.js";
import { verifikasi2 } from "../middleware/verifikasi.js";
import {
  userIdValidator,
  updateImageValidator,
  deleteImageValidator,
  aboutIdValidator,
  deleteIdValidator,
} from "../validators/aboutValidator.js";

const router = Router();

router.get("/getAllAbout", getAboutAll);
router.get("/getAboutById/:id", getAboutAllById);
router.get("/getAboutAndUser/:id", getAboutAndUsersById);
router.post(
  "/createAbout",
  upload.single("photo"),
  verifikasi2,
  userIdValidator,
  createAbout
);
router.patch(
  "/updateAbout/:id",
  upload.single("photo"),
  verifikasi2,
  aboutIdValidator,
  updateImageValidator,
  updateAbout
);
router.delete(
  "/deleteAbout/:id",
  verifikasi2,
  deleteIdValidator,
  deleteImageValidator,
  deleteAboutById
);

export default router;
