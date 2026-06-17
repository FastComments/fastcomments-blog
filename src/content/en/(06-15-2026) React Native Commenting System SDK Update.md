[category:API & Development]
[category:Performance]
[category:Announcements]

###### [postdate]
# [postlink]React Native Commenting System SDK Update[/postlink]

{{#unless isPost}}
We rebuilt fastcomments-react-native-sdk from the ground up: new, more efficient state management, a redesign using Design Tokens, a dedicated live chat widget, and first-class web support.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> This Article Contains Technical Jargon

### What's New

We just shipped version 5.1 of `fastcomments-react-native-sdk`, our React Native library that renders comments and chat with real native components instead of a WebView.

We rewrote the internals, redesigned the whole look, added a live chat widget, brought the SDK to the web, and upgraded it to the latest React Native and React.

<div class="text-center">
    <img src="images/rn-sdk-light.png" alt="FastComments React Native SDK, light theme" title="FastComments React Native SDK" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />
    <img src="images/rn-sdk-dark.png" alt="FastComments React Native SDK, dark theme" title="FastComments React Native SDK, dark theme" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />
</div>

### Why Two React Native Libraries?

A quick note, because we get this question. We ship two options:

- `fastcomments-react-native` is a thin wrapper around our web widget running in a WebView. It is the fastest way to get every feature instantly, and it benefits from web fixes automatically.
- `fastcomments-react-native-sdk` (this one) renders the UI with native React Native components without a webview. It is more flexible, fully themeable, and feels native because it is native.

For the best experience we recommend the SDK. The rest of this post is about what changed in 5.0.

### New State Management

The primary driver on this change is to make sure our library stays true to our name and stays Fast. We had several customers complain
about its performance, so this is now fixed.

The SDK originally kept its comment tree in Hookstate. It worked, but as threads and live updates grew things started to slow down.

We replaced Hookstate with Zustand and a flat, indexed store. Comments now live in a `byId` map alongside `childrenByParent`, `rootOrder`, and `pinnedIds` indexes, instead of a tree nested inside state.

The payoff:

- Live events (a new comment, a vote, an edit) became O(1) mutations instead of walking and cloning a tree.
- We dropped two full-tree JSON deep-clones that used to run on every fetch.
- Components subscribe to exactly the slices they read, the standard selector model, so a vote on one comment touches one comment.

That last point matters more than it sounds. With selector-based subscriptions, a row only re-renders when its own data changes.

### A Token-Based Redesign

The old look was a pile of hardcoded styles. The new default is generated from a set of semantic design tokens (`FastCommentsTheme`): colors, spacing, radius, font sizes, font weights, and avatar sizes. The entire style tree is derived from those tokens.

That means restyling is one prop:

```tsx
<FastCommentsLiveCommenting config={config} theme={{ colors: { primary: '#FF5500' } }}/>
```

Dark mode is one token set away:

```tsx
import { getDarkTheme } from 'fastcomments-react-native-sdk';

<FastCommentsLiveCommenting config={config} theme={getDarkTheme()}/>
```

The redesign itself is a cleaner, modern-neutral look: hairline separators, pill vote buttons and chips, filled primary buttons, rounded avatars, and a consistent type scale. The `styles` prop is still there for surgical overrides, so existing integrations keep working.

### A Dedicated Live Chat Widget

We added `FastCommentsLiveChat`, a chat preset over the same engine that mirrors our Android SDK's chat view: chronological messages with the newest at the bottom, the composer below the list, a live header strip with a connection dot and user count, auto-scroll that pauses while you read older messages, and infinite history as you scroll up. Every preset is overridable through `config`.

```tsx
<FastCommentsLiveChat config={{ tenantId: 'demo', urlId: 'my-room' }}/>
```

### Now on the Web Too

The same SDK now runs on the web through `react-native-web`. The rich text composer (powered by `react-native-enriched`) renders the same way on iOS, Android, and the browser, so the editing experience is consistent everywhere with a single implementation. Overlays that the comment list would otherwise clip (menus, the GIF picker, the notification list) are anchored under their triggers on the web build.

You can try every widget yourself in the live <a href="https://fastcomments.com/commenting-system-for-react-native" target="_blank">component browser</a>, which is this SDK running in the browser via `react-native-web`.

### Keeping Current With React Native

5.0 is built and tested against React Native 0.81 and React 19, and it targets the New Architecture (Fabric), which the native rich text editor requires. Keeping current here is not busywork: the editor, the gesture handling, and the rendering all get faster and more correct as React Native moves forward, and we would rather take those upgrades steadily than fall years behind.

### In Conclusion

This rewrite was about giving the React Native SDK the same first-class footing as our other libraries: a fast and predictable data model, a look you can theme in one prop, a chat widget, and web support, all on a modern React Native foundation.

You can find the SDK on <a href="https://www.npmjs.com/package/fastcomments-react-native-sdk" target="_blank">NPM</a>, the source, with examples, on <a href="https://github.com/FastComments/fastcomments-react-native-sdk" target="_blank">GitHub</a>, and every widget running live in the <a href="https://fastcomments.com/commenting-system-for-react-native" target="_blank">component browser</a>. Let us know below if you run into anything.

Cheers!

{{/isPost}}
