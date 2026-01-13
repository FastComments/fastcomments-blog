---
[category:API & Development]
[category:Announcements]

###### [postdate]
# [postlink]FastComments TypeScript Migration Completed[/postlink]

{{#unless isPost}}
In preparation for the next decade of development, we've migrated one of the largest FastComments components to TypeScript.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> This Article Contains Technical Jargon

### What's New

At FastComments, we value statically typed languages. More specifically, I appreciate solid type systems with fast compilers. FastComments initially started with the latter - or
no compiler at all. While we had two services written in modern Java within the first year, the main backend and frontend libraries were written in CJS JS running on Node.

In preparation for the next decade of development, we've migrated the largest FastComments components to TypeScript.

This involved migrating over 130k lines of code (100k of that is backend) across 1441 files, and fixing over 8000 compile errors.

<div class="text-center">
    <div class="sm">woooooo</div>
    <img src="images/ts-migration.png" alt="GitHub Screenshot" title="GitHub Screenshot" />
</div>

This process took two weeks.

### Code Freeze - Thank You

I would like to thank our customers for their patience with any delays in bug fixes or feature releases as we implemented a two-week code freeze to complete this upgrade. Thank you!

### Bugs Fixed

As you can imagine, we fixed a number of bugs. These were primarily related to spam detection and caching. 

### Breaking Changes

- All API endpoints now return status: 'failed' instead of a mix of "failed" and "failure" as status values. "success" remains unchanged.
- We will no longer default to the first widget configuration if there is no match; instead, we will return the default system configuration.

### What Was it Like?

We discovered that, as usual, many of the tools in the NPM ecosystem to assist with this task did not perform very well. So, we utilized LLMs to generate
scripts to handle a lot of the work. For example, we made extensive use of JSDoc, so we could write scripts to take the JSDoc and convert them to TypeScript interfaces
and type definitions, and properly annotate function arguments and return types. We also used these scripts to migrate from CJS to ESM, which included rewriting
imports, exports, and detecting common runtime issues like `__dirname`.

Did I mention runtime issues?

### How is TypeScript in 2025?

TypeScript is a pleasant language for writing business logic. However, Java still offers a better developer experience. If Java, Go, or Rust compiles, it's most likely going to work. With TypeScript,
I can do something like:

    console.log(__dirname);

... and this will compile.

But it won't run, with modern ES modules. Your IDE will even autocomplete `__dirname`, only for it to fail at runtime. It feels reminiscent of Spring DI, but worse.

You can also do things like:

    context.someImportantMethodToCall;

Now, this is a "statement." It's a valid "statement." At first glance, you might think we're calling `someImportantMethodToCall`, but we're not! My IDE, at least, doesn't
warn about this, and neither does the compiler. The code will just do nothing (unless `someImportantMethodToCall` is a class `getter`, in which case it is implicitly called...)

The fix is:

    context.someImportantMethodToCall();

I think you could probably catch this with something like eslint and some "no side-effects" rule, but then you pull in another large set of libraries to keep updated, and
then eslint has to parse your entire code base on every build, making the tools slow, and so on - no thanks. The productivity impact of dealing with slow tools like eslint has been
more significant in my career in past jobs than the productivity "boost" I ever received from the minor issues eslint fixes/prevents with spacing, etc. There are faster alternatives
emerging now, which is great.

TypeScript is truly nice because of language features like `Pick<User, 'username', 'email'>`. This, along with type inference, allows for type-safe query results from the database for subsets
of larger objects without needing to define a class for each shape. `Pick` is something I’m surprised Scala doesn’t have. Type Unions are also very useful.

Incremental builds work reasonably well too; we’ve only increased our build times in CI by about 5 - 10 seconds on average, for building the shared library, frontend, and backend.

### Development Timeline

For those interested, here's what our progression looked like:

- Day One: Found 5564 errors in 362 files.
- Day Two: Found 4034 errors in 239 files.
- Day Three: Found 3784 errors in 191 files.
- Day Four: Found 2974 errors in 169 files.
- Day Five: Found 3000 errors in 171 files.
- Day Six: Found 2916 errors in 165 files.
- Day Seven: Found 2618 errors in 157 files.
- Day Eight: Found 2253 errors in 109 files.
- Day Nine: Found 1605 errors in 69 files.
- Day Ten: Found 686 errors in 53 files.
- Day 11: Backend Unit Tests Pass
- Day 12: Start to migrate frontend, 3118 errors.
- Day 13: Found 2172 errors.
- Day 14: Found 1224 errors.
- Day 15: Found 498 errors.
- Day 16: All compile errors fixed.
- Day 17: Released. E2E tests pass. 30 minutes downtime due to unexpected runtime issues. :)

### The Future

We undertook this to support development for the next decade. The system is now large enough that it’s faster to develop with a type system than without one.

You can also expect our TypeScript library on NPM to improve, as it already has begun to do, since we're now dog-feeding that library in our server and client code.

We will also soon be releasing generated client SDKs directly from the server code, which was a primary motivation for this effort.

### In Conclusion

Like all major releases, we're pleased that we could take the time to optimize, test, and properly release these changes. Let us know
below if you encounter any issues.

Cheers!

{{/isPost}}

---