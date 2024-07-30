class HomePage {

    get welcomeTitle() {
        return $('//android.view.View[@content-desc="Selamat Datang!"]')
    }

    get searchInput() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.ImageView[3]')
    }

    get invoiceNotFoundText() {
        return $('//android.view.View[@content-desc="Tidak Ditemukan"]');
    }

    get clearSearchButton() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.EditText/android.widget.ImageView[2]')
    }

    get listInvoice() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[7]/android.view.View/android.view.View')
    }

    get detailInvoice() {
        return $('//android.view.View[@content-desc="Detail Pengiriman"]')
    }

    get backToHomepage() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.widget.Button')
    }

    get profile() {
        return $('//android.view.View[@content-desc="M"]')
    }

    get profileTitle() {
        return $('//android.view.View[@content-desc="Profile"]')
    }

    get buttonLogout() {
        return $('//android.widget.ImageView[@content-desc="Keluar"]')
    }

    get buttonLogoutConfirmation() {
        return $('//android.widget.Button[@content-desc="Keluar"]')
    }

    async ensureInHomePage() {
        const welcomeTitle = this.welcomeTitle;
        await expect(welcomeTitle).toBeDisplayed();
    }

    async searchInvoice(keyword) {
        await this.searchInput.click();
        await this.searchInput.setValue(keyword);
        await browser.keys('Enter');
    }

    async checkInvoiceNotFound() {
        const invoiceEmpty = this.invoiceNotFoundText;
        await expect(invoiceEmpty).toBeDisplayed();
    }

    async clickClearOfSearchKeyword() {
        await this.clearSearchButton.click();
    }

    async clickInvoiceDetail() {
        await this.listInvoice.click();
    }

    async ensureInInvoiceDetail() {
        const detail = this.detailInvoice;
        await expect(detail).toBeDisplayed();
    }

    async clickLogoutFromInvoice() {
        await this.backToHomepage.click();
        await this.profile.click();
        await this.ensureInProfilePage();
        await this.buttonLogout.click();
        await this.buttonLogoutConfirmation.click();
    }

    async ensureInProfilePage() {
        const profile = this.profileTitle;
        await expect(profile).toBeDisplayed();
    }
}

export default new HomePage;