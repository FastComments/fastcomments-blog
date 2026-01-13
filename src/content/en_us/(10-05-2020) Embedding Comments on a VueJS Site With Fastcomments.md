---
[category:Tutorials]
[category:Integrations]
###### [postdate]
# [postlink]Embedding Comments on a VueJS site With FastComments[/postlink]

{{#unless isPost}}
Need to embed comments into an application built with Vue? We’ve got you covered.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> This Article Contains Technical Jargon

#### What's New

FastComments now offers a Vue component that matches the features of our VanillaJS widget.

We named the library fastcomments-vue. You can find the GitHub repository with the source code <a href="https://github.com/FastComments/fastcomments-vue" target="_blank">here</a>.

The repository also includes example usage of the widget.

It’s available on NPM, which you can find <a href="https://www.npmjs.com/package/fastcomments-vue" target="_blank">here</a>.

#### How it Works

This new component functions as a wrapper around the existing FastComments widget.

This means that if we add features to our existing components or resolve bugs, you’ll benefit immediately!

#### Why The New Component?

We built the FastComments VanillaJS widget to be the foundation of our business (along with the core backend). This means we designed it to be extensible just like we’re doing now.

While you could have integrated FastComments into your application by creating your own library without this new Vue library, it would have presented a significant barrier to adoption. By directly supporting Vue, we make it much easier for these types of customers to adopt FastComments.

#### Vue 3.0

We have a component specifically designed for Vue 3.0 called <a href="https://github.com/fastcomments/fastcomments-vue-next" target="_blank">fastcomments-vue-next</a>.

#### Single Page Applications?

FastComments is built to support SPAs at its core. The component observes changes to the config object - so if you update the current page (called urlId), the widget will re-render.

#### What Changes for Existing Customers 

Nothing changes for existing customers - and there’s **nothing** wrong with using the VanillaJS version of FastComments for new projects. fastcomments-vue relies on the VanillaJS version of FastComments and will continue to do so. If we release Angular or Vue components, we’ll keep the same approach.

Our VanillaJS widget is a first-class feature of FastComments. This release is entirely *additive* to our infrastructure.

Additionally, the VanillaJS widget remains a great solution for embedding comments into any web page that isn’t using a framework, such as a static page.

#### In Conclusion

By releasing the fastcomments-vue library, and future libraries, we aim to make it easier for developers to adopt FastComments while using modern development methodologies. 

Cheers!

{{/isPost}}

---