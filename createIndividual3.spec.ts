import test from "@playwright/test";
test('createLads in sale', async ({page})=>{
await page.goto('https://login.salesforce.com/')
await page.locator('//input[@id="username"]').fill('dilipkumar.rajendran@testleaf.com')//xpath for id
await page.locator('//input[@id="Login"]').click()//xpath for id
await page.locator('//label[contains(text(),"Pass")]').fill('TestLeaf@2025')//partial text based xpath
await page.locator('//input[contains(@value,"Log")]').nth(1).click()//partial attribute based xpath
await page.locator('//button[contains(@title,"App")]').click() 
await page.locator('//button[text()="View All"]').click()
await page.waitForTimeout(2000)
await page.locator('//p[text()="Individuals"]').click()
await page.locator('//div[contains(@title,"New")]').click()
await page.locator('//input[contains(@placeholder,"Last")]').fill("mani")
await page.locator('//span[contains(text(),"Save")]').nth(1).click()
})
//Home 18.8.2026