###### [postdate]
# [postlink]FastComments Redesign - With a Toolbar![/postlink]

We've recently taken a stab at giving our core commenting widget experience a face lift.

{{#isPost}}

Over the past few months we've gotten a lot of feedback regarding the initial experience of using FastComments to
leave a comment. One of these was that the initial widget experience felt cluttered, with a lot of text. We initially included
this text to make it clear **why** the user had to leave their email (unless anonymous commenting is enabled, or they're already logged in).

We've been able to retain that message while cleaning up the UI. Also, for the initial page load there is no reason to show anything other than
the comment box itself, whether the user is signed in or not. If they decide to interact with FastComments then we can gracefully and quickly
load in the rest of the widget like the toolbar and submit button.

At the bottom of this page is a demo of the new widget. You'll see by default the widget is sleek and unobtrusive, and if you begin to type a
comment the toolbar and rest of the UI will gracefully appear. 

We've done our due diligence and ensured that all of our existing customers with customizations applied to the widget should have their installations
continue to work as intended.

Cheers!

{{/isPost}}
