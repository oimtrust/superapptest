import LoginPage from "../page/login.page";

describe("Login scenario", () => {
  it("Should success login with valid credentials", async () => {

    await LoginPage.ensureInLoginPage();

    await LoginPage.login("maulanastg", "123456");

    // TODO: Please click "OK" on alert after click login button and HAVE FUN! //
  });
});