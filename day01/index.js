// import http from "http"
// --harmony
// import http from "http";
// const server = http.createServer((request, response) => {
//     const name = "Quyen";
//     if (request.url == "/") {
//         response.setHeader('Content-Type', 'text/html');
//         response.end(`
//         <form action="/about" method="POST">
//             <input type="text" name="name" class="name" />
//             <button type="submit">Nhap</button>
//         </form>
//     `);
//     }
//     if (request.url == "/about") {
//         response.end(`<h1>Hello ${name}</h1>`);
//     }
// })
// server.listen(8000, () => {
//     console.log("Upload thanh cong");
// })

const products = [
    { id: 1, name: "Cong Quyen" },
    { id: 2, name: "Cong Toan" }
]

import express from "express";
const app = express();


app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>")
})

app.use(express.json());

app.get("/api/products", (req, res) => {
    res.json(products)
})

app.get("/api/products/:id", (req, res) => {
    const productId = products.find((product) => product.id == req.params.id);
    res.status(200).json({
        message: "Found Product",
        data: productId
    })
})

app.post("/api/products", (req, res) => {
    res.status(400).json({
        message: "Post success",
        data: req.body
    })
})

app.put("/api/products/:id", (req, res) => {
    const newProduct = products.map((product) => (product.id == req.params.id ? req.body : product));
    res.status(500).json({
        message: "Update success",
        data: newProduct
    })
})

app.delete("/api/products/:id", (req, res) => {
    const RemoveProduct = products.filter((product) => product.id != req.params.id);
    res.status(501).json({
        message: "Delete success",
        data: RemoveProduct
    })
})

app.listen(8080, () => {
    console.log("Server is running 8080");
})


