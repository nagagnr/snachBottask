
 class WebAction {
   /**
    * Brief description of the function here.
    * @summary This doClick method performs click action on passed parameter.
    * @param {elem} is of dataType webElement. locator of elem on which click action has to be performed.
    * @param {label} - is of dataType string. It is the label of the element on which action has to be performed.
    * @return {void} No return type.
    */
 
   async doClick(elem, label) {
     var message = "===> " + label + " is not displayed";
     await browser.waitUntil(async () => (await elem.isClickable()) === true, {
       timeout: 60000,
       timeoutMsg: message,
     });
     await elem.click();
   }
 
   async doSetValue(elem, value, label) {
     var message = "===> " + label + " is not displayed";
     await browser.waitUntil(async () => (await elem.isClickable()) === true, {
       timeout: 60000,
       timeoutMsg: message,
     });
     await elem.setValue(value);
   }
 
   async waitForElement(elem, label) {
     var message = "===> " + label + " is not displayed";
     await browser.waitUntil(async () => (await elem.isDisplayed()) === true, {
       timeout: 180000,
       timeoutMsg: message,
     });
   }
 }
 
 module.exports = new webAction();
 