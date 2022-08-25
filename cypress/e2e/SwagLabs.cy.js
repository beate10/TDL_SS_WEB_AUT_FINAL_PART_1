import BasePage from "../pageObjects/Base.page";
import HomePage from "../pageObjects/Home.page";
import LoginPage from "../pageObjects/Login.page";
import BoltTShirtItem from "../pageObjects/BoltTShirtItem.page";
import BikeLightItem from "../pageObjects/BikeLightItem.page";
import AllThingsTShirt from "../pageObjects/AllThingsTShirt.page";
import ShoppingCart from "../pageObjects/ShoppingCart.page";
import CheckoutInfoPage from "../pageObjects/CheckoutInfoPage";
import CheckoutOverviewPage from "../pageObjects/CheckoutOverviewPage";
import CheckoutCompletePage from "../pageObjects/CheckoutComplete.page";
import TopBar from "../pageObjects/TopBar";

describe("Swag Labs", () => {
  context ("Login Tests", () => {

    beforeEach(() => {
      LoginPage.visit();
    });

    
    it("Scenario 1", () => {
      LoginPage.usernameField.type("locked_out_user");
      LoginPage.passwordField.type("secret_sauce");
      LoginPage.loginButton.click();
      LoginPage.errorMessage.should("have.text", "Epic sadface: Sorry, this user has been locked out.");
    });
  
  
    it("Scenario 2", () => {
      LoginPage.usernameField.type("standard_user");
      LoginPage.passwordField.type("wrong");
      LoginPage.loginButton.click();
      LoginPage.errorMessage.should("have.text", "Epic sadface: Username and password do not match any user in this service");
    });
  })


  context ("Page Functionality Tests", () => {
    beforeEach(() => {
      LoginPage.visit();
      LoginPage.usernameField.type("standard_user");
      LoginPage.passwordField.type("secret_sauce");
      LoginPage.loginButton.click();
    });

    it("Scenario 3", () => {
      HomePage.inventoryItems.should("have.length", 6);
    });


    it ("Scenario 4", () => {

      HomePage.filterOptionButton.select("hilo");

      let inventoryItem = HomePage.getInventoryItem(0);

      HomePage.getItemName(inventoryItem).should("contain","Sauce Labs Fleece Jacket" );
      HomePage.getItemPrice(inventoryItem).should("contain", "$49.99");
    });




    it ("Scenario 5", () => {

      HomePage.filterOptionButton.select("lohi");

      let inventoryItem = HomePage.getInventoryItem(0);

      HomePage.getItemName(inventoryItem).should("contain","Sauce Labs Onesie" );
      HomePage.getItemPrice(inventoryItem).should("contain", "$7.99");
    });


    it  ("Scenario 6", () => {

      HomePage.filterOptionButton.select("za");

      let inventoryItem = HomePage.getInventoryItem(0);

      HomePage.getItemName(inventoryItem).should("contain","Test.allTheThings() T-Shirt (Red)");
     
    });


    //Scenario 10 has been moved here because it shares beforeEach block with the scenarios above
    it ("Scenario 10", () => {
      
      HomePage.getItemClickableField("Test.allTheThings() T-Shirt (Red)").click();
      AllThingsTShirt.addToCartButton.click();
      TopBar.shoppingCartIcon.click();
      ShoppingCart.checkoutButton.click();
      CheckoutInfoPage.firstNameField.type("Janis");
      CheckoutInfoPage.lastNameField.type("Berzins");
      CheckoutInfoPage.zipCodeField.type("12345");
      CheckoutInfoPage.continueButton.click();
      CheckoutOverviewPage.inventoryItem.should("have.text", "Test.allTheThings() T-Shirt (Red)");
      CheckoutOverviewPage.finishButton.click();
      CheckoutCompletePage.completionMessage.should("have.text", "THANK YOU FOR YOUR ORDER");

      
    });


    context ("Add To Basket Tests", () => {

      beforeEach(() => {
      
        HomePage.getItemClickableField("Sauce Labs Bolt T-Shirt").click();
        BoltTShirtItem.addToCartButton.click();
        TopBar.shoppingCartBadge.should("have.text", 1);
      });


      it("Scenario 7", () => {
        
        BoltTShirtItem.backToProductsButton.click();
        HomePage.getItemClickableField("Sauce Labs Bike Light").click();
        BikeLightItem.addToCartButton.click();
        TopBar.shoppingCartBadge.should("have.text", 2);
        
      });
  
  
      it("Scenario 8", () => {
      
        TopBar.stackButton.click();
        TopBar.resetAppButton.click();
        TopBar.shoppingCartBadge.should('not.exist');
        
      });


      it ("Scenario 9", () => {
      
        BoltTShirtItem.removeButton.click();
        TopBar.shoppingCartBadge.should('not.exist');
        
      });
    })

  })

});



