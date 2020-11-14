###### [postdate]
# [postlink]Customizing The Default Avatar[/postlink]

{{#unless isPost}}
The default avatar image can now be customized.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> This Article Contains Technical Jargon

#### Introduction

The default icon has been the same since FastComments launched. Behold, the default profile icon.

<div class="text-center">
    <img src="https://fastcomments.com/images/unknown-person.png" title="Default Profile Icon" alt="Default Profile Icon" />
</div>

However now, you can customize it.

#### Without Code

First, <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">add or edit a customization rule</a>. Customization rules can
be applied for just a page, a domain, or your entire account. If you want to change the profile picture globally you can leave the URL ID field blank.

Scroll down to the "Default Avatar" section.

<img 
    data-src="/images/fc-customize-default-icon-button.png"
    alt="FastComments Hackaday Settings"
    class='lozad' />
    
Click the button to upload a JPG, PNG, or GIF of up to 20mb. It will be resized to 100mb.

#### In Code

If you wish to host the default avatar, and you have a public URL for it already, it can be defined in code as in the given example.

<div class="code"><script src="https://cdn.fastcomments.com/js/embed.min.js"></script>
    <div id="fastcomments-widget"></div>
    <script>
        window.FastCommentsUI(document.getElementById('fastcomments-widget'), {
            tenantId: 'demo',
            defaultAvatarSrc: 'https://example.com/some-100-x-100-image.png',
        });
    </script>
</div>

The image should be square, and its size should be a 100px square. Following these constraints will ensure the best experience.

#### Gotchas

1. Customizing the default profile picture only affects your site. It does not affect notification emails, or the users' accounts in any way.
2. Comments created before this change may still display the old profile picture. If you adjust the default profile icon and observe lots of comments on your site
using the old profile icon, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">let us know</a>.

#### In Conclusion

We hope you've found this guide helpful and easy to read. Feel free to comment below with any questions.

Cheers!

{{/isPost}}
