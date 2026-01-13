---
[category:Features]
###### [postdate]
# [postlink]Sorting Comment Threads with FastComments[/postlink]

{{#unless isPost}}
Since launch, FastComments has not allowed you to change the sort order of the comment thread. That changes with this release!
{{/unless}}

{{#isPost}}

#### Target Audience

The target audience for this article consists of both administrators and commenters.

#### Introduction

Comments have always been sorted using a combination of their age and karma (up + down votes). Up until now, that 
was the only allowed sorting direction.

#### New Sorting Directions

The FastComments comment widget now also supports sorting by Newest and Oldest First.

#### Changing Sort Direction

When the number of top-level comments is greater than one, a new dropdown will appear to allow for changing the sort direction.

<div class="text-center">
    <img src="images/fc-sort-dropdown.png" alt="Sort Selection Dropdown" title="Sort Selection Dropdown" />
</div>

When selecting Newest or Oldest First, we do not take the karma of the comment into account.

#### Changing The Default Sort Direction

While the default sort direction is Most Relevant, you can easily customize the default sort direction by creating a <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">customization rule</a>.

#### Keeping it Fast

In order for FastComments to continue to live up to its name, a considerable amount of time has been spent ensuring sorting in all ways is well optimized. Comments get sorted as they are left, so no actual sorting occurs when you load the page. This ensures that loading the comment widget, and changing the sort direction, is fast no matter how many comments you have.

#### In Conclusion

We hope you've found this update helpful. Feel free to comment below with any questions.

Cheers!

{{/isPost}}

---