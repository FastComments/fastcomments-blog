###### [postdate]
# [postlink]FastComments Goes React[/postlink]

{{#unless isPost}}
Need to embed comments into an application developed with React? We got you.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> This Article Contains Technical Jargon

<a href="https://reactjs.org/" target="_blank">React</a> is a fast and developer friendly library for manipulating the DOM.

#### What's New

FastComments now has a React component that's at feature-parity with our VanillaJS widget.

We decided to call the library fastcomments-react. You can find the GitHub repository with the source code <a href="https://github.com/FastComments/fastcomments-react" target="_blank">here.</a>

The repository also contains example usage of the widget.

It's on NPM, which you can find <a href="https://www.npmjs.com/package/fastcomments-react" target="_blank">here.</a>

The way it works is that the React component is a wrapper around the existing FastComments widget - so if we add features to our existing components you'll still benefit.

#### Why The New Component?

We wrote the FastComments VanillaJS widget to be the core of our business (along with the core backend). This means we designed it to be extended just the way we are now.

While without this new React library, you could have integrated FastComments into your application by writing your own library, it would have been a major hurdle of adoption. By supporting
React directly we make adopting FastComments much easier for these types of customers.

#### What Changes for Existing Customers 

Nothing changes for existing customers - and there's **nothing** wrong with using the VanillaJS version of FastComments for new projects. fastcomments-react depends on the VanillaJS
version of FastComments and always will. If we release Angular or Vue components, we'll follow the same model.

Our VanillaJS widget is a first-class citizen of FastComments. This release is completely *additive* to our infrastructure.

Additionally, the VanillaJS widget still remains a great solution for dropping embedded comments into any web page that isn't using a framework, like a static page.

#### In Conclusion

By releasing the fastcomments-react library, and future libraries, we hope that we can make it easier for developers to adopt FastComments while using modern development
methodologies. 

Cheers!

{{/isPost}}
