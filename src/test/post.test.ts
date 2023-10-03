import request from "supertest";
import app from "../index";

describe("test create route", () => {
  test("Should have key status, message and data when created", async () => {
    const res = await request(app).post("/api/post").send({
      title: "New post",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      category_id: "64e99920e2dad5b1c4abcb90",
      created_at: Date.now(),
    });
    expect(res.body).toHaveProperty("status");
    expect(res.body).toHaveProperty("message");
    expect(res.body).toHaveProperty("data");
  });
});
