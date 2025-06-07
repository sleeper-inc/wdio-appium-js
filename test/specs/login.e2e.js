const loginPage = require('../pageobjects/login.page');
const productPage = require('../pageobjects/product.page');

describe('Login Feature', () => {
    it("Success Login", async () =>  {
        await loginPage.login('standard_user', 'secret_sauce');
        await productPage.assertIsProductPage();
    });
})
