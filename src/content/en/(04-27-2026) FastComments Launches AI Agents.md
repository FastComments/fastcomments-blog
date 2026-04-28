[category:Features]
[category:Moderation]
[category:Announcements]
###### [postdate]
# [postlink]FastComments Launches AI Agents[/postlink]

{{#unless isPost}}
You can now spin up AI Agents that read every new comment, reply in your voice, escalate the hard calls, and award badges to your best contributors. They run on your schedule, inside your budget, and only do what you let them.
{{/unless}}

{{#isPost}}

### A Note to The Community

I just want to get this out of the way right off the bat - we are not building something that lets bots pretend to be real users. This is
not something I believe is good for the internet, online communities, or our product direction. The goal with AI Agents is to empower moderation
teams or community owners that cannot afford dedicated moderators.

All comments left by AI must have the "Bot" tag. This is how the product ships, and any sites somehow removing the Bot tag from bot comments will have the feature disabled. Also, we are only using LLM providers that do not train on our data. We're currently using DeepInfra, which only provides inference for open source models.

Now with that out of the way :)

### What's New

FastComments now provides automated agents which can perform moderation tasks, pin comments, summarize comment threads, and more.

You can find them under [Customize, then AI Agents](https://fastcomments.com/auth/my-account/ai-agents).

### Triggers and Tools

Each agent is set up with a list of triggers and a list of allowed actions. Triggers include new comments, edits, deletions, vote thresholds, flag thresholds, moderator actions, first-time commenters, and more. If you do not want an agent banning users, you can exclude the ban tool. 

For example, if you only want a "thread summarizer" that only replies after a certain number of comments and pins that comment, you can setup
the agent's permissions so it only has access to those actions.

You can also scope an agent to specific URL patterns like `/news/*` or `/forums/*`, and to specific locales, so a French-language community agent does not start replying on your English pages.

### Dry Run, Approvals, and Budgets

Every agent launches in dry-run mode by default. In dry-run, the agent reads context and writes out what it would do, but does not actually do anything. You can watch a few real triggers go by, look at the proposed actions and the agent's reasoning, and decide whether you trust it before flipping it to enabled.

For sensitive tools, you can require human approval. The agent queues the action, an admin reviews the proposed action along with the agent's reasoning and confidence, and approves or rejects. Bans always require approval in the EU per DSA Article 17, but you can require approval for any tool, anywhere.

Every agent has a daily and a monthly budget cap. When the cap is hit, the agent stops running until the period rolls over. We email you at default thresholds of 80 percent and 100 percent (you can also opt into a 50 percent alert) so there are no surprise invoices.

### Memory

Agents have memory the agent reads and writes for itself. They can save short notes about a user or a pattern, like "warned for off-topic three times" or "spam ring posting links to domain X", and read those notes back on the next trigger. Memory is shared across agents in your tenant, so a welcome agent's notes can inform a moderation agent's decisions later. Memory associated with a user is cleaned up if they delete their account.

### Replay and Test Run

Before turning an agent loose on live traffic, you can run it against your historical comments. The replay tool walks through real past comments in dry-run, shows you what the agent would have done, and classifies each proposed action against what actually happened. This is the fastest way to tune a system prompt without waiting for live events.

### Models, Privacy, and Cost

Agents run on open-weight models hosted by infrastructure providers that do not train on customer data. Today you can choose between a faster model (gpt-oss-120B-turbo) and a smarter, slower one (GLM 5.1), and we will keep adding options as the landscape evolves. Cost is metered per token and converted to dollars on your usage page, alongside daily and monthly trends.

As part of this change, we're lowering our token costs from $80 1M Tokens to $20 per 1M combined input/output tokens. Most of our customers spend very little on tokens for spam detection, as original LLM-based spam detection system only triaged to the LLM if the spam got past the naive-bayes classifier, hence the high cost originally. We're lowering the cost to encourage the use of the new agents functionality.

At some point when memory costs come back down and models like GLM 5.1 are more reasonable to run on self hosted hardware, we will switch away
from using an external provider and run the hardware ourselves.

### In Conclusion

We thought a long time about how to build this without making it feel like the agent was in charge. Dry-run, approvals, scoped tools, budget caps, and replay against history all exist to help you stay in control. We hope AI Agents free up your moderators for the conversations that actually need a human.

We thank our customers that give us continuous feedback so that we can think of ideas like this and also give us the time to launch them well. As always, let us know below if you discover any issues.

Cheers!

{{/isPost}}
