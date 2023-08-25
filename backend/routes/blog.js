import express from "express";
import {blog, delBlog, getBlog} from "../controllers/blog.js";

const router = express.Router()

router.post("/blog", blog )
router.get("/getBlog", getBlog )
router.delete('/delBlog/:blogId', delBlog)
export default router;