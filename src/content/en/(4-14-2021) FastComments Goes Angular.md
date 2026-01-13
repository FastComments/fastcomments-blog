[category:API & Development]

###### [postdate]
# [postlink]FastComments Goes Angular[/postlink]

{{#unless isPost}}
Need to embed comments into an application developed with Angular? We got you.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> This Article Contains Technical Jargon

#### What's New

FastComments now has an Angular component that's at feature-parity with our VanillaJS widget.

We decided to call the library ngx-fastcomments. You can find the GitHub repository with the source code <a href="https://github.com/FastComments/fastcomments-angular" target="_blank">here</a>.

The repository also contains example usage of the widget in the form of an Angular workspace.

You can find it on NPM <a href="https://www.npmjs.com/package/ngx-fastcomments" target="_blank">here</a>.

#### How it Works

The way this new component works is that the Angular component is a wrapper around the existing FastComments widget.
 
This means if we add features to our existing components or fix bugs you'll still benefit right away!

#### Why The New Component?

We wrote the FastComments VanillaJS widget to be the core of our business (along with the core backend). This means we designed it to be extended just the way we are now.

While without this new Angular library, you could have integrated FastComments into your application by writing your own library, it would have been a major hurdle of adoption. By supporting
Angular directly we make adopting FastComments much easier for these types of customers.

#### Single Page Applications?

FastComments supports SPAs at its core. The component monitors changes to the config object using change detection. For example, if you update the current page (called urlId) the widget
will re-render. This makes use cases like toggling dark mode, or adding pagination, easy to implement.

#### What Changes for Existing Customers 

Nothing changes for existing customers - and there's **nothing** wrong with using the VanillaJS version of FastComments for new projects. ngx-fastcomments depends on the VanillaJS
version of FastComments and always will. If we release new components, we'll follow the same model.

Our VanillaJS widget is a first-class citizen of FastComments. This release is completely *additive* to our infrastructure.

Additionally, the VanillaJS widget still remains a great solution for dropping embedded comments into any web page that isn't using a framework, like a static page.

#### In Conclusion

By releasing the ngx-fastcomments library, and future libraries, we hope that we can make it easier for developers to adopt FastComments while using modern development
methodologies. 

Cheers!

{{/isPost}}
