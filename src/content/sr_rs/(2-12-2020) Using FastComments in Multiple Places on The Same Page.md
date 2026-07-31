[category:Tutorials]

###### [postdate]
# [postlink]Коришћење FastComments у више места на истој страници[/postlink]

FastComments је флексибилан. Прикључује се на уобичајени елемент на страници, тако да ради са било којим веб оквиром.

{{#unless isPost}}
Прочитајте овај пост да видите пример вишеструких инстанци FastComments на истој страници.
{{/unless}}

{{#isPost}}
Ово значи да можемо имати колико год желимо тема на страници. На пример, ево две теме једна поред друге.

<style>
.content {
    max-width: 1220px;
}

.content .widgets {
    text-align: center;
}

.content .widget {
    display: inline-block;
    width: 49%;
    vertical-align: top;
}

#fastcomments-widget {
    display: none;
}

@media(max-width: 768px) {
    .content .widget {
        display: block;
        width: 100%;
    }
}
</style>

<script src="https://cdn.fastcomments.com/js/embed-v2.min.js"></script>
<div class="widgets">
    <div class="widget left" id="fastcomments-widget2"></div>
    <div class="widget right" id="fastcomments-widget3"></div>
</div>

<script>
    window.FastCommentsUI(document.getElementById('fastcomments-widget2'), {
        tenantId: 'L177BUDVvSe',
        urlId: window.location.href + '?cats',
        headerHTML: '<h2>Discuss Cats</h2>',
        customCSS: '.footer { display: none }'
    });
</script>
<script>
    window.FastCommentsUI(document.getElementById('fastcomments-widget3'), {
        tenantId: 'L177BUDVvSe',
        urlId: window.location.href + '?dogs',
        headerHTML: '<h2>Discuss Dogs</h2>',
        customCSS: '.footer { display: none }'
    });
</script>

### Како то функционише

Ово је код који ово остварује. Прилагођавамо параметар urlId да би свака тема била јединствена. Имајте на уму да користимо id‑ове, али можете проследити било који DOM елемент добијен на било који начин који желите.


<div class="code" id="code">&lt;script src="https://cdn.fastcomments.com/js/embed-v2.min.js"&gt;&lt;/script&gt;
&lt;div class="widgets"&gt;
   &lt;div class="widget left" id="fastcomments-widget2"&gt;&lt;/div&gt;
   &lt;div class="widget right" id="fastcomments-widget3"&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;script&gt;
 window.FastCommentsUI(document.getElementById('fastcomments-widget2'), {
   tenantId: 'L177BUDVvSe',
   urlId: window.location.href + '?cats',
   headerHTML: '&lt;h2&gt;Discuss Cats&lt;/h2&gt;'
 });
&lt;/script&gt;
&lt;script&gt;
 window.FastCommentsUI(document.getElementById('fastcomments-widget3'), {
   tenantId: 'L177BUDVvSe',
   urlId: window.location.href + '?dogs',
   headerHTML: '&lt;h2&gt;Discuss Dogs&lt;/h2&gt;'
 });
&lt;/script&gt;</div>

{{/isPost}}

---