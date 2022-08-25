import InventoryItem from "./InventoryItem.page";

class AllThingsTShirt extends InventoryItem {
  static get url() {
    return super.url() + "3";
  }

  static get addToCartButton(){
    return cy.get('[id="add-to-cart-test.allthethings()-t-shirt-(red)"]');
  }

}

export default AllThingsTShirt;
