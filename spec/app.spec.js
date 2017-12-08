var Request = require("request");

describe("Server", () => {
    let server;
    let firstDebtId;
    beforeAll(() => {
        server = require("../app");
    });
    afterAll(() => {
    });
    describe("POST /API/debts", () => {
        let data = {};
       
        beforeAll((done) => {
            Request(
                {
                    method: 'POST'
                    , uri: 'http://localhost:3000/API/debts'
                    , json: true
                    , body: { title: "Nieuwe schuld", description: "Beschrijving nieuwe schuld", price: -38 }
                }, (error, response, body) => {
                    data.status = response.statusCode;
                    data.body = body;
                    done();
                }).auth(null, null, true, process.env.TEST_VALID_TOKEN);
        });
        it("status 200", () => {
            expect(data.status).toBe(200);
        });
        it("check body", () => {
            expect(data.body.name).toBe("Nieuwe schuld");
            expect(data.body.description).toBe("Beschrijving nieuwe schuld");
            expect(data.body.price).toBe(-38);
            expect(data.body._id).toBeDefined();
            firstDebtId = data.body._id;
        });
    });
    describe("POST /API/recipes/ingredients", () => {
        let data = {};
        // add a new recipe to our database
        beforeAll((done) => {
            Request(
                {
                    method: 'POST'
                    , uri: `http://localhost:3000/API/recipe/${firstDebtId}/ingredients`
                    , json: true
                    , body: {
                        name: "salt",
                        amount: "4",
                        unit: "Gram"
                    }
                }, (error, response, body) => {
                    data.status = response.statusCode;
                    data.body = body;
                    done();
                }).auth(null, null, true, process.env.TEST_VALID_TOKEN);
        });
        it("status 200", () => {
            expect(data.status).toBe(200);
        });
        it("check body", () => {
            expect(data.body.name).toBe("salt");
            expect(data.body.amount).toBe(4);
            expect(data.body.unit).toBe("Gram");
            expect(data.body._id).toBeDefined();

        });
    });
    describe("GET /API/debts", () => {
        var data = {};
        beforeAll((done) => {
            Request.get("http://localhost:3000/API/debts", (error, response, body) => {
                data.status = response.statusCode;
                data.body = JSON.parse(body);
                done();
            }).auth(null, null, true, process.env.TEST_VALID_TOKEN);
        });
        it("Status 200", () => {
            expect(data.status).toBe(200);
        });
        it("Body", () => {
            expect(data.body.length).toBe(1);
            let debt = data.body[0];
            expect(debt.name).toBe("Nieuwe schuld");
            expect(debt.description).toBe("Beschrijving nieuwe schuld");
            expect(debt.price).toBe(-38);
        });
    });

    describe("GET /API/debts", () => {
        var data = {};
        beforeAll((done) => {
            Request.get("http://localhost:3000/API/debts", (error, response, body) => {
                data.status = response.statusCode;
                data.body = JSON.parse(body);
                done();
            }).auth(null, null, true, process.env.TEST_VALID_TOKEN);
        });
        it("Status 200", () => {
            expect(data.status).toBe(200);
        });
        it("Body", () => {
            expect(data.body.length).toBe(0);
        });
    });
});
