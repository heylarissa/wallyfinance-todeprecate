# Requirements
Project to manage personal finances

### Funcionalidades

- [ ] Autenticação
- [ ] Adicionar usuário ao grupo de família
- [ ] Cadastrar tipos de despesa
- [ ] Cadastrar lançamentos

### Tabelas
Tipos de despesa
- id
- tipo

ex: compras_pessoais, compras_casa, investimentos, despesas_fixas, manutencao_casa, alimentacao, remédio, saúde, transporte, educacão, lazer, telefones, renda_extra, assinaturas

Lançamentos
- id
- nome
- receita/despesa
- valor
- data/vencimento
- data_entrada
- forma-pagamento
- categoria
- grupo_familia

Formas de pagamento
- id
- tipo
- grupo_familia