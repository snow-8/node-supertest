import request from "supertest";
import { app } from '../../app.js';

describe('Login routes',  () => {

    it("Upon hitting default route it should return an status code of 200", async () => {
        await request(app)
            .get('/')
            .expect(200)
    })
    
    test('Expect successful login', async () => {
        await request(app)
                .get('/login')
                .expect(200)
    })

    
})