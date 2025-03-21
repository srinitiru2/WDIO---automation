import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class addDeleteElementPg extends Page {   

/* */
    get addBt () {                
        return $(".example>button");       
    }
    get deleteBt () {                
        return $("#elements > button:nth-child(1");       
    }

    get linkLink () {                
        return $("#page-footer > div > div > a");
    }

    async selectAddBt () {
        await this.addBt.click()
   }
    async selectDeleteBt () {
        await this.deleteBt.click()
   } 
    
    async getMyURL(){
         const url = await browser.getUrl();
         return url;
    }

   
    getTextofLink (){
        LinkText.getTextofLink();
    }

       
    open () {
        return super.open('add_remove_elements/');
    }
        


}

export default new addDeleteElementPg();
