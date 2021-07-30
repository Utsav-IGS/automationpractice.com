const LoginPage = require('../pageobjects/login.page');
const CartPage = require('../pageobjects/cart.page');

describe('Buy product', () => {
  before(() => {
    browser.maximizeWindow();
    require('expect-webdriverio');
  });

  it('Add item to cart', () => {
    LoginPage.open();

    LoginPage.login('a545ea4d5@fgde4d2.com', 'test123');
    LoginPage.goToHomePage();

    CartPage.selectTshirt();
    CartPage.addItemToCart();

    expect(CartPage.successMessage).toHaveTextContaining(
      'Product successfully added to your shopping cart'
    );

    CartPage.proceedToCheckout();
    CartPage.clickPayByBankWire();
    CartPage.confirmOrder();

    expect(CartPage.confirmationMessage).toHaveTextContaining('ORDER CONFIRMATION');
    
    LoginPage.verifyLogout();
    expect($('#SubmitLogin')).toBeExisting();
  });
});
