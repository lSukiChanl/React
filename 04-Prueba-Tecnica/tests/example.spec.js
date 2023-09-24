import { test } from '@playwright/test'
const LOCALHOST_URL = 'http://localhost:5173'

test('app show random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const text = await page.getByRole('paragraph')
  const textContent = await text.textContent()

  const img = await page.getByRole('img')
  const imgContent = await img.getAttribute('src')

  const url = await page.getByRole('link')
  const urlContent = await url.textContent()

  console.log('text: ' + textContent)
  console.log('img: ' + imgContent)
  console.log('url: ' + urlContent)
})
