/// <reference types="cypress" />
  import produtosPages from "../support/page_objects/produtos.pages";

describe('Funcionalidade Login', () => {

    beforeEach(() => {
      cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
      cy.login('aluno_ebac@teste.com' , 'teste@teste.com')
      produtosPages.visitarUrl()
    });

    it('Teste de código', () => {
      produtosPages.buscarProduto('Aether Gym Pant')
      cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
    });


})