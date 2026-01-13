---
[category:UI & Customization]
###### [postdate]
# [postlink]FastComments on Sites with Dark Backgrounds[/postlink]

FastComments now adapts to your site's theme, whether it’s light or dark.

{{#isPost}}
#### What, How?
Our comment widget will assess the area of the page it’s on, and all surrounding elements, up to the browser's window to determine how "dark" the area behind the comment section is.

#### For Developers
Installing FastComments on a web page only requires adding a small code snippet. FastComments will automatically attempt to calculate the "luminance" of the area of
the page where it’s installed - to decide whether it should display a dark or light theme.

#### A Demo
Surprise, this page is the demo!

#### If all else fails...
The browser is a complex environment - and like all FastComments features, we have to balance speed and accuracy. There are situations where the detection
might get it wrong. In these cases, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">let us know</a> and we’ll assist you in manually tuning the widget to match your site.

#### Setup
Nothing special - just install FastComments like you would on any other site or platform.

#### In Conclusion
We used no elaborate styling or configuration to make the widget below function on this site with a black background.

We hope you find FastComments fast and easy to use - cheers!

<style>
body, .content, .content .posts .post .post-description h1 a, .header, .header a, .content a {
    background: #000;
    color: #fff;
    border-color: #fff;
}
</style>

{{/isPost}}

---