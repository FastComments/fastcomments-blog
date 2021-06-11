###### [postdate]
# [postlink]Pinning Comments with FastComments[/postlink]

{{#unless isPost}}
Top-level comments can now be pinned in comment threads!
{{/unless}}

{{#isPost}}

#### Introduction

Comments can now be "pinned" to the top of comment threads, regardless of sort order.

This can be done under the three-dot menu in the top right of a comment, if you are logged in as an administrator or moderator.

<div class="text-center">
    <img src="images/fc-pinned-comment-example.png" alt="A Pinned Comment" title="A Pinned Comment" />
</div>

New comments will appear under pinned comments.

There is no limit to the number of pinned comments in a comment thread.

#### Votes and Comment Age

Regardless of the number of votes or age of other comments, pinned comments always show at the top.

#### Who Can Pin and UnPin Comments

Administrators and moderators are the only users that can pin and unpin comments.

#### Live Commenting

Whenever a comment is pinned, or unpinned, that update is sent to all viewers of the comment thread.

When a comment's pin state changes, the comment is immediately moved for the person pinning the comment and anybody
viewing the comment thread. If a user disconnects, followed by a comment being pinned, the comment will be pinned and moved
for that user upon reconnecting.

#### Performance

The sort order of the comment thread is precalculated on every change. This means that the extra sorting required to
pin comments to the top will not affect page load times.

#### In Conclusion

We hope you've found this guide helpful and easy to read. Feel free to comment below with any questions.

Cheers!

{{/isPost}}
