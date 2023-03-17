const server = require('../server.js')
const session = require('supertest');
const agent = session(server);

describe("Test de RUTAS", () => {
    describe("Get rickandmorty/{id}", () => {
        it("Responde con status: 200", async () => {
            expect(200);
        });
        it("Responde un objeto con las propiedades: id, name, gender, species, image, status, origin", 
        async () => {
            const response = await agent.get("/rickandmorty/onsearch/1");
            expect(response.body).toHaveProperty("id");
            expect(response.body).toHaveProperty("name");
            expect(response.body).toHaveProperty("gender");
            expect(response.body).toHaveProperty("species");
           expect(response.body).toHaveProperty("imaje");
           expect(response.body).toHaveProperty("status");
           expect(response.body).toHaveProperty("imaje");
        })
        it("Si hay un error responde con un status 500", async () => {
            const response = await agent.get("/rickandmorty/onsearch/1000")
            return expect(response.statusCode).toBe(500);
        });
    });
});

describe("Get/detail/{id}", ()=> {
it("Responde con un status 200", async ()=> {
    agent.get("/rickandmorty/detail/1").expect(200)
})
})