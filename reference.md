# Reference

## Analytics

<details><summary><code>client.analytics.<a href="/src/api/resources/analytics/client/Client.ts">getAnalyticsCreditNotes</a>({ ...params }) -> Monite.PayableAnalyticsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve aggregated statistics for payables with different breakdowns.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.analytics.getAnalyticsCreditNotes({
    metric: "id",
    aggregation_function: "count",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Monite.GetAnalyticsCreditNotesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Analytics.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.analytics.<a href="/src/api/resources/analytics/client/Client.ts">getAnalyticsPayables</a>({ ...params }) -> Monite.PayableAnalyticsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve aggregated statistics for payables with different breakdowns.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.analytics.getAnalyticsPayables({
    metric: "id",
    aggregation_function: "count",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Monite.GetAnalyticsPayablesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Analytics.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.analytics.<a href="/src/api/resources/analytics/client/Client.ts">getAnalyticsReceivables</a>({ ...params }) -> Monite.ReceivablesAnalyticsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve aggregated statistics for receivables with different breakdowns.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.analytics.getAnalyticsReceivables({
    metric: "id",
    aggregation_function: "count",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Monite.GetAnalyticsReceivablesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Analytics.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Approval policies

<details><summary><code>client.approvalPolicies.<a href="/src/api/resources/approvalPolicies/client/Client.ts">get</a>({ ...params }) -> Monite.ApprovalPolicyResourceList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a list of all approval policies with pagination.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.approvalPolicies.get();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Monite.ApprovalPoliciesGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApprovalPolicies.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.approvalPolicies.<a href="/src/api/resources/approvalPolicies/client/Client.ts">create</a>({ ...params }) -> Monite.ApprovalPolicyResource</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new approval policy.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.approvalPolicies.create({
    name: "name",
    script: [true],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Monite.ApprovalPolicyCreate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApprovalPolicies.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.approvalPolicies.<a href="/src/api/resources/approvalPolicies/client/Client.ts">getById</a>(approvalPolicyId) -> Monite.ApprovalPolicyResource</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a specific approval policy.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.approvalPolicies.getById("approval_policy_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**approvalPolicyId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApprovalPolicies.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.approvalPolicies.<a href="/src/api/resources/approvalPolicies/client/Client.ts">deleteById</a>(approvalPolicyId) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete an existing approval policy.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.approvalPolicies.deleteById("approval_policy_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**approvalPolicyId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApprovalPolicies.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.approvalPolicies.<a href="/src/api/resources/approvalPolicies/client/Client.ts">updateById</a>(approvalPolicyId, { ...params }) -> Monite.ApprovalPolicyResource</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update an existing approval policy.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.approvalPolicies.updateById("approval_policy_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**approvalPolicyId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Monite.ApprovalPolicyUpdate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApprovalPolicies.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Approval requests

<details><summary><code>client.approvalRequests.<a href="/src/api/resources/approvalRequests/client/Client.ts">get</a>({ ...params }) -> Monite.ApprovalRequestResourceList</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.approvalRequests.get();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Monite.ApprovalRequestsGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApprovalRequests.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.approvalRequests.<a href="/src/api/resources/approvalRequests/client/Client.ts">create</a>({ ...params }) -> Monite.ApprovalRequestResourceWithMetadata</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.approvalRequests.create({
    object_id: "object_id",
    object_type: "account",
    required_approval_count: 1,
    role_ids: ["role_ids"],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Monite.ApprovalRequestCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApprovalRequests.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.approvalRequests.<a href="/src/api/resources/approvalRequests/client/Client.ts">getById</a>(approvalRequestId) -> Monite.ApprovalRequestResourceWithMetadata</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.approvalRequests.getById("approval_request_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**approvalRequestId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApprovalRequests.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.approvalRequests.<a href="/src/api/resources/approvalRequests/client/Client.ts">approveById</a>(approvalRequestId) -> Monite.ApprovalRequestResourceWithMetadata</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.approvalRequests.approveById("approval_request_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**approvalRequestId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApprovalRequests.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.approvalRequests.<a href="/src/api/resources/approvalRequests/client/Client.ts">cancelById</a>(approvalRequestId) -> Monite.ApprovalRequestResourceWithMetadata</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.approvalRequests.cancelById("approval_request_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**approvalRequestId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApprovalRequests.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.approvalRequests.<a href="/src/api/resources/approvalRequests/client/Client.ts">rejectById</a>(approvalRequestId) -> Monite.ApprovalRequestResourceWithMetadata</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.approvalRequests.rejectById("approval_request_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**approvalRequestId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApprovalRequests.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Access tokens

<details><summary><code>client.accessTokens.<a href="/src/api/resources/accessTokens/client/Client.ts">revoke</a>({ ...params }) -> Monite.MessageResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Revoke an existing token immediately.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accessTokens.revoke({
    client_id: "client_id",
    client_secret: "client_secret",
    token: "token",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Monite.RevokeTokenPayload`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AccessTokens.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.accessTokens.<a href="/src/api/resources/accessTokens/client/Client.ts">create</a>({ ...params }) -> Monite.AccessTokenResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new access token based on client ID and client secret.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accessTokens.create({
    client_id: "client_id",
    client_secret: "client_secret",
    grant_type: "client_credentials",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Monite.ObtainTokenPayload`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AccessTokens.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Comments

<details><summary><code>client.comments.<a href="/src/api/resources/comments/client/Client.ts">get</a>({ ...params }) -> Monite.CommentResourceList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get comments

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.comments.get({
    object_type: "payable",
    object_id: "object_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Monite.CommentsGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Comments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.comments.<a href="/src/api/resources/comments/client/Client.ts">create</a>({ ...params }) -> Monite.CommentResource</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create new comment

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.comments.create({
    object_id: "object_id",
    object_type: "object_type",
    text: "text",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Monite.CommentCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Comments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.comments.<a href="/src/api/resources/comments/client/Client.ts">getById</a>(commentId) -> Monite.CommentResource</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get comment

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.comments.getById("comment_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**commentId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Comments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.comments.<a href="/src/api/resources/comments/client/Client.ts">deleteById</a>(commentId) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete comment

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.comments.deleteById("comment_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**commentId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Comments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.comments.<a href="/src/api/resources/comments/client/Client.ts">updateById</a>(commentId, { ...params }) -> Monite.CommentResource</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update comment

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.comments.updateById("comment_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**commentId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Monite.CommentUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Comments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Counterparts

<details><summary><code>client.counterparts.<a href="/src/api/resources/counterparts/client/Client.ts">get</a>({ ...params }) -> Monite.CounterpartPaginationResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.counterparts.get({
    sort_code: "123456",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Monite.CounterpartsGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Counterparts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.counterparts.<a href="/src/api/resources/counterparts/client/Client.ts">create</a>({ ...params }) -> Monite.CounterpartResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.counterparts.create({
    type: "organization",
    organization: {
        address: {
            city: "Berlin",
            country: "AF",
            line1: "Flughafenstrasse 52",
            postal_code: "10115",
        },
        is_customer: true,
        is_vendor: true,
        legal_name: "Acme Inc.",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Monite.CounterpartCreatePayload`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Counterparts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.counterparts.<a href="/src/api/resources/counterparts/client/Client.ts">getById</a>(counterpartId) -> Monite.CounterpartResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.counterparts.getById("counterpart_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**counterpartId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Counterparts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.counterparts.<a href="/src/api/resources/counterparts/client/Client.ts">deleteById</a>(counterpartId) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.counterparts.deleteById("counterpart_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**counterpartId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Counterparts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.counterparts.<a href="/src/api/resources/counterparts/client/Client.ts">updateById</a>(counterpartId, { ...params }) -> Monite.CounterpartResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.counterparts.updateById("counterpart_id", {
    individual: {},
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**counterpartId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Monite.CounterpartUpdatePayload`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Counterparts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.counterparts.<a href="/src/api/resources/counterparts/client/Client.ts">getPartnerMetadataById</a>(counterpartId) -> Monite.PartnerMetadataResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.counterparts.getPartnerMetadataById("counterpart_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**counterpartId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Counterparts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.counterparts.<a href="/src/api/resources/counterparts/client/Client.ts">updatePartnerMetadataById</a>(counterpartId, { ...params }) -> Monite.PartnerMetadataResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.counterparts.updatePartnerMetadataById("counterpart_id", {
    metadata: {
        key: "value",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**counterpartId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Monite.PartnerMetadata`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Counterparts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Counterpart e-invoicing credentials

<details><summary><code>client.counterpartEInvoicingCredentials.<a href="/src/api/resources/counterpartEInvoicingCredentials/client/Client.ts">getCounterpartsIdEinvoicingCredentials</a>(counterpartId) -> Monite.CounterpartEinvoicingCredentialResponseList</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.counterpartEInvoicingCredentials.getCounterpartsIdEinvoicingCredentials("counterpart_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**counterpartId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CounterpartEInvoicingCredentials.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.counterpartEInvoicingCredentials.<a href="/src/api/resources/counterpartEInvoicingCredentials/client/Client.ts">postCounterpartsIdEinvoicingCredentials</a>(counterpartId, { ...params }) -> Monite.CounterpartEinvoicingCredentialResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.counterpartEInvoicingCredentials.postCounterpartsIdEinvoicingCredentials("counterpart_id", {
    counterpart_vat_id_id: "counterpart_vat_id_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**counterpartId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Monite.CreateCounterpartEinvoicingCredentialPayload`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CounterpartEInvoicingCredentials.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.counterpartEInvoicingCredentials.<a href="/src/api/resources/counterpartEInvoicingCredentials/client/Client.ts">getCounterpartsIdEinvoicingCredentialsId</a>(credentialId, counterpartId) -> Monite.CounterpartEinvoicingCredentialResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.counterpartEInvoicingCredentials.getCounterpartsIdEinvoicingCredentialsId(
    "credential_id",
    "counterpart_id",
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**credentialId:** `string`

</dd>
</dl>

<dl>
<dd>

**counterpartId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CounterpartEInvoicingCredentials.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.counterpartEInvoicingCredentials.<a href="/src/api/resources/counterpartEInvoicingCredentials/client/Client.ts">deleteCounterpartsIdEinvoicingCredentialsId</a>(credentialId, counterpartId) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.counterpartEInvoicingCredentials.deleteCounterpartsIdEinvoicingCredentialsId(
    "credential_id",
    "counterpart_id",
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**credentialId:** `string`

</dd>
</dl>

<dl>
<dd>

**counterpartId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CounterpartEInvoicingCredentials.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.counterpartEInvoicingCredentials.<a href="/src/api/resources/counterpartEInvoicingCredentials/client/Client.ts">patchCounterpartsIdEinvoicingCredentialsId</a>(credentialId, counterpartId, { ...params }) -> Monite.CounterpartEinvoicingCredentialResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.counterpartEInvoicingCredentials.patchCounterpartsIdEinvoicingCredentialsId(
    "credential_id",
    "counterpart_id",
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**credentialId:** `string`

</dd>
</dl>

<dl>
<dd>

**counterpartId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Monite.UpdateCounterpartEinvoicingCredentialSchema`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CounterpartEInvoicingCredentials.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## DataExports

<details><summary><code>client.dataExports.<a href="/src/api/resources/dataExports/client/Client.ts">get</a>({ ...params }) -> Monite.AllDocumentExportResponseSchema</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.dataExports.get();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Monite.DataExportsGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DataExports.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.dataExports.<a href="/src/api/resources/dataExports/client/Client.ts">create</a>({ ...params }) -> Monite.CreateExportTaskResponseSchema</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Request the export of payable and receivable documents with the specified statuses.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.dataExports.create({
    date_from: "date_from",
    date_to: "date_to",
    format: "csv",
    objects: [
        {
            name: "payable",
            statuses: ["draft"],
        },
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Monite.ExportPayloadSchema`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DataExports.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.dataExports.<a href="/src/api/resources/dataExports/client/Client.ts">getSupportedFormats</a>() -> Monite.SupportedFormatSchema[]</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.dataExports.getSupportedFormats();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `DataExports.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.dataExports.<a href="/src/api/resources/dataExports/client/Client.ts">getById</a>(documentExportId) -> Monite.DocumentExportResponseSchema</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.dataExports.getById("document_export_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**documentExportId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DataExports.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Delivery notes

<details><summary><code>client.deliveryNotes.<a href="/src/api/resources/deliveryNotes/client/Client.ts">getDeliveryNotes</a>({ ...params }) -> Monite.DeliveryNoteResourceList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get all delivery notes with filtering and pagination.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.deliveryNotes.getDeliveryNotes();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Monite.GetDeliveryNotesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DeliveryNotes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.deliveryNotes.<a href="/src/api/resources/deliveryNotes/client/Client.ts">postDeliveryNotes</a>({ ...params }) -> Monite.DeliveryNoteResource</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.deliveryNotes.postDeliveryNotes({
    counterpart_address_id: "a1b2c3d4-e5f6-g7h8-i9j0-k1l2m3n4o5p6",
    counterpart_id: "a1b2c3d4-e5f6-g7h8-i9j0-k1l2m3n4o5p6",
    delivery_date: "2025-01-01",
    delivery_number: "102-2025-0987",
    display_signature_placeholder: true,
    line_items: [
        {
            product_id: "a1b2c3d4-e5f6-g7h8-i9j0-k1l2m3n4o5p6",
            quantity: 10,
        },
        {
            product: {
                description: "Description of product 2",
                measure_unit: {
                    description: "pieces",
                    name: "pcs",
                },
                name: "Product 2",
            },
            quantity: 20,
        },
    ],
    memo: "This is a memo",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Monite.Payload`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DeliveryNotes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.deliveryNotes.<a href="/src/api/resources/deliveryNotes/client/Client.ts">getDeliveryNotesId</a>(deliveryNoteId) -> Monite.DeliveryNoteResource</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.deliveryNotes.getDeliveryNotesId("delivery_note_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**deliveryNoteId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DeliveryNotes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.deliveryNotes.<a href="/src/api/resources/deliveryNotes/client/Client.ts">deleteDeliveryNotesId</a>(deliveryNoteId) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.deliveryNotes.deleteDeliveryNotesId("delivery_note_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**deliveryNoteId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DeliveryNotes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.deliveryNotes.<a href="/src/api/resources/deliveryNotes/client/Client.ts">patchDeliveryNotesId</a>(deliveryNoteId, { ...params }) -> Monite.DeliveryNoteResource</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.deliveryNotes.patchDeliveryNotesId("delivery_note_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**deliveryNoteId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Monite.DeliveryNoteUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DeliveryNotes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.deliveryNotes.<a href="/src/api/resources/deliveryNotes/client/Client.ts">postDeliveryNotesIdCancel</a>(deliveryNoteId) -> Monite.DeliveryNoteResource</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.deliveryNotes.postDeliveryNotesIdCancel("delivery_note_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**deliveryNoteId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DeliveryNotes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.deliveryNotes.<a href="/src/api/resources/deliveryNotes/client/Client.ts">postDeliveryNotesIdMarkAsDelivered</a>(deliveryNoteId) -> Monite.DeliveryNoteResource</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.deliveryNotes.postDeliveryNotesIdMarkAsDelivered("delivery_note_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**deliveryNoteId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DeliveryNotes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## PDF templates

<details><summary><code>client.pdfTemplates.<a href="/src/api/resources/pdfTemplates/client/Client.ts">get</a>() -> Monite.TemplateListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This API call returns all supported templates with language codes.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.pdfTemplates.get();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `PdfTemplates.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.pdfTemplates.<a href="/src/api/resources/pdfTemplates/client/Client.ts">getSystem</a>() -> Monite.TemplateListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This API call returns all supported system templates with language codes.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.pdfTemplates.getSystem();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `PdfTemplates.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.pdfTemplates.<a href="/src/api/resources/pdfTemplates/client/Client.ts">getById</a>(documentTemplateId) -> Monite.TemplateReceivableResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.pdfTemplates.getById("document_template_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**documentTemplateId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PdfTemplates.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.pdfTemplates.<a href="/src/api/resources/pdfTemplates/client/Client.ts">makeDefaultById</a>(documentTemplateId) -> Monite.TemplateReceivableResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.pdfTemplates.makeDefaultById("document_template_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**documentTemplateId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PdfTemplates.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## E-invoicing connections

<details><summary><code>client.eInvoicingConnections.<a href="/src/api/resources/eInvoicingConnections/client/Client.ts">getEinvoicingConnections</a>() -> Monite.EInvoicingRetrieveListData</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.eInvoicingConnections.getEinvoicingConnections();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `EInvoicingConnections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.eInvoicingConnections.<a href="/src/api/resources/eInvoicingConnections/client/Client.ts">postEinvoicingConnections</a>({ ...params }) -> Monite.EinvoicingConnectionResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.eInvoicingConnections.postEinvoicingConnections({
    address: {
        address_line1: "address_line1",
        city: "city",
        country: "DE",
        postal_code: "postal_code",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Monite.EinvoicingConnectionCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EInvoicingConnections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.eInvoicingConnections.<a href="/src/api/resources/eInvoicingConnections/client/Client.ts">getEinvoicingConnectionsId</a>(einvoicingConnectionId) -> Monite.EinvoicingConnectionResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.eInvoicingConnections.getEinvoicingConnectionsId("einvoicing_connection_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**einvoicingConnectionId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EInvoicingConnections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.eInvoicingConnections.<a href="/src/api/resources/eInvoicingConnections/client/Client.ts">deleteEinvoicingConnectionsId</a>(einvoicingConnectionId) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.eInvoicingConnections.deleteEinvoicingConnectionsId("einvoicing_connection_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**einvoicingConnectionId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EInvoicingConnections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.eInvoicingConnections.<a href="/src/api/resources/eInvoicingConnections/client/Client.ts">patchEinvoicingConnectionsId</a>(einvoicingConnectionId, { ...params }) -> Monite.EinvoicingConnectionResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.eInvoicingConnections.patchEinvoicingConnectionsId("einvoicing_connection_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**einvoicingConnectionId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Monite.EinvoicingConnectionUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EInvoicingConnections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.eInvoicingConnections.<a href="/src/api/resources/eInvoicingConnections/client/Client.ts">postEinvoicingConnectionsIdNetworkCredentials</a>(einvoicingConnectionId, { ...params }) -> Monite.EinvoicingNetworkCredentialsResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.eInvoicingConnections.postEinvoicingConnectionsIdNetworkCredentials("einvoicing_connection_id", {
    network_credentials_identifier: "12345678",
    network_credentials_schema: "DE:VAT",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**einvoicingConnectionId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Monite.EinvoicingNetworkCredentialsCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EInvoicingConnections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Entities

<details><summary><code>client.entities.<a href="/src/api/resources/entities/client/Client.ts">get</a>({ ...params }) -> Monite.EntityPaginationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a list of all entities.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entities.get();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Monite.EntitiesGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Entities.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entities.<a href="/src/api/resources/entities/client/Client.ts">create</a>({ ...params }) -> Monite.EntityResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new entity from the specified values.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entities.create({
    address: {
        city: "city",
        country: "AF",
        line1: "line1",
        postal_code: "postal_code",
    },
    email: "email",
    type: "individual",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Monite.CreateEntityRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Entities.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entities.<a href="/src/api/resources/entities/client/Client.ts">getEntitiesMe</a>() -> Monite.EntityResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deprecated. Use `GET /entity_users/my_entity` instead.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entities.getEntitiesMe();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Entities.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entities.<a href="/src/api/resources/entities/client/Client.ts">patchEntitiesMe</a>({ ...params }) -> Monite.EntityResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deprecated. Use `PATCH /entity_users/my_entity` instead.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entities.patchEntitiesMe({});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Monite.UpdateEntityRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Entities.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entities.<a href="/src/api/resources/entities/client/Client.ts">getById</a>(entityId) -> Monite.EntityResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve an entity by its ID.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entities.getById("ea837e28-509b-4b6a-a600-d54b6aa0b1f5");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `string` — A unique ID to specify the entity.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Entities.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entities.<a href="/src/api/resources/entities/client/Client.ts">updateById</a>(entityId, { ...params }) -> Monite.EntityResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Change the specified fields with the provided values.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entities.updateById("ea837e28-509b-4b6a-a600-d54b6aa0b1f5", {});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `string` — A unique ID to specify the entity.

</dd>
</dl>

<dl>
<dd>

**request:** `Monite.UpdateEntityRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Entities.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entities.<a href="/src/api/resources/entities/client/Client.ts">postEntitiesIdActivate</a>(entityId) -> Monite.EntityResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Activate an entity to allow it to perform any operations.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entities.postEntitiesIdActivate("ea837e28-509b-4b6a-a600-d54b6aa0b1f5");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `string` — A unique ID to specify the entity.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Entities.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entities.<a href="/src/api/resources/entities/client/Client.ts">postEntitiesIdDeactivate</a>(entityId) -> Monite.EntityResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deactivate an entity to stop it from performing any operations.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entities.postEntitiesIdDeactivate("ea837e28-509b-4b6a-a600-d54b6aa0b1f5");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `string` — A unique ID to specify the entity.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Entities.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entities.<a href="/src/api/resources/entities/client/Client.ts">uploadLogoById</a>(file, entityId) -> Monite.FileSchema2</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Entity logo can be PNG, JPG, or GIF, up to 10 MB in size. The logo is used, for example, in PDF documents created by this entity.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entities.uploadLogoById(fs.createReadStream("/path/to/your/file"), "ea837e28-509b-4b6a-a600-d54b6aa0b1f5");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**file:** `File | fs.ReadStream | Blob`

</dd>
</dl>

<dl>
<dd>

**entityId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Entities.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entities.<a href="/src/api/resources/entities/client/Client.ts">deleteLogoById</a>(entityId) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entities.deleteLogoById("ea837e28-509b-4b6a-a600-d54b6aa0b1f5");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `string` — A unique ID to specify the entity.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Entities.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entities.<a href="/src/api/resources/entities/client/Client.ts">getPartnerMetadataById</a>(entityId) -> Monite.PartnerMetadataResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a metadata object associated with this entity, usually in a JSON format.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entities.getPartnerMetadataById("entity_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Entities.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entities.<a href="/src/api/resources/entities/client/Client.ts">updatePartnerMetadataById</a>(entityId, { ...params }) -> Monite.PartnerMetadataResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fully replace the current metadata object with the specified instance.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entities.updatePartnerMetadataById("entity_id", {
    metadata: {
        key: "value",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Monite.PartnerMetadata`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Entities.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entities.<a href="/src/api/resources/entities/client/Client.ts">getSettingsById</a>(entityId) -> Monite.SettingsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve all settings for this entity.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entities.getSettingsById("ea837e28-509b-4b6a-a600-d54b6aa0b1f5");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `string` — A unique ID to specify the entity.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Entities.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entities.<a href="/src/api/resources/entities/client/Client.ts">updateSettingsById</a>(entityId, { ...params }) -> Monite.SettingsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Change the specified fields with the provided values.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entities.updateSettingsById("ea837e28-509b-4b6a-a600-d54b6aa0b1f5");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `string` — A unique ID to specify the entity.

</dd>
</dl>

<dl>
<dd>

**request:** `Monite.PatchSettingsPayload`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Entities.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entities.<a href="/src/api/resources/entities/client/Client.ts">uploadOnboardingDocuments</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Provide files for entity onboarding verification

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entities.uploadOnboardingDocuments();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Monite.EntityOnboardingDocumentsPayload`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Entities.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entities.<a href="/src/api/resources/entities/client/Client.ts">getOnboardingRequirements</a>() -> Monite.GetOnboardingRequirementsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get onboarding requirements for the entity

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entities.getOnboardingRequirements();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Entities.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Entity users

<details><summary><code>client.entityUsers.<a href="/src/api/resources/entityUsers/client/Client.ts">get</a>({ ...params }) -> Monite.EntityUserPaginationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a list of all entity users.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entityUsers.get();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Monite.EntityUsersGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EntityUsers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entityUsers.<a href="/src/api/resources/entityUsers/client/Client.ts">create</a>({ ...params }) -> Monite.EntityUserResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new entity user from the specified values.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entityUsers.create({
    first_name: "Casey",
    login: "login",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Monite.CreateEntityUserRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EntityUsers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entityUsers.<a href="/src/api/resources/entityUsers/client/Client.ts">getCurrent</a>() -> Monite.EntityUserResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve an entity user by its ID.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entityUsers.getCurrent();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `EntityUsers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entityUsers.<a href="/src/api/resources/entityUsers/client/Client.ts">updateCurrent</a>({ ...params }) -> Monite.EntityUserResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Change the specified fields with provided values.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entityUsers.updateCurrent();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Monite.UpdateMeEntityUserRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EntityUsers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entityUsers.<a href="/src/api/resources/entityUsers/client/Client.ts">getCurrentEntity</a>() -> Monite.EntityResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves information of an entity, which this entity user belongs to.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entityUsers.getCurrentEntity();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `EntityUsers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entityUsers.<a href="/src/api/resources/entityUsers/client/Client.ts">updateCurrentEntity</a>({ ...params }) -> Monite.EntityResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update information of an entity, which this entity user belongs to.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entityUsers.updateCurrentEntity({});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Monite.UpdateEntityRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EntityUsers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entityUsers.<a href="/src/api/resources/entityUsers/client/Client.ts">getCurrentRole</a>() -> Monite.RoleResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves information of a role assigned to this entity user.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entityUsers.getCurrentRole();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `EntityUsers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entityUsers.<a href="/src/api/resources/entityUsers/client/Client.ts">getById</a>(entityUserId) -> Monite.EntityUserResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve an entity user by its ID.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entityUsers.getById("entity_user_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityUserId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EntityUsers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entityUsers.<a href="/src/api/resources/entityUsers/client/Client.ts">deleteById</a>(entityUserId) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entityUsers.deleteById("entity_user_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityUserId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EntityUsers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entityUsers.<a href="/src/api/resources/entityUsers/client/Client.ts">updateById</a>(entityUserId, { ...params }) -> Monite.EntityUserResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Change the specified fields with provided values.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entityUsers.updateById("entity_user_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityUserId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Monite.UpdateEntityUserRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EntityUsers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Events

<details><summary><code>client.events.<a href="/src/api/resources/events/client/Client.ts">get</a>({ ...params }) -> Monite.EventPaginationResource</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns all webhook events that were triggered for the specified entity based on your enabled webhook subscriptions. These are the same events that were sent to your configured webhook listener endpoints, aggregated into a single list. Results can be filtered by the related object type or time period.

You can use this to get the missed events for the time periods when your webhook listener was temporarily unavailable.

We guarantee access to event data only from the last three months. Earlier events may be unavailable.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.events.get();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Monite.EventsGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Events.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.events.<a href="/src/api/resources/events/client/Client.ts">getById</a>(eventId) -> Monite.EventResource</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a webhook event by its ID. The data is the same as you might have previously received in a webhook sent by Monite to your server.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.events.getById("event_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**eventId:** `string` — ID of the webhook event. This is the `id` value you might have received in a webhook or retrieved from `GET /events`.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Events.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Files

<details><summary><code>client.files.<a href="/src/api/resources/files/client/Client.ts">get</a>({ ...params }) -> Monite.FilesResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.files.get();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Monite.FilesGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Files.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.files.<a href="/src/api/resources/files/client/Client.ts">upload</a>(file, { ...params }) -> Monite.FileResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.files.upload(fs.createReadStream("/path/to/your/file"), {
    file_type: "ocr_results",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**file:** `File | fs.ReadStream | Blob`

</dd>
</dl>

<dl>
<dd>

**request:** `Monite.UploadFile`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Files.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.files.<a href="/src/api/resources/files/client/Client.ts">getById</a>(fileId) -> Monite.FileResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.files.getById("file_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**fileId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Files.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.files.<a href="/src/api/resources/files/client/Client.ts">delete</a>(fileId) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.files.delete("file_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**fileId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Files.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Financing

<details><summary><code>client.financing.<a href="/src/api/resources/financing/client/Client.ts">getFinancingInvoices</a>({ ...params }) -> Monite.FinancingInvoiceListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of invoices requested for financing

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.financing.getFinancingInvoices();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Monite.GetFinancingInvoicesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Financing.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.financing.<a href="/src/api/resources/financing/client/Client.ts">postFinancingInvoices</a>({ ...params }) -> Monite.FinancingPushInvoicesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a session token and a connect token to open Kanmon SDK for confirming invoice details.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.financing.postFinancingInvoices({
    invoices: [
        {
            id: "id",
            type: "payable",
        },
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Monite.FinancingPushInvoicesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Financing.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.financing.<a href="/src/api/resources/financing/client/Client.ts">getFinancingOffers</a>() -> Monite.FinancingOffersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of financing offers and the business's onboarding status

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.financing.getFinancingOffers();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Financing.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.financing.<a href="/src/api/resources/financing/client/Client.ts">postFinancingTokens</a>() -> Monite.FinancingTokenResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a token for Kanmon SDK. Creates a business and user on Kanmon if not already exist.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.financing.postFinancingTokens();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Financing.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Mail templates

<details><summary><code>client.mailTemplates.<a href="/src/api/resources/mailTemplates/client/Client.ts">get</a>({ ...params }) -> Monite.CustomTemplatesPaginationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get all custom templates

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.mailTemplates.get();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Monite.MailTemplatesGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MailTemplates.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.mailTemplates.<a href="/src/api/resources/mailTemplates/client/Client.ts">create</a>({ ...params }) -> Monite.CustomTemplateDataSchema</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create custom template

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.mailTemplates.create({
    body_template: "body_template",
    name: "name",
    subject_template: "subject_template",
    type: "receivables_quote",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Monite.AddCustomTemplateSchema`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MailTemplates.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.mailTemplates.<a href="/src/api/resources/mailTemplates/client/Client.ts">preview</a>({ ...params }) -> Monite.PreviewTemplateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Preview rendered template

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.mailTemplates.preview({
    body: "body",
    document_type: "receivables_quote",
    language_code: "ab",
    subject: "subject",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Monite.PreviewTemplateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MailTemplates.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.mailTemplates.<a href="/src/api/resources/mailTemplates/client/Client.ts">getSystem</a>() -> Monite.SystemTemplates</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get all system templates

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.mailTemplates.getSystem();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `MailTemplates.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.mailTemplates.<a href="/src/api/resources/mailTemplates/client/Client.ts">getById</a>(templateId) -> Monite.CustomTemplateDataSchema</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get custom template by ID

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.mailTemplates.getById("template_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**templateId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MailTemplates.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.mailTemplates.<a href="/src/api/resources/mailTemplates/client/Client.ts">deleteById</a>(templateId) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete custom template bt ID

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.mailTemplates.deleteById("template_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**templateId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MailTemplates.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.mailTemplates.<a href="/src/api/resources/mailTemplates/client/Client.ts">updateById</a>(templateId, { ...params }) -> Monite.CustomTemplateDataSchema</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update custom template by ID

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.mailTemplates.updateById("template_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**templateId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Monite.UpdateCustomTemplateSchemaRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MailTemplates.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.mailTemplates.<a href="/src/api/resources/mailTemplates/client/Client.ts">makeDefaultById</a>(templateId) -> Monite.CustomTemplateDataSchema</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Make template default

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.mailTemplates.makeDefaultById("template_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**templateId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MailTemplates.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Mailbox domains

<details><summary><code>client.mailboxDomains.<a href="/src/api/resources/mailboxDomains/client/Client.ts">get</a>() -> Monite.DomainListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get all domains owned by partner_id

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.mailboxDomains.get();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `MailboxDomains.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.mailboxDomains.<a href="/src/api/resources/mailboxDomains/client/Client.ts">create</a>({ ...params }) -> Monite.DomainResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create domain for the partner_id

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.mailboxDomains.create({
    domain: "domain",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Monite.DomainRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MailboxDomains.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.mailboxDomains.<a href="/src/api/resources/mailboxDomains/client/Client.ts">deleteById</a>(domainId) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete domain for the partner_id

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.mailboxDomains.deleteById("domain_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**domainId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MailboxDomains.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.mailboxDomains.<a href="/src/api/resources/mailboxDomains/client/Client.ts">verifyById</a>(domainId) -> Monite.VerifyResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Verify domain for the partner_id

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.mailboxDomains.verifyById("domain_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**domainId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MailboxDomains.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Mailboxes

<details><summary><code>client.mailboxes.<a href="/src/api/resources/mailboxes/client/Client.ts">get</a>() -> Monite.MailboxDataResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get all mailboxes owned by Entity

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.mailboxes.get();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Mailboxes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.mailboxes.<a href="/src/api/resources/mailboxes/client/Client.ts">create</a>({ ...params }) -> Monite.MailboxResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new mailbox

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.mailboxes.create({
    mailbox_domain_id: "mailbox_domain_id",
    mailbox_name: "mailbox_name",
    related_object_type: "payable",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Monite.MailboxDomainRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Mailboxes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.mailboxes.<a href="/src/api/resources/mailboxes/client/Client.ts">search</a>({ ...params }) -> Monite.MailboxDataResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get all mailboxes owned by Entity

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.mailboxes.search({
    entity_ids: ["entity_ids"],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Monite.MailboxMultipleEntitiesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Mailboxes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.mailboxes.<a href="/src/api/resources/mailboxes/client/Client.ts">deleteById</a>(mailboxId) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete mailbox

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.mailboxes.deleteById("mailbox_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**mailboxId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Mailboxes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Measure units

<details><summary><code>client.measureUnits.<a href="/src/api/resources/measureUnits/client/Client.ts">get</a>() -> Monite.UnitListResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.measureUnits.get();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `MeasureUnits.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.measureUnits.<a href="/src/api/resources/measureUnits/client/Client.ts">create</a>({ ...params }) -> Monite.UnitResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.measureUnits.create({
    name: "name",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Monite.UnitRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MeasureUnits.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.measureUnits.<a href="/src/api/resources/measureUnits/client/Client.ts">getById</a>(unitId) -> Monite.UnitResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.measureUnits.getById("unit_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**unitId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MeasureUnits.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.measureUnits.<a href="/src/api/resources/measureUnits/client/Client.ts">deleteById</a>(unitId) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.measureUnits.deleteById("unit_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**unitId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MeasureUnits.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.measureUnits.<a href="/src/api/resources/measureUnits/client/Client.ts">updateById</a>(unitId, { ...params }) -> Monite.UnitResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.measureUnits.updateById("unit_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**unitId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Monite.UnitUpdate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MeasureUnits.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## OCR

<details><summary><code>client.ocr.<a href="/src/api/resources/ocr/client/Client.ts">getOcrTasks</a>({ ...params }) -> Monite.OcrTasksPaginationResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ocr.getOcrTasks();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Monite.GetOcrTasksRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Ocr.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.ocr.<a href="/src/api/resources/ocr/client/Client.ts">postOcrTasks</a>({ ...params }) -> Monite.OcrTaskResponseSchema</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ocr.postOcrTasks({
    file_url: "file_url",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Monite.CreateOcrRequestPayload`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Ocr.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.ocr.<a href="/src/api/resources/ocr/client/Client.ts">postOcrTasksUploadFromFile</a>(file, { ...params }) -> Monite.OcrTaskResponseSchema</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ocr.postOcrTasksUploadFromFile(fs.createReadStream("/path/to/your/file"), {});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**file:** `File | fs.ReadStream | Blob`

</dd>
</dl>

<dl>
<dd>

**request:** `Monite.OcrFileUpload`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Ocr.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.ocr.<a href="/src/api/resources/ocr/client/Client.ts">getOcrTasksId</a>(taskId) -> Monite.OcrTaskResponseSchema</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ocr.getOcrTasksId("task_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**taskId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Ocr.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Overdue reminders

<details><summary><code>client.overdueReminders.<a href="/src/api/resources/overdueReminders/client/Client.ts">get</a>() -> Monite.AllOverdueRemindersResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.overdueReminders.get();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `OverdueReminders.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.overdueReminders.<a href="/src/api/resources/overdueReminders/client/Client.ts">create</a>({ ...params }) -> Monite.OverdueReminderResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.overdueReminders.create({
    name: "name",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Monite.OverdueReminderRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OverdueReminders.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.overdueReminders.<a href="/src/api/resources/overdueReminders/client/Client.ts">getById</a>(overdueReminderId) -> Monite.OverdueReminderResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.overdueReminders.getById("overdue_reminder_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**overdueReminderId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OverdueReminders.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.overdueReminders.<a href="/src/api/resources/overdueReminders/client/Client.ts">deleteById</a>(overdueReminderId) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.overdueReminders.deleteById("overdue_reminder_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**overdueReminderId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OverdueReminders.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.overdueReminders.<a href="/src/api/resources/overdueReminders/client/Client.ts">updateById</a>(overdueReminderId, { ...params }) -> Monite.OverdueReminderResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.overdueReminders.updateById("overdue_reminder_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**overdueReminderId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Monite.OverdueReminderUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OverdueReminders.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Credit notes

<details><summary><code>client.creditNotes.<a href="/src/api/resources/creditNotes/client/Client.ts">getPayableCreditNotes</a>({ ...params }) -> Monite.CreditNotePaginationResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.creditNotes.getPayableCreditNotes();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Monite.GetPayableCreditNotesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CreditNotes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.creditNotes.<a href="/src/api/resources/creditNotes/client/Client.ts">postPayableCreditNotes</a>({ ...params }) -> Monite.CreditNoteResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.creditNotes.postPayableCreditNotes({
    document_id: "CN-2287",
    issued_at: "2024-01-15",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Monite.CreditNoteCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CreditNotes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.creditNotes.<a href="/src/api/resources/creditNotes/client/Client.ts">postPayableCreditNotesUploadFromFile</a>(file) -> Monite.CreditNoteResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Upload an incoming credit note (payable) in PDF, PNG, JPEG, or TIFF format and scan its contents. The maximum file size is 10MB.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.creditNotes.postPayableCreditNotesUploadFromFile(fs.createReadStream("/path/to/your/file"));
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**file:** `File | fs.ReadStream | Blob`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CreditNotes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.creditNotes.<a href="/src/api/resources/creditNotes/client/Client.ts">getPayableCreditNotesValidations</a>() -> Monite.CreditNoteValidationsResource</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get credit notes validations.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.creditNotes.getPayableCreditNotesValidations();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `CreditNotes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.creditNotes.<a href="/src/api/resources/creditNotes/client/Client.ts">putPayableCreditNotesValidations</a>({ ...params }) -> Monite.CreditNoteValidationsResource</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update credit notes validations.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.creditNotes.putPayableCreditNotesValidations({
    required_fields: ["currency"],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Monite.CreditNoteValidationsResource`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CreditNotes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.creditNotes.<a href="/src/api/resources/creditNotes/client/Client.ts">postPayableCreditNotesValidationsReset</a>() -> Monite.CreditNoteValidationsResource</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Reset credit notes validations.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.creditNotes.postPayableCreditNotesValidationsReset();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `CreditNotes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.creditNotes.<a href="/src/api/resources/creditNotes/client/Client.ts">getPayableCreditNotesId</a>(creditNoteId) -> Monite.CreditNoteResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.creditNotes.getPayableCreditNotesId("credit_note_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**creditNoteId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CreditNotes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.creditNotes.<a href="/src/api/resources/creditNotes/client/Client.ts">deletePayableCreditNotesId</a>(creditNoteId) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.creditNotes.deletePayableCreditNotesId("credit_note_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**creditNoteId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CreditNotes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.creditNotes.<a href="/src/api/resources/creditNotes/client/Client.ts">patchPayableCreditNotesId</a>(creditNoteId, { ...params }) -> Monite.CreditNoteResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.creditNotes.patchPayableCreditNotesId("credit_note_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**creditNoteId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Monite.CreditNoteUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CreditNotes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.creditNotes.<a href="/src/api/resources/creditNotes/client/Client.ts">postPayableCreditNotesIdApprove</a>(creditNoteId) -> Monite.CreditNoteResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Approve the credit note for appliance.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.creditNotes.postPayableCreditNotesIdApprove("credit_note_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**creditNoteId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CreditNotes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.creditNotes.<a href="/src/api/resources/creditNotes/client/Client.ts">postPayableCreditNotesIdCancel</a>(creditNoteId) -> Monite.CreditNoteResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Cancel the credit note that was not confirmed during the review.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.creditNotes.postPayableCreditNotesIdCancel("credit_note_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**creditNoteId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CreditNotes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.creditNotes.<a href="/src/api/resources/creditNotes/client/Client.ts">postPayableCreditNotesIdCancelOcr</a>(creditNoteId) -> Monite.CreditNoteResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Request to cancel the OCR processing of the specified credit note.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.creditNotes.postPayableCreditNotesIdCancelOcr("credit_note_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**creditNoteId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CreditNotes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.creditNotes.<a href="/src/api/resources/creditNotes/client/Client.ts">getPayableCreditNotesIdLineItems</a>(creditNoteId, { ...params }) -> Monite.CreditNoteLineItemPaginationResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.creditNotes.getPayableCreditNotesIdLineItems("credit_note_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**creditNoteId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Monite.GetPayableCreditNotesIdLineItemsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CreditNotes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.creditNotes.<a href="/src/api/resources/creditNotes/client/Client.ts">postPayableCreditNotesIdLineItems</a>(creditNoteId, { ...params }) -> Monite.CreditNoteLineItemResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.creditNotes.postPayableCreditNotesIdLineItems("credit_note_id", {});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**creditNoteId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Monite.CreditNoteLineItemCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CreditNotes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.creditNotes.<a href="/src/api/resources/creditNotes/client/Client.ts">putPayableCreditNotesIdLineItems</a>(creditNoteId, { ...params }) -> Monite.CreditNoteLineItemPaginationResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.creditNotes.putPayableCreditNotesIdLineItems("credit_note_id", {
    data: [{}],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**creditNoteId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Monite.CreditNoteLineItemReplaceRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CreditNotes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.creditNotes.<a href="/src/api/resources/creditNotes/client/Client.ts">getPayableCreditNotesIdLineItemsId</a>(creditNoteId, lineItemId) -> Monite.CreditNoteLineItemResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.creditNotes.getPayableCreditNotesIdLineItemsId("credit_note_id", "line_item_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**creditNoteId:** `string`

</dd>
</dl>

<dl>
<dd>

**lineItemId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CreditNotes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.creditNotes.<a href="/src/api/resources/creditNotes/client/Client.ts">deletePayableCreditNotesIdLineItemsId</a>(creditNoteId, lineItemId) -> Monite.CreditNoteLineItemPaginationResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.creditNotes.deletePayableCreditNotesIdLineItemsId("credit_note_id", "line_item_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**creditNoteId:** `string`

</dd>
</dl>

<dl>
<dd>

**lineItemId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CreditNotes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.creditNotes.<a href="/src/api/resources/creditNotes/client/Client.ts">patchPayableCreditNotesIdLineItemsId</a>(creditNoteId, lineItemId, { ...params }) -> Monite.CreditNoteLineItemResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.creditNotes.patchPayableCreditNotesIdLineItemsId("credit_note_id", "line_item_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**creditNoteId:** `string`

</dd>
</dl>

<dl>
<dd>

**lineItemId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Monite.CreditNoteLineItemUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CreditNotes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.creditNotes.<a href="/src/api/resources/creditNotes/client/Client.ts">postPayableCreditNotesIdReject</a>(creditNoteId) -> Monite.CreditNoteResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Decline the credit note when an approver finds any mismatch or discrepancies.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.creditNotes.postPayableCreditNotesIdReject("credit_note_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**creditNoteId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CreditNotes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.creditNotes.<a href="/src/api/resources/creditNotes/client/Client.ts">postPayableCreditNotesIdSubmitForApproval</a>(creditNoteId) -> Monite.CreditNoteResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Start the approval process once the uploaded credit note is validated.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.creditNotes.postPayableCreditNotesIdSubmitForApproval("credit_note_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**creditNoteId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CreditNotes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.creditNotes.<a href="/src/api/resources/creditNotes/client/Client.ts">getPayableCreditNotesIdValidate</a>(creditNoteId) -> Monite.CreditNoteValidationResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.creditNotes.getPayableCreditNotesIdValidate("credit_note_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**creditNoteId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CreditNotes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Purchase orders
