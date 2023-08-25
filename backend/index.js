import express from "express";
import { db } from "./connect.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import productRoutes from "./routes/product.js";
import rentRoutes from "./routes/rent.js";
import cors from "cors";
import contactRoutes from "./routes/contact.js";
import cookieParser from "cookie-parser";
import blogRoutes from "./routes/blog.js";

import checkoutRoutes from "./routes/checkout.js";

const app = express();

//middlewares
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(express.json());
app.use(cors({
  origin: "http://localhost:3000",
}));
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/user", userRoutes);
app.use("/api/product", productRoutes);
app.use("/api/getProduct", productRoutes);
app.use("/api/getblog", blogRoutes);
app.use("/api/rent", rentRoutes)
app.use("/api/blog", blogRoutes);
app.use("/api/delBlog",blogRoutes)
app.use("/api/delRent",rentRoutes)
app.use("/api/delUser",userRoutes)
app.use("/api/delProduct",productRoutes)
// app.use("/api/checkout", checkoutRoutes);

app.listen(5000, () => console.log("Server started on port 5000"));
