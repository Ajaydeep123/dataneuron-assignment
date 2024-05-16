import { Router } from "express";
import { addData, updateData, getCount } from "../controllers/component.controller.js";
const router = Router();

router.route("/addData")
    .post(addData);

router.route("/updateData")
    .patch(updateData);

router.route("/getCount")
    .get(getCount);

export default router;
