describe('Login Feature', () => {
    it("Success Login", async () =>  {
        const fieldUsername = await $('~test-Username');
        const fieldPassword = await $('~test-Password');
        const btnSubmit = await $('~test-LOGIN');
        const textProductPage = await $('~test-Cart drop zone');

        await fieldUsername.setValue('standard_user');
        await fieldPassword.setValue('secret_sauce');
        await btnSubmit.click();
        await expect(textProductPage).toBeDisplayed();
    });
})
