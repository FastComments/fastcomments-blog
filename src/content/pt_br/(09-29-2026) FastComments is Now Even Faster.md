[category:Features]
[category:Performance]

###### [postdate]
# [postlink]FastComments está ainda mais rápido[/postlink]

{{#unless isPost}}
Removemos uma solicitação de rede ao carregar o widget de comentários, reduzindo ainda mais os tempos de carregamento.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Este artigo contém jargão técnico

### Novidades

Como o FastComments tem funcionado nos últimos cinco anos ou mais é que carregamos um pequeno script, o iframe carrega, então o script que inclui seu estilo, e então uma solicitação à API para tudo que é necessário para renderizar os comentários. Embora isso pareça muito, é muito compacto comparado à maioria dos sistemas!

No entanto, agora há ainda uma solicitação a menos. A resposta do iframe que entrega o widget também transporta os comentários e todos os dados que o usuário precisa inicialmente, então a última solicitação à API desapareceu.

A API continua mantida para compatibilidade retroativa para quem dela depende.

### Nada a Configurar

Não há nenhuma configuração para isso e nenhuma versão para atualizar. Se você incorpora o FastComments com nosso script, já o tem.

Sua própria página não é afetada de qualquer forma. O widget ainda carrega em um iframe e ainda não bloqueia seu conteúdo, exatamente como antes.

### Onde Não se Aplica

Alguns caminhos não utilizam isso, e eles se comportam exatamente como sempre fizeram:

- Rastreadores de mecanismos de busca, que já renderizam os comentários diretamente na página ao invés de em um iframe
- Feeds de atividade de usuários e filtragem por hashtags, que leem de endpoints diferentes

### Em Conclusão

Esperamos que você continue a gostar de usar nossa plataforma e que as melhorias que fazemos agreguem valor. :)

Saúde!

{{/isPost}}

---