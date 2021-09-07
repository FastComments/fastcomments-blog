###### [postdate]
# [postlink]Adding Comments to a BigCommerce Blog[/postlink]

{{#isPost}}

#### Add Audience Engagement to Any Page
What if your audience could comment on your blog posts, ask questions, and give feedback? Now they can with FastComments.

#### Custom Themes
In order to add FastComments to your BigCommerce store's blog, you'll have to edit your theme templates. We'll walk you through it.

In the BigCommerce dashboard go to Storefront -> My Themes.

<div class="text-center">
    <img style="vertical-align: top;" src="images/fc-bigcommerce-store-link.png" alt="Store Link" title="Store Link" class="lozad" />
    <img style="vertical-align: top;" src="images/fc-bigcommerce-my-themes.png" alt="My Themes Link" title="My Themes Link" class="lozad" />
</div>

Under "Current Theme" you'll see a dropdown with the label "Advanced".

<div class="text-center">
    <img src="images/fc-bigcommerce-advanced-dropdown.png" alt="Theme Advanced Dropdown" title="Theme Advanced Dropdown" class="lozad" />
</div>

In this dropdown the first option is "Edit Theme Files". If this option is not clickable, you'll first have to copy the theme via "Make a Copy".

Once you can open the template editor you'll see a file browser on the left side of your browser. This is a file browser for the templates in your theme.

You'll want to navigate to the HTML template that represents a blog post. It's at templates/components/blog/post.html, as illustrated:

<div class="text-center">
    <img src="images/fc-bigcommerce-editor-post-file.png" alt="Editor Post File Location" title="Editor Post File Location" class="lozad" />
</div>

Your FastComments code snippet, which you can get from <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">here</a> should be pasted right after line 48, which has the text "&#123;{>components/common/share}&#125;".

<div class="text-center">
    <img src="images/fc-bigcommerce-blog-post-script-location.png" alt="Place to insert FastComments" title="Place to insert FastComments" class="lozad" />
</div>

#### Remember!
You'll have to add the domain for your store to FastComments, which you can do <a href="https://fastcomments.com/auth/my-account/configure-domains" target="_blank">here</a>.

#### In Conclusion
Here's what FastComments should look like on your BigCommerce blog. Cheers!

<div class="text-center">
    <img src="images/fc-bigcommerce-blog-post-example.png" alt="FastCommence on a BigCommerce Blog" title="FastCommence on a BigCommerce Blog" class="lozad" />
</div>

{{/isPost}}
