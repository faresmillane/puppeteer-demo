const puppeteer = require('puppeteer');
let page = null;
let browser = null;
const config = { headless: false, args: ['--no-sandbox', '--disable-setuid-sandbox'] };

const initDriver = async () => {
    try {
      browser = await puppeteer.launch(config);
      page = await browser.newPage();
    }
    catch (error) {
        throw new Error("initDriver", error);
    }
};

const getUrl = async (url) => {
    try {
        await page.goto(url);
      }
    catch (error) {
      throw new Error("getUrl", error);
    }
};

const findElement = async (element) => {
    try {
      await page.waitForSelector(element);
    }
    catch (error) {
      throw new Error("findElement", error);
    }
};

const fillText = async (element, word) => {
    try {
      await page.type(element, word);
    }
    catch (error) {
      throw new Error("fillText", error);
    }
};

const click = async (element) => {
    try {
      await page.click(element);
    }
    catch (error) {
      throw new Error("click", error);
    }
};

const quitDriver = async () => {
    try {
      await browser.close();
    }
    catch (error) {
      await shared.manageError("quitDriver", error);
    }
};


module.exports = {
    initDriver,
    getUrl,
    fillText,
    quitDriver,
    findElement,
    click
};
