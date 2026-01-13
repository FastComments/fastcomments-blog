---
[category:Tutorials]
[category:UI & Customization]
{{#unless isPost}}
###### [postdate]
{{/unless}}
# [postlink]How to create a comment system like Hackaday.com[/postlink]

{{#unless isPost}}
In this tutorial, we’ll explore building a comment thread similar to the one on Hackaday.

When you click the link to this post, the overall page styling along with the FastComments Blog will change.

{{/unless}}

{{#isPost}}
###### Jan 24th 2020
<div class="post-header">
    <div class="by left">by: <a>Devon Winrick</a></div>
    <a id="post-header-comment-count" class="right" href="#fastcomments-widget"></a>
</div>

## WHOA WHAT HAPPENED?

This post serves as a demonstration of using FastComments to create a comment system that resembles https://hackaday.com.

We don't recommend copying them. However, this showcases the flexibility of FastComments.

Making FastComments appear this way is straightforward!
We developed a UI for it! For instance, here is the configuration we used to align FastComments with this page:

<div class="text-center">
    <img 
        src="images/fc-custom-settings-hackaday.png"
        alt="FastComments Hackaday Settings"
        class='lozad'
        height="850px" />
</div>

If you prefer to do it via code, it’s just as simple.

We just need to set a few options. Well, seven. Here's the code snippet (custom CSS omitted). Only a limited amount of CSS can be inserted this way. We recommend using
the UI above for defining CSS. It will also minify it for you, whereas defining the customCSS property will not apply any minification optimizations.

<div class="code" id="code"></div>
<script>
document.getElementById('code').innerText = `
    window.FastCommentsUI(document.getElementById('fastcomments-widget'), {
        tenantId: 'demo',
        commentCountFormat: '[count] THOUGHTS ON "HOW TO CREATE A COMMENT SYSTEM LIKE HACKADAY.COM"',
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

What do each of these mean?
- commentCountFormat = The title format above the comment thread. "[count]" is replaced with the actual localized count.
- commentCountUpdated = A function that triggers when the comment count changes. We use this to update the comment count at the
top of the page.
- headerHTML = HTML displayed above the "leave a reply" box. In this case, we use it to insert a heading.
- hideAvatars = Hackaday does not use avatars; hence we set this to true to hide them.
- inputAfterComments = Moves the reply box to the bottom of the comment feed.
- absoluteDates = Changes the default date format (e.g., "11 Minutes Ago") to a fixed date.
- customCSS = Custom styling.

All configuration options are documented <a href="https://github.com/FastComments/fastcomments-typescript/blob/main/src/fastcomments-config.ts" target="_blank">here</a>.

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
        document.getElementById('post-header-comment-count').innerHTML = Number(count).toLocaleString() + ' Comments';
    };
</script>

{{/isPost}}

---