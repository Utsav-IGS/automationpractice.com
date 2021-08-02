const LoginPage = require('../pageobjects/login.page');
const CartPage = require('../pageobjects/cart.page');

describe('Buy product', () => {
  before(async () => {
    await browser.maximizeWindow();
  });

  it('Add item to cart', async () => {
    await LoginPage.open();

    await LoginPage.login('a545ea4d5@fgde4d2.com', 'test123');
    await LoginPage.goToHomePage();

    await CartPage.selectTshirt();
    await CartPage.addItemToCart();

    await expect(CartPage.successMessage).toHaveTextContaining(
      'Product successfully added to your shopping cart'
    );

    await CartPage.proceedToCheckout();
    await CartPage.clickPayByBankWire();
    await CartPage.confirmOrder();

    await expect(CartPage.confirmationMessage).toHaveTextContaining('ORDER CONFIRMATION');
    
    await LoginPage.verifyLogout();
    await expect($('#SubmitLogin')).toBeExisting();
  });
});
