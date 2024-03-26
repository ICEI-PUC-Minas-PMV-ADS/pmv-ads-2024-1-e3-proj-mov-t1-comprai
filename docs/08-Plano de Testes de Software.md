# Plano de Testes de Software

Os testes de software são essenciais para garantir a qualidade, confiabilidade e segurança do nosso aplicativo de lista de compras.

| **Caso de Teste 1: Criação de Lista de Compras** |                            |
|--------------------------------------|----------------------------|
| **Requisito Referente**              | (RF-002), (RF-003), (RF-004)             |
|             **Descrição**                         | Os usuários devem ser capazes de criar e adicionar itens a uma lista de compras. |
| **Objetivo do Teste**                | Verificar se o sistema permite aos usuários criar uma lista de compras de forma eficaz e adicionar itens a ela corretamente. |
| **Passos**                            | **Critérios de Êxito**      |
| 1. Na tela principal, selecionar a opção para criar uma nova lista de compras. | O sistema deve apresentar uma interface para que o usuário inicie a criação de uma nova lista. |
| 2. Adicionar itens à lista, incluindo nome do produto, quantidade e quaisquer outras informações relevantes. | Os itens devem ser adicionados corretamente à lista, e as informações devem ser salvas pelo sistema. |
| 3. Verificar se é possível editar ou remover itens da lista, se necessário. | O sistema deve permitir ao usuário editar ou remover itens da lista de compras de forma simples e intuitiva. |
| 4. Salvar a lista de compras criada. | A lista de compras deve ser salva pelo sistema e estar disponível para acesso posterior. |

| **Caso de Teste 2: Marcação de Itens Comprados** |                            |
|--------------------------------------|----------------------------|
| **Requisito Referente**              | (RF-005)            |
|             **Descrição**                         | Os usuários devem ser capazes de marcar os itens como comprados na lista de compras. |
| **Objetivo do Teste**                | Verificar se o sistema permite aos usuários marcar corretamente os itens como comprados na lista. |
| **Passos**                            | **Critérios de Êxito**      |
| 1. Acessar uma lista de compras existente. | O sistema deve permitir ao usuário escolher uma lista de compras previamente criada. |
| 2. Localizar o item na lista que deseja marcar como comprado. | O usuário deve ser capaz de encontrar o item desejado na lista de compras. |
| 3. Marcar o item como comprado. | O sistema deve permitir ao usuário selecionar o item e marcar como comprado de forma clara e fácil. |
| 4. Verificar se o item é atualizado corretamente na lista de compras. | Após marcar o item como comprado, ele deve ser atualizado na lista, indicando que foi comprado com sucesso. |

| **Caso de Teste 3: Cálculo do Total de Despesas** |                            |
|--------------------------------------|----------------------------|
| **Requisito Referente**              | (RF-006)            |
|             **Descrição**                         | O sistema deve calcular o total de despesas com base nos itens da lista de compras. |
| **Objetivo do Teste**                | Verificar se o sistema calcula corretamente o total de despesas com base nos itens adicionados à lista de compras. |
| **Passos**                            | **Critérios de Êxito**      |
| 1. Acessar uma lista de compras existente. | O sistema deve permitir ao usuário escolher uma lista de compras previamente criada. |
| 2. Verificar se o sistema exibe o total de despesas atualizado com base nos itens da lista. | O sistema deve calcular o total de despesas corretamente e exibi-lo de forma clara e legível para o usuário. |
| 3. Adicionar ou remover itens da lista e verificar se o total de despesas é atualizado adequadamente. | Após adicionar ou remover itens da lista, o total de despesas deve ser recalculado e exibido corretamente. |

| **Caso de Teste 4: Interface Intuitiva** |                            |
|--------------------------------------|----------------------------|
| **Requisito Referente**              | (RNF-002), (RNF-006)            |
|             **Descrição**                         | O sistema deve possuir uma interface fácil de usar e intuitiva. |
| **Objetivo do Teste**                | Verificar se a interface do sistema é intuitiva e atende aos requisitos de usabilidade. |
| **Passos**                            | **Critérios de Êxito**      |
| 1. Navegar pela interface do aplicativo. | O usuário deve ser capaz de navegar pela interface do aplicativo de forma clara e intuitiva. |
| 2. Verificar se as funcionalidades estão bem organizadas e são de fácil acesso. | As funcionalidades principais, como criar uma lista, adicionar itens e comparar preços, devem estar facilmente acessíveis na interface. |
| 3. Testar a interação com elementos da interface, como botões e menus. | Os elementos da interface devem responder adequadamente às interações do usuário, como clicar em botões e navegar pelos menus. |
| 4. Avaliar a consistência do design e o uso de elementos visuais. | O design da interface deve ser consistente em todas as telas e utilizar elementos visuais de forma eficaz para facilitar a compreensão e a usabilidade. |