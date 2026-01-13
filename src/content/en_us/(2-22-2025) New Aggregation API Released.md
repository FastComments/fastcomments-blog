---
[category:API & Development]

###### [postdate]
# [postlink]New Aggregation API Released[/postlink]

{{#unless isPost}}
FastComments provides its customers with unparalleled access to their data through a flexible and fast aggregation API
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> This Article Contains Technical Jargon

### What's New

FastComments offers its customers unparalleled access to their data with a flexible aggregation API. This API allows you to count, analyze, slice, and aggregate
your comments, votes, and **34 more resources**!

### Example - Counting Comments by Email and Page

For instance, with the new API, we can obtain a count of comments by page (`urlId`) and user email (`commenterEmail`):  

<div class="code">  curl --request POST --url 'https://fastcomments.com/api/v1/aggregate?tenantId=demo&API_KEY=DEMO_API_SECRET&includeStats=true' --data '{
    "resourceName": "Comment",
    "operations": [
        { "op": "distinct", "field": "urlId", "alias": "urlId" },
        { "op": "distinct", "field": "commenterEmail", "alias": "commenterEmail" }
    ]
}' --header 'Content-Type: application/json'
</div>

This would return something like:

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

Or perhaps we want to count our approved and unapproved comments:

<div class="code">  curl --request POST --url 'https://fastcomments.com/api/v1/aggregate?tenantId=demo&API_KEY=DEMO_API_SECRET&includeStats=true' --data '{
    "resourceName": "Comment",
    "operations": [
        { "op": "distinct", "field": "approved", "alias": "approved" },
    ]
}' --header 'Content-Type: application/json'
</div>

This gives us:

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

The API also supports query filters and more detailed grouping.

### Documentation

[You can find the full documentation here.](https://docs.fastcomments.com/guide-api.html#aggregate-post)

### Motivation

We aim for our customers to build dashboards to monitor their account, generate reports, address customer requests, and analyze their data as needed.

### Who Gets it & Limits

All FastComments customers have access to the API. Your usage is limited based on your available API credits which will vary depending on the package you've purchased.

### In Conclusion

Like all major releases, we're pleased to have had the time to optimize, test, and properly launch these changes. Please let us know 
below if you encounter any issues.

Cheers!

{{/isPost}}

---