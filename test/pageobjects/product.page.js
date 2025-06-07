const { $ } = require('@wdio/globals')

class ProductPage {
    get producPageTitle() {
        return $('~test-Cart drop zone');
    }

    async assertIsProductPage() {
        await expect(this.producPageTitle).toBeDisplayed();
    }
}

module.exports = new ProductPage();
