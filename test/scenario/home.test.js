import LoginPage from "../page/login.page";
import HomePage from "../page/home.page";

describe("Search Invoice scenario", () => {
    beforeEach(() => {
        LoginPage.clickWelcomeButton();
        LoginPage.ensureInLoginPage();
        LoginPage.loginAction("maulanastg", "123456");
        HomePage.ensureInHomePage();
    });

    it('Verify the invoice is empty when search keyword is invalid', async () => {
        HomePage.searchInvoice("T2407JKH");
        HomePage.checkInvoiceNotFound();
    });
    
    it('Successfully click invoice going to detail', async () => {
        HomePage.searchInvoice("T240724-67034");
        HomePage.checkInvoiceNotFound();
        HomePage.clickClearOfSearchKeyword();
        HomePage.searchInvoice("T240724-670");
        HomePage.clickInvoiceDetail();
        HomePage.ensureInInvoiceDetail();
    });
    
    it('Successfully logout from invoice detail', async () => {
        HomePage.searchInvoice("T240724-67034");
        HomePage.checkInvoiceNotFound();
        HomePage.clickClearOfSearchKeyword();
        HomePage.searchInvoice("T240724-670");
        HomePage.clickInvoiceDetail();
        HomePage.ensureInInvoiceDetail();
        HomePage.clickLogoutFromInvoice();
    });
});