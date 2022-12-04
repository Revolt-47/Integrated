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

 

describe("POST /bookings", () => {
  it("should display all the booked rooms", async () => {
    const res = await request(app).post("/booking").send({
      email : 'amirdaniyal47@gmail.com'
    });
    expect(res.statusCode).toBe(200);
   // expect(res.body.name).toBe("Jake Paul");
  });
});

  describe("POST /newbookings", () => {
    it("should book the new room ", async () => {
      const res = await request(app).post("/newbooking").send({
        room_no : '1',
        email : 'amirdaniyal47@gmail.com',
        checkin : '01-01-2023',
        checkout : '01-02-2023'
      });
      expect(res.statusCode).toBe(200);
     // expect(res.body.name).toBe("Jake Paul");
    });
});