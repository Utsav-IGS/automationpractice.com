class CartPage {
    get tshirt () {return $$('div.product-container')}
    get btnAddToCart () {return $('#add_to_cart')}
    get successMessage () {return $('[class="layer_cart_product col-xs-12 col-md-6"]')}
    get iframe () {return $('.fancybox-iframe')}
    get btnCheckout () {return $$('[title="Proceed to checkout"]')}
    get termsOfService () {return $('#cgv')}
    get linkPayByBankWire () {return $('.bankwire')}
    get btnConfirmOrder () {return $('button[type="submit"][class="button btn btn-default button-medium"]')}
    get confirmationMessage () {return $('.page-heading')}

    selectTshirt() {
        this.tshirt[0].click()
    }

    addItemToCart() {
        // this.iframe.waitForDisplayed()
        // browser.switchToFrame(this.iframe)
        this.btnAddToCart.scrollIntoView()
        this.btnAddToCart.click()
    }

    proceedToCheckout() {
        this.btnCheckout[0].scrollIntoView()
        this.btnCheckout[0].click()
        $('#cart_title').waitForDisplayed()
        this.btnCheckout[1].scrollIntoView()
        this.btnCheckout[1].click()
        $('[name="processAddress"]').waitForDisplayed()
        $('[name="processAddress"]').click()
        this.termsOfService.click()
        $('[name="processCarrier"]').waitForDisplayed()
        $('[name="processCarrier"]').click()
    }

    clickPayByBankWire() {
        this.linkPayByBankWire.click()
    }

    confirmOrder() {
        this.btnConfirmOrder.click()
    }
 

}

module.exports = new CartPage();