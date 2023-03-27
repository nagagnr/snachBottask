var waits = require("../helpers/waits");
var homepage = require('../pages/homepage')
/**
 * sub page containing specific selectors and methods for a specific page
 */
class ChatPage {
  /**
   * define selectors using getter methods
   */

  get chatTxtBox() {
    return $("#chat_input");
  }

  get lastMessageFromBot() {
    return $('(//p[@style="direction: ltr;"])[last()]');
  }

  get yesBtn() {
    return $('//span[text()="Yes"]/parent::button');
  }

  get chatWithABotBtn(){
    return $('//span[contains(text(),"Chat With a Bot")]/parent::button')
  }

  get explainChatbotsBtn() {
    return $('//span[text()="Explain chatbots"]/parent::button');
  }

  get useCasesBtn() {
    return $('//span[text()="Use cases"]/parent::button');
  }

  get makeaChatbotBtn() {
    return $('//span[text()="Make a chatbot"]/parent::button');
  }

  get featuresBtn() {
    return $('//span[text()="Features"]/parent::button');
  }

  get contactSnatchBotBtn() {
    return $('//span[text()="Contact SnatchBot"]/parent::button');
  }

  get costsBtn() {
    return $('//span[text()="Costs"]/parent::button');
  }

  get noThanksBtn() {
    return $('//span[text()="No thanks"]');
  }

  get tellMeBtn() {
    return $('//span[text()="Tell me"]/parent::button');
  }


  get chatbotBtn() {
    return $('//span[text()="Chatbot buttons?"]/parent::button');
  }


  get closebotBtn(){
    return $('#sntch_close');
  }

  /**
   * overwrite specific options to adapt it to page object
   */
 
  async enterMessage(message) {
    await this.chatTxtBox.setValue(message);
    await browser.keys("Enter");
  }

  async getLastMessageFromBot() {
    await browser.pause(waits.minWait);
    return await this.lastMessageFromBot.getText();
  }

  async waitUntilExpectedMessageFromBot(message) {
    const elem = await this.lastMessageFromBot;
    await elem.waitUntil(
      async function () {
        return (await this.getText()) === message;
      },
      {
        timeout: waits.maxWait,
        timeoutMsg: "expected "+ message +" is not displayed"
      }
    );
  }

  async clickYesBtn() {
    await this.yesBtn.click();
  }

  async clickOnChatWithABotBtn() {
    await this.chatWithABotBtn.click();
  }

  async clickOnExplainChatbotsBtn() {
    await browser.pause(waits.defaultWait);
    await this.explainChatbotsBtn.click();
  }

  async clickOnNoThanksBtn() {
    await this.noThanksBtn.waitForClickable({ timeout: waits.maxWait }); 
    await this.noThanksBtn.click();
  }

  async clickOnTellMeBtn() {
    await this.tellMeBtn.click();
  }

  async clickOnChatbotBtn() {
    await this.chatbotBtn.click();
  }

  async closeChatbot(){
    await this.closebotBtn;
  }

}

module.exports = new ChatPage();
