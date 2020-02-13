###### [postdate]
# [postlink]Using FastComments in Multiple Places on The Same Page[/postlink]

FastComments is flexible. It attaches to a regular element on a page so it works with any web framework.

{{#unless isPost}}
Read this post to see an example of multiple instances of FastComments on the same page.
{{/unless}}

{{#isPost}}
This means we can have as many threads on a page as we want. For example, here are two threads side-by-side.

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
</style>

<script src="https://cdn.fastcomments.com/js/embed.min.js"></script>
<div class="widgets">
    <div class="widget left" id="fastcomments-widget2"></div>
    <div class="widget right" id="fastcomments-widget3"></div>
</div>

<script>
    window.FastCommentsUI(document.getElementById('fastcomments-widget2'), {
        tenantId: 'nYrnfYEv',
        urlId: window.location.href + '?cats',
        headerHTML: '<h1>Discuss Cats</h1>'
    });
</script>
<script>
    window.FastCommentsUI(document.getElementById('fastcomments-widget3'), {
        tenantId: 'nYrnfYEv',
        urlId: window.location.href + '?dogs',
        headerHTML: '<h1>Discuss Dogs</h1>'
    });
</script>

{{/isPost}}
