class SmartBearLoginPage {
  /* Locators */
  getUserName() {
    return cy.get('#ctl00_MainContent_username')
  }
  getPassword() {
    return cy.get('#ctl00_MainContent_password')
  }
  getLoginButton() {
    return cy.get('#ctl00_MainContent_login_button')
  }
  getInvalidLoginMessage() {
    return cy.get('#ctl00_MainContent_status')
  }
  getProcessButton() {
    return cy.get('#ctl00_MainContent_fmwOrder_InsertButton')
  }

  /* Methods */
  clickLoginButton() {
    this.getLoginButton().click()
  }

  clickProcessButton() {
    this.getProcessButton().click()
  }
}

module.exports = SmartBearLoginPage
