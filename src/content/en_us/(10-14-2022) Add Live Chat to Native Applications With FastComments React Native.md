---
[category:Integrations]
[category:API & Development]
###### [postdate]
# [postlink]Add Live Chat to Native Applications With FastComments React Native[/postlink]

{{#unless isPost}}
After months of work, we're excited to announce that fastcomments-react-native-sdk is now at version 1.0 for general availability.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> This Article Contains Technical Jargon

### What's New

At FastComments, we've launched a new way to build React Native applications with FastComments. Previously, you would use our react-native wrapper around
the VanillaJS library. This introduced several memory and latency issues because it required a web view - a browser in your app - just to load our library.

We have now **completely** ported FastComments to React Native and developed our own WYSIWYG editor to completely eliminate the need for web views.

The library supports different skins and layouts. For example, here's the Erebus skin which is a live-chat style dark skin:

<div class="text-center">
    <img src="images/skin-erebus.png" alt="Erebus Skin" title="Erebus Skin" />
</div>

The library is available [on GitHub at FastComments/fastcomments-react-native-sdk](https://github.com/FastComments/fastcomments-react-native-sdk) as well as
[on NPM](https://www.npmjs.com/package/fastcomments-react-native-sdk).

### Customizable

The new native library is designed to be customizable just like the existing web library.

You can:

- Customize all assets and icons the library uses.
- Customize the styling of every component in the library by passing in a Styles object from the top.
- Customize all translations.
- Use one of the predefined or community-developed skins.
- Use many of the same configuration options the web library supports.

### Complete Feature List

The library supports many features. An incomplete list includes:

- [x] Blocking
- [x] Chat Reactions
- [x] Child Comments & Replies
- [x] Custom Styles (as typed stylesheet)
- [x] Emoticons
- [x] Flagging
- [x] Gif Browser - With default trending + search capability. Images and searching anonymized by proxy.
- [x] Live commenting
- [x] Media Selection & Uploads
- [x] Native WYSIWYG editor with image support.
- [x] Notification Service (get user's unread notifications in the background to push to them, etc)
- [x] Notifications List (shows when clicking bell). Supports subscriptions.
- [x] Pagination (Buttons)
- [x] Pagination (Infinite Scroll)
- [x] Pinning Comments
- [x] Secure, Simple SSO, and anonymous commenting.
- [x] Several predefined skins.
- [x] Show/Hide Comments Toggle
- [x] Threads
- [x] User activity indicators
- [x] Voting

### How it Works

The library is a complete rewrite of the FastComments client in TypeScript and React Native.

### Long Term Plan

Long term, we will maintain both the VanillaJS library and the react-native library in parallel, as well as any future native libraries we may develop.

### What's Next?

We look forward to feedback from users and the community to improve this library over time, just as we have done with the web ecosystem.

### In Conclusion

We know this library has been eagerly anticipated by some. Like all major releases, we're pleased that we could take the time to optimize, test, and properly release this library.

Cheers!

{{/isPost}}

---