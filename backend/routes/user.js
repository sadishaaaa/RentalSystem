import express from "express";
import {  delUser, getUser } from "../controllers/user.js";

const router = express.Router()

router.get("/getUser", getUser )
router.delete("/delUser/:customer_id", delUser)

export default router;