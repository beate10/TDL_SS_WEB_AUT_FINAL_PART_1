
class TopBar {

    
    static get shoppingCartBadge(){
        return cy.get(".shopping_cart_badge");
    }
    
      static get stackButton(){
        return cy.get("#react-burger-menu-btn");
    }
    
      static get resetAppButton(){
        return cy.get("#reset_sidebar_link");
    }
    
    
      static get shoppingCartIcon(){
        return cy.get(".shopping_cart_link");
    }

}


export default TopBar;