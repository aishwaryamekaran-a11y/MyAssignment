import test from "@playwright/test";
test('Update test',async ({page})=>{
await page.goto('http://leaftaps.com/opentaps/control/main')
await page.locator('//label[contains(text(),"Username")]/following-sibling::input').fill('DemoSalesManager')//advanced xpath using elder to younger sibling
await page.locator('//label[contains(text(),"Password")]/following-sibling::input').fill('crmsfa')
await page.locator('//input[contains(@value,"Log")]').click()
await page.locator('//a[contains(text(),"SFA")]').click()
await page.locator('//a[contains(text(),"Leads")]').click()
await page.locator('//a[contains(text(),"Create Lead")]').click()
await page.locator('//input[contains(@name,"company")]').nth(1).fill("TestLeaf")
await page.locator('//input[contains(@name,"firstName")]').nth(2).fill("Ishwarya")
await page.locator('//input[contains(@name,"lastNa")]').nth(2).fill("Mani")
await page.locator('//input[contains(@value,"Create")]').click()
await page.locator('//a[contains(@class,"subMenuButton")]').nth(2).click()
await page.waitForTimeout(3000)
//await page.locator('//a[contains(text(),"Edit")]').click()
await page.getByText('Edit').click()
await page.locator('(//input[@name="companyName"])').nth(1).press("Control+A")
await page.locator('(//input[@name="companyName"])').nth(1).fill("Qeagle")
await page.locator('//input[contains(@value,"Update")]').click()
})
//home assignment2 18.8.26 error in line 16