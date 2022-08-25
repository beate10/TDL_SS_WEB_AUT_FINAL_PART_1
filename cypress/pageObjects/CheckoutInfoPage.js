
import BasePage from "./Base.page";

class CheckoutInfoPage extends BasePage {
  static get url() {
    return "/checkout-step-one.html";
  }

  static get firstNameField(){
    return cy.get("#first-name");
  }

  static get lastNameField(){
    return cy.get("#last-name");
  }


  static get zipCodeField(){
    return cy.get("#postal-code");
  }


  static get continueButton(){
    return cy.get("#continue");
  }

}

export default CheckoutInfoPage;
