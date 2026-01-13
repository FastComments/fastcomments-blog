---
[category:Features]
[category:AI & Machine Learning]
###### [postdate]
# [postlink]New ChatGPT 4 Based Spam Filter.[/postlink]

{{#unless isPost}}
FastComments adds to its list of spam filter options.
{{/unless}}

{{#isPost}}

### What's New

FastComments continues to enhance its Naïve-Bayes spam classifier; however, we have introduced a new option to the roster of spam detectors.

You can now identify spam using ChatGPT 4 provided by OpenAI.

### Getting It

To set up which spam detector to use, check the Moderation Settings page in your admin dashboard. The GPT4-based spam detector is charged at `$0.08` for every `1000` tokens.

This spam detector is available only for customers on a Flex plan since it is charged based on tokens used.

### Optimizations

We first run all content through the shared Naïve-Bayes classifier to reduce calls to OpenAI. This saves you money for very obvious spam. For the more clever spam, we then call OpenAI to determine if the content resembles spam.

### Results

We noticed immediate improvements for the communities that have enabled this feature.

### Documentation

This can be configured via the Moderation Settings page in your admin dashboard.

[Documentation can also be found here](https://docs.fastcomments.com/guide-moderation.html#spam-detection)

### In Conclusion

We thank our customers who provide us with ongoing feedback, enabling us to come up with ideas like this. We hope you continue to enjoy FastComments.

Cheers!

{{/isPost}}