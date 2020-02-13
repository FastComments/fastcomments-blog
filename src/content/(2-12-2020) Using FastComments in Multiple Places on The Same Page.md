###### [postdate]
# [postlink]Using FastComments in Multiple Places on The Same Page[/postlink]

FastComments is flexible. It attaches to a regular element on a page so it works with any web framework.

This means we can have as many threads on a page as we want. For example, here's a thread only for cats, and at the end of the page is the regular
blog comment thread.

<script src="https://cdn.fastcomments.com/js/embed.min.js"></script>
<div id="fastcomments-widget2"></div>
<script>
    window.FastCommentsUI(document.getElementById('fastcomments-widget2'), {
        tenantId: 'nYrnfYEv',
        headerHTML: '<h1>Discuss Cats</h1>'
    });
</script>
