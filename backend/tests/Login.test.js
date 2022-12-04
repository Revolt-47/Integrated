const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../index");

require("dotenv").config();

beforeEach(async () => {
  await mongoose.connect('mongodb://localhost:27017/myhotel');
});

/* Closing database connection after each test. */
afterEach(async () => {
  await mongoose.connection.close();
});

describe("GET /customers", () => {
  it("should return all customers", async () => {
    const res = await request(app).get("/customers");
    expect(res.statusCode).toBe(200);
   // expect(res.body.length).toBeGreaterThan(0);
  });
});



describe("POST /login", () => {
  it("should verify customer", async () => {
    const res = await request(app).post("/customers").send({
      email : 'vodka452@nu.edu.pk',
      password : 'pakistanteamisafraud',
    });
    expect(res.statusCode).toBe(200);
   // expect(res.body.name).toBe("Jake Paul");
  });
})

describe("POST /login", () => {
  it("should verify customer", async () => {
    const res = await request(app).post("/customers").send({
      email : 'vodka111@nu.edu.pk',
      password : 'pakistan',
    });
    expect(res.statusCode).toBe(200);
    expect(res.body).toStrictEqual({});
  });
})