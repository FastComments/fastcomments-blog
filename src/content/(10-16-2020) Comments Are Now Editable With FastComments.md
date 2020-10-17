###### [postdate]
# [postlink]Comments Are Now Editable With FastComments[/postlink]

{{#unless isPost}}
A much anticipated update, you can now edit comments left with FastComments.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> This Article Contains Technical Jargon

#### What's New

Comments left with FastComments can now be edited - whether you are logged in or not.

<img src="images/fc-editing-demo.gif" alt="Editing Demo GIF (17mb)" title="Editing Demo" />

Understandably, has been one of our most requested features, and we're happy to reach this milestone with our user base.

#### How it Works

Logged in users can always edit their comments. For anonymous commenters, our servers provide a temporary 24-hour window for them to edit their comment after
commenting as long as they don't close their browser. For example this means an anonymous commenter can comment, and then edit their comment to fix any typos, without ever logging in!

If the anonymous commenter closes their browser, they won't be able to edit their comment unless they click the magic link sent to their email.

For additional security, temporary edit key it will be invalidated on any attempt to guess the key incorrectly.

#### Why Now, after so long?

As with all changes to the client side widget we have to be careful not to inflate its size. This feature adds considerable size to the core commenting codebase (around 1kb gzipped - about a 10% increase).
We wanted to ensure this didn't decrease the performance of FastComments and wanted to ensure that it worked properly with our live commenting features. Also, we wanted the feature to
accommodate our customers' most common use case - anonymous commenting.

#### Editing Live Comments

Just like commenting and voting - editing happens live. If two users are on the same page, and a user edits their comment the other user will see it update.

#### Enabling Comment Editing

We've finished rolling out comment editing by default for all of our customers. Currently, it cannot be turned off.

#### What's Next?

We plan on releasing the ability to delete comments as well in a future update.

#### In Conclusion

We know this feature has been long awaited by some. Like all major releases, we're glad that we could take the time to optimize, test, and properly release this feature.

Cheers!

{{/isPost}}
