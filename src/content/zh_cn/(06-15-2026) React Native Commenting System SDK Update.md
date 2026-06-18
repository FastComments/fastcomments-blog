---
[category:API & Development]  
[category:Performance]  
[category:Announcements]  

###### [postdate]  
# [postlink]React Native 评论系统 SDK 更新[/postlink]  

{{#unless isPost}}  
我们从头开始重建了 fastcomments-react-native-sdk：新的、更高效的状态管理，采用设计代币的重新设计，专用的实时聊天小部件，以及一流的网页支持。  
{{/unless}}  

{{#isPost}}  

### <i class="circle">!</i> 本文包含技术术语  

### 新内容  

我们刚刚发布了版本 5.1 的 `fastcomments-react-native-sdk`，这是我们使用原生组件而不是 WebView 来渲染评论和聊天的 React Native 库。  

我们重写了内部结构，重新设计了整体外观，增加了实时聊天小部件，将 SDK 移植到网页，升级到最新的 React Native 和 React。  

<div class="text-center">  
    <img src="images/rn-sdk-light.png" alt="FastComments React Native SDK, light theme" title="FastComments React Native SDK" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />  
    <img src="images/rn-sdk-dark.png" alt="FastComments React Native SDK, dark theme" title="FastComments React Native SDK, dark theme" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />  
</div>  

### 为什么有两个 React Native 库？  

简要说明一下，因为我们经常被问到这个问题。我们提供两个选项：  

- `fastcomments-react-native` 是我们网页小部件在 WebView 中的轻量级封装。它是快速获取所有功能的最佳方式，并且可以自动享有网页修复的好处。  
- `fastcomments-react-native-sdk`（这个）使用原生 React Native 组件渲染 UI，而不使用 WebView。它更灵活，完全可主题化，并且因为是原生的，所以使用起来更顺畅。  

为了获得最佳体验，我们推荐使用 SDK。本文其余部分将介绍 5.0 中的变化。  

### 新的状态管理  

此变更的主要驱动因素是确保我们的库保持与其名称相符，并且保持快速。我们收到了多个客户关于其性能的投诉，现在这个问题已经解决。  

SDK 最初在 Hookstate 中维护其评论树。它运行正常，但随着线程和实时更新的增加，性能开始下降。  

我们用 Zustand 和一个扁平的索引存储替换了 Hookstate。评论现在位于 `byId` 映射中，旁边是 `childrenByParent`、`rootOrder` 和 `pinnedIds` 索引，而不是嵌套在状态中的树。  

收益：  

- 实时事件（新评论、投票、编辑）变成了 O(1) 变更，而不是遍历和克隆树。  
- 我们删除了在每次获取时都会运行的两个完整树的 JSON 深度克隆。  
- 组件仅订阅它们读取的切片，使用标准选择器模型，因此对一条评论的投票只会影响该条评论。  

最后一点比听起来更重要。使用基于选择器的订阅，只有在自身数据更改时，行才会重新渲染。  

### 基于 Token 的重新设计  

旧的外观是一堆硬编码的样式。新的默认样式是从一组语义设计代币（`FastCommentsTheme`）生成的：颜色、间距、半径、字体大小、字体粗细和头像大小。整个样式树来自这些代币。  

这意味着重新设计只需一个属性：  

```tsx  
<FastCommentsLiveCommenting config={config} theme=\{{ colors: { primary: '#FF5500' } }}/>  
```  

暗模式只需一个代币集：  

```tsx  
import { getDarkTheme } from 'fastcomments-react-native-sdk';  

<FastCommentsLiveCommenting config={config} theme={getDarkTheme()}/>  
```  

重新设计本身呈现出更简洁、现代中立的外观：细线分隔符、药丸形投票按钮和徽章、填充的主按钮、圆角头像，以及一致的字体比例。`styles` 属性仍然存在，以便进行精细的覆盖，因此现有集成可以继续使用。  

### 专用的实时聊天小部件  

我们增加了 `FastCommentsLiveChat`，这是一个基于相同引擎的聊天预设，其界面与我们的 Android SDK 聊天视图相似：按时间顺序排列的消息，最新消息在底部，撰写器在列表下方，带有连接点和用户计数的实时标题条，阅读旧消息时暂停的自动滚动，以及向上滚动时的无限历史。每个预设都可以通过 `config` 进行覆盖。  

```tsx  
<FastCommentsLiveChat config=\{{ tenantId: 'demo', urlId: 'my-room' }}/>  
```  

### 现在也可以在网页上使用  

现在同样的 SDK 通过 `react-native-web` 在网页上运行。富文本撰写器（由 `react-native-enriched` 提供支持）在 iOS、Android 和浏览器上的渲染方式相同，因此编辑体验在任何地方都是一致的，只有一个实现。评论列表可能会被截断的覆盖层（菜单、GIF 选择器、通知列表）在网页版本中锚定在其触发器下方。  

您可以在实时 <a href="https://fastcomments.com/commenting-system-for-react-native" target="_blank">组件浏览器</a> 中亲自尝试每个小部件，这个浏览器是在通过 `react-native-web` 的情况下运行的 SDK。  

### 与 React Native 保持同步  

5.0 是基于 React Native 0.81 和 React 19 构建和测试的，目标是新架构（Fabric），这是原生富文本编辑器所需的。在这一点上保持最新并不是多余的工作：随着 React Native 的不断发展，编辑器、手势处理和渲染都会变得更快、更正确，我们宁愿稳步进行这些升级，而不是落后几年。  

### 结论  

这次重写旨在为 React Native SDK 提供与我们其他库一样的一流基础：快速且可预测的数据模型、可以通过一个属性主题的外观、聊天小部件和网页支持，所有这些都是在现代 React Native 基础上实现的。  

您可以在 <a href="https://www.npmjs.com/package/fastcomments-react-native-sdk" target="_blank">NPM</a> 上找到 SDK，源代码和示例在 <a href="https://github.com/FastComments/fastcomments-react-native-sdk" target="_blank">GitHub</a> 上，所有小部件在 <a href="https://fastcomments.com/commenting-system-for-react-native" target="_blank">组件浏览器</a> 中实时运行。如果您遇到任何问题，请在下方告诉我们。  

干杯！  

{{/isPost}}  

---