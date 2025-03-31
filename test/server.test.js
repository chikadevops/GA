const request = require('supertest');
const app = require('../index'); // Import the app, not the server

describe('GET /', () => {
    it('should return Hello World!', async () => {
        const res = await request(app).get('/'); // No need to start a server
        expect(res.statusCode).toBe(200);
        expect(res.text).toBe('Hello World!');
    });
});
