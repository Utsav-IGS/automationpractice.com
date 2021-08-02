module.exports = class Page {
    async open (path) {
        return await browser.url(`http://automationpractice.com/${path}`)
    }
}
        