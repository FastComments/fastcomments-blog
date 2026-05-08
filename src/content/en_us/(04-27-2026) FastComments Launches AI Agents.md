---
[category:Features]
[category:Moderation]
[category:Announcements]
###### [postdate]
# [postlink]FastComments Launches AI Agents[/postlink]

{{#unless isPost}}
You can now activate AI Agents that read every new comment, respond in your voice, escalate tough decisions, and award badges to your top contributors. They operate on your schedule, within your budget, and only perform actions that you permit.
{{/unless}}

{{#isPost}}

### A Note to The Community

I want to clarify right off the bat - we are not developing something that allows bots to impersonate real users. This is
not something I believe benefits the internet, online communities, or our product direction. The aim with AI Agents is to empower moderation
teams or community owners who cannot afford dedicated moderators.

All comments made by AI must have the "Bot" tag. This is how the product is designed, and any sites that remove the Bot tag from bot comments will have the feature disabled. We are also exclusively using LLM providers that do not train on our data. Currently, we are utilizing DeepInfra, which only offers inference for open source models.

Now that we've addressed that :)

### What's New

FastComments now offers automated agents that can perform moderation tasks, pin comments, summarize comment threads, and more.

You can find them under [Customize, then AI Agents](https://fastcomments.com/auth/my-account/ai-agents).

### Triggers and Tools

Each agent is configured with a list of triggers and a list of allowed actions. Triggers include new comments, edits, deletions, vote thresholds, flag thresholds, moderator actions, first-time commenters, and more. If you do not want an agent to ban users, you can exclude the ban tool.

For instance, if you want a "thread summarizer" that only replies after a specific number of comments and pins that comment, you can configure the agent's permissions to only allow those actions.

You can also assign an agent to specific URL patterns like `/news/*` or `/forums/*`, and to specific locales, so a French-language community agent does not start replying on your English pages.

### Dry Run, Approvals, and Budgets

Every agent launches in dry-run mode by default. In dry-run, the agent reads context and outlines what it would do, but does not actually take action. You can observe a few real triggers, review the proposed actions and the agent's reasoning, and decide whether you trust it before enabling it.

For sensitive actions, you can require human approval. The agent queues the action, an admin reviews the proposed action along with the agent's reasoning and confidence, and either approves or rejects it. Bans always require approval in the EU per DSA Article 17, but you can require approval for any action, anywhere.

Every agent has a daily and a monthly budget cap. When the cap is reached, the agent ceases to operate until the period resets. We notify you at standard thresholds of 80 percent and 100 percent (you can also opt into a 50 percent alert) to avoid unexpected invoices.

### Memory

Agents have memory that they can read from and write to. They can store brief notes about a user or a pattern, such as "warned for off-topic three times" or "spam ring posting links to domain X", and recall those notes on the next trigger. Memory is shared across agents in your tenant, allowing a welcome agent's notes to inform a moderation agent's decisions later. Memory associated with a user is deleted if they choose to delete their account.

### Replay and Test Run

Before unleashing an agent on live traffic, you can test it against your historical comments. The replay tool goes through real past comments in dry-run, shows you what the agent would have done, and compares each proposed action to what actually occurred. This is the quickest way to fine-tune a system prompt without waiting for live events.

### Models, Privacy, and Cost

Agents operate on open-weight models hosted by infrastructure providers that do not train on customer data. Currently, you can choose between a faster model (gpt-oss-120B-turbo) and a more intelligent, slower model (GLM 5.1), and we will continue to add options as the landscape changes. Costs are calculated per token and converted to dollars on your usage page, alongside daily and monthly trends.

As part of this update, we're reducing our token costs from $80 for 1M Tokens to $20 per 1M combined input/output tokens. Most of our customers spend very little on tokens for spam detection, since the original LLM-based spam detection system only escalated to the LLM if the spam bypassed the naive-bayes classifier, resulting in the previously high costs. We're lowering the cost to promote the use of the new agents feature.

At some point, when memory costs decrease and models like GLM 5.1 become more economical to run on self-hosted hardware, we will transition away from using an external provider and manage the hardware ourselves.

### In Conclusion

We have carefully considered how to build this without giving the impression that the agent is in control. Dry-run, approvals, scoped tools, budget caps, and replay against history all exist to help you maintain control. We hope AI Agents will allow your moderators to focus on the conversations that truly require human interaction.

We are grateful to our customers who provide continuous feedback which enables us to think of ideas like this and also gives us the opportunity to implement them effectively. As always, let us know below if you encounter any issues.

Cheers!

{{/isPost}}

---