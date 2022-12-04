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

describe("POST /signup", () => {
    it("should create a product", async () => {
      const res = await request(app).post("/createcustomer").send({
        name: 'Jake Paul',
        email : 'vodka452@nu.edu.pk',
        phone : '+67567889',
        password : 'pakistanteamisafraud',
      });
      expect(res.statusCode).toBe(400);
    });
  })