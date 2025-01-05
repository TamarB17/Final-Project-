Cypress.Commands.add('Registration', (data) => {
  cy.visit('https://zootopia.ge/ka');
  cy.get('.menu-pop > .rprof').click();
  cy.get('.input-shablon > p > a').click();
  cy.get(':nth-child(1) > .ismile')
    .should('have.attr', 'placeholder', 'სახელი გვარი')
    .type(data.username);
  cy.get(':nth-child(2) > .imail')
    .should('have.attr', 'placeholder', 'ელ.ფოსტა')
    .type(data.email);
  cy.get('.ipir')
    .should('have.attr', 'placeholder', 'პირადი ნომერი')
    .type(data.personalId);
  cy.get(':nth-child(4) > .itel')
    .should('have.attr', 'placeholder', 'ტელ')
    .type(data.phone);
  cy.get(':nth-child(5) > .ipass')
    .should('have.attr', 'placeholder', 'პაროლი')
    .type(data.password);
  cy.get('.reg-form-left > :nth-child(6) > .ipass')
    .should('have.attr', 'placeholder', 'პაროლის გამეორება')
    .type(data.password);
  cy.get('#Path_10302').click();
  cy.get('.regsub').click();
});
Cypress.Commands.add('RegEmptyFields', () => {
  cy.visit('https://zootopia.ge/ka');
  cy.get('.menu-pop > .rprof').click();
  cy.get('.input-shablon > p > a').click();
  cy.get('#Path_10302').click();
  cy.get('.regsub').click();
  cy.get(':nth-child(1) > .alert > img').should('be.visible');
  cy.get('.alert-text')
    .invoke('show')
    .should('be.visible')
    .and('contain', 'შეავსეთ ველი');
});
Cypress.Commands.add('login', (data) => {
  cy.visit('https://zootopia.ge/ka');
  cy.get('.menu-pop > .rprof').click();
  cy.get(':nth-child(5) > .imail')
    .should('have.attr', 'placeholder', 'ელ.ფოსტა')
    .type(data.email);
  cy.get('.ipass')
    .should('have.attr', 'placeholder', 'პაროლი')
    .type(data.password);
  cy.get('.avtorization > .input-shablon > .form-button')
    .should('be.visible')
    .and('contain', 'ავტორიზაცია');
  cy.get('.avtorization > .input-shablon > .form-button').click();
  cy.get('.menu-pop > .iprof > p')
    .should('be.visible')
    .and('contain', 'პროფილი');
});
Cypress.Commands.add('logEmptyFields', () => {
  cy.visit('https://zootopia.ge/ka');
  cy.get('.menu-pop > .rprof').click();
  cy.get(':nth-child(5) > .imail').should(
    'have.attr',
    'placeholder',
    'ელ.ფოსტა'
  );
  cy.get('.ipass').should('have.attr', 'placeholder', 'პაროლი');
  cy.get('.avtorization > .input-shablon > .form-button')
    .should('be.visible')
    .and('contain', 'ავტორიზაცია');
  cy.get('.avtorization > .input-shablon > .form-button').click();
  cy.get('.alert-text')
    .invoke('show')
    .should('be.visible')
    .and('contain', 'არასწორი ელ.ფოსტა ან პაროლი');
});
Cypress.Commands.add('cart', () => {
  cy.visit('https://zootopia.ge/ka');
  cy.get('.popmenu-burger > .burger-span').click();
  cy.get(
    '[imgsrc="/uploads/ProductCategory/997861594708360.jpg"] > [href="javascript:void(0)"]'
  )
    .should('contain.text', 'კატები')
    .click();
  cy.get(
    '.cat-down.active > .category-holder > :nth-child(1) > .category-drop-title'
  )
    .should('contain.text', 'საკვები')
    .click();
  cy.get('.category-holder > .active > :nth-child(2) > a')
    .should('contain.text', 'მშრალი საკვები')
    .click();
  cy.get(':nth-child(1) > .price-cart > .product-cart')
    .click()
    .should('contain.text', 'დამატებულია');
  cy.get(':nth-child(2) > .price-cart > .product-cart')
    .click()
    .should('contain.text', 'დამატებულია');
  cy.get(':nth-child(3) > .price-cart > .product-cart')
    .click()
    .should('contain.text', 'დამატებულია');
  cy.get('.menu-pop > [href="https://zootopia.ge/ka/cart"] > #cart-items-count')
    .should('be.visible')
    .and('contain.text', '3');
  cy.get('.menu-pop > [href="https://zootopia.ge/ka/cart"]').click();
  cy.get('.cart-list .cart-item').should('have.length', 3);
});
