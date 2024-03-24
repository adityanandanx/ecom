import request from "supertest";
import app from "./app";

describe("app", () => {
  it("responds with not found error", (done) => {
    request(app)
      .get("/idk-what-towrite-here")
      .set("Accept", "application/json")
      // .expect("Content-Type", /json/)
      .expect(404, done);
  });
});
