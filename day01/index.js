// import http from "http"
// --harmony
import http from "http";
const server = http.createServer((request, response) => {
    const name = "Quyen"
    if (request.url == "/") {
        response.setHeader('Content-Type', 'text/html');
        response.end(`
        <form action="/about" method="POST">
            <input type="text" name="name" class="name" />
            <button type="submit">Nhap</button>
        </form>
    `)
    }
    if (request.url == "/about") {
        response.end(`<h1>Hello ${name}</h1>`)
    }
})
server.listen(8000, () => {
    console.log("Upload thanh cong");
})