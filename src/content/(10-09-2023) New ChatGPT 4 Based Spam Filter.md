[category:Features]
[category:AI & Machine Learning]
###### [postdate]
# [postlink]New ChatGPT 4 Based Spam Filter.[/postlink]

{{#unless isPost}}
FastComments adds to its list of spam filter options.
{{/unless}}

{{#isPost}}

### What's New

FastComments continues to improve its Naïve-Bayes spam classifier, however we have added a new option to the fleet of spam detectors.

You can now detect spam using ChatGPT 4 provided by OpenAI.

### Getting It

To configure which spam detector to use, check the Moderation Settings page in your admin dashboard. The GPT4-based spam detector is billed at `$0.08` every `1000` tokens.

This spam detector is only available for customers on a Flex plan as it is billed based on tokens used.

### Optimizations

We first pass all content through the shared Naïve-Bayes classifier to limit calls to OpenAI. This saves you money for very obvious spam. For the extra sneaky spam, we
then call over to OpenAI to see if the content looks like spam.

### Results

We observed immediate improvements to the communities that have turned this feature on.

### Documentation

This can be setup via the Moderation Settings page in your admin dashboard.

[Documentation can also be found here](https://docs.fastcomments.com/guide-moderation.html#spam-detection)

### In Conclusion

We thank our customers that give us continuous feedback so that we can think of ideas like this. We hope you
continue to love FastComments.

Cheers!

{{/isPost}}
