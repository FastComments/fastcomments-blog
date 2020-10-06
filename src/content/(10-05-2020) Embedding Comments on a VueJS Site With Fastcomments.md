###### [postdate]
# [postlink]Embedding Comments on a VueJS site With FastComments[/postlink]

{{#unless isPost}}
Need to embed comments into an application developed with Vue? We got you.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> This Article Contains Technical Jargon

#### What's New

FastComments now has a Vue component that's at feature-parity with our VanillaJS widget.

We decided to call the library fastcomments-vue. You can find the GitHub repository with the source code <a href="https://github.com/FastComments/fastcomments-vue" target="_blank">here</a>.

The repository also contains example usage of the widget.

It's on NPM, which you can find <a href="https://www.npmjs.com/package/fastcomments-vue" target="_blank">here</a>.

#### How it Works

The way this new component works is that the Vue component is a wrapper around the existing FastComments widget.
 
This means if we add features to our existing components or fix bugs you'll still benefit right away!

#### Why The New Component?

We wrote the FastComments VanillaJS widget to be the core of our business (along with the core backend). This means we designed it to be extended just the way we are now.

While without this new Vue library, you could have integrated FastComments into your application by writing your own library, it would have been a major hurdle of adoption. By supporting
Vue directly we make adopting FastComments much easier for these types of customers.

#### Vue 3.0

We have a component built specifically for Vue 3.0 called <a href="https://github.com/fastcomments/fastcomments-vue-next" target="_blank">fastcomments-vue-next</a>.

#### Single Page Applications?

FastComments supports SPAs at its core. The component monitors changes to the config object - so if you update the current page (called urlId) the widget
will re-render.

#### What Changes for Existing Customers 

Nothing changes for existing customers - and there's **nothing** wrong with using the VanillaJS version of FastComments for new projects. fastcomments-vue depends on the VanillaJS
version of FastComments and always will. If we release Angular or Vue components, we'll follow the same model.

Our VanillaJS widget is a first-class citizen of FastComments. This release is completely *additive* to our infrastructure.

Additionally, the VanillaJS widget still remains a great solution for dropping embedded comments into any web page that isn't using a framework, like a static page.

#### In Conclusion

By releasing the fastcomments-vue library, and future libraries, we hope that we can make it easier for developers to adopt FastComments while using modern development
methodologies. 

Cheers!

{{/isPost}}
