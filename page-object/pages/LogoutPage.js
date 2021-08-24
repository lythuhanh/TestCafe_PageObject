import { Selector, t } from "testcafe"

class LogoutPage{
    constructor(){
        this.BUTTON_USERINFOR = Selector('i[title="User Info"]')
        this.DROPDOWN_USERINFOR_SIGNOUT = Selector('a').withText('Ausloggen')
    }

    async logout(){
        await t
            .click(this.BUTTON_USERINFOR)
            .click(this.DROPDOWN_USERINFOR_SIGNOUT)
    }

}

export default LogoutPage