import test from"@playwright/test";
test ('learn to Handle frame',async({page})=>
{
    await page.goto('https://leafground.com/frame.xhtml')
    const framename=page.frames()
    console.log(framename.length);

     //single frame
     await page.frameLocator('//h5[text()= " Click Me (Inside frame)"]/following-sibling::iframe').locator('//button[@id="Click"]').nth(0).click()
    //nested frame
     await page.frameLocator('//h5[text()= " Click Me (Inside Nested frame)"]/following-sibling::iframe').frameLocator('//iframe[@id="frame2"]').locator('//button[@id="Click"]').click()
     await page.waitForTimeout(3000)
    
})

//26.08.26 home

