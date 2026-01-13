---
[category:Anúncios]

###### [postdate]
# [postlink]FastComments Agora Está Backup em Vários Provedores de Nuvem[/postlink]

{{#unless isPost}}
Desde abril de 2023, os bancos de dados do FastComments estão agora armazenados em vários provedores de nuvem por precaução extra.
{{/unless}}

{{#isPost}}

### O Que Há de Novo

Anteriormente, o FastComments tinha backups de banco de dados ao vivo em vários servidores, mas no mesmo provedor de nuvem.

O FastComments utiliza principalmente o Linode para as regiões dos EUA-Oeste e da UE, como implantações separadas de banco de dados e aplicação.

Cada região anteriormente tinha sua própria réplica para o banco de dados como um backup ao vivo. Se o banco de dados primário fosse perdido, por qualquer motivo, 
o backup ao vivo estaria disponível para assumir seu lugar. Instantâneas do banco de dados também são realizadas nesses backups.

Agora adicionamos backups em outro provedor de nuvem, para que os dados em cada região não fiquem isolados a um único datacenter por região.

A nova topologia de banco de dados é:

- EUA-Oeste
  - Um cluster de banco de dados no Linode na Califórnia.
  - **NOVO** Uma réplica ao vivo no Hetzner em Oregon.
- UE
  - Um cluster de banco de dados no Linode em Frankfurt.
  - **NOVO** Uma réplica ao vivo no Hetzner em Falkenstein.

Essas réplicas são ao vivo, elas sempre têm a versão mais recente do banco de dados.

### Em Conclusão

Como em todos os lançamentos importantes, estamos felizes por podermos dedicar tempo para otimizar, testar e liberar adequadamente este recurso. Deixe-nos saber
abaixo se você descobrir algum problema.

Saudações!

{{/isPost}}

---