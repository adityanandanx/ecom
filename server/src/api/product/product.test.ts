import request from "supertest";
import app from "../../app";
import { Product } from "./product.model";

beforeAll(async () => {
  await Product.deleteMany();
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
