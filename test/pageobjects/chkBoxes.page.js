import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckboxesPage extends Page {   

/* 
    get LinkText (){
       return  $("//a[@target='_blank']");       
    }
*/
    get chkBoxe1 () {                
        return $("input[type='checkbox']:first-child");       
    }
    get chkBoxe2 () {                
        return $("input[type='checkbox']:last-child");       
    }


    async selectCheckBox1 () {
        await this.chkBoxe1.click()
   }
    async selectCheckBox2 () {
        await this.chkBoxe2.click()
}
    
    getmyURL (){
        console.log(browser.getUrl());
    }

   
    getTextofLink (){
        LinkText.getTextofLink();
    }

       
    open () {
        return super.open('checkboxes');
    }
        
}

export default new CheckboxesPage();
