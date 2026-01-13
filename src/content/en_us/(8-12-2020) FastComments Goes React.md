---
[category:API & Development]
###### [postdate]
# [postlink]FastComments Goes React[/postlink]

{{#unless isPost}}
Need to embed comments into an application built with React? We’ve got you covered.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> This Article Contains Technical Jargon

#### What's New

FastComments now offers a React component that is on par with features of our VanillaJS widget.

We’ve named the library fastcomments-react. You can find the GitHub repository with the source code <a href="https://github.com/FastComments/fastcomments-react" target="_blank">here</a>.

The repository also contains examples of how to use the widget.

It's available on NPM, which you can find <a href="https://www.npmjs.com/package/fastcomments-react" target="_blank">here</a>.

#### How it Works

This new component functions as a wrapper around the existing FastComments widget.
 
This means that if we add features to our existing components or fix bugs, you’ll benefit from those improvements immediately!

#### Why The New Component?

We developed the FastComments VanillaJS widget to serve as the foundation of our business (along with the core backend). This was designed to be extensible, just as we are now doing.

While previously you could have integrated FastComments into your application by creating your own library, that presented a significant barrier to adoption. By supporting React directly, we make it much easier for these types of customers to adopt FastComments.

#### Single Page Applications?

FastComments supports SPAs at its core. The component tracks changes to the config object - so if you update the current page (referred to as urlId), the widget
will re-render.

#### What Changes for Existing Customers 

Nothing changes for existing customers - and there's **nothing** wrong with using the VanillaJS version of FastComments for new projects. fastcomments-react relies on the VanillaJS
version of FastComments and always will. If we release Angular or Vue components, we will adhere to the same model.

Our VanillaJS widget remains a high-priority asset of FastComments. This release is entirely *additive* to our infrastructure.

Additionally, the VanillaJS widget continues to be an excellent solution for embedding comments on any web page that isn't utilizing a framework, such as a static page.

#### In Conclusion

With the release of the fastcomments-react library, and future libraries, we hope to facilitate easier adoption of FastComments for developers employing modern development
methodologies. 

Cheers!

{{/isPost}}

---