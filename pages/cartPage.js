class CartPage {
  constructor(page) {
    this.page = page;
    this.cartButton = '.add-to-cart';
    this.shoppingCart = '.shopping_cart_link';
    this.checkoutButton = '.checkout_button';
  }

  async goToCart() {
    await this.page.click(this.shoppingCart);
  }

  async proceedToCheckout() {
    await this.page.click(this.checkoutButton);
  }
}

module.exports = CartPage;
