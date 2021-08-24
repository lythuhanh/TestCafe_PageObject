import { Selector, t } from "testcafe"

class Screenshot {

    constructor(){

    }

    async takeScreenshot(){
        await t
            .takeScreenshot({fullPage:true})
    }
}

export default Screenshot