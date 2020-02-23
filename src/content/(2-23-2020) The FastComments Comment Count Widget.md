###### [postdate]
# [postlink]The FastComments Comment Count Widget[/postlink]

Want to show off the number of comments on a page before a user clicks in? No problem with FastComments.

{{#isPost}}
The first of many to come - FastComments now supports comment count widgets.

For example, this page has <b><span id="fastcomments-widget-comment-count"></span></b>. That number is inserted via the widget! 
<script src="https://cdn.fastcomments.com/js/widget-comment-count.min.js"></script>
<script>
    window.FastCommentsCommentCount(document.getElementById('fastcomments-widget-comment-count'), {
        tenantId: 'nYrnfYEv'
    });
</script>

It's a live count, with a 60 second cache to help serve very popular pages faster. This means you may see the live count lag behind the count of
your comments by a minute, but that's to ensure FastComments lives up to its name.

A better example may be a list of blog posts, for example:

### Post #1
##### 64 Comments


### Post #2
##### 128 Comments


### Post #3
##### 256 Comments

<style>
#post-1, #post-2, #post-3 {
    margin-bottom: 0;
}

#64-comments, #128-comments, #256-comments {
    margin-top: 0;
}
</style>

You can also see a live example of this on the blog <a href="https://blog.fastcomments.com" target="_blank">homepage</a>.

The Comment Count widget does not render in an iframe, so it is fully customizable via CSS. It will automatically inherit your page's styling - fonts, colors, line heights, and so on.

{{/isPost}}
