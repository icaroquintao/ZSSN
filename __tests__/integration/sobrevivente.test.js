const request = require("supertest");

const app = require("../../src/app");
const truncate = require("../utils/truncate");
const { Sobrevivente } = require('../../src/app/models');

describe("Register", () => {
    beforeEach(async() => {
        await truncate();
    });
    it("should create a valid survivor", async() => {
        const sobrevivente = await Sobrevivente.create({
            name: 'Icaro',
            idade: 24,
            sexo: 'masc',
            latitude: '30°',
            longitude: '60°',
            reports: '0'
        });

        //console.log(sobrevivente);
        const response = await request(app)
            .post("/criar")
            .send({
                name: sobrevivente.name,
                idade: sobrevivente.idade,
                sexo: sobrevivente.sexo,
                latitude: sobrevivente.latitude,
                longitude: sobrevivente.longitude,
                reports: sobrevivente.reports
            });

        expect(response.status).toBe(200);
    });
});