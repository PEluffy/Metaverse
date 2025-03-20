const BACKEND_URL = "http://localhost:3000";

describe("Signup", () => {
  test("user is able to sign up", async () => {
    let data = {
      username: `Hari${math.random()}`,
      password: "dsfa5646",
    };
    const response = await axios.post(
      `${BACKEND_URL}/api/v1/user/signup`,
      data
    );
    expect(response.statusCode).toBe;
  });
});
