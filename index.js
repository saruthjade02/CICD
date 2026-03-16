const request = require('supertest');
const server = require('./index'); // ดึง server มาจาก index.js

describe('GET /', () => {
  it('should return 200 OK and Hello World message', async () => {
    const res = await request(server).get('/'); // ส่ง server เข้าไป
    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain('Hello World');
  });

  // สำคัญมาก: ปิด server หลัง test เสร็จเพื่อไม่ให้เกิด Open Handles
  afterAll((done) => {
    server.close(done);
  });
});