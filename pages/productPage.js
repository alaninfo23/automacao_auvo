import { expect } from '@playwright/test';

class ProductPage {
  constructor(page) {
    this.page = page;
    this.productList = '.inventory_item';
    this.productTitle = '.inventory_item_name';
    this.addToCartButton = '.btn_inventory';
  }

  async searchProduct(productName) {
    const product = await this.page.locator(`.inventory_item_name[data-test="inventory-item-name"]:has-text("${productName}")`);
    await product.waitFor({ state: 'visible' });
    await product.click();
  }
  

  async validateProductTitle(expectedTitle) {
    // Localiza o título do produto
    const titleLocator = this.page.locator('.inventory_details_name[data-test="inventory-item-name"]');
    
    // Espera o título aparecer na página e valida o texto
    await expect(titleLocator).toHaveText(expectedTitle);
  }
  
  
  
  async validateProductDescription(expectedDescription) {
    const descriptionLocator = this.page.locator('.inventory_details_desc[data-test="inventory-item-desc"]');
    const actualDescription = await descriptionLocator.textContent();
    await expect(actualDescription).toBe(expectedDescription);
  }

  async validateProductPrice(expectedPrice) {
    const priceLocator = this.page.locator('.inventory_details_price[data-test="inventory-item-price"]');
    const actualPrice = await priceLocator.textContent();
    await expect(actualPrice.trim()).toBe(expectedPrice);
  }

  async selectProductAndAddToCart(productName) {
    const product = await this.page.locator(`${this.productTitle}:has-text("${productName}")`);
    await product.click();
    await this.page.click(this.addToCartButton);
  }
}

module.exports = ProductPage;
