import { Router } from "express";
import { addData, updateData, getCount } from "../controllers/component.controller.js";
const router = Router();

router.route("/")
    .post(addData)
    .patch(updateData)
    .get(getCount)

export default router;