var queryPageCommands = {}

module.exports = {
    url: 'http://localhost:3000',
    commands: [queryPageCommands],
    elements: {
        versionNumber: {
            selector: '//*[contains(text(), "Version 1.0")]',
            locateStrategy: 'xpath'
        },
        hamburgerButton: {
            selector: '//button[text()="Open Menu"]',
            locateStrategy: 'xpath'
        },
        xButton: {
            selector: '//button[text()="Close Menu"]',
            locateStrategy: 'xpath'
        },
        homeOption: 'p[name="homeOption"]',
        enterOption: 'p[name="enterOption"]',
        modifyOption: 'p[name="modifyOption"]',
        cancelOption: 'p[name="cancelOption"]',
        title: '.titleBar',
        header: 'input[name="hdrInput"]',
        MKE: 'input[name="mkeInput"]',
        OAI: 'input[name="oriInput"]',
        name: 'input[name="namInput"]',
        sexMale: 'option[value="M"]',
        sexFemale: 'option[value="F"]',
        sexOther: 'option[value="O"]',
        sexUnknown: 'option[value="U"]',
        height: 'input[name="hgtInput"]',
        weight: 'input[name="wgtInput"]',
        raceAsian: 'option[value="A"]',
        raceBlack: 'option[value="B"]',
        raceHispanic: 'option[value="H"]',
        raceNative: 'option[value="I"]',
        raceWhite: 'option[value="I"]',
        raceUnknown: 'option[value="I"]',
        hair: 'input[name="haiInput"]',
        offense:'input[name="offInput"]',
        warrantDate: 'input[name="dowInput"]',
        driversLicense: 'input[name="olnInput"]',
        driversLicenseExpiry: 'input[name="olyInput"]',
        driversLicenseState: 'input[name="olsInput"]',
        licensePlate: 'input[name="licInput"]',
        licenseState: 'input[name="lisInput"]',
        licensePlateExpiry: 'input[name="liyInput"]',
        submitButton: '#saveBtn',
        clearButton: '#clearButton',
        results: '#validHeader',
        queryTitle: 'span[name="queryTitle"]',
    }
}