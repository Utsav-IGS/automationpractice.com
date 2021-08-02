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

    async selectTshirt() {
        await this.tshirt[0].click()
    }

    async addItemToCart() {
        // this.iframe.waitForDisplayed()
        // browser.switchToFrame(this.iframe)
        await this.btnAddToCart.scrollIntoView()
        await this.btnAddToCart.click()
    }

    async proceedToCheckout() {
        await this.btnCheckout[0].scrollIntoView()
        await this.btnCheckout[0].click()
        await (await $('#cart_title')).waitForDisplayed()
        await this.btnCheckout[1].scrollIntoView()
        await this.btnCheckout[1].click()
        await (await $('[name="processAddress"]')).waitForDisplayed()
        await (await $('[name="processAddress"]')).click()
        await this.termsOfService.click()
        await (await $('[name="processCarrier"]')).waitForDisplayed()
        await (await $('[name="processCarrier"]')).click()
    }

    async clickPayByBankWire() {
        await this.linkPayByBankWire.click()
    }

    async confirmOrder() {
        await this.btnConfirmOrder.click()
    }
 

}

module.exports = new CartPage();