import { Selector, t } from "testcafe"

class LoginPage{
    constructor(){
        // Selector
        this.TXT_USERNAME = Selector('input[type="text"]')
        this.TXT_PASSWORD = Selector('input[type="password"]')
        this.BTN_LOGIN = Selector('#btn-submit')
        this.TEXT_HEADER = Selector('p[class="header"]')
        this.MESSAGE = Selector('div[class="validation-message"]')
        this.ALERT_MESSAGE = Selector('div[class="modal-body dxbs-modal-body"]')
        
    }

    async login(user, pass){ 
        await t 
            .typeText(this.TXT_USERNAME,user)
            .typeText(this.TXT_PASSWORD,pass)
            .click(this.BTN_LOGIN)
            .wait(15000)
            
    }

    }
export default LoginPage