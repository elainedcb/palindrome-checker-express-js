import request from "supertest";
import { server } from "../../index";

import app from "../../index";

afterAll(() => {
  server.close();
});

describe("Test check if can form palindrome app", () => {
  test("app - if response is expected", async () => {
    const res = await request(app).get("/hello");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      data: { anagram: "hello", canFormPalindrome: false },
    });
  });

  test("app - will throw error if no parameter is added in the route", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(404);
  });
});
