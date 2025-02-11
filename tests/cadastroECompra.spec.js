const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');
const ProductPage = require('../pages/productPage');
const CartPage = require('../pages/cartPage');
const CheckoutPage = require('../pages/checkoutPage');

test('Cadastro e compra de produto', async ({ page }) => {
  // Inicializar as páginas
  const loginPage = new LoginPage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  // Acessar página inicial
  await loginPage.goTo();

  // Login
  await loginPage.login('standard_user', 'secret_sauce');
  
  // Pesquisar e selecionar um produto
  await productPage.searchProduct('Sauce Labs Backpack')
  
  // Validar o Produto
  await productPage.validateProductTitle('Sauce Labs Backpack')
  await productPage.validateProductDescription('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.')
  await productPage.validateProductPrice('$29.99')

  // Adicionar ao Carrinho e Checkout
  await cartPage.goToCart();
  await cartPage.proceedToCheckout();

  // Preencher Infos e Finalização de Pedido
  await checkoutPage.fillCheckoutDetails('Jose', 'Alan', '64607334');
  await checkoutPage.finishOrder();

  // Validar de que a compra foi finalizada com sucesso
  const successMessage = await page.locator('.complete-header');
  await expect(successMessage).toHaveText('Thank you for your order!');
});
