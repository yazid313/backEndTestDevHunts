import { Router } from "express";
import {
  getInterestAll,
  getInterestAllById,
  createInterest,
  updateInterest,
  deleteInterestById,
  getInterestAllByUserId,
} from "../controllers/interestController.js";

import { verifikasi2 } from "../middleware/verifikasi.js";
import {
  interestIdValidator,
  userIdValidator,
  deleteIdValidator,
} from "../validators/interestValidator.js";

const router = Router();

router.get("/getAllInterest", getInterestAll);
router.get("/getInterestById/:id", getInterestAllById);
router.get("/getInterestByUserId/:id", getInterestAllByUserId);
router.post("/createInterest", verifikasi2, createInterest);
router.patch(
  "/updateInterest/:id",
  verifikasi2,
  interestIdValidator,
  updateInterest
);
router.delete(
  "/deleteInterest/:id",
  verifikasi2,
  deleteIdValidator,
  deleteInterestById
);

export default router;
