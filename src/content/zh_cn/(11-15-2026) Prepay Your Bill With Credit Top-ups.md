[category:Features]
[category:Announcements]

###### [postdate]
# [postlink]使用信用充值预付账单[/postlink]

{{#unless isPost}}
您现在可以在账单页面为您的 FastComments 账户添加信用额度。信用额度会在您的卡片被扣费之前，应用于您未来的发票，包括续订和 Flex 使用费用。
{{/unless}}

{{#isPost}}

### 新功能

直到现在，FastComments 只有一种付款方式：在发票到期时向您的卡片收费。这对大多数账户来说没问题，但并非所有账户都适用。有些财务部门更倾向于一次性付款，然后暂时不再处理。有些 Flex 客户更愿意提前为繁忙的月份付款，而不是被突如其来的费用惊到。还有一些用户询问是否可以直接向账户充值。

现在您可以了。账单页面新增了 **Manage Credits** 按钮，位于 **View Invoices** 和 **Invoice Settings** 旁边。点击后会打开 **Credits** 页面，您可以在此查看余额并进行充值。

信用额度是以您的计费货币保存在 FastComments 账户中的资金。当发票生成时，系统会先使用您的信用额度，只有剩余部分（如果有）才会向您的卡片收费。这包括订阅续费、Flex 使用费用以及我们向您开具的其他费用。无需任何配置或记忆；只要余额存在，就会自动使用。

### 添加信用额度

1. 打开 <a href="https://fastcomments.com/auth/my-account/billing-info" target="_blank">My Account -> Billing Info</a> 并点击 **Manage Credits**。
2. 在 **Add credit** 下，选择预设金额（10、25、50 或 100，单位为您的货币），或选择 **Other amount** 并自行输入金额，单次充值范围为 5 至 10,000。
3. 点击 **Add**。系统会扣费您已保存的卡片，如果银行需要您确认付款，则会在此立即完成。
4. 页面会显示 **Credit added** 并显示您的新余额。

每次充值都会在同一页面的 **Past top-ups** 表格中列出，显示日期、金额以及状态是 **Credited**、**Pending** 还是 **Failed**。如果卡片被拒绝，则不会扣费，余额保持不变。

只有账户所有者或拥有 **Billing Admin** 权限的用户才能添加信用额度，这与今天可以更改套餐或付款方式的人员相同。

### 详细信息

信用额度并非折扣、积分系统或独立货币。它是以您的货币计入您账户的资金，直至发票使用为止。只要余额大于零，账单页面就会显示该余额，每张发票也会显示已使用的信用额度。

充值会使用您账户中已保存的付款方式，无需再次结账。如果您尚未保存卡片，Credits 页面会引导您先前往账单页面添加卡片。

通过 Shopify 或 BigCommerce 计费的账户，以及在仪表盘外开具发票的账户，会在相应平台完成付款，因此不会看到 **Manage Credits** 按钮。

### 文档

<a href="https://docs.fastcomments.com/guide-billing.html#credits" target="_blank">新的计费指南</a>全面介绍了信用额度：谁可以添加、额度限制、使用方式、银行确认、卡片被拒以及 Past top-ups 表格。

### 结论

如果您希望预付、为使用费用保留缓冲，或让财务部门的工作更轻松，这正适合您。请在下方告诉我们使用体验，以及还有哪些可以让计费更简便的需求。

干杯!

{{/isPost}}

---