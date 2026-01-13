---
[category:API & Development]

###### [postdate]
# [postlink]Nova API de Agregação Lançada[/postlink]

{{#unless isPost}}
FastComments oferece aos seus clientes acesso imbatível aos seus dados com uma API de agregação flexível e rápida
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Este Artigo Contém Jargão Técnico

### O que Há de Novo

FastComments oferece aos seus clientes acesso imbatível aos seus dados com uma API de agregação flexível. Esta API permite que você conte, investigue, divida e agregue
seus comentários, votos e **34 recursos a mais**!

### Exemplo - Contando Comentários por Email e Página

Por exemplo, com a nova API, podemos obter a contagem de comentários por página (`urlId`) e email do usuário (`commenterEmail`):  

<div class="code">  curl --request POST --url 'https://fastcomments.com/api/v1/aggregate?tenantId=demo&API_KEY=DEMO_API_SECRET&includeStats=true' --data '{
    "resourceName": "Comment",
    "operations": [
        { "op": "distinct", "field": "urlId", "alias": "urlId" },
        { "op": "distinct", "field": "commenterEmail", "alias": "commenterEmail" }
    ]
}' --header 'Content-Type: application/json'
</div>

Isso nos daria algo como:

<div class="code">  {
    "status": "success",
    "data": [
        {
            "commenterEmail": {
                "distinctCounts": {
                    "someone@somewhere.com": 1,
                    "someone2@somewhere.com": 1
                }
            }
        },
        {
            "urlId": {
                "distinctCounts": {
                    "some-page": 2
                }
            }
        }
    ],
    "stats": { "scanned": 2 }
}
</div>

Ou talvez queiramos contar nossos comentários aprovados e não aprovados:

<div class="code">  curl --request POST --url 'https://fastcomments.com/api/v1/aggregate?tenantId=demo&API_KEY=DEMO_API_SECRET&includeStats=true' --data '{
    "resourceName": "Comment",
    "operations": [
        { "op": "distinct", "field": "approved", "alias": "approved" },
    ]
}' --header 'Content-Type: application/json'
</div>

Nos dá:

<div class="code">  {
    "status": "success",
    "data": [
        {
            "approved": { "distinctCounts": { "true": 2200, "false": 231 } }
        }
    ],
    "stats": { "scanned": 2431 }
}
</div>

A API também suporta filtros de consulta e agrupamentos mais detalhados.

### Documentação

[Você pode encontrar a documentação completa aqui.](https://docs.fastcomments.com/guide-api.html#aggregate-post)

### Motivação

Queremos que nossos clientes possam construir painéis para monitorar suas contas, criar relatórios, atender solicitações de clientes e investigar seus dados conforme necessário.

### Quem Tem Acesso & Limites

Todos os clientes do FastComments têm acesso à API. Seu uso é limitado com base nos créditos da API disponíveis, que variam de acordo com o pacote que você comprou.

### Em Conclusão

Como em todos os lançamentos importantes, estamos felizes por poder dedicar tempo para otimizar, testar e lançar essas mudanças adequadamente. Deixe-nos saber
abaixo se você descobrir algum problema.

Saudações!

{{/isPost}}

---