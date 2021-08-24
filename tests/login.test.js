import { Selector,t } from "testcafe"
import LoginPage from "../page-object/pages/LoginPage"
import LogoutPage from "../page-object/pages/LogoutPage"
import VerifyElement from "../page-object/pages/VerifyElement"
import Screenshot from "../page-object/pages/Screenshot"


const log_in= new LoginPage()
const log_out = new LogoutPage()
const elemnent = new VerifyElement()
const sc = new Screenshot()


fixture `Getting Started`
    .page('https://app-platonl-chn.azurewebsites.net/Login')

    .beforeEach(async t =>{
        await t
            .maximizeWindow()
            .setTestSpeed(0.5)

    })
    .afterEach(async t => {
        await
            sc.takeScreenshot()
    })

    test('Login with valid value using Page Object', async t =>{
        await log_in.login('sys-admin','123456')
      //  await t.expect(log_in.TEXT_HEADER.innerText).eql('Stammdaten') 
        await elemnent.VerifyElementPresent(log_in.TEXT_HEADER.innerText, 'Stammdaten')
        await log_out.logout()
            
    })

    test('Login with blank username', async t => {
        await log_in.login('   ','123456')
        await elemnent.VerifyElementPresent(log_in.MESSAGE.innerText, 'Dieses Feld ist erforderlich.')
    })

    test('Login with blank password', async t => {
        await log_in.login('sys-admin','   ')
        await elemnent.VerifyElementPresent(log_in.MESSAGE.innerText, 'Dieses Feld ist erforderlich.')
    })

    test('Login with invalid username', async t => {
        await log_in.login('sys','123456')
        await elemnent.VerifyElementPresent(log_in.ALERT_MESSAGE.innerText, 'Incorrect account or password')
    })

    test('Login with invalid password', async t => {
        await log_in.login('sys-admin','123')
        await elemnent.VerifyElementPresent(log_in.ALERT_MESSAGE.innerText, 'Incorrect account or password')
    })

   