const SigninPage = require('../pageobjects/signin.page');

describe('Create an account', () => {
  before(() => {
    browser.maximizeWindow();
    require('expect-webdriverio');
  });

  it('Go to the sign in form', () => {
    SigninPage.open();

    let random = Math.floor(Math.random() * 9999);
    let email = `jake_${random}@test.com`;

    SigninPage.enterEmail(email);
    expect($('.page-subheading')).toHaveTextContaining('YOUR PERSONAL INFORMATION');

    SigninPage.selectTitle();
    SigninPage.enterFullName('Jake', 'Peralta');
    SigninPage.enterPassword('mySecretPassword');
    SigninPage.enterBirthDate(22, 4, 2000);
    SigninPage.enterAdress('Jake', 'Peralta', 'Fake address 35');
    SigninPage.enterLocation('Austin', 43, '58974');
    SigninPage.enterMobilePhone('(55) 456-582-2154');
    SigninPage.setAlias('Texas Address');
    SigninPage.clickRegisterButton();

    expect($('.info-account')).toHaveTextContaining('Welcome to your account.');
  });
});
