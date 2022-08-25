import InventoryItem from "./InventoryItem.page";

class BoltTShirtItem extends InventoryItem {
  static get url() {
    return super.url() + "1";
  }

  static get addToCartButton(){
    return cy.get("#add-to-cart-sauce-labs-bolt-t-shirt");
  }

 
  static get removeButton(){
    return cy.get("#remove-sauce-labs-bolt-t-shirt");
    
  }

}

export default BoltTShirtItem;
