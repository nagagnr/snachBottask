const HomePage = require("../pages/homepage");
const ChatPage = require("../pages/chatpage");

const data = require("../data/testdata.json");
const waits = require("../helpers/waits");

describe("snatchbot Scenarios", () => {
  it("Open snatchbot application and launch snatch bot", async () => {
    await HomePage.openApplication();
    await HomePage.launchBot();
    expect(await ChatPage.getLastMessageFromBot()).toEqual(data.validation_1);
  });

  it("User want to chat with bot", async () => {
    await ChatPage.clickOnChatWithABotBtn();
    expect(await ChatPage.getLastMessageFromBot()).toEqual(data.validation_2);
  });

  it("Enter name and verify the response message from bot", async () => {
    let messageToValidate = data.validation_3.replace("name!", data.userName+"!");
    await console.log(messageToValidate)
    await ChatPage.enterMessage(data.userName);
    expect(await ChatPage.getLastMessageFromBot()).toEqual(messageToValidate);
  });

  it("Click on Yes and Verify persistent menu options", async () => {
    await ChatPage.clickYesBtn();
    await ChatPage.explainChatbotsBtn.waitForDisplayed({ timeout: waits.maxWait });
    expect(await ChatPage.explainChatbotsBtn.isDisplayed()).toEqual(true);
    expect(await ChatPage.makeaChatbotBtn.isDisplayed()).toEqual(true);
    expect(await ChatPage.useCasesBtn.isDisplayed()).toEqual(true);
    expect(await ChatPage.featuresBtn.isDisplayed()).toEqual(true);
    expect(await ChatPage.contactSnatchBotBtn.isDisplayed()).toEqual(true);
    expect(await ChatPage.costsBtn.isDisplayed()).toEqual(true);
  });

  it("Click on explain Chat bots btn and verify message", async () => {
    await ChatPage.clickOnExplainChatbotsBtn();
    expect(await ChatPage.getLastMessageFromBot()).toEqual(data.validation_4);
  });


  it("Click on Tell me btn and Verify message", async () => {
    await ChatPage.clickOnTellMeBtn();
    expect(await ChatPage.getLastMessageFromBot()).toEqual(data.validation_5);
  });

  it("Click on Chatbot btn and Verify message", async () => {
    await ChatPage.clickOnChatbotBtn();
     expect(await ChatPage.getLastMessageFromBot()).toEqual(data.validation_6);
  });

  it("Click on No Thanks and to Quit snatch", async () => {
    await ChatPage.clickOnNoThanksBtn();
    await browser.pause(waits.minWait)
    await ChatPage.enterMessage("Quit");
    await browser.pause(waits.minWait)
    await ChatPage.clickYesBtn();
    await browser.pause(waits.minWait)
  });
});
