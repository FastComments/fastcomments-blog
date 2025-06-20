[category:API & Development]
[category:Announcements]

###### [postdate]
# [postlink]FastComments TypeScript Migration Completed[/postlink]

{{#unless isPost}}
In preparation for the next decade of development, we've migrated one of the biggest FastComments components to TypeScript.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> This Article Contains Technical Jargon

### What's New

At FastComments we value statically typed languages. More specifically, I like decent type systems with fast compilers. FastComments we started with the latter - or
no compiler. While we had two services written in modern Java within the first year, the main backend and frontend libraries were written in CJS JS running on Node.

In preparation for the next decade of development, we've migrated the largest FastComments components to TypeScript.

This involved migrating over 130k lines of code (100k of that is backend) across 1441 files, and fixing over 8000 compile errors.

<div class="text-center">
    <div class="sm">woooooo</div>
    <img src="images/ts-migration.png" alt="GitHub Screenshot" title="GitHub Screenshot" />
</div>

This was done over two weeks.

### Code Freeze - Thank You

I would like to thank our customers for dealing with any delays in bugfixes or feature releases as we did a two week code
freeze to complete this upgrade. Thank you!

### Bugs Fixed

As you can imagine, we fixed a handful of bugs. These were mostly around spam detection and caching. 

### Breaking Changes

- All API endpoints now return status: 'failed' instead of a mix of "failed" and "failure" as status values. "success" remains unchanged.
- We will no longer default to the first widget configuration if there is no match, instead we will return the default system configuration.

### What Was it Like?

We found that, as usual, many of the tools in the NPM ecosystem to help with this task did not work very well. So, we used LLMs to generate
scripts to do a lot of the work. For example, we made heavy use of JSDoc, so we could write scripts to take the JSDoc and convert them to typescript interfaces
and type definitions, and properly annotate function arguments and return types. We also used these scripts to migrate from CJS to ESM, which included rewriting
imports, exports, and detecting common runtime issues like `__dirname`.

Did I mention runtime issues?

### How is TypeScript in 2025?

TypeScript is a nice language for writing business logic. But, Java still has better DevEx. If Java, Go, or Rust compiles, most likely it will work. With TypeScript,
I can do something like:

    console.log(__dirname);

... and this will compile.

But it won't run, with modern es modules. Your IDE will happily even autocomplete `__dirname`, and then it will blow up at runtime. It feels like Spring DI, but worse.

You can also do things like:

    context.someImportantMethodToCall;

Now, this is a "statement". It's a valid "statement". At first glance you might think we're calling `someImportantMethodToCall`, but we're not! My IDE, at least, doesn't
warn about this, and neither does the compiler. The code will just do nothing (unless `someImportantMethodToCall` is a class `getter` in which case it is implicitly called...)

The fix is:

    context.someImportantMethodToCall();

I think you can probably detect this with something like eslint and some "no no side-effects" rule, but then you pull in another large set of libraries to keep updated, and
then eslint has to parse your whole code base on every build, the tools are slow, and so on - no thanks. The productivity impact of dealing with slow tools like eslint has been
more significant in my career in past jobs than the productivity "boost" I ever got from the minor things eslint fixes/prevents with spacing etc. There are faster alternatives
coming out now, which is great.

TypeScript is really nice because of language features like `Pick<User, 'username', 'email'>`. This, combined with type inference, provides a way to have type-safe query results from the database for subsets
of larger objects without having to define a class for each shape. `Pick` is something I'm surprised Scala doesn't have. Type Unions are also really nice.

Incremental builds also work reasonably well, we've only increased our build times in CI by about 5 - 10 seconds on average, for building the shared library, frontend, and backend.

### Development Timeline

For those curious, here's what our progression looked like:

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
- Day 17: Released. E2E tests pass. 30 minutes downtime during unexpected runtime issues. :)

### The Future

We did this to support development for the next decade. The system is now large enough that it's faster to develop with a type system than without one.

You can also expect our TypeScript library on NPM to improve, as it already has started to, since we're now dog-feeding that library in our server and client code.

We will also soon be releasing generated client SDKs directly from the server code, which was a primary motivation around this effort.

### In Conclusion

Like all major releases, we're glad that we could take the time to optimize, test, and properly release these changes. Let us know
below if you discover any issues.

Cheers!

{{/isPost}}
