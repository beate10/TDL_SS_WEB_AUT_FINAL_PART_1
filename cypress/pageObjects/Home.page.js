import BasePage from "./Base.page";

class HomePage extends BasePage {
  static get url() {
    return "/inventory.html";
  }

  static get xxx() {
    return cy.get("x[y=z]");
  }

  static get inventoryItems(){
    return cy.get(".inventory_item");
  }

  static get filterOptionButton(){
    return cy.get(".product_sort_container");
  }

  static getInventoryItem(index){
    return this.inventoryItems.eq(index);
  }

  static getItemName(item){
    return item.get(".inventory_item_name");
  }


  static getItemPrice(item){
    return item.get(".inventory_item_price");
  }


  static getItemClickableField(name){
    return cy.get(".inventory_item_name").contains(name);
  }


}

export default HomePage;
