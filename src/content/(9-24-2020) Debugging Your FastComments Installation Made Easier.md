###### [postdate]
# [postlink]Debugging Your FastComments Installation Made Easier[/postlink]

{{#unless isPost}}
Comments not showing? Settings don't seem to be applied? Figuring that out just got a whole lot easier.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> This Article Contains Technical Jargon

#### What's New

At <a href="https://fastcomments.com">FastComments</a> we've just released a browser extension for Google Chrome. This extension will assist you in understanding what configuration
the comment widget is receiving as well as why it may not be showing.

You can find the extension here: <a href="https://chrome.google.com/webstore/detail/fastcomments-debugger/cadggdemhfkjjghkdbfhonoccnplffjj"> target="_blank">https://chrome.google.com/webstore/detail/fastcomments-debugger/cadggdemhfkjjghkdbfhonoccnplffjj</a>

#### How To Use It

If you find the comment widget is not loading, or some configuration you've defined is not showing, try installing <a href="https://chrome.google.com/webstore/detail/fastcomments-debugger/cadggdemhfkjjghkdbfhonoccnplffjj">the extension</a>
and opening it on the page in question. To see the icon in your toolbar, you may have to click the puzzle piece in the top right to pin it as shown:

<div class="text-center">
    <img data-src="images/fc-extension-pin.png" alt="How to Pin the Extension" title="How to Pin the Extension" class="lozad" />
</div>

The extension can help debug two classifications of errors. The first, if the widget is not included on the page at all or there is a major typo in the script.

The second is if some configuration does not seem to be taking effect.

To debug both, you start with simply click on the icon.

If the tool does not find the comment widget on the page you'll get a big red error:

<div class="text-center">
    <img data-src="images/fc-extension-pin-embed-js-not-found.png" alt="Embed.js not found example" title="Embed.js not found example" class="lozad" />
</div>

If one or more instances of the widget have been found, you'll see their configurations displayed separately:

<div class="text-center">
    <img data-src="images/fc-extension-multiple-instances.png" alt="Multiple Configuration Example" title="Multiple Configuration Example" class="lozad" />
</div>

Moreover, the FastComments Debugger will also display warnings for common gotchas - like the widget not showing in readonly mode if no comments are available.

#### How It Works

The comment widget stores its configuration in a place where the debugger can find it, and then the debugger scans the current page you are on for instances of the widget and loads them into memory.

#### What Information Does This Extension Collect?

The FastComments Debug Tool does not phone home or communicate with any FastComments servers. In fact, the widget will not even check the content of the page you are on
unless you open it.

#### In Conclusion

We hope that providing more tools like this makes setting up FastComments easier for every type of customer we have. Let us know in the comment section below
how this worked for you.

We know that in some cases you still may need a helping hand - and for that there's still the <a href="https://fastcomments.com/auth/my-account/help" target="_blank">customer support page</a>.

Cheers!

{{/isPost}}
