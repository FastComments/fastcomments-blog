---
[category:Integrations]
###### [postdate]
# [postlink]Adicionando Comentários a um Blog do BigCommerce[/postlink]

{{#isPost}}

#### Adicione Engajamento do Público a Qualquer Página
E se seu público pudesse comentar em suas postagens de blog, fazer perguntas e dar feedback? Agora eles podem com o FastComments.

#### Temas Personalizados
Para adicionar o FastComments ao blog da sua loja BigCommerce, você precisará editar os templates do seu tema. Nós iremos te guiar por isso.

No painel do BigCommerce, vá para Storefront -> Meus Temas.

<div class="text-center">
    <img style="vertical-align: top;" src="images/fc-bigcommerce-store-link.png" alt="Link da Loja" title="Link da Loja" class="lozad" />
    <img style="vertical-align: top;" src="images/fc-bigcommerce-my-themes.png" alt="Link dos Meus Temas" title="Link dos Meus Temas" class="lozad" />
</div>

Sob "Tema Atual", você verá um dropdown com o rótulo "Avançado".

<div class="text-center">
    <img src="images/fc-bigcommerce-advanced-dropdown.png" alt="Dropdown Avançado do Tema" title="Dropdown Avançado do Tema" class="lozad" />
</div>

Neste dropdown, a primeira opção é "Editar Arquivos do Tema". Se essa opção não for clicável, você precisará copiar o tema primeiramente via "Fazer uma Cópia".

Uma vez que você possa abrir o editor de templates, verá um navegador de arquivos no lado esquerdo do seu navegador. Este é um navegador de arquivos para os templates do seu tema.

Você vai querer navegar até o template HTML que representa uma postagem de blog. Ele está em templates/components/blog/post.html, como ilustrado:

<div class="text-center">
    <img src="images/fc-bigcommerce-editor-post-file.png" alt="Localização do Arquivo do Editor de Postagem" title="Localização do Arquivo do Editor de Postagem" class="lozad" />
</div>

Seu código FastComments, que você pode obter <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">aqui</a>, deve ser colado logo após a linha 48, que tem o texto "&#123;{>components/common/share}&#125;".

<div class="text-center">
    <img src="images/fc-bigcommerce-blog-post-script-location.png" alt="Local para inserir o FastComments" title="Local para inserir o FastComments" class="lozad" />
</div>

#### Lembre-se!
Você precisará adicionar o domínio da sua loja ao FastComments, o que você pode fazer <a href="https://fastcomments.com/auth/my-account/configure-domains" target="_blank">aqui</a>.

#### Em Conclusão
Aqui está como o FastComments deve parecer no seu blog do BigCommerce. Saudações!

<div class="text-center">
    <img src="images/fc-bigcommerce-blog-post-example.png" alt="FastComments em um Blog do BigCommerce" title="FastComments em um Blog do BigCommerce" class="lozad" />
</div>

{{/isPost}}

---