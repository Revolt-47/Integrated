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

describe("GET /rooms", () => {
  it("should return all rooms", async () => {
    const res = await request(app).get("/rooms");
    expect(res.statusCode).toBe(200);
   // expect(res.body.length).toBeGreaterThan(0);
  });
});



describe("POST /rooms", () => {
  it("should display rooms available at the date", async () => {
    const res = await request(app).post("/rooms").send({
      checkin : '01-01-2023',
      checkout: '02-01-2023',
    });
    expect(res.statusCode).toBe(200);
   // expect(res.body.name).toBe("Jake Paul");
  });
})


describe("POST /rooms", () => {
    it("should display rooms available at the date", async () => {
      const res = await request(app).post("/rooms").send({
        checkin : '05-01-2023',
        checkout: '06-01-2023',
      });
      expect(res.statusCode).toBe(200);
     // expect(res.body.name).toBe("Jake Paul");
    });
  })