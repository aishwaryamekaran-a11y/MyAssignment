import test from "@playwright/test";
test('alert handling',async({page})=>{
    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm")
    page.on('dialog',async(alert)=>{
const message=alert.message()
console.log(message)
const alertType=alert.type()
console.log(alertType)
if(alertType==='confirm')
{
    await alert.accept()
}else
{await alert.dismiss()}
    })
    await page.frameLocator("//iframe[@name='iframeResult']").locator('//button[text()="Try it"]').click()
    //await page.waitForTimeout(80000)
})
// we need to handle frame first

//26.08.26 home