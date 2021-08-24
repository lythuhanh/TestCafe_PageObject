import { Selector, t } from "testcafe"
import LoginPage from "./LoginPage"

class VerifyElement extends LoginPage {
   
    async VerifyElementPresent(locator, text){
        await t
            .expect(locator).eql(text)

    }

}

export default VerifyElement