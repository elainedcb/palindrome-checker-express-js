import request from "supertest";
import { server } from "./index";

import app from "./index";

afterAll(() => {
  server.close();
});

describe("Test check if can form palindrome app", () => {
  test("if response is expected", async () => {
    const res = await request(app).get("/hello");
    expect(res.body).toEqual({
      data: { anagram: "hello", canFormPalindrome: false },
    });
  });
});
