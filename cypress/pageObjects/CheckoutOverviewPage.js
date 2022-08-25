
import BasePage from "./Base.page";

class CheckoutOverviewPage extends BasePage {
  static get url() {
    return "/checkout-step-two.html";
  }

  static get inventoryItem(){
    return cy.get(".inventory_item_name");
  }


  static get finishButton(){
    return cy.get("#finish");
  }


}

export default CheckoutOverviewPage;
