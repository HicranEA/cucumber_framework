class SmartBearWebOrdersPage {
  /* Locators */
  getMenuItems() {
    return cy.get('#ctl00_menu > li a')
  }
  getMenuItemsByLabel(label) {
    return this.getMenuItems().contains(label)
  }
  getCheckAllButton() {
    return cy.get('#ctl00_MainContent_btnCheckAll')
  }
  getUncheckAllButton() {
    return cy.get('#ctl00_MainContent_btnUncheckAll')
  }
  getCheckBoxes() {
    return cy.get('[type="checkbox"]')
  }
  getDeleteSelectedButton() {
    return cy.get('#ctl00_MainContent_btnDelete')
  }
  getListOfOrdersMessage() {
    return cy.get('#ctl00_MainContent_orderMessage')
  }
  getProductDropDown() {
    return cy.get('#ctl00_MainContent_fmwOrder_ddlProduct')
  }
  getProductQuantity() {
    return cy.get('#ctl00_MainContent_fmwOrder_txtQuantity')
  }
  getTableBody() {
    return cy.get('.SampleTable')
  }
  getAddressInfo() {
    return cy.get('h3').contains('Address Information').next().find('input')
  }
  getPaymentInfo() {
    return cy.get('h3').contains('Payment Information').next().find('[type="text"]')
  }
  getCardTypeByLabel() {
    return cy.get('.RadioList label')
  }
  getProcessButton() {
    return cy.get('#ctl00_MainContent_fmwOrder_InsertButton')
  }
  getOrderDetail() {
    return cy.get('#ctl00_MainContent_orderGrid tr').eq('1')
  }

  /* Methods */
  clickCheckAllButton() {
    this.getCheckAllButton().click()
  }
  clickUncheckAllButton() {
    this.getUncheckAllButton().click()
  }
  clickDeleteSelectedButton() {
    this.getDeleteSelectedButton().click()
  }
  selectProduct(product) {
    this.getProductDropDown().select(product)
  }
  enterQuantity(quantity) {
    this.getProductQuantity().type(quantity)
  }
  clickCardType(label) {
    this.getCardTypeByLabel().contains(label).click()
  }
  clickProcessButton() {
    this.getProcessButton().click()
  }
}

module.exports = SmartBearWebOrdersPage
