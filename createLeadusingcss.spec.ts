import test from "@playwright/test";
test('create lead',async({page})=>{
    await page.goto('http://leaftaps.com/opentaps/control/main')
    await page.locator('#username').fill('democsr2')
    await page.locator('#password').fill('crmsfa')
    await page.locator('.decorativeSubmit').click()
    await page.locator('div>a').nth(1).click()
    await page.locator('div>a').nth(6).click()
    await page.locator('.x-panel-header.x-unselectable').nth(3).click()
    await page.locator('li>a').nth(8).click()
    await page.locator('[name=companyName]').nth(1).fill('TestLeaf')
    await page.locator('[name="firstName"]').nth(2).fill('Qeagle')
    await page.locator('[name="lastName"]').nth(2).fill('Company')
    await page.locator('[name="personalTitle"]').fill('Mr')
    await page.locator('#createLeadForm_generalProfTitle').fill('sample test')
    await page.locator('[name="annualRevenue"]').fill('1000000')
    await page.locator('[name="departmentName"]').fill('Information technology')
    await page.locator('[name="dataSourceId"]').click()
     await page.waitForTimeout(2000)    
    const dropDown =page.locator('[name="dataSourceId"]')
    const dropDownvalue= await dropDown.count()
    //console.log('the dropdown count is ', dropDownvalue);
    for (let index = 0; index < dropDownvalue; index++) {
        console.log( await dropDown.nth(index).innerText());//.innerText is used to print the text in the index
    }
    
})
//Home 17.8.26