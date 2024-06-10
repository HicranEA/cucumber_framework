const { When, Then } = require('@badeball/cypress-cucumber-preprocessor')

const SmartBearWebOrdersPage = require('../../../pages/SmartBearWebOrdersPage')

const SmartBearLoginPage = require('../../../pages/SmartBearLoginPage')

const smartBearLoginPage = new SmartBearLoginPage()
const smartBearWebOrdersPage = new SmartBearWebOrdersPage()

/*
Given(/^user is on "([^"]*)"$/, (url) => {  //in common steps
  cy.visit(url)
}) 
  */

When(/^user enters username as "([^"]*)"$/, (username) => {
  smartBearLoginPage.getUserName().type(username)
})

When(/^user enters password as "([^"]*)"$/, (password) => {
  smartBearLoginPage.getPassword().type(password)
})

When(/^user clicks on "([^"]*)" button$/, () => {
  smartBearLoginPage.clickLoginButton()
})

Then(/^user should see "([^"]*)" message$/, (message) => {
  smartBearLoginPage.getInvalidLoginMessage().should('have.text', message)
})

Then(/^user should be routed to "([^"]*)"$/, (url) => {
  cy.url('eq', url)
})

const menuItems = ['View all orders', 'View all products', 'Order']

Then(/^validate below menu items are displayed$/, () => {
  smartBearWebOrdersPage.getMenuItems().each(($el, index) => {
    cy.wrap($el).should('have.text', menuItems[index])
  })
})

When(/^user clicks on "([^"]*)" check button$/, () => {
  smartBearWebOrdersPage.clickCheckAllButton()
})

Then(/^all rows should be checked$/, () => {
  smartBearWebOrdersPage.getCheckBoxes().each(($el) => {
    cy.wrap($el).should('be.checked')
  })
})

When(/^user clicks on "([^"]*)" uncheck button$/, () => {
  smartBearWebOrdersPage.clickUncheckAllButton()
})

Then(/^all rows should be unchecked$/, () => {
  smartBearWebOrdersPage.getCheckBoxes().each(($el) => {
    cy.wrap($el).should('not.be.checked')
  })
})

When(/^user clicks on "Delete Selected" delete button$/, () => {
  smartBearWebOrdersPage.clickDeleteSelectedButton()
})

Then(/^validate all orders are deleted from the List of All Orders$/, () => {
  smartBearWebOrdersPage.getTableBody().should('not.exist')
})

Then(/^validate user sees "([^"]*)" message$/, (message) => {
  smartBearWebOrdersPage.getListOfOrdersMessage().contains(message)
})

When(/^user clicks on "([^"]*)" order menu item$/, (label) => {
  smartBearWebOrdersPage.getMenuItemsByLabel(label).click()
})

const productInfo = ['FamilyAlbum', '2']

When(/^user enters all product information$/, () => {
  smartBearWebOrdersPage.selectProduct(productInfo[0])
  smartBearWebOrdersPage.enterQuantity(productInfo[1])
})

const adressInfo = ['John Doe', '1234', 'Chicago', 'IL', '60611']

When(/^user enters all address information$/, () => {
  smartBearWebOrdersPage.getAddressInfo().each(($el, index) => {
    cy.wrap($el).type(adressInfo[index])
  })
})

const paymentInfo = ['Visa', '123412341234', '07/20']

When(/^user enters all payment information$/, () => {
  smartBearWebOrdersPage.clickCardType(paymentInfo[0])
  smartBearWebOrdersPage.getPaymentInfo().each(($el, index) => {
    cy.wrap($el).type(paymentInfo[index + 1])
  })
})

When(/^user clicks on "([^"]*)" process button$/, () => {
  smartBearWebOrdersPage.clickProcessButton()
})

When(/^user clicks on "([^"]*)" menu item$/, (label) => {
  smartBearWebOrdersPage.getMenuItemsByLabel(label).click()
})

const orderDetail = [...productInfo, ...adressInfo, ...paymentInfo]
Then(/^validate all information entered displayed correct with the order$/, () => {
  for (let i = 0; i < orderDetail.length; i++) {
    smartBearWebOrdersPage.getOrderDetail().contains(orderDetail[i])
  }
})
