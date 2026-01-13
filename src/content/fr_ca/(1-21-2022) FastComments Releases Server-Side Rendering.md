---
[category:Features]
[category:API & Development]
###### [postdate]
# [postlink]FastComments publie le rendu sur le serveur[/postlink]

{{#unless isPost}}
Ajoutez des commentaires à votre site sans utiliser JavaScript.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Cet article contient un jargon technique

## Quoi de neuf

Depuis son lancement début 2020, FastComments a exclusivement utilisé JavaScript pour rendre le widget de commentaires.

Que diriez-vous si nous vous disions que vous pourriez avoir presque toutes les mêmes fonctionnalités essentielles, mais sans utiliser JS ?

<div class="text-center">
    <div class="sm">Ceci est une capture d'écran, arrêtez d'essayer de cliquer dessus.</div>
    <img src="images/ssr-demo.png" alt="Démo SSR" title="Démo SSR" />
</div>

La capture d'écran ci-dessus montre le widget de commentaires FastComments, sans JavaScript. [Vous pouvez voir cette page, sans JavaScript, ici.](https://fastcomments.com/ssr/comments?tenantId=L177BUDVvSe&urlId=ssr-test&url=https%3A%2F%2Ffastcomments.com%2Fssr%2Fcomments%2F%3FtenantId%3DL177BUDVvSe%26urlId%3Dssr-test)

## Comment l'utiliser

Si vous utilisez WordPress, la version 3.10.1 du plugin FastComments ajoute automatiquement le support pour SSR en tant que solution de secours pour vos utilisateurs qui naviguent avec JS désactivé.

Pour des implémentations personnalisées, récupérez l'interface utilisateur d'un fil de commentaires en appelant simplement le `/ssr/comments` pour cette page :

<div class="code"><div class="line">https://fastcomments.com/ssr/comments?tenantId=$tenantId&urlId=$urlId&url=$url</div></div>

Où `$urlId` est l'url, ou l'id, de la page. La documentation à ce sujet est [ici](https://docs.fastcomments.com/guide-customizations-and-configuration.html#url-id).

Par exemple, avec PHP, nous pouvons envoyer un iframe à la page qui rend le fil de commentaires à l'intérieur :

<div class="code"><div class="title">Exemple de SSR basé sur PHP</div><div class="contribute-code-snippet"></div><div class="line"><span class="line-number">1</span></div><div class="line"><span class="line-number">2</span><span class="hljs-meta">&lt;?php</span></div><div class="line has-tenant-id"><span class="line-number">3</span><span class="hljs-variable">$tenantId</span> = rawurlencode(<span class="hljs-string">"my-tenant-id"</span>);</div><div class="line"><span class="line-number">4</span><span class="hljs-variable">$urlId</span> = rawurlencode(<span class="hljs-string">"my-page-url-article-id"</span>);</div><div class="line"><span class="line-number">5</span><span class="hljs-variable">$url</span> = rawurlencode(<span class="hljs-string">"my-page-url"</span>);</div><div class="line"><span class="line-number">6</span></div><div class="line has-tenant-id"><span class="line-number">7</span><span class="hljs-variable">$fastcomments_url</span> = <span class="hljs-string">"https://fastcomments.com/ssr/comments?tenantId=<span class="hljs-subst">$tenantId</span>&amp;urlId=<span class="hljs-subst">$urlId</span>&amp;url=<span class="hljs-subst">$url</span>"</span>;</div><div class="line"><span class="line-number">8</span><span class="hljs-meta">?&gt;</span></div><div class="line"><span class="line-number">9</span>&lt;iframe</div><div class="line"><span class="line-number">10</span>    src=<span class="hljs-string">"&lt;?php echo <span class="hljs-subst">$fastcomments_url</span>; ?&gt;"</span></div><div class="line"><span class="line-number">11</span>    horizontalscrolling=<span class="hljs-string">"no"</span></div><div class="line"><span class="line-number">12</span>    allowtransparency=<span class="hljs-string">"true"</span></div><div class="line"><span class="line-number">13</span>    frameborder=<span class="hljs-string">"0"</span></div><div class="line"><span class="line-number">14</span>    title=<span class="hljs-string">"FastComments"</span></div><div class="line"><span class="line-number">15</span>    width=<span class="hljs-string">"100%"</span></div><div class="line"><span class="line-number">16</span>    height=<span class="hljs-string">"1500px"</span></div><div class="line"><span class="line-number">17</span>    style= <span class="hljs-string">"width: 1px !important; min-width: 100% !important; border: none !important; overflow: hidden !important;"</span></div><div class="line"><span class="line-number">18</span>&gt;&lt;/iframe&gt;</div><div class="line"><span class="line-number">19</span></div></div>

Nous pourrions également faire un appel API pour obtenir le HTML d'un fil de commentaires, et le rendre, ou le stocker.

Une documentation complète est disponible dans les [docs SSR sur docs.fastcomments.com](https://docs.fastcomments.com/guide-ssr.html).

## SSO

Parce que nous aimons les acronymes qui sonnent comme des entreprises, ne vous inquiétez pas, SSR prend en charge SSO. [Un exemple de Single-Sign-On avec SSR est ici.](https://github.com/FastComments/fastcomments-code-examples/blob/master/sso/php/ssr/server.php#L44)

## Localisation

Le point de terminaison basé sur SSR localise automatiquement la réponse en fonction des en-têtes de langue envoyés par le navigateur. Il peut également utiliser les mêmes surcharges de localisation que le widget basé sur JavaScript.

## Pourquoi cela a été construit

L'une des principales plaintes concernant des services comme FastComments est qu'ils nécessitent JS. Nous faisons déjà en sorte que notre widget de commentaire soit le plus léger possible et garantissons que nous respectons nos SLA d'appels API de < 20 ms, mais de nombreuses petites communautés ne choisiront pas une telle solution si cela signifie ajouter du JS à leur site.

Cela ouvre également la possibilité d'utiliser des moteurs de rendu qui n'ont pas accès à JavaScript.

## La technologie

FastComments utilise son propre petit microframework pour rendre l'UI. Ce framework utilise une approche similaire à React, sauf que les manipulations manuelles du DOM en dehors du rendu initial sont autorisées.

La bibliothèque du widget de commentaire a un seul point d'entrée - elle prend un ensemble d'états et crée le HTML et le CSS résultants à rendre. Nous appelons simplement cela sur le serveur aussi. Lorsque l'utilisateur interagit avec la page, l'état est modifié et le dernier HTML est récupéré. Cela a été construit à la suite d'un hackathon qui a eu lieu dans le cadre du Nouvel An.

## Commentaires en direct

Comme l'UI est rendue par le serveur, une seule fois, les fonctionnalités de commentaires en direct ne sont pas disponibles.

De plus, la cloche de notifications n'est actuellement pas disponible. Nous serons ouverts à l'ajout de cette fonctionnalité à l'avenir.

## Performances

L'interface utilisateur rendue par le serveur utilise les mêmes optimisations de stockage et moteur de rendu que le widget basé sur JavaScript. Pour les petits fils de commentaires, les performances sont en réalité meilleures, car l'utilisateur n'a pas à télécharger un script qui récupère ensuite les commentaires et rend l'UI.

## Robots et SEO

FastComments fonctionne déjà bien avec les robots d'exploration ; si le SEO est une préoccupation, l'utilisation de SSR n'est pas nécessaire.

## Applications futures

Nous prévoyons de lancer une solution Forum dans le futur. Traditionnellement, les forums sont paginés et rendus côté serveur. Les solutions de Forum modernes s'éloignent de cette norme en utilisant le défilement infini et le rendu côté client. Nous ne pensons pas que cela doive être la seule option pour utiliser une solution de Forum tiers.

## En conclusion

Nous espérons que vous avez trouvé ce guide utile et facile à lire. N'hésitez pas à commenter ci-dessous avec des questions.

Santé !

<style>/*

Monokai Sublime style. Dérivé de Monokai par noformnocontent http://nn.mit-license.org/

*/

.hljs {
  display: block;
  overflow-x: auto;
  padding: 0.5em;
  background: #23241f;
}

.hljs,
.hljs-tag,
.hljs-subst {
  color: #f8f8f2;
}

.hljs-strong,
.hljs-emphasis {
  color: #a8a8a2;
}

.hljs-bullet,
.hljs-quote,
.hljs-number,
.hljs-regexp,
.hljs-literal,
.hljs-link {
  color: #ae81ff;
}

.hljs-code,
.hljs-title,
.hljs-section,
.hljs-selector-class {
  color: #a6e22e;
}

.hljs-strong {
  font-weight: bold;
}

.hljs-emphasis {
  font-style: italic;
}

.hljs-keyword,
.hljs-selector-tag,
.hljs-name,
.hljs-attr {
  color: #f92672;
}

.hljs-symbol,
.hljs-attribute {
  color: #66d9ef;
}

.hljs-params,
.hljs-class .hljs-title {
  color: #f8f8f2;
}

.hljs-string,
.hljs-type,
.hljs-built_in,
.hljs-builtin-name,
.hljs-selector-id,
.hljs-selector-attr,
.hljs-selector-pseudo,
.hljs-addition,
.hljs-variable,
.hljs-template-variable {
  color: #e6db74;
}

.hljs-comment,
.hljs-deletion,
.hljs-meta {
  color: #75715e;
}
</style>

{{/isPost}}

---