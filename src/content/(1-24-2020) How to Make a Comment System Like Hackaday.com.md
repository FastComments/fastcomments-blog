{{#unless isPost}}
###### [postdate]
{{/unless}}
# How to make a comment system like Hackaday.com [postlink]

{{#unless isPost}}
Here we'll explore creating a comment thread that looks like the one on Hackaday.

If you click the link to this post the overall page styling as well as the FastComments Blog will change.

{{/unless}}

{{#isPost}}
###### Jan 24nd 2020
<div class="post-header">
    <div class="by left">by: <a>Devon Winrick</a></div>
    <a id="post-header-comment-count" class="right" href="#fastcomments-widget"></a>
</div>

## WHOA WHAT HAPPENED?

This post is a demonstration of using FastComments to make a comment system that looks like https://hackaday.com.

We don't suggest you copy them. But this demonstrates the flexibility of FastComments.

Making FastComments look this way is simple!
We built a UI for it! For example, here is the configuration we used to make FastComments match this page:

<img 
    data-src="images/fc-custom-settings-hackaday.png"
    alt="FastComments Hackaday Settings"
    class='lozad'
    height="850px" />

If you want to do it in-code it is just as easy.

We just have to set a few options. Well, seven. Here's the code snippet (custom CSS omitted). Only so much CSS can be inserted this way. We recommend you use
the above UI for defining CSS. It will also minify it for you, where as defining the customCSS property will apply no minification optimizations.

<div class="code" id="code"></div>
<script>
document.getElementById('code').innerText = `
    window.FastCommentsUI(document.getElementById('fastcomments-widget'), {
        tenantId: 'demo',
        commentCountFormat: '[count] THOUGHTS ON "HOW TO MAKE A COMMENT SYSTEM LIKE HACKADAY.COM"',
        commentCountUpdated: function(count) {
            document.getElementById('post-header-comment-count').innerHTML = Number(count).toLocaleString() + ' Comments';
        },
        headerHTML: '<h1>Leave a Reply</h1>',
        hideAvatars: true,
        inputAfterComments: true,
        absoluteDates: true,
        customCSS: 'insert-custom-css-here'
    });`
</script>

So what do each of these mean?
- commentCountFormat = The format of the title above the comment thread. "[count]" Gets replaced with the actual localized count.
- commentCountUpdated = A function that is called when the comment count changes. We use this to set the comment count at the
top of the page
- headerHTML = HTML That's shown above the "leave a reply" box. In this case we use it to insert a heading element.
- hideAvatars = Hackaday does not have avatars. So we set this to true to hide them.
- inputAfterComments = Repositions the reply box to the bottom of the comment feed.
- absoluteDates = Changes the default date format (ie, "11 Minutes Ago") to an absolute date.
- customCSS = Custom styling

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
    
    .header a {
        display: block;
        padding-top: 35px;
        color: #fff;
        text-align: center;
        font-size: 80px;
    }
    
    .header .buttons {
        display: none;
    }
    
    .header #watchly-target {
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
    
    .content h1 {
        margin: 0;
        padding: 20px 0 10px;
        font-style: normal;
        font-size: 51px;
        font-weight: 800;
        line-height: 1;
        text-transform: uppercase;
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
    
    @media(max-width: 768px) {
        .header {
            padding-top: 0;
        }
        
        .header a {
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
        document.getElementById('post-header-comment-count').innerHTML = Number(count).toLocaleString() + ' Comments';
    };
</script>

{{/isPost}}