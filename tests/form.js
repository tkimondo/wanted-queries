var queryPageApp = {}

var clickByText = (browser, text) => {
    browser
        .useXpath()
        .click(`//*[text()="${text}"]`)
        .useCss()
}

//var enterFormInfo = (functionPage, formInfo, formResults) => {}
 //   functionPage
 //       .click('@hamburgerButton')
 //       .click('@enterOption')
//     enterFormInfo(queryPageApp, )


module.exports = {
    beforeEach: browser => {
        queryPageApp = browser.page.queryPage()
        queryPageApp.navigate()
            .waitForElementPresent('@title', 5000)
    },
    after: browser => {
        browser.end()
    },
    'Opening the Pop-up Menu': browser => {
        queryPageApp
            .click('@hamburgerButton')
        queryPageApp
            .expect.element('@homeOption').text.to.equal('Home').before(500)
        queryPageApp
            .expect.element('@enterOption').text.to.equal('Enter Wanted').before(500)
        queryPageApp
            .expect.element('@modifyOption').text.to.equal('Modify Wanted').before(500) 
        queryPageApp
            .expect.element('@cancelOption').text.to.equal('Cancel Wanted').before(500)
        queryPageApp
            .click('@xButton')          
    },
    'Submit a valid query': browser => {
        queryPageApp
            .click('@hamburgerButton')
            .waitForElementPresent('@homeOption', 5000)
            browser.resizeWindow(1366, 768); 
            clickByText(browser, 'Enter Wanted')
        queryPageApp
            .setValue('input[name="hdrInput"]', '1234567890')
            .setValue('input[name="mkeInput"]', 'Tom')
            .setValue('input[name="oriInput"]', 'OAI123456')
            .setValue('input[name="namInput"]', 'Thomas Kimondo')
            .click('option[value="M"]')
            .click('option[value="B"]')
            .setValue('input[name="hgtInput"]', '610')
            .setValue('input[name="wgtInput"]', '245')
            .setValue('input[name="haiInput"]', 'Brown')
            .setValue('input[name="offInput"]', 'Theft')
            .setValue('input[name="dowInput"]', '10172018')
            .setValue('input[name="olnInput"]', 'D123456')
            .setValue('input[name="olsInput"]', 'AZ')
            .setValue('input[name="oldInput"]', '10172019')
            .setValue('input[name="licInput"]', 'AAA1234')
            .setValue('input[name="lisInput"]', 'AZ')
            .setValue('input[name="lidInput"]', '2018')
            .setValue('input[name="dowInput"]', '10172018')
            .click('#saveBtn')
            browser.pause(5000);
        queryPageApp
            .expect.element('@results').text.to.equal('Valid').before(500)
        queryPageApp
            .expect.element('@queryTitle').text.to.equal('Assembled Query:').before(500)
    }
}