// test suite name
describe('Tutorialspoint application', function(){
    //test case
    it('Child Window', function(){    
       // launch url
       browser.url('    ')  
       //identify element then click
       $('#apple-signin-button').click()
       //get all window handle ids in list
       var l = browser.getWindowHandles()
       //switch to child window
       browser.switchToWindow(l[1])
       //get page title of child window
       console.log(browser.getTitle() + ' - Page title of child window')
       //close child window
       browser.closeWindow()
       //switch to parent window
       browser.switchToWindow(l[0])
       //get page title of parent window
       console.log(browser.getTitle() + ' - Page title of parent window')      
    });
 });