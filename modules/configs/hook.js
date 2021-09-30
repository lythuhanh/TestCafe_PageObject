import { Selector, t } from "testcafe"

class hook{

    constructor(){
        this.URL = 'https://app-platonl-base-chn.azurewebsites.net/customer'
    }
  
    async before(){
        await t
            
            .maximizeWindow()
            .setTestSpeed(1)

         }
    async  after() {
        await t
            .takeScreenshot()
        }
     }
     export default hook  
