/// <reference types="cypress" />

import produtosPages from "../support/page_objects/produtos.pages";


context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  /*  Como cliente 
      Quero acessar a Loja EBAC 
      Para fazer um pedido de 4 produtos 
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkout
      E validando minha compra ao final */

      beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.login('aluno_ebac@teste.com' , 'teste@teste.com')
        produtosPages.visitarUrl()
      });

  it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
      produtosPages.buscarProduto('Aether Gym Pant')
      cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
      
  });


})