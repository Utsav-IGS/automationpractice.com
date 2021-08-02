const SigninPage = require('../pageobjects/signin.page');

describe('Create an account', () => {
  before( async () => {
    await browser.maximizeWindow();
  });

  it('Go to the sign in form', async () => {
    await SigninPage.open();

    let random = Math.floor(Math.random() * 9999);
    let email = `jake_${random}@test.com`;

    await SigninPage.enterEmail(email);
    await expect($('.page-subheading')).toHaveTextContaining('YOUR PERSONAL INFORMATION');

    await SigninPage.selectTitle();
    await SigninPage.enterFullName('Jake', 'Peralta');
    await SigninPage.enterPassword('mySecretPassword');
    await SigninPage.enterBirthDate(22, 4, 2000);
    await SigninPage.enterAdress('Jake', 'Peralta', 'Fake address 35');
    await SigninPage.enterLocation('Austin', 43, '58974');
    await SigninPage.enterMobilePhone('(55) 456-582-2154');
    await SigninPage.setAlias('Texas Address');
    await SigninPage.clickRegisterButton();

    await expect($('.info-account')).toHaveTextContaining('Welcome to your account.');
  });
});
