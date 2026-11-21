const { test, expect } = require('@playwright/test');

// PRUEBA 1: Navegación entre páginas
test('Debe navegar desde inicio hasta productos', async ({ page }) => {

    await page.goto('/');

    await expect(
        page.getByRole('heading', { name: 'Ferretería El Constructor' })
    ).toBeVisible();

    await page.getByRole('link', { name: 'Productos' }).click();

    await expect(page).toHaveURL(/productos\.html/);

    await expect(
        page.getByRole('heading', { name: 'Catálogo de productos' })
    ).toBeVisible();
});

// PRUEBA 2: Buscar productos
test('Debe buscar un producto correctamente', async ({ page }) => {

    await page.goto('/productos.html');

    const buscador = page.getByRole('textbox', {
        name: 'Buscar producto'
    });

    await buscador.fill('Martillo');

    await expect(
        page.locator('.producto').filter({ hasText: 'Martillo' })
    ).toBeVisible();

    await expect(
        page.locator('.producto').filter({ hasText: 'Taladro' })
    ).toBeHidden();
});

// PRUEBA 3: Agregar producto
test('Debe agregar un producto y actualizar el contador', async ({ page }) => {

    await page.goto('/productos.html');

    await page.getByRole('button', {
        name: 'Agregar'
    }).first().click();

    await expect(page.locator('#contador')).toHaveText('1');

    await expect(page.locator('#mensaje')).toContainText(
        'Martillo agregado correctamente.'
    );
});