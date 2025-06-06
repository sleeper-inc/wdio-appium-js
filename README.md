# WDIO Appium

## Test Run
![Demo](docs/run-test.gif)

## Initiate wdio with appium for Android Testing

```bash
npm init -y
npm init wdio

===============================
🤖 WDIO Configuration Wizard 🧙
===============================

✔ A project named "wdio-appium" was detected at "/Users/fransiskusandikasetiawan/Documents/mywork/rnd/wdio-appium", correct? yes
✔ What type of testing would you like to do? E2E Testing - of Web or Mobile Applications
✔ Where is your automation backend located? On my local machine
✔ Which environment you would like to automate? Mobile - native, hybrid and mobile web apps, on Android or iOS
✔ Which mobile environment you'd like to automate? Android - native, hybrid and mobile web apps, tested on emulators and real devices
    > using UiAutomator2 (https://www.npmjs.com/package/appium-uiautomator2-driver)
✔ Which framework do you want to use? Mocha (https://mochajs.org/)
✔ Do you want to use Typescript to write tests? no
✔ Do you want WebdriverIO to autogenerate some test files? yes
✔ What should be the location of your spec files? /Users/fransiskusandikasetiawan/Documents/mywork/rnd/wdio-appium/test/specs/**/*.js
✔ Do you want to use page objects (https://martinfowler.com/bliki/PageObject.html)? yes
✔ Where are your page objects located? /Users/fransiskusandikasetiawan/Documents/mywork/rnd/wdio-appium/test/pageobjects/**/*.js
✔ Which reporter do you want to use? spec
✔ Do you want to add a plugin to your test setup?
✔ Would you like to include Visual Testing to your setup? For more information see https://webdriver.io/docs/visual-testing! no
✔ Do you want to add a service to your test setup?
✔ Do you want me to run `npm install` yes
✔ Continue with Appium setup using appium-installer (https://github.com/AppiumTestDistribution/appium-installer)? yes
✔ Do you wish to setup the missing requirements for Chrome browser? Yes
```

### Check Android Emulator

```bash
avdmanager list avd
# or
adb devices -l
```

### Run test

```bash
npx wdio run ./wdio.conf.js --spec ./test/specs/login.e2e.js
```

### How to handel element locator using wdio

- `~` for find element locator use `accessibility ID`
- `//tag[@key='value']` for find element locator use `XPATH` and more no need prefix
