import express from "express";
import {contact, delContact} from "../controllers/contact.js";
import {getContact} from "../controllers/contact.js"

const router = express.Router()

router.post("/contact", contact )
router.get("/getContact", getContact)
router.delete('/delContact/:contact_id', delContact)

export default router;