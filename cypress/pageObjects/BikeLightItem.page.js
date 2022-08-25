import InventoryItem from "./InventoryItem.page";

class BikeLightItem extends InventoryItem {
  static get url() {
    return  super.url() + "0";
  }


  static get addToCartButton(){
    return cy.get("#add-to-cart-sauce-labs-bike-light");
  }

}

export default BikeLightItem;
