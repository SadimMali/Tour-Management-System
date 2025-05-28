import express from "express";
import authRoutes from "./routes/auth.route.js";

const app = express();
const port = process.env.PORT;


app.use("/api/auth", authRoutes);
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
    stack: err.stack,
  });
});

app.listen(port, () => {
  console.log(port);
  console.log(`Server running at port ${port}`);
});
