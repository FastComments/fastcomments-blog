---
[category:Integrations]
[category:API & Development]

###### [postdate]
# [postlink]Pacote Oficial do Laravel Lançado[/postlink]

{{#unless isPost}}
Liberamos um pacote oficial do Laravel com componentes Blade prontos para uso, SSO automático e integração com a API.
{{/unless}}

{{#isPost}}

### O Que Há de Novo

Estamos animados em anunciar o lançamento do nosso pacote oficial do Laravel, `fastcomments/laravel`. Se você está construindo com Laravel e quer adicionar
comentários, chat ao vivo ou contagens de comentários à sua aplicação, agora você pode fazer isso com uma única instalação do Composer e alguns componentes Blade.

O pacote é compatível com Laravel 10, 11 e 12 no PHP 8.1+.

### Começando

Instale com o Composer:

    composer require fastcomments/laravel

Em seguida, adicione seu ID de inquilino e chave API ao seu `.env`:

    FASTCOMMENTS_TENANT_ID=seu-id-de-inquilino
    FASTCOMMENTS_API_KEY=sua-chave-api

É isso. O provedor de serviço e a fachada são descobertos automaticamente - não é necessário registro manual. Você pode publicar o arquivo de configuração para personalização adicional:

    php artisan vendor:publish --tag=fastcomments-config

### Componentes Blade Prontos para Uso

O pacote inclui três componentes Blade que você pode usar diretamente em seus templates:

**Widget de comentários:**

    <x-fastcomments url-id="minha-pagina" />

**Widget de chat ao vivo:**

    <x-fastcomments-live-chat url-id="minha-sala-de-chat" />

**Contagem de comentários:**

    <x-fastcomments-comment-count url-id="minha-pagina" />

Cada componente suporta props como `url`, `locale`, `readonly`, `has-dark-background`, e `default-sort-direction`. Scripts são carregados
de forma assíncrona e deduplicados, portanto você pode colocar vários widgets na mesma página com segurança.

### SSO Automático

O SSO pode ser ativado com duas variáveis de ambiente:

    FASTCOMMENTS_SSO_ENABLED=true
    FASTCOMMENTS_SSO_MODE=secure

Uma vez ativado, os componentes de comentários e chat ao vivo automaticamente leem `Auth::user()` e injetam a carga útil SSO assinada na configuração do widget.
Usuários autenticados são verificados sem interrupções. Visitantes veem links de login e logout que defaultam para suas rotas nomeadas `login` e `logout` do Laravel.

Há duas maneiras de controlar como seu modelo User mapeia para os dados do usuário do FastComments:

**Mapeamento baseado em configuração** - configure nomes de atributos (incluindo notação de ponto) ou chamadores em `config/fastcomments.php`:

```php
'user_map' => [
    'id' => 'id',
    'email' => 'email',
    'username' => 'name',
    'avatar' => 'profile_photo_url',
],
```

**Mapeamento baseado em interface** - implemente `MapsToFastCommentsUser` em seu modelo User para controle total:

```php
use FastComments\Laravel\SSO\Contracts\MapsToFastCommentsUser;

class User extends Authenticatable implements MapsToFastCommentsUser
{
    public function toFastCommentsUserData(): array
    {
        return [
            'id' => (string) $this->id,
            'email' => $this->email,
            'username' => $this->name,
            'avatar' => $this->avatar_url,
            'is_admin' => $this->hasRole('admin'),
        ];
    }
}
```

Ambos os modos de SSO Seguro (assinatura HMAC, recomendado para produção) e SSO Simples são suportados.

### Integração com a API

O pacote também envolve a API do FastComments com uma fachada, injeção de dependência e injeção direta do cliente SDK:

```php
use FastComments\Laravel\Facades\FastComments;

// API de Admin
$comments = FastComments::admin()->getComments(...);

// API Pública
$counts = FastComments::publicApi()->getCommentCounts(...);

// Token SSO para uso personalizado
$token = FastComments::sso()->tokenFor($user);
```

### Residência de Dados na UE

Para clientes que utilizam nossa região da UE, uma única variável de ambiente altera todos os endpoints - widgets, chamadas de API e SSO:

    FASTCOMMENTS_REGION=eu

### Em Conclusão

Esperamos que este pacote facilite a adição do FastComments às suas aplicações Laravel. Ele já está disponível em <a href="https://packagist.org/packages/fastcomments/laravel" target="_blank">Packagist</a>
e o código-fonte está no <a href="https://github.com/FastComments/fastcomments-laravel" target="_blank">GitHub</a>.

Deixe-nos saber abaixo se você tem algum feedback!

Saudações!

{{/isPost}}

---