import { test, expect } from '@playwright/test';
test('検索して詳細を開き、ネタバレを切り替える', async ({ page }) => {
  await page.goto('/search/');
  await page.getByLabel('作品名', { exact: true }).fill('シュタゲ');
  await expect(page.getByRole('heading', { name: 'STEINS;GATE', exact: true })).toBeVisible();
  await page.getByRole('link', { name: /STEINS;GATE/ }).click();
  await expect(page.getByRole('heading', { level: 1, name: 'STEINS;GATE' })).toBeVisible();
  await expect(page.locator('#spoiler-content')).toHaveCount(0);
  await page.getByRole('button', { name: 'ネタバレを含む感想を開く' }).click();
  await expect(page.locator('#spoiler-content')).toBeVisible();
  await page.getByRole('button', { name: 'ネタバレを含む感想を隠す' }).click();
  await expect(page.locator('#spoiler-content')).toHaveCount(0);
});
test('気分で探し、条件をリセットできる', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: '癒やされたい', exact: true }).click();
  await expect(page.getByRole('button', { name: '癒やされたい', exact: true })).toHaveAttribute(
    'aria-pressed',
    'true',
  );
  await page.getByRole('button', { name: '絞り込みをリセット' }).click();
  await expect(page.locator('.anime-card')).toHaveCount(50);
});
test('好きな作品から推薦し、URLから復元できる', async ({ page }) => {
  await page.goto('/search/?mode=similar');
  await page.getByLabel('好きな作品を選んでください').selectOption('anime-1');
  await expect(page).toHaveURL(/similar=anime-1/);
  await page.reload();
  await expect(page.getByLabel('好きな作品を選んでください')).toHaveValue('anime-1');
  await expect(page.locator('.results-grid .anime-card')).toHaveCount(49);
  await expect(page.locator('.results-grid a[href="/anime/anime-1/"]')).toHaveCount(0);
});
test('検索結果なしと画面幅を確認する', async ({ page }) => {
  await page.goto('/search/?q=notfoundxxx');
  await expect(page.getByRole('heading', { name: '条件に合う作品がありません' })).toBeVisible();
  await expect
    .poll(() => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth))
    .toBe(true);
});
