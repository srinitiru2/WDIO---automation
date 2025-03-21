import { browser, expect } from '@wdio/globals'
import chkBoxesPage from '../pageobjects/chkBoxes.page.js'


describe('My Check Boxes Page', () => {

beforeEach(()=>{
    chkBoxesPage.open()
}

)



    it('Check box should be selected', async () => {
        
       
        
        //chkBoxesPage.getURL()
       const currentUrl = await browser.getUrl();
       console.log("xxxxxxxxxxx",currentUrl,"xxxxxxxxxx");

       
        //Check Box1
        //select the checkbox1
        await chkBoxesPage.selectCheckBox1();      
        await expect(chkBoxesPage.chkBoxe1).toBeSelected()
        //Deselect the checkbox1
        await chkBoxesPage.selectCheckBox1();
        await expect(chkBoxesPage.chkBoxe1).not.toBeSelected()
       
        //Check Box2       
        //Deselect the checkbox2
        await chkBoxesPage.selectCheckBox2();      
        await expect(chkBoxesPage.chkBoxe2).not.toBeSelected()
        //select the checkbox2
        await chkBoxesPage.selectCheckBox2();
        await expect(chkBoxesPage.chkBoxe2).toBeSelected()

/*
        async function checkbox_is_selected(checkbox1) {
            const value = (await $(`${locator}`))
            await expect(value).toBeChecked()
        }
*/
        //const value = (await $(`${chkBoxesPage.checkbox1}`))
        await expect(chkBoxesPage.checkbox1).not.toBeChecked()

         
        browser.pause(90000)            
    })
})
 