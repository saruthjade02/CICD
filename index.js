const http = require('http'); // หรือ express ตามที่คุณใช้

// สมมติว่านี่คือ logic เดิมของคุณ
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World');
});

const port = 3000;

// --- แก้ไขตรงนี้ ---
// ถ้าไม่ได้รันผ่าน Test (เช่นรันผ่าน npm start หรือ node index.js) ให้ listen ตามปกติ
if (require.main === module) {
    server.listen(port, () => {
        console.log(`Server running at port ${port}`);
    });
}

module.exports = server; // ต้อง export server ออกไปให้ test ใช้