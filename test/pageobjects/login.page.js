const Page = require('./page');

//sub page containing specific selectors and methods for a specific page
class LoginPage extends Page {
//define selectors using getter method
  get inputUsername () {return $('#email');}
  get inputPassword () {return $('#passwd');}
  get btnSubmit () {return $('#SubmitLogin');}
  get btnHome () {return $('[title="Home"]')}
  get logoutButton() {return $(".logout");}


  login(email, password) {
    this.inputUsername.setValue(email);
    this.inputPassword.setValue(password);
    this.btnSubmit.click();
  }

  goToHomePage() {
    this.btnHome.click()
  }

  verifyLogout() {
    this.logoutButton.click();
  }

//overwrite specifc options to adapt it to page object
  open() {
    return super.open('index.php?controller=authentication&back=my-account');
  }
}

module.exports = new LoginPage();