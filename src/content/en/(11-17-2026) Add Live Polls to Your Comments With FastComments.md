[category:Features]
[category:UI & Customization]
[category:Announcements]

###### [postdate]
# [postlink]Add Live Polls to Your Comments With FastComments[/postlink]

{{#unless isPost}}
Comments now have live polling! Readers vote in the thread itself, results update live for everyone on the page, and polls work across the web widget and in our iOS, Android, and React Native SDKs.
{{/unless}}

{{#isPost}}

### What's New

This release adds **Live Polls**. A poll is attached to a comment and renders inside it. Readers click an option to vote,
without leaving the thread, and the results update live for everyone viewing the page as votes come in. No refresh, and
nobody has to tally replies by hand.

<img src="images/fc-live-polls.png" alt="A comment with a poll asking what format the next meetup should be, showing In person at 34%, Online at 21%, and Hybrid at 45%, with 53 responses" title="Live Polls" class="lozad" />

Since the poll is a comment, the conversation stays attached to it. People vote, then reply to say why.

### Creating a Poll

When polls are on, the comment editor gets a poll button. Clicking it opens a poll editor under the text input, where you
set:

- **The question**, up to 200 characters.
- **The options**, 2 to 10 of them.
- **When it closes**: never, or after 1 day, 3 days, or 1 week. A closed poll shows its final results and stops taking votes.
- **Privacy**: anonymous, visible to admins, or public.
- **Require Vote to See Results**, which keeps the results hidden from each viewer until they vote or the poll closes.

Then write your comment and post it as usual. Polls work on new comments and on replies.

### Voting

Each person gets one vote per poll, and can change it while the poll is open. Unless the poll requires a vote first,
readers can click **Show results** to see where things stand before they pick.

Privacy is set per poll and shown right under the options, so voters know who can see their vote before they cast it.
Anonymous polls (the default) only show totals, and nobody, admins included, can see who voted for what. On admin-visible
polls, admins and moderators can open **See who voted**. On public polls, anyone can.

### Turning It On

Polls are off by default. Open your <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">Widget Customization</a>,
check **Enable Polls**, and pick who can create them:

- **Admins/Moderators Only** (the default), for when you want to run the polls yourself.
- **Everyone**, for when you want your community asking each other.

Voting requires a logged in user by default. Check **Allow Anonymous Poll Votes** to let anyone vote. To keep that fair,
anonymous votes are limited to three per IP address per poll per hour.

Like every customization rule, this can apply to your whole site, a domain, or a single page.

### Notifications

The author of a poll hears about responses as they come in: a notification, grouped when lots of people
vote at once, and a daily email when the poll got new responses that day. Only a first vote counts as a response, so
someone changing their mind doesn't send more. The notifications follow the poll's privacy, so an anonymous poll
only says how many new responses arrived, never who.

### Native Mobile SDKs

Polls aren't only in the web widget. Our native SDKs render the poll card, the poll editor, the live results, and the
voter list with real native components, and they read the same widget settings from your dashboard. Turn polls on once
and they show up on your site and in your apps.

- **iOS**: <a href="https://github.com/FastComments/fastcomments-ios" target="_blank">fastcomments-ios</a> 2.1.0, through Swift Package Manager.
- **Android**: <a href="https://github.com/FastComments/fastcomments-android" target="_blank">fastcomments-android</a> 2.1.0, as `com.fastcomments:android-sdk:2.1.0`.
- **React Native**: <a href="https://www.npmjs.com/package/fastcomments-react-native-sdk" target="_blank">fastcomments-react-native-sdk</a> 5.3.0, on NPM.

The iOS and Android SDKs can also post a poll from your own UI. On iOS it looks like this:

<div class="code">let draft = PollDraft(question: "Where should we eat?", options: ["Tacos", "Ramen"], closesDays: 1)
if draft.validate() == nil {
    try await sdk.postComment(text: "Lunch vote", poll: draft.toInput())
}</div>

The READMEs for <a href="https://github.com/FastComments/fastcomments-ios#polls" target="_blank">iOS</a> and
<a href="https://github.com/FastComments/fastcomments-android#polls" target="_blank">Android</a>, and the
<a href="https://github.com/FastComments/fastcomments-react-native-sdk/blob/main/CHANGELOG.md" target="_blank">React Native changelog</a>,
cover the details, including how to restyle the poll colors to match your app.

### The API

Polls are in the REST API too. You can create a poll along with its comment by passing `poll` to `POST /api/v1/comments`,
or add, edit, close, and remove one later with `/api/v1/polls/:commentId`. Votes can be listed, cast, and removed with
`/api/v1/poll-votes`, which makes exporting results into a spreadsheet or your own CMS straightforward. The API follows
the same settings as the widget, and individual votes on anonymous polls can't be read through it.

### Overhead

The poll code isn't loaded unless polls are enabled, so it doesn't slow down the comment widget for anyone else.

### Documentation

<a href="https://docs.fastcomments.com/guide-polls.html" target="_blank">The Live Polls guide</a> covers enabling polls,
who can create them, anonymous votes, voter privacy, notifications, and the API.

### Try It

There's a live poll on the <a href="https://fastcomments.com/product/live-polls" target="_blank">Live Polls demo</a>. Vote
on it, open the page in a second tab, and watch the results move. You can post your own poll there too.

### In Conclusion

If your threads keep turning into head counts, give polls a try and let us know below what you'd like to see next.

Cheers!

{{/isPost}}
