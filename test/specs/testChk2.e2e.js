import { browser } from '@wdio/globals'
import chkBoxesPage from '../pageobjects/chkBoxes.page.js'
import { $ } from '@wdio/globals'
import Page from './page.js';

describe('My Check Boxes Page', () => {
    it('Check box should be selected', async () => {
        
        await chkBoxesPage.open()
        
        //chkBoxesPage.getURL()
      /*   const currentUrl = await browser.getUrl();
        console.log('Current URL:', currentUrl);
      */
       
        await chkBoxesPage.selectCheckBox()
        await expect(p).toBeSelected()
        //uncheck checkbox
        await p.click()
        //verify if not checked with assertion
        await expect(p).not.toBeSelected()


       /* 
       const linkelement = $("*=Elemental");

        // Verify the text of the link
        const linkText = await chkBoxesPage.linkelement.getText();
        console.log('link text is:',linkText )
        await expect(linkText).toContain('Elemental Selenium');

      
        await expect(chkBoxesPage.getTextofLink).toHaveText(
                    expect.stringContaining('Elemental Selenium'))
        */             
        browser.pause(5000)            
    })
})
 