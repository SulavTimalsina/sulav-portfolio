const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
  const page = await browser.newPage();
  const filePath = 'file://' + path.resolve(__dirname, 'resume.html');
  await page.goto(filePath, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(200);
  await page.pdf({
    path: path.resolve(__dirname, 'Sulav-Timalsina-Resume.pdf'),
    format: 'A4',
    printBackground: true,
    margin: { top: '0mm', bottom: '0mm', left: '0mm', right: '0mm' },
  });
  await browser.close();
  console.log('done');
})();
