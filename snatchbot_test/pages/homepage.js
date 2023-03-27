var waits = require("../helpers/waits");
/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage {
  /**
   * define selectors using getter methods
   */
  get botIcon() {
    return $("#sntch_button");
  }

  get yesStartNewBtn(){
    return $('//span[text()=" Yes, start new "]/parent::button');
  }


  get iFrame() {
    return $("#sntch_iframe");
  }

  async openApplication() {
    await browser.url("/");
    await browser.maximizeWindow();
  }

  async launchBot() {
    await browser.pause(waits.defaultWait);
    await this.botIcon.waitForClickable({ timeout: waits.maxWait }); 
    await this.botIcon.click();
    await browser.pause(waits.defaultWait);
    await browser.switchToFrame(await this.iFrame);
    await browser.pause(waits.defaultWait);
  }

  async checkOldSessionOpened(){
    if(this.yesStartNewBtn.isExisting()){
      await this.yesStartNewBtn.click();
      await browser.refresh();
      await browser.pause(waits.minWait);
      await this.launchBot();
    }
  }

}

module.exports = new HomePage();
