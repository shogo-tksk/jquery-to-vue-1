const path = require("path");

describe("TODOアプリ", () => {
    beforeEach(async () => {
        await page.goto("file://" + path.resolve(__dirname, "../index.html"));
        await page.waitForSelector("#todoList", { visible: false });
        await page.waitForSelector("#todoEmpty", { visible: true });
    });

});


