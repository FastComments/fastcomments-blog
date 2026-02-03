---
[category:Tutorials]
[category:UI & Customization]
{{#unless isPost}}
###### [postdate]
{{/unless}}
# [postlink]Como criar um sistema de comentários como o Hackaday.com[/postlink]

{{#unless isPost}}
Aqui vamos explorar como criar um thread de comentários que parece com o do Hackaday.

Se você clicar no link para este post, o estilo geral da página assim como o Blog FastComments irão mudar.

{{/unless}}

{{#isPost}}
###### 24 de Jan de 2020
<div class="post-header">
    <div class="by left">por: <a>Devon Winrick</a></div>
    <a id="post-header-comment-count" class="right" href="#fastcomments-widget"></a>
</div>

## UAU O QUE ACONTECEU?

Este post é uma demonstração de como usar o FastComments para criar um sistema de comentários que se parece com https://hackaday.com.

Não sugerimos que você os copie. Mas isso demonstra a flexibilidade do FastComments.

Fazer o FastComments parecer desta forma é simples!
Nós criamos uma interface para isso! Por exemplo, aqui está a configuração que usamos para fazer o FastComments combinar com esta página:

<div class="text-center">
    <img 
        src="images/fc-custom-settings-hackaday.png"
        alt="Configurações do FastComments Hackaday"
        class='lozad'
        height="850px" />
</div>

Se você quiser fazer isso em código, também é fácil.

Precisamos apenas definir algumas opções. Bem, sete. Aqui está o trecho de código (CSS personalizado omitido). Apenas uma quantidade limitada de CSS pode ser inserida dessa maneira. Recomendamos que você use
a interface acima para definir o CSS. Ela também irá compactá-lo para você, enquanto a definição da propriedade customCSS não aplicará otimizações de minificação.

<div class="code" id="code"></div>
<script>
document.getElementById('code').innerText = `
    window.FastCommentsUI(document.getElementById('fastcomments-widget'), {
        tenantId: 'demo',
        commentCountFormat: '[count] OPINIÕES SOBRE "COMO FAZER UM SISTEMA DE COMENTÁRIOS COMO HACKADAY.COM"',
        commentCountUpdated: function(count) {
            document.getElementById('post-header-comment-count').innerHTML = Number(count).toLocaleString() + ' Comentários';
        },
        headerHTML: '<h1>Deixe uma Resposta</h1>',
        hideAvatars: true,
        inputAfterComments: true,
        absoluteDates: true,
        customCSS: 'insira-css-personalizado-aqui'
    });`
</script>

Então, o que cada um desses significam?
- commentCountFormat = O formato do título acima do thread de comentários. "[count]" é substituído pelo número real de comentários localizados.
- commentCountUpdated = Uma função que é chamada quando a contagem de comentários muda. Nós usamos isso para definir a contagem de comentários no
topo da página.
- headerHTML = HTML que aparece acima da caixa "deixe uma resposta". Neste caso, nós o usamos para inserir um elemento de cabeçalho.
- hideAvatars = Hackaday não tem avatares. Então, definimos isso como verdadeiro para escondê-los.
- inputAfterComments = Reposiciona a caixa de resposta para o fundo do feed de comentários.
- absoluteDates = Muda o formato de data padrão (ou seja, "11 minutos atrás") para uma data absoluta.
- customCSS = Estilização personalizada.

Todas as opções de configuração estão documentadas <a href="https://github.com/FastComments/fastcomments-typescript/blob/main/src/fastcomments-config.ts" target="_blank">aqui</a>.

<style>
    body, .content {
        background: #1a1a1a;
        font-family: "proxima-nova-n7","proxima-nova-n6","proxima-nova",sans-serif;
        color: #fff;
    }
    
    .header {
        color: #fff;
        border: none;
    }
    
    .header .header-inner a {
        display: block;
        padding-top: 35px;
        color: #fff;
        text-align: center;
        font-size: 80px;
    }
    
    .header .header-inner .buttons {
        display: none;
    }
    
    .header .header-inner #watchly-target {
        display: none;
    }
    
    .left-right-art {
        display: none;
    }
    
    .content {
        position: relative;
        max-width: 1128px;
        margin: 57px auto;
        padding: 20px 0 20px 0;
        box-shadow: none;
        border-top: 5px solid #fff;
        box-sizing: border-box;
        font-size: 1rem;
        line-height: 1.4;
    }
    
    .content a {
        color: #f3bf10;
        text-decoration: none;
    }
    
    .content a:hover {
        color: #fddb2f;
    }
    
    .content .posts .post .post-description h1, .content .posts .post .post-description h1 a {
        margin: 0;
        padding: 20px 0 10px;
        font-style: normal;
        font-size: 51px !important;
        font-weight: 800;
        line-height: 1;
        text-transform: uppercase;
        color: #fff !important;
    }
    
    .content h6#jan-24nd-2020-1 {
        position: absolute;
        top: -80px;
        right: 0px;
        font-size: 17px;
        font-weight: 700;
    }
    
    .content .by {
        font-size: 20.4px;
    }
    
    .post-header {
        height: 20px;
    }
    
    .post-header a {
        cursor: pointer;
        font-weight: 600;
    }
    
    .post-header .left {
        float: left;
    }
    
    .post-header .right {
        float: right;
    }
    
    @media(max-width: 1024px) {
        .header {
            padding-top: 0;
        }
        
        .header .header-inner a {
            padding: 0;
            font-size: 40px;
        }
        
        .content {
            margin: 7px auto;
            padding: 8px;
        }
        
        .content h6#jan-24nd-2020-1 {
            top: -38px;
            right: 5px;
        }
        
        .content h1 {
            padding: 0 0 10px;
            font-size: 32px;
        }
    }
</style>
<link rel="stylesheet" href="https://use.typekit.net/dru2dki.css" />

<script>
    window.fcCommentCountUpdated = function(count) {
        document.getElementById('post-header-comment-count').innerHTML = Number(count).toLocaleString() + ' Comentários';
    };
</script>

{{/isPost}}

---