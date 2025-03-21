import { browser, expect } from "@wdio/globals";
import addDeleteElementPg from "../pageobjects/addDeleteElement.page.js";

describe("Add / Remove buttons", () => {
  before(() => {
    addDeleteElementPg.open();
    browser.maximizeWindow();
  });

  it("Button added and removed", async () => {
    browser.pause(10000);

  

    const currentUrl = await browser.getUrl();
    console.log("xxxxxxxxxxx", currentUrl, "xxxxxxxxxx");

    let count;
    for (let count = 0; count < 1; count++) {
      browser.pause(10000);
      await addDeleteElementPg.selectAddBt();
      console.log("Added button no: ", count, "*****");
      browser.saveScreenshot();
    }

    for (let count = 0; count < 1; count++) {
      browser.pause(10000);
      await addDeleteElementPg.selectDeleteBt(count);
      console.log("Deleted button no: ", count, "*****");
      browser.saveScreenshot();
    }

    /** */
    // Link text related tests
    //const link = await $("#page-footer > div > div > a");
    await expect(addDeleteElementPg.linkLink).toHaveText("Elemental Selenium");
    await expect(addDeleteElementPg.linkLink).toHaveAttribute("href", "http://elementalselenium.com/");
   
    await browser.saveScreenshot("test\screenshots\abc121.png");  //test\screenshots
    
    console.log("Title : " + await browser.getTitle());
    console.log("Page url : " +  await addDeleteElementPg.getMyURL());

    /**/
  });
});
