import express from "express";
import { createRent , delRent, getRent} from "../controllers/rent.js";

const router = express.Router()
router.get("/getRent", getRent )
router.post("/createRent", createRent)
router.delete('/delRent/:Order_id', delRent)

export default router;