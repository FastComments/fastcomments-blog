{{#unless isPost}}
###### Jan 24nd 2020
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

We just have to set a few options. Well, seven. Here's the code snippet (custom CSS omitted).

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

Soon we'll be creating a UI to configure all of these and style your widget in your browser - no coding required.

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
</style>
<link rel="stylesheet" href="https://use.typekit.net/dru2dki.css" />

<script>
    window.fcCustomCSS = `
        @import "https://use.typekit.net/dru2dki.css";
        .fast-comments {
            color: #fff !important;
            font-family: "proxima-nova-n7","proxima-nova-n6","proxima-nova","sans-serif";
        }
        
        .fast-comments .comment-count {
            line-height: 1;
            text-transform: uppercase;
            font-size: 2.4rem !important;
            font-weight: 800;
        }
        
        .fast-comments .comment > .comment-content .commenter-name {
            padding: 0;
            color: #fff;
            font-size: inherit;
        }
        
        .fast-comments .comment > .comment-content .commenter-name > b::after {
            content: " says:";
            font-weight: normal;
        }
        
        .fast-comments .comment > .comment-content .commenter-name .jump-link {
            color: #f3bf10 !important;
            font-size: .8rem;
            display: block;
        }
        
        .fast-comments .comment > .comment-content .commenter-name .jump-link:hover {
            color: #fddb2f !important;
        } 
        
        .fast-comments .comment > .comment-content > .comment-text {
            padding: 0;
            color: #fff;
        }
        
        .fast-comments .comment {
            border: 1px solid #484848;
            padding: 20px;
            margin: 20px 0 0;
            font-size: 16.15px;
            line-height: 1.4;
        }
        
        .fast-comments .comment .comment-vote {
            margin: 15px 0 0 0;
        }
        
        .fast-comments .comment > .comment-content .comment-text {
            margin: 10px 0 0;
        }
        
        .fast-comments .comment > .comment-content .comment-vote-options > span {
            color: #f3bf10 !important;        
        }
        
        .fast-comments button {
            background: none !important;
            border: none !important;
            color: #f3bf10 !important;
            cursor: pointer !important;
        }
        
        .fast-comments button:hover,
        .fast-comments .comment > .comment-content .comment-vote-options > span:hover {
            color: #fddb2f !important;
        }
        
        .fast-comments .comment-reply-start {
            margin: 0 !important;
            padding: 0 !important;
        }
        
        .fast-comments input, textarea {
            padding: 10px !important;
            text-shadow: 0 1px 0 rgba( 0, 0, 0, 0.45 );
            color: rgba( 255, 255, 255, 0.8 );
            font-size: 14px;
            background: transparent !important;
            font-family: inherit;
            border-radius: 0 !important;
            box-shadow: none !important;
            border: 1px solid rgba( 255, 255, 255, 0.13 ) !important;
        }
    `.replace(/\n/g, '');
    window.fcCommentCountFormat = '[count] THOUGHTS ON "HOW TO MAKE A COMMENT SYSTEM LIKE HACKADAY.COM"';
    window.fcCommentCountUpdated = function(count) {
        document.getElementById('post-header-comment-count').innerHTML = Number(count).toLocaleString() + ' Comments';
    };
    window.fcHeaderHTML = '<h1>Leave a Reply</h1>';
    window.hideAvatars = true;
    window.inputAfterComments = true;
    window.absoluteDates = true;
</script>

{{/isPost}}
