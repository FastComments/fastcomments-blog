[category:API & Development]

###### [postdate]
# [postlink]New Aggregation API Released[/postlink]

{{#unless isPost}}
FastComments gives its customers unbeatable access to their data with a flexible and fast aggregation API
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> This Article Contains Technical Jargon

### What's New

FastComments gives its customers unbeatable access to their data with a flexible aggregation API. This API lets you count, investigate, slice, and aggregate
your comments, votes, and **34 more resources**!

### Example - Counting Comments by Email and Page

For example with the new API we can get a count of comments by page (`urlId`) and user email (`commenterEmail`):  

<div class="code">  curl --request POST --url 'https://fastcomments.com/api/v1/aggregate?tenantId=demo&API_KEY=DEMO_API_SECRET&includeStats=true' --data '{
    "resourceName": "Comment",
    "operations": [
        { "op": "distinct", "field": "urlId", "alias": "urlId" },
        { "op": "distinct", "field": "commenterEmail", "alias": "commenterEmail" }
    ]
}' --header 'Content-Type: application/json'
</div>

This would give us something like:

<div class="code">  {
    "status": "success",
    "data": [
        {
            "commenterEmail": {
                "distinctCounts": {
                    "someone@somewhere.com": 1,
                    "someone2@somewhere.com": 1
                }
            }
        },
        {
            "urlId": {
                "distinctCounts": {
                    "some-page": 2
                }
            }
        }
    ],
    "stats": { "scanned": 2 }
}
</div>

Or maybe we want to count our approved and unapproved comments:

<div class="code">  curl --request POST --url 'https://fastcomments.com/api/v1/aggregate?tenantId=demo&API_KEY=DEMO_API_SECRET&includeStats=true' --data '{
    "resourceName": "Comment",
    "operations": [
        { "op": "distinct", "field": "approved", "alias": "approved" },
    ]
}' --header 'Content-Type: application/json'
</div>

Gives us:

<div class="code">  {
    "status": "success",
    "data": [
        {
            "approved": { "distinctCounts": { "true": 2200, "false": 231 } }
        }
    ],
    "stats": { "scanned": 2431 }
}
</div>

The API also supports query filters and more in-depth grouping.

### Documentation

[You can find the full documentation here.](https://docs.fastcomments.com/guide-api.html#aggregate-post)

### Motivation

We want our customers to be able to build dashboards to monitor their account, build reports, handle customer requests, and investigate their data as needed.

### Who Gets it & Limits

All FastComments customers have access to the API. Your usage is limited based on your available API credits which will vary based
on the package you've purchased.

### In Conclusion

Like all major releases, we're glad that we could take the time to optimize, test, and properly release these changes. Let us know
below if you discover any issues.

Cheers!

{{/isPost}}
