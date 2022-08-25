import BasePage from "./Base.page";

class InventoryItem extends BasePage {


    static get url() {
        return "/inventory-item.html?id=";
    }


    static get backToProductsButton(){
        return cy.get("#back-to-products");
    
    }


}

export default InventoryItem;
