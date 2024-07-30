class LoginPage {
    //
    // Locators
    //

    get buttonLoginHomepage() {
        return $("Masuk Sekarang")
    }

    get approveLocation() {
        return $("id=resource-id/permission_allow_button")
    }

    get approvePicture() {
        return $("id=resource-id/permission_allow_button")
    }

    get inputUsername() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View[3]/android.widget.EditText[1]')
    }

    get inputPassword() {
        return $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View[3]/android.widget.EditText[2]")
    }

    get buttonLogin() {
        return $('//android.widget.Button[@content-desc="Login"]')
    }

    get welcomePage() {
        return $('//android.view.View[@content-desc="Halo, Selamat Datang! 👋"]')
    }
  
    //
    // Action methods
    //
    async ensureInLoginPage() {
      const loginScreen = this.welcomePage;
  
      await expect(loginScreen).toBeDisplayed();
    }
  
    async login(email, password) {
      await this.inputUsername.setValue(email);
      await this.inputPassword.setValue(password);
      await this.buttonLogin.click();
    }
  }
  
  export default new LoginPage();