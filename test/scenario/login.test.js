import LoginPage from "../page/login.page";
import HomePage from "../page/home.page";

describe("Login scenario", () => {
  it("Should success login with valid credentials", async () => {

    await LoginPage.clickWelcomeButton();
    await LoginPage.ensureInLoginPage();
    await LoginPage.loginAction("maulanastg", "123456");
    await HomePage.ensureInHomePage();
  });
});