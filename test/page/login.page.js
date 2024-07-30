class LoginPage {
    get buttonLoginHomepage() {
        return $('//android.widget.Button[@content-desc="Masuk Sekarang"]')
    }

    get approveLocation() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.Button[2]')
    }

    get approvePicture() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.Button[2]')
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
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.widget.ImageView')
    }
  
    async clickWelcomeButton() {
        await this.buttonLoginHomepage.click()
        await this.approveLocation.click()
        await this.approvePicture.click()
    }

    async ensureInLoginPage() {
        const loginScreen = this.welcomePage;
    
        await expect(loginScreen).toBeDisplayed();
    }
  
    async loginAction(email, password) {
        await this.inputUsername.click();
        await this.inputUsername.setValue(email);
        await this.inputPassword.click();
        await this.inputPassword.setValue(password);
        await this.buttonLogin.click();
    }
  }
  
  export default new LoginPage();