
// config
const { Given, When, Then, setDefaultTimeout } = require("@cucumber/cucumber");
setDefaultTimeout(60 * 1000);
const selectors = require('../selectors');
let driver = require('../helpers');

//steps

Given('I start the navigator', async function () {
  await driver.initDriver();
});

Given("I navigate to home page", async function () {
  await driver.getUrl(selectors.home_url);
//  await driver.click(selectors.cgu_accept);
});

When("I fill {word} in the bar search", async function (word) {
  await driver.fillText(selectors.search_bar, word);
});

Then("I click on the search button", async function () {
  await driver.click(selectors.search_button);
});

Then("I see the result label", async function () {
    await driver.findElement(selectors.result_label)
    await driver.quitDriver();
});