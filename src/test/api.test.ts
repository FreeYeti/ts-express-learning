import supertest from "supertest";

import app from "../app";

const request: supertest.SuperTest<supertest.Test> = supertest(app);

// Apis tests below
test("GET /ping", async () => {
  const response = await request.get("/ping").expect(200);
  expect(response.body.message).toBe("pong");
});
