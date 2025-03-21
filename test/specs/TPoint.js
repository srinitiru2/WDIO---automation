// test suite name
describe('Tutorialspoint application', function(){
    //test case
    it('Frames', function(){    
       // launch url
       browser.url('https://the-internet.herokuapp.com/nested_frames')  
       //switch to frame
       browser.switchToFrame($("frame[name='frame-bottom']"))
       //identify element with tagname
       const p = $('<body>')
       //get text inside frame
       console.log(p.getText() + ' - Text inside frame')   
       //switch to main page
       browser.switchToFrame(null)           
    });
 });