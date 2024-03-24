import request from "supertest";
import app from "../../app";
import seedDb from "../../helpers/seed/seedDb";

beforeAll(async () => {
  await seedDb();
});

let id: number | null = null;
describe("POST /api/product", () => {
  it("responds with a new todo", async () =>
    request(app)
      .post("/api/product")
      .set("Accept", "application/json")
      .send({
        title: "test product 1",
        description: "test description",
        price: 2.0,
      })
      .expect("Content-Type", /json/)
      .expect(200)
      .then((res) => {
        expect(res.body).toHaveProperty("id");
        id = res.body.id;
      }));
});

describe("POST /api/product", () => {
  it("responds with a bad request error", async () =>
    request(app)
      .post("/api/product")
      .set("Accept", "application/json")
      .send({
        title: 123,
        description: "test description",
        price: "helso",
      })
      .expect("Content-Type", /json/)
      .expect(400));
});

describe("GET /api/product/:id", () => {
  it(`responds with details of todo with id ${id}`, async () =>
    request(app)
      .get(`/api/product/${id}`)
      .set("Accept", "application/json")
      .expect(200)
      .then((res) => {
        expect(res.body).toHaveProperty("id");
        expect(res.body.id).toEqual(id);
      }));
});

describe("GET /api/product/:id", () => {
  it(`responds with not found error`, async () =>
    request(app)
      .get(`/api/product/-1`)
      .set("Accept", "application/json")
      .expect(404));
});

describe("GET /api/product", () => {
  it("responds with an array of all products", async () =>
    request(app)
      .get("/api/product")
      .set("Accept", "application/json")
      .expect(200)
      .then((res) => {
        expect(res.body).toHaveProperty("length");
      }));
});

describe("UPDATE /api/product/:id", () => {
  it(`updates product with id ${id} and returns it`, async () =>
    request(app)
      .put(`/api/product/${id}`)
      .set("Accept", "application/json")
      .send({ title: "New title" })
      .expect(200)
      .then((res) => {
        expect(res.body).toHaveProperty("id");
        expect(res.body.id).toEqual(id);
        expect(res.body).toHaveProperty("title");
        expect(res.body.title).toEqual("New title");
      }));
});

describe("UPDATE /api/product/:id", () => {
  it(`responds with not found error`, async () =>
    request(app)
      .put(`/api/product/-1`)
      .set("Accept", "application/json")
      .send({ title: "New title" })
      .expect(404));
});

describe("UPDATE /api/product/:id", () => {
  it(`responds with bad request error`, async () =>
    request(app)
      .put(`/api/product/${id}`)
      .set("Accept", "application/json")
      .send({ title: 123 })
      .expect(400));
});

describe("DELETE /api/product/:id", () => {
  it(`deletes product with id ${id} and returns it`, async () =>
    request(app)
      .delete(`/api/product/${id}`)
      .set("Accept", "application/json")
      .expect(200)
      .then((res) => {
        expect(res.body).toHaveProperty("id");
        expect(res.body.id).toEqual(id);
      }));
});

describe("DELETE /api/product/:id", () => {
  it(`deletes product with id ${id} and returns it`, async () =>
    request(app)
      .delete(`/api/product/-1`)
      .set("Accept", "application/json")
      .expect(404));
});
