import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

app.use("/api/products", productRoutes);

app.listen(4000, () => {
  connectDB();
  console.log(`Server is running on port: ${port}`);
});