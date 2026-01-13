[category:UI & Customization]
###### [postdate]
# [postlink]FastComments on Sites with Dark Backgrounds[/postlink]

FastComments now adjusts to your site's theme, whether it's light or dark.

{{#isPost}}
#### What, How?
Our comment widget will check the area of the page its on, and all enclosing elements, up to the browser's window to find how "dark" the area behind the comment area is.

#### For Developers
Installing FastComments on a web page only requires inserting a small code snippet. FastComments will automatically attempt to calculate the "luminance" of the area of
the page that it's installed on - to determine whether it should render a dark or light theme.

#### A Demo
Surprise, this page is the demo!

#### If all else fails...
The browser is a crazy environment - and like all FastComments features we have to balance speed and correctness. There are some cases where the detection
may get things wrong. In these cases, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">let us know</a> and we'll help you manually tune the widget to match your site.

#### Setup
Nothing special - just install FastComments like with any other site or platform.

#### In Conclusion
We used no fancy styling or configuration to make the widget below work on this site with a black background.

We hope you find FastComments fast and easy to use - cheers!

<style>
body, .content, .content .posts .post .post-description h1 a, .header, .header a, .content a {
    background: #000;
    color: #fff;
    border-color: #fff;
}
</style>

{{/isPost}}
