const Page = require('./page');

//sub page containing specific selectors and methods for a specific page
class LoginPage extends Page {
//define selectors using getter method
  get inputUsername () {return $('#email');}
  get inputPassword () {return $('#passwd');}
  get btnSubmit () {return $('#SubmitLogin');}
  get btnHome () {return $('[title="Home"]')}
  get logoutButton() {return $(".logout");}


  async login(email, password) {
    await this.inputUsername.setValue(email);
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
  }

  async goToHomePage() {
    await this.btnHome.click()
  }

  async verifyLogout() {
    await this.logoutButton.click();
  }

//overwrite specifc options to adapt it to page object
  async open() {
    return await super.open('index.php?controller=authentication&back=my-account');
  }
}

module.exports = new LoginPage();