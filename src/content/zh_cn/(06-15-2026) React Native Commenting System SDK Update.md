---
[category:API & Development]  
[category:Performance]  
[category:Announcements]  

###### [postdate]  
# [postlink]React Native 评论系统 SDK 更新[/postlink]  

{{#unless isPost}}  
我们对 fastcomments-react-native-sdk 进行了从头重建：全新的、更高效的状态管理、使用设计令牌的重新设计、专用的实时聊天小部件，以及一流的网络支持。  
{{/unless}}  

{{#isPost}}  

### <i class="circle">!</i> 本文包含技术术语  

### 更新内容  

我们刚刚发布了 `fastcomments-react-native-sdk` 的 5.1 版本，这是一款使用真实原生组件而不是 WebView 渲染评论和聊天的 React Native 库。  

我们重写了内部逻辑，重新设计了整个外观，添加了实时聊天小部件，将 SDK 推向网络，并升级到最新的 React Native 和 React。  

<div class="text-center">  
    <img src="images/rn-sdk-light.png" alt="FastComments React Native SDK, light theme" title="FastComments React Native SDK" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />  
    <img src="images/rn-sdk-dark.png" alt="FastComments React Native SDK, dark theme" title="FastComments React Native SDK, dark theme" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />  
</div>  

### 为什么有两个 React Native 库？  

简单说明一下，因为我们经常被问到这个问题。我们提供两个选项：  

- `fastcomments-react-native` 是我们在 WebView 中运行的网络小部件的一个薄包装。它是最快速获得所有功能的方法，且能自动受益于网页修复。  
- `fastcomments-react-native-sdk`（这个）用本地 React Native 组件渲染 UI，不使用 WebView。它更灵活，完全可定制，且感觉更原生，因为它确实是原生的。  

为了获得最佳体验，我们推荐使用 SDK。本文的其他部分将讨论 5.0 中的变化。  

### 新的状态管理  

这一变化的主要驱动因素是确保我们的库保持符合我们的名字，并保持快速。我们有几个客户抱怨它的性能，因此这个问题现在已经解决。  

SDK 最初在 Hookstate 中保存其评论树。虽然工作正常，但随着线程和实时更新的增长，事情开始变得缓慢。  

我们用 Zustand 和一个扁平的、索引的存储替代了 Hookstate。评论现在与 `childrenByParent`、`rootOrder` 和 `pinnedIds` 索引一起存储在 `byId` 映射中，而不是嵌套在状态中的树。  

收益：  

- 实时事件（新评论、投票、编辑）变为了 O(1) 的变更，避免了遍历和克隆树的开销。  
- 我们减少了运行在每次获取中的两个完整树 JSON 深度克隆。  
- 组件只订阅它们读取的确切切片，采用标准选择器模型，因此对一条评论的投票只影响该条评论。  

最后一点重要性超出它听起来的范围。通过基于选择器的订阅，只有在其自身数据发生变化时，一行才会重新渲染。  

### 基于令牌的重新设计  

旧的外观是一堆硬编码样式。新的默认外观是从一组语义设计令牌（`FastCommentsTheme`）生成的：颜色、间距、半径、字体大小、字体粗细和头像大小。整个样式树是从这些令牌派生的。  

这意味着重新设计只需一个属性：  

```tsx  
<FastCommentsLiveCommenting config={config} theme={{ colors: { primary: '#FF5500' } }}/>  
```  

深色模式只需一组令牌：  

```tsx  
import { getDarkTheme } from 'fastcomments-react-native-sdk';  

<FastCommentsLiveCommenting config={config} theme={getDarkTheme()}/>  
```  

重新设计本身是一个更干净、现代中性的外观：细线分隔符、药丸形投票按钮和芯片、填充的主按钮、圆形头像，以及一致的字体比例。`styles` 属性仍然存在以进行手动覆盖，因此现有的集成继续正常工作。  

### 专用的实时聊天小部件  

我们添加了 `FastCommentsLiveChat`，这是一个聊天预设，基于与我们 Android SDK 的聊天视图相同的引擎：按时间顺序排列的消息，最新的消息在底部，作曲器在列表的下方，带有连接点和用户计数的实时头部条，阅读旧消息时会暂停的自动滚动，以及向上滚动时的无限历史。每个预设都可以通过 `config` 进行覆盖。  

```tsx  
<FastCommentsLiveChat config={{ tenantId: 'demo', urlId: 'my-room' }}/>  
```  

### 现在也支持网页  

现在同样的 SDK 通过 `react-native-web` 在网页上运行。富文本作曲器（由 `react-native-enriched` 提供支持）在 iOS、Android 和浏览器上以相同的方式渲染，因此编辑体验在各处保持一致，仅需一个实现。注释列表对其它可能被剪裁的覆盖层（菜单、GIF 选择器、通知列表）在网络构建中被锚定在它们的触发器下。  

### 紧跟 React Native 版本  

5.0 是针对 React Native 0.81 和 React 19 构建和测试的，并且目标是新架构（Fabric），这是本地富文本编辑器所需的。在这里保持更新并非无所事事：编辑器、手势处理和渲染都会随着 React Native 的推进而变得更快、更准确，我们宁愿稳定地接受这些升级，而不是落后数年。  

### 总结  

此重写旨在为 React Native SDK 提供与我们其他库同样的一流基础：一个快速且可预测的数据模型，一个可以通过一个属性进行主题设置的外观，一个聊天小部件，以及网络支持，全部基于现代 React Native 基础。  

您可以在 <a href="https://www.npmjs.com/package/fastcomments-react-native-sdk" target="_blank">NPM</a> 找到 SDK，并在 <a href="https://github.com/FastComments/fastcomments-react-native-sdk" target="_blank">GitHub</a> 上找到源代码和示例。如果您遇到任何问题，请在下方告诉我们。  

干杯！  

{{/isPost}}  

---