// import http from "http"
// --harmony
import express from "express";
import routerProduct from "./router/product.js";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", routerProduct)

app.listen(8080, () => {
    console.log("Server is running 8080");
})

export const viteNodeApp = app;

// npm i vite vite-plugin-node -D
// tạo file vite.config.js
