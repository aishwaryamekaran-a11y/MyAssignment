import {test,expect} from "@playwright/test";
test('lead creation',async ({page}) => {
    await page.goto('https://login.salesforce.com/')
    await page.locator('//input[@id="username"]').fill('dilipkumar.rajendran@testleaf.com')//xpath for id
    await page.locator('//input[@id="Login"]').click()//xpath for id
await page.locator('//label[contains(text(),"Pass")]').fill('TestLeaf@2025')//partial text based xpath
await page.locator('//input[contains(@value,"Log")]').nth(1).click()//partial attribute based xpath
await page.waitForTimeout(2000)
await page.locator('//button[contains(@title,"App")]').click() 
await page.locator('//button[text()="View All"]').click()
await page.waitForTimeout(2000)
await page.locator('//one-app-launcher-app-tile[@data-name="Sales"]').click()
await page.waitForTimeout(2000)
await page.locator('//a[@title="Leads"]').click()
await page.locator('//div[@title="New"]').click()
await page.locator('//button[@aria-label="Salutation"]').click()
await page.getByText('Mrs.',{exact:true}).click()
//await page.locator('//button[@aria-label="Salutation"]').selectOption('//span[text()="Mrs."].nth(0)')
await page.locator('//input[@name="lastName"]').fill("Mani")
await page.locator('//input[@name="Company"]').fill("TestLeaf")
await page.locator('//button[@name="SaveEdit"]').click()
await page.waitForTimeout(2000)
await page.locator('//a[text()="Details"]').click()
await expect(page).toHaveTitle("Mani | Lead | Salesforce")
})
//Home 18.8.26