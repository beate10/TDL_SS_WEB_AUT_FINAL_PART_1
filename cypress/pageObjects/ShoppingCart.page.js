import BasePage from "./Base.page";

class ShoppingCart extends BasePage {
  static get url() {
    return "/cart.html";
  }

  static get checkoutButton(){
    return cy.get("#checkout");
  }

}

export default ShoppingCart;
