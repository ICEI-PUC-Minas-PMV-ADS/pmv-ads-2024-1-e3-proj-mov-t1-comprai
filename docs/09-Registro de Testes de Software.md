# Registro de Testes de Software

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>, <a href="8-Plano de Testes de Software.md"> Plano de Testes de Software</a>

Relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado em um plano de testes pré-definido.

## Avaliação

Registro e testes de Software

*   CT-01 Caso de teste 1: Criação de Lista de Compras

Requisitos Referentes: (RF-002), (RF-003), (RF-004)

Objetivo do teste: Verificar se o sistema permite aos usuários criar uma lista de compras de forma eficaz e adicionar itens a ela corretamente.

Passos:

1) 1. Na tela principal, selecionar a opção para criar uma nova lista de compras
*Critério de Êxito: O sistema deve apresentar uma interface para que o usuário inicie a criação de uma nova lista.*

2) 2. Adicionar itens à lista, incluindo nome do produto, quantidade e quaisquer outras informações relevantes.
*Critério de Êxito: Os itens devem ser adicionados corretamente à lista, e as informações devem ser salvas pelo sistema.*

3) 3. Verificar se é possível editar ou remover itens da lista, se necessário.
*Critério de Êxito: O sistema deve permitir ao usuário editar ou remover itens da lista de compras de forma simples e intuitiva.*

4) 4. Salvar a lista de compras criada.
*Critério de Êxito: A lista de compras deve ser salva pelo sistema e estar disponível para acesso posterior.*

**Etapas do teste:**

**Etapa 1-** Localizar a aba de criação de listas. (Após logar no aplicativo, o usuário será redirecionado a tela principal (Home), após isso deve clicar no botão intuitivo de criação de telas ou caso prefira, clicar na opção através da barra de navegação inferior).

<img src="../docs/img/Teste de Software 1 (1).jpg" >

**Etapa 2-** Inserir os produtos na lista. (Após clicar no botão de criação por meio das duas opções disponíveis, o usuário deve inserir os itens de compra em sua lista).

<img src="../docs/img/Teste de Software 1 (2).jpg">

<br>

* CT-02 Caso de teste 2: Marcação de itens comprados

Requisitos Referentes: (RF-005)

Objetivo do teste: Verificar se o sistema permite aos usuários marcar corretamente os itens como comprados na lista.

Passos:

1) 1. Acessar uma lista de compras existente.
*Critério de Êxito: O sistema deve permitir ao usuário escolher uma lista de compras previamente criada.*

2) 2. Localizar o item na lista que deseja marcar como comprado.
*Critério de Êxito: O usuário deve ser capaz de encontrar o item desejado na lista de compras.*

3) 3. Marcar o item como comprado.
*Critério de Êxito: O sistema deve permitir ao usuário selecionar o item e marcar como comprado de forma clara e fácil.*

4) 4. Verificar se o item é atualizado corretamente na lista de compras.
*Critério de Êxito: Após marcar o item como comprado, ele deve ser atualizado na lista, indicando que foi comprado com sucesso.*

**Etapas do teste**

**Etapa 1-** Localizar uma lista existente na aba de minhas listas (Caso não tenha sido criada ainda, deve-se clicar no botão de criação de listas e depois retornar a aba para conferí-las).

<img src="../docs/img/Teste de Software 1 (3).jpg">

**Etapa 2-** Clicar em um item da lista, onde o mesmo irá se tornar um item riscado representado o sinal de já comprado em sua lista (Caso clicado novamente, o item será desmarcado e se tornará elegível a compra novamente).

<img src="../docs/img/Teste de Software 1 (4).jpg">

<br>

* CT-03 Caso de teste 3: Cálculo do Total de Despesas

Requisitos Referentes: (RF-006)

Objetivo do teste: Verificar se o sistema calcula corretamente o total de despesas com base nos itens adicionados à lista de compras.

Passos:

1) 1. Acessar uma lista de compras existente.
*Critério de Êxito: O sistema deve permitir ao usuário escolher uma lista de compras previamente criada.*

2) 2. Verificar se o sistema exibe o total de despesas atualizado com base nos itens da lista.
*Critério de Êxito: O sistema deve calcular o total de despesas corretamente e exibi-lo de forma clara e legível para o usuário.*

3) 3. Adicionar ou remover itens da lista e verificar se o total de despesas é atualizado adequadamente.
*Critério de Êxito: Após adicionar ou remover itens da lista, o total de despesas deve ser recalculado e exibido corretamente.*

**Etapas do teste**

**Etapa 1-** Adicionar um item a uma lista e incluir seu valor de produto.

<img src="../docs/img/Teste de Software 1 (5).jpg">

**Etapa 2-** Após adicionar os produtos e seus valores na lista, confira a soma total dos itens no canto inferior direito da tela.

<img src="../docs/img/Teste de Software 1 (6).jpg">

<br>

* CT-04 Caso de teste 4: Interface Intuitiva (Acessibilidade)

Requisitos Referentes: (RNF-002),(RNF-006)

Objetivo do teste: Verificar se a interface do sistema é intuitiva e atende aos requisitos de usabilidade.

Passos:

1) 1. Navegar pela interface do aplicativo.
*Critério de Êxito: O usuário deve ser capaz de navegar pela interface do aplicativo de forma clara e intuitiva.*

2) 2. Verificar se as funcionalidades estão bem organizadas e são de fácil acesso.
*Critério de Êxito: As funcionalidades principais, como criar uma lista, adicionar itens e comparar preços, devem estar facilmente acessíveis na interface.*

3) 3. Testar a interação com elementos da interface, como botões e menus.
*Critério de Êxito: Os elementos da interface devem responder adequadamente às interações do usuário, como clicar em botões e navegar pelos menus.*

4) 4. Avaliar a consistência do design e o uso de elementos visuais.
*Critério de Êxito: O design da interface deve ser consistente em todas as telas e utilizar elementos visuais de forma eficaz para facilitar a compreensão e a usabilidade.*

**Resultado**

![Gif projeto Compraí](../docs/img/Compraí-Projeto.gif)