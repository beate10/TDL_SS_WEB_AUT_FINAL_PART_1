
import BasePage from "./Base.page";

class CheckoutCompletePage extends BasePage {
  static get url() {
    return "/checkout-complete.html";
  }

  static get completionMessage(){
    return cy.get(".complete-header");
  }

}

export default CheckoutCompletePage;
