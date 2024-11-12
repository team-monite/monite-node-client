# Reference

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
    description: "description",
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

## Audit logs

<details><summary><code>client.auditLogs.<a href="/src/api/resources/auditLogs/client/Client.ts">get</a>({ ...params }) -> Monite.LogsResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.auditLogs.get();
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

**request:** `Monite.AuditLogsGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AuditLogs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.auditLogs.<a href="/src/api/resources/auditLogs/client/Client.ts">getById</a>(logId) -> Monite.LogResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.auditLogs.getById("log_id");
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

**logId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AuditLogs.RequestOptions`

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

## Batch payments

<details><summary><code>client.batchPayments.<a href="/src/api/resources/batchPayments/client/Client.ts">create</a>({ ...params }) -> Monite.PaymentsBatchPaymentResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.batchPayments.create({
    payer_bank_account_id: "payer_bank_account_id",
    payment_intents: [
        {
            object: {
                id: "id",
                type: "payable",
            },
            recipient: {
                id: "id",
                type: "counterpart",
            },
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

**request:** `Monite.PaymentsBatchPaymentRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BatchPayments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.batchPayments.<a href="/src/api/resources/batchPayments/client/Client.ts">getById</a>(batchPaymentId) -> Monite.PaymentsBatchPaymentResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.batchPayments.getById("batch_payment_id");
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

**batchPaymentId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BatchPayments.RequestOptions`

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
    type: "individual",
    individual: {
        address: {
            city: "Berlin",
            country: "AF",
            line1: "Flughafenstrasse 52",
            postal_code: "10115",
        },
        first_name: "Adnan",
        is_customer: true,
        is_vendor: true,
        last_name: "Singh",
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
            name: "receivable",
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

<details><summary><code>client.pdfTemplates.<a href="/src/api/resources/pdfTemplates/client/Client.ts">previewById</a>(documentTemplateId) -> stream.Readable</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a sample PDF invoice generated using the specified template.

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
await client.pdfTemplates.previewById("string");
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

<details><summary><code>client.entities.<a href="/src/api/resources/entities/client/Client.ts">uploadLogoById</a>(file, entityId) -> Monite.FileSchema3</code></summary>
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

<details><summary><code>client.entities.<a href="/src/api/resources/entities/client/Client.ts">getSettingsById</a>(entityId) -> Monite.MergedSettingsResponse</code></summary>
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

<details><summary><code>client.entities.<a href="/src/api/resources/entities/client/Client.ts">updateSettingsById</a>(entityId, { ...params }) -> Monite.MergedSettingsResponse</code></summary>
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
    first_name: "Andrey",
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

Get events for a given entity.

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

Get event by ID.

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

**eventId:** `string`

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
await client.files.get({
    id__in: "string",
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

## Onboarding links

<details><summary><code>client.onboardingLinks.<a href="/src/api/resources/onboardingLinks/client/Client.ts">create</a>({ ...params }) -> Monite.OnboardingLinkPublicResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.onboardingLinks.create({
    expires_at: "2024-01-15T09:30:00Z",
    refresh_url: "refresh_url",
    return_url: "return_url",
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

**request:** `Monite.OnboardingLinkRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OnboardingLinks.RequestOptions`

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

## Purchase orders

<details><summary><code>client.purchaseOrders.<a href="/src/api/resources/purchaseOrders/client/Client.ts">get</a>({ ...params }) -> Monite.PurchaseOrderPaginationResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.purchaseOrders.get();
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

**request:** `Monite.PurchaseOrdersGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PurchaseOrders.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.purchaseOrders.<a href="/src/api/resources/purchaseOrders/client/Client.ts">create</a>({ ...params }) -> Monite.PurchaseOrderResponseSchema</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.purchaseOrders.create({
    counterpart_id: "counterpart_id",
    currency: "AED",
    items: [
        {
            currency: "AED",
            name: "name",
            price: 1,
            quantity: 1,
            unit: "unit",
            vat_rate: 1,
        },
    ],
    message: "message",
    valid_for_days: 1,
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

**request:** `Monite.PurchaseOrderPayloadSchema`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PurchaseOrders.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.purchaseOrders.<a href="/src/api/resources/purchaseOrders/client/Client.ts">getVariables</a>() -> Monite.VariablesObjectList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a list of placeholders allowed to insert into an email template for customization

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
await client.purchaseOrders.getVariables();
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

**requestOptions:** `PurchaseOrders.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.purchaseOrders.<a href="/src/api/resources/purchaseOrders/client/Client.ts">getById</a>(purchaseOrderId) -> Monite.PurchaseOrderResponseSchema</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.purchaseOrders.getById("purchase_order_id");
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

**purchaseOrderId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PurchaseOrders.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.purchaseOrders.<a href="/src/api/resources/purchaseOrders/client/Client.ts">deleteById</a>(purchaseOrderId) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.purchaseOrders.deleteById("purchase_order_id");
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

**purchaseOrderId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PurchaseOrders.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.purchaseOrders.<a href="/src/api/resources/purchaseOrders/client/Client.ts">updateById</a>(purchaseOrderId, { ...params }) -> Monite.PurchaseOrderResponseSchema</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.purchaseOrders.updateById("purchase_order_id");
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

**purchaseOrderId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Monite.UpdatePurchaseOrderPayloadSchema`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PurchaseOrders.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.purchaseOrders.<a href="/src/api/resources/purchaseOrders/client/Client.ts">previewById</a>(purchaseOrderId, { ...params }) -> Monite.PurchaseOrderEmailPreviewResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.purchaseOrders.previewById("purchase_order_id", {
    body_text: "body_text",
    subject_text: "subject_text",
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

**purchaseOrderId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Monite.PurchaseOrderEmailPreviewRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PurchaseOrders.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.purchaseOrders.<a href="/src/api/resources/purchaseOrders/client/Client.ts">sendById</a>(purchaseOrderId, { ...params }) -> Monite.PurchaseOrderEmailSentResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.purchaseOrders.sendById("purchase_order_id", {
    body_text: "body_text",
    subject_text: "subject_text",
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

**purchaseOrderId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Monite.SendPurchaseOrderViaEmailRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PurchaseOrders.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Payables

<details><summary><code>client.payables.<a href="/src/api/resources/payables/client/Client.ts">get</a>({ ...params }) -> Monite.PayablePaginationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists all payables from the connected entity.

If you already have the data of the payable (amount in [minor units](https://docs.monite.com/docs/currencies#minor-units), currency, vendor information, and other details)
stored somewhere as individual attributes, you can create a payable with these attributes by calling [POST
/payables](https://docs.monite.com/reference/post_payables) and providing the [base64-encoded](https://en.wikipedia.org/wiki/Base64) contents of the original invoice file in the field `base64_encoded_file`.

A payable is a financial document given by an entity`s supplier itemizing the purchase of a good or a service and
demanding payment.

The `file_name` field is optional. If omitted, it defaults to “default_file_name”. If the settings are configured
to automatically set `suggested_payment_term`, this object can be omitted from the request body.

The `id` generated for this payable can be used in other API calls to update the data of this payable or trigger [
status transitions](https://docs.monite.com/docs/payable-status-transitions), for example. essential data
fields to move from `draft` to `new`

Related guide: [Create a payable from data](https://docs.monite.com/docs/collect-payables#create-a-payable-from-data)

See also:

[Automatic calculation of due date](https://docs.monite.com/docs/collect-payables#automatic-calculation-of-due-date)

[Suggested payment date](https://docs.monite.com/docs/collect-payables#suggested-payment-date)

[Attach file](https://docs.monite.com/docs/collect-payables#attach-file)

[Collect payables by email](https://docs.monite.com/docs/collect-payables#send-payables-by-email)

[Manage line items](https://docs.monite.com/docs/manage-line-items)

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
await client.payables.get();
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

**request:** `Monite.PayablesGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Payables.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.payables.<a href="/src/api/resources/payables/client/Client.ts">create</a>({ ...params }) -> Monite.PayableResponseSchema</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Add a new payable by providing the amount, currency, vendor name, and other details.
You can provide the base64_encoded contents of the original invoice file in the field `base64_encoded_file`.

You can use this endpoint to bypass the Monite OCR service and provide the data directly
(for example, if you already have the data in place).

A newly created payable has the the `draft` [status](https://docs.monite.com/docs/payables-lifecycle).

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
await client.payables.create();
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

**request:** `Monite.PayableUploadWithDataSchema`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Payables.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.payables.<a href="/src/api/resources/payables/client/Client.ts">getAnalytics</a>({ ...params }) -> Monite.PayableAggregatedDataResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve aggregated statistics for payables, including total amount and count, both overall and by status.

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
await client.payables.getAnalytics();
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

**request:** `Monite.PayablesGetAnalyticsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Payables.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.payables.<a href="/src/api/resources/payables/client/Client.ts">uploadFromFile</a>(file) -> Monite.PayableResponseSchema</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Upload an incoming invoice (payable) in PDF, PNG, JPEG, or TIFF format and scan its contents. The maximum file size is 10MB.

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
await client.payables.uploadFromFile(fs.createReadStream("/path/to/your/file"));
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

**requestOptions:** `Payables.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.payables.<a href="/src/api/resources/payables/client/Client.ts">getValidations</a>() -> Monite.PayableValidationsResource</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get payable validations.

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
await client.payables.getValidations();
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

**requestOptions:** `Payables.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.payables.<a href="/src/api/resources/payables/client/Client.ts">updateValidations</a>({ ...params }) -> Monite.PayableValidationsResource</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update payable validations.

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
await client.payables.updateValidations({
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

**request:** `Monite.PayableValidationsUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Payables.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.payables.<a href="/src/api/resources/payables/client/Client.ts">resetValidations</a>() -> Monite.PayableValidationsResource</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Reset payable validations to default ones.

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
await client.payables.resetValidations();
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

**requestOptions:** `Payables.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.payables.<a href="/src/api/resources/payables/client/Client.ts">getVariables</a>() -> Monite.PayableTemplatesVariablesObjectList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a list of placeholders allowed to insert into an email template for customization

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
await client.payables.getVariables();
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

**requestOptions:** `Payables.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.payables.<a href="/src/api/resources/payables/client/Client.ts">getById</a>(payableId) -> Monite.PayableResponseSchema</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves information about a specific payable with the given ID.

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
await client.payables.getById("payable_id");
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

**payableId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Payables.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.payables.<a href="/src/api/resources/payables/client/Client.ts">deleteById</a>(payableId) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a specific payable.

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
await client.payables.deleteById("payable_id");
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

**payableId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Payables.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.payables.<a href="/src/api/resources/payables/client/Client.ts">updateById</a>(payableId, { ...params }) -> Monite.PayableResponseSchema</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the information about a specific payable.

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
await client.payables.updateById("payable_id");
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

**payableId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Monite.PayableUpdateSchema`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Payables.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.payables.<a href="/src/api/resources/payables/client/Client.ts">approvePaymentById</a>(payableId) -> Monite.PayableResponseSchema</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Confirms that the payable is ready to be paid.

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
await client.payables.approvePaymentById("payable_id");
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

**payableId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Payables.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.payables.<a href="/src/api/resources/payables/client/Client.ts">attachFileById</a>(file, payableId) -> Monite.PayableResponseSchema</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Attach file to payable without existing attachment.

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
await client.payables.attachFileById(fs.createReadStream("/path/to/your/file"), "payable_id");
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

**payableId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Payables.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.payables.<a href="/src/api/resources/payables/client/Client.ts">cancelById</a>(payableId) -> Monite.PayableResponseSchema</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Cancels the payable that was not confirmed during the review.

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
await client.payables.cancelById("payable_id");
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

**payableId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Payables.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.payables.<a href="/src/api/resources/payables/client/Client.ts">markAsPaidById</a>(payableId, { ...params }) -> Monite.PayableResponseSchema</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Mark a payable as paid.

Payables can be paid using the payment channels offered by Monite or through external payment channels. In the latter
case, the invoice is not automatically marked as paid in the system and needs to be converted to the paid status
manually.

Optionally, it is possible to pass the `comment` field in the request body, to describe how and when the invoice was
paid.

Notes:

-   To use this endpoint with an entity user token, this entity user must have a role that includes the `pay` permission
    for payables.
-   The `amount_to_pay` field is automatically calculated based on the `amount_due` less the percentage described
    in the `payment_terms.discount` value.

Related guide: [Mark a payable as paid](https://docs.monite.com/docs/payable-status-transitions#mark-as-paid)

See also:

[Payables lifecycle](https://docs.monite.com/docs/payables-lifecycle)

[Payables status transitions](https://docs.monite.com/docs/collect-payables#suggested-payment-date)

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
await client.payables.markAsPaidById("payable_id");
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

**payableId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Monite.CommentPayload`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Payables.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.payables.<a href="/src/api/resources/payables/client/Client.ts">markAsPartiallyPaidById</a>(payableId, { ...params }) -> Monite.PayableResponseSchema</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Mark a payable as partially paid.

If the payable is partially paid, its status is moved to `partially_paid`. The value of the `amount_paid` field must be
the sum of all payments made, not only the last one.

Notes:

-   This endpoint can be used for payables in the `waiting_to_be_paid` status.
-   The `amount_paid` must be greater than 0 and less than the total payable amount specified by the `amount` field.
-   You can use this endpoint multiple times for the same payable to reflect multiple partial payments, always setting the
    sum of all payments made.
-   To use this endpoint with an entity user token, this entity user must have a role that includes the `pay`
    permission for payables.
-   The `amount_to_pay` field is automatically calculated based on the `amount_due` less the percentage described
    in the `payment_terms.discount` value.

Related guide: [Mark a payable as partially paid](https://docs.monite.com/docs/payable-status-transitions#mark-as-partially-paid)

See also:

[Payables lifecycle](https://docs.monite.com/docs/payables-lifecycle)

[Payables status transitions](https://docs.monite.com/docs/collect-payables#suggested-payment-date)

[Mark a payable as paid](https://docs.monite.com/docs/payable-status-transitions#mark-as-paid)

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
await client.payables.markAsPartiallyPaidById("payable_id", {
    amount_paid: 1,
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

**payableId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Monite.PartiallyPaidPayload`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Payables.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.payables.<a href="/src/api/resources/payables/client/Client.ts">rejectById</a>(payableId) -> Monite.PayableResponseSchema</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Declines the payable when an approver finds any mismatch or discrepancies.

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
await client.payables.rejectById("payable_id");
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

**payableId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Payables.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.payables.<a href="/src/api/resources/payables/client/Client.ts">reopenById</a>(payableId) -> Monite.PayableResponseSchema</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Reset payable state from rejected to new.

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
await client.payables.reopenById("payable_id");
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

**payableId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Payables.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.payables.<a href="/src/api/resources/payables/client/Client.ts">submitForApprovalById</a>(payableId) -> Monite.PayableResponseSchema</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Starts the approval process once the uploaded payable is validated.

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
await client.payables.submitForApprovalById("payable_id");
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

**payableId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Payables.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.payables.<a href="/src/api/resources/payables/client/Client.ts">validateById</a>(payableId) -> Monite.PayableValidationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Check the invoice for compliance with the requirements for movement from draft to new status.

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
await client.payables.validateById("payable_id");
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

**payableId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Payables.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Payment intents

<details><summary><code>client.paymentIntents.<a href="/src/api/resources/paymentIntents/client/Client.ts">get</a>({ ...params }) -> Monite.PaymentIntentsListResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentIntents.get();
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

**request:** `Monite.PaymentIntentsGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentIntents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.paymentIntents.<a href="/src/api/resources/paymentIntents/client/Client.ts">getById</a>(paymentIntentId) -> Monite.PaymentIntentResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentIntents.getById("payment_intent_id");
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

**paymentIntentId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentIntents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.paymentIntents.<a href="/src/api/resources/paymentIntents/client/Client.ts">updateById</a>(paymentIntentId, { ...params }) -> Monite.PaymentIntentResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentIntents.updateById("payment_intent_id", {
    amount: 1,
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

**paymentIntentId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Monite.UpdatePaymentIntentPayload`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentIntents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.paymentIntents.<a href="/src/api/resources/paymentIntents/client/Client.ts">getHistoryById</a>(paymentIntentId) -> Monite.PaymentIntentHistoryResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentIntents.getHistoryById("payment_intent_id");
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

**paymentIntentId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentIntents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Payment links

<details><summary><code>client.paymentLinks.<a href="/src/api/resources/paymentLinks/client/Client.ts">create</a>({ ...params }) -> Monite.PublicPaymentLinkResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentLinks.create({
    payment_methods: ["sepa_credit"],
    recipient: {
        id: "id",
        type: "entity",
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

**request:** `Monite.CreatePaymentLinkRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentLinks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.paymentLinks.<a href="/src/api/resources/paymentLinks/client/Client.ts">getById</a>(paymentLinkId) -> Monite.PublicPaymentLinkResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentLinks.getById("payment_link_id");
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

**paymentLinkId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentLinks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.paymentLinks.<a href="/src/api/resources/paymentLinks/client/Client.ts">expireById</a>(paymentLinkId) -> Monite.PublicPaymentLinkResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentLinks.expireById("payment_link_id");
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

**paymentLinkId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentLinks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Payment records

<details><summary><code>client.paymentRecords.<a href="/src/api/resources/paymentRecords/client/Client.ts">get</a>({ ...params }) -> Monite.PaymentRecordResponseList</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentRecords.get();
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

**request:** `Monite.PaymentRecordsGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentRecords.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.paymentRecords.<a href="/src/api/resources/paymentRecords/client/Client.ts">create</a>({ ...params }) -> Monite.PaymentRecordResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentRecords.create({
    amount: 1,
    currency: "AED",
    object: {
        id: "id",
        type: "receivable",
    },
    paid_at: "2024-01-15T09:30:00Z",
    payment_intent_id: "payment_intent_id",
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

**request:** `Monite.PaymentRecordRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentRecords.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.paymentRecords.<a href="/src/api/resources/paymentRecords/client/Client.ts">getById</a>(paymentRecordId) -> Monite.PaymentRecordResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentRecords.getById("payment_record_id");
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

**paymentRecordId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentRecords.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Payment reminders

<details><summary><code>client.paymentReminders.<a href="/src/api/resources/paymentReminders/client/Client.ts">get</a>() -> Monite.GetAllPaymentReminders</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentReminders.get();
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

**requestOptions:** `PaymentReminders.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.paymentReminders.<a href="/src/api/resources/paymentReminders/client/Client.ts">create</a>({ ...params }) -> Monite.PaymentReminderResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentReminders.create({
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

**request:** `Monite.PaymentReminder`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentReminders.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.paymentReminders.<a href="/src/api/resources/paymentReminders/client/Client.ts">getById</a>(paymentReminderId) -> Monite.PaymentReminderResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentReminders.getById("payment_reminder_id");
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

**paymentReminderId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentReminders.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.paymentReminders.<a href="/src/api/resources/paymentReminders/client/Client.ts">deleteById</a>(paymentReminderId) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentReminders.deleteById("payment_reminder_id");
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

**paymentReminderId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentReminders.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.paymentReminders.<a href="/src/api/resources/paymentReminders/client/Client.ts">updateById</a>(paymentReminderId, { ...params }) -> Monite.PaymentReminderResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentReminders.updateById("payment_reminder_id");
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

**paymentReminderId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Monite.PaymentReminderUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentReminders.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Payment terms

<details><summary><code>client.paymentTerms.<a href="/src/api/resources/paymentTerms/client/Client.ts">get</a>() -> Monite.PaymentTermsListResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentTerms.get();
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

**requestOptions:** `PaymentTerms.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.paymentTerms.<a href="/src/api/resources/paymentTerms/client/Client.ts">create</a>({ ...params }) -> Monite.PaymentTermsResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentTerms.create({
    name: "name",
    term_final: {
        number_of_days: 1,
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

**request:** `Monite.PaymentTermsCreatePayload`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentTerms.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.paymentTerms.<a href="/src/api/resources/paymentTerms/client/Client.ts">getById</a>(paymentTermsId) -> Monite.PaymentTermsResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentTerms.getById("payment_terms_id");
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

**paymentTermsId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentTerms.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.paymentTerms.<a href="/src/api/resources/paymentTerms/client/Client.ts">deleteById</a>(paymentTermsId) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentTerms.deleteById("payment_terms_id");
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

**paymentTermsId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentTerms.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.paymentTerms.<a href="/src/api/resources/paymentTerms/client/Client.ts">updateById</a>(paymentTermsId, { ...params }) -> Monite.PaymentTermsResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentTerms.updateById("payment_terms_id");
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

**paymentTermsId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Monite.PaymentTermsUpdatePayload`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentTerms.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Products

<details><summary><code>client.products.<a href="/src/api/resources/products/client/Client.ts">get</a>({ ...params }) -> Monite.ProductServicePaginationResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.products.get();
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

**request:** `Monite.ProductsGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Products.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.products.<a href="/src/api/resources/products/client/Client.ts">create</a>({ ...params }) -> Monite.ProductServiceResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.products.create({
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

**request:** `Monite.ProductServiceRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Products.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.products.<a href="/src/api/resources/products/client/Client.ts">getById</a>(productId) -> Monite.ProductServiceResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.products.getById("product_id");
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

**productId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Products.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.products.<a href="/src/api/resources/products/client/Client.ts">deleteById</a>(productId) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.products.deleteById("product_id");
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

**productId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Products.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.products.<a href="/src/api/resources/products/client/Client.ts">updateById</a>(productId, { ...params }) -> Monite.ProductServiceResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.products.updateById("product_id");
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

**productId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Monite.ProductServiceUpdate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Products.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Projects

<details><summary><code>client.projects.<a href="/src/api/resources/projects/client/Client.ts">get</a>({ ...params }) -> Monite.ProjectPaginationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get all projects for an entity

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
await client.projects.get();
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

**request:** `Monite.ProjectsGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Projects.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.projects.<a href="/src/api/resources/projects/client/Client.ts">create</a>({ ...params }) -> Monite.ProjectResource</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new project.

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
await client.projects.create({
    name: "Marketing",
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

**request:** `Monite.ProjectCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Projects.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.projects.<a href="/src/api/resources/projects/client/Client.ts">getById</a>(projectId) -> Monite.ProjectResource</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a project with the given ID.

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
await client.projects.getById("project_id");
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

**projectId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Projects.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.projects.<a href="/src/api/resources/projects/client/Client.ts">deleteById</a>(projectId) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a project.

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
await client.projects.deleteById("project_id");
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

**projectId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Projects.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.projects.<a href="/src/api/resources/projects/client/Client.ts">updateById</a>(projectId, { ...params }) -> Monite.ProjectResource</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a project.

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
await client.projects.updateById("project_id");
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

**projectId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Monite.ProjectUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Projects.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Receivables

<details><summary><code>client.receivables.<a href="/src/api/resources/receivables/client/Client.ts">get</a>({ ...params }) -> Monite.ReceivablePaginationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of [accounts receivable](https://docs.monite.com/accounts-receivable/index) documents - invoices, quotes, and credit notes - of the specified entity.

Results can be filtered by amount, counterpart, due date, and other criteria. Multiple filters are combined using logical AND unless specified otherwise. If no documents matching the search criteria are found, the endpoint returns a successful response with an empty `data` array.

This endpoint supports [pagination](https://docs.monite.com/api/concepts/pagination-sorting-filtering) and sorting. By default, results are sorted by the creation date in ascending order (from oldest to newest).

#### Examples

##### Invoices

-   Get all overdue invoices:

    ```
    GET /receivables?type=invoice&status=overdue
    ```

-   Get all invoices created for the counterpart named "Solarwind" (case-insensitive):

    ```
    GET /receivables?type=invoice?counterpart_name__icontains=Solarwind
    ```

-   Get invoices whose total amount starts from 500 EUR:

    ```
    GET /receivables?type=invoice&total_amount__gte=50000
    ```

-   Get invoices that are due for payment in September 2024:

    ```
    GET /receivables?type=invoice&due_date__gte=2024-09-01T00:00:00Z&due_date__lt=2024-10-01T00:00:00Z
    ```

-   Get invoices created on or after September 1, 2024:

    ```
    GET /receivables?type=invoice&created_at__gte=2024-09-01T00:00:00Z
    ```

-   Find an invoice created from a specific quote:

    ```
    GET /receivables?type=invoice?based_on=QUOTE_ID
    ```

##### Quotes

-   Get the latest created quote:

    ```
    GET /receivables?type=quote&sort=created_at&order=desc&limit=1
    ```

-   Get the latest issued quote:

    ```
    GET /receivables?type=quote&sort=issue_date&order=desc&limit=1
    ```

##### Credit notes

-   Find all credit notes created for a specific invoice:

    ```
    GET /receivables?type=credit_note?based_on=INVOICE_ID
    ```

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
await client.receivables.get();
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

**request:** `Monite.ReceivablesGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Receivables.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.receivables.<a href="/src/api/resources/receivables/client/Client.ts">create</a>({ ...params }) -> Monite.ReceivableResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.receivables.create({
    counterpart_billing_address_id: "counterpart_billing_address_id",
    counterpart_id: "counterpart_id",
    currency: "AED",
    line_items: [
        {
            quantity: 1.1,
        },
    ],
    type: "quote",
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

**request:** `Monite.ReceivableFacadeCreatePayload`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Receivables.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.receivables.<a href="/src/api/resources/receivables/client/Client.ts">getVariables</a>() -> Monite.ReceivableTemplatesVariablesObjectList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a list of placeholders that can be used in email templates for customization.

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
await client.receivables.getVariables();
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

**requestOptions:** `Receivables.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.receivables.<a href="/src/api/resources/receivables/client/Client.ts">getById</a>(receivableId) -> Monite.ReceivableResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.receivables.getById("receivable_id");
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

**receivableId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Receivables.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.receivables.<a href="/src/api/resources/receivables/client/Client.ts">deleteById</a>(receivableId) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.receivables.deleteById("receivable_id");
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

**receivableId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Receivables.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.receivables.<a href="/src/api/resources/receivables/client/Client.ts">updateById</a>(receivableId, { ...params }) -> Monite.ReceivableResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.receivables.updateById("receivable_id", {
    quote: {},
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

**receivableId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Monite.ReceivableUpdatePayload`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Receivables.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.receivables.<a href="/src/api/resources/receivables/client/Client.ts">acceptById</a>(receivableId, { ...params }) -> Monite.SuccessResult</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.receivables.acceptById("receivable_id");
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

**receivableId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Monite.QuoteAcceptRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Receivables.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.receivables.<a href="/src/api/resources/receivables/client/Client.ts">cancelById</a>(receivableId) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.receivables.cancelById("receivable_id");
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

**receivableId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Receivables.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.receivables.<a href="/src/api/resources/receivables/client/Client.ts">cloneById</a>(receivableId) -> Monite.ReceivableResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.receivables.cloneById("receivable_id");
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

**receivableId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Receivables.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.receivables.<a href="/src/api/resources/receivables/client/Client.ts">declineById</a>(receivableId, { ...params }) -> Monite.SuccessResult</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.receivables.declineById("receivable_id");
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

**receivableId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Monite.ReceivableDeclinePayload`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Receivables.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.receivables.<a href="/src/api/resources/receivables/client/Client.ts">getHistory</a>(receivableId, { ...params }) -> Monite.ReceivableHistoryPaginationResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.receivables.getHistory("receivable_id");
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

**receivableId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Monite.ReceivablesGetHistoryRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Receivables.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.receivables.<a href="/src/api/resources/receivables/client/Client.ts">getHistoryById</a>(receivableHistoryId, receivableId) -> Monite.ReceivableHistoryResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.receivables.getHistoryById("receivable_history_id", "receivable_id");
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

**receivableHistoryId:** `string`

</dd>
</dl>

<dl>
<dd>

**receivableId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Receivables.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.receivables.<a href="/src/api/resources/receivables/client/Client.ts">issueById</a>(receivableId) -> Monite.ReceivableResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.receivables.issueById("receivable_id");
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

**receivableId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Receivables.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.receivables.<a href="/src/api/resources/receivables/client/Client.ts">updateLineItemsById</a>(receivableId, { ...params }) -> Monite.LineItemsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Replace all line items of an existing invoice or quote with a new list of line items.

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
await client.receivables.updateLineItemsById("receivable_id", {
    data: [
        {
            quantity: 1.1,
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

**receivableId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Monite.UpdateLineItems`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Receivables.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.receivables.<a href="/src/api/resources/receivables/client/Client.ts">getMails</a>(receivableId, { ...params }) -> Monite.ReceivableMailPaginationResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.receivables.getMails("receivable_id");
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

**receivableId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Monite.ReceivablesGetMailsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Receivables.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.receivables.<a href="/src/api/resources/receivables/client/Client.ts">getMailById</a>(receivableId, mailId) -> Monite.ReceivableMailResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.receivables.getMailById("receivable_id", "mail_id");
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

**receivableId:** `string`

</dd>
</dl>

<dl>
<dd>

**mailId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Receivables.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.receivables.<a href="/src/api/resources/receivables/client/Client.ts">markAsPaidById</a>(receivableId, { ...params }) -> Monite.ReceivableResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.receivables.markAsPaidById("receivable_id");
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

**receivableId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Monite.ReceivablePaidPayload`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Receivables.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.receivables.<a href="/src/api/resources/receivables/client/Client.ts">markAsPartiallyPaidById</a>(receivableId, { ...params }) -> Monite.ReceivableResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deprecated. Use `POST /payment_records` to record an invoice payment.

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
await client.receivables.markAsPartiallyPaidById("receivable_id", {
    amount_paid: 1,
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

**receivableId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Monite.ReceivablePartiallyPaidPayload`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Receivables.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.receivables.<a href="/src/api/resources/receivables/client/Client.ts">markAsUncollectibleById</a>(receivableId, { ...params }) -> Monite.ReceivableResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.receivables.markAsUncollectibleById("receivable_id");
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

**receivableId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Monite.ReceivableUncollectiblePayload`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Receivables.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.receivables.<a href="/src/api/resources/receivables/client/Client.ts">getPdfLinkById</a>(receivableId) -> Monite.ReceivableFileUrl</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.receivables.getPdfLinkById("receivable_id");
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

**receivableId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Receivables.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.receivables.<a href="/src/api/resources/receivables/client/Client.ts">previewById</a>(receivableId, { ...params }) -> Monite.ReceivablePreviewResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.receivables.previewById("receivable_id", {
    body_text: "body_text",
    subject_text: "subject_text",
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

**receivableId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Monite.ReceivablePreviewRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Receivables.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.receivables.<a href="/src/api/resources/receivables/client/Client.ts">sendById</a>(receivableId, { ...params }) -> Monite.ReceivableSendResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.receivables.sendById("receivable_id", {
    body_text: "body_text",
    subject_text: "subject_text",
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

**receivableId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Monite.ReceivableSendRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Receivables.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.receivables.<a href="/src/api/resources/receivables/client/Client.ts">sendTestReminderById</a>(receivableId, { ...params }) -> Monite.ReceivablesSendResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.receivables.sendTestReminderById("receivable_id", {
    reminder_type: "term_1",
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

**receivableId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Monite.ReceivableSendTestReminderPayload`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Receivables.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.receivables.<a href="/src/api/resources/receivables/client/Client.ts">verifyById</a>(receivableId) -> Monite.ReceivablesVerifyResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.receivables.verifyById("receivable_id");
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

**receivableId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Receivables.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Recurrences

<details><summary><code>client.recurrences.<a href="/src/api/resources/recurrences/client/Client.ts">get</a>() -> Monite.GetAllRecurrences</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.recurrences.get();
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

**requestOptions:** `Recurrences.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.recurrences.<a href="/src/api/resources/recurrences/client/Client.ts">create</a>({ ...params }) -> Monite.Recurrence</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.recurrences.create({
    day_of_month: "first_day",
    end_month: 1,
    end_year: 1,
    invoice_id: "invoice_id",
    start_month: 1,
    start_year: 1,
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

**request:** `Monite.CreateRecurrencePayload`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Recurrences.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.recurrences.<a href="/src/api/resources/recurrences/client/Client.ts">getById</a>(recurrenceId) -> Monite.Recurrence</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.recurrences.getById("recurrence_id");
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

**recurrenceId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Recurrences.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.recurrences.<a href="/src/api/resources/recurrences/client/Client.ts">updateById</a>(recurrenceId, { ...params }) -> Monite.Recurrence</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.recurrences.updateById("recurrence_id");
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

**recurrenceId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Monite.UpdateRecurrencePayload`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Recurrences.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.recurrences.<a href="/src/api/resources/recurrences/client/Client.ts">cancelById</a>(recurrenceId) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.recurrences.cancelById("recurrence_id");
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

**recurrenceId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Recurrences.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Roles

<details><summary><code>client.roles.<a href="/src/api/resources/roles/client/Client.ts">get</a>({ ...params }) -> Monite.RolePaginationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Find all roles that match the search criteria.

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
await client.roles.get();
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

**request:** `Monite.RolesGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Roles.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.roles.<a href="/src/api/resources/roles/client/Client.ts">create</a>({ ...params }) -> Monite.RoleResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new role from the specified values.

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
await client.roles.create({
    name: "name",
    permissions: {},
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

**request:** `Monite.CreateRoleRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Roles.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.roles.<a href="/src/api/resources/roles/client/Client.ts">getById</a>(roleId) -> Monite.RoleResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.roles.getById("role_id");
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

**roleId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Roles.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.roles.<a href="/src/api/resources/roles/client/Client.ts">updateById</a>(roleId, { ...params }) -> Monite.RoleResponse</code></summary>
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
await client.roles.updateById("role_id");
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

**roleId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Monite.UpdateRoleRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Roles.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Partner settings

<details><summary><code>client.partnerSettings.<a href="/src/api/resources/partnerSettings/client/Client.ts">get</a>() -> Monite.PartnerProjectSettingsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve all settings for this partner.

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
await client.partnerSettings.get();
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

**requestOptions:** `PartnerSettings.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.partnerSettings.<a href="/src/api/resources/partnerSettings/client/Client.ts">update</a>({ ...params }) -> Monite.PartnerProjectSettingsResponse</code></summary>
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
await client.partnerSettings.update();
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

**request:** `Monite.PartnerProjectSettingsPayload`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PartnerSettings.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Tags

<details><summary><code>client.tags.<a href="/src/api/resources/tags/client/Client.ts">get</a>({ ...params }) -> Monite.TagsPaginationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a list of all tags. Tags can be assigned to resources to assist with searching and filtering.
Tags can also be used as trigger conditions in payable approval policies.

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
await client.tags.get();
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

**request:** `Monite.TagsGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tags.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tags.<a href="/src/api/resources/tags/client/Client.ts">create</a>({ ...params }) -> Monite.TagReadSchema</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new tag. The tag name must be unique.
Tag names are case-sensitive, that is `Marketing` and `marketing` are two different tags.

The response returns an auto-generated ID assigned to this tag.
To assign this tag to a resource, send the tag ID in the `tag_ids` list when creating or updating a resource.

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
await client.tags.create({
    name: "Marketing",
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

**request:** `Monite.TagCreateSchema`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tags.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tags.<a href="/src/api/resources/tags/client/Client.ts">getById</a>(tagId) -> Monite.TagReadSchema</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get information about a tag with the given ID.

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
await client.tags.getById("tag_id");
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

**tagId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tags.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tags.<a href="/src/api/resources/tags/client/Client.ts">deleteById</a>(tagId) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a tag with the given ID. This tag will be automatically deleted from all resources where it was used.

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
await client.tags.deleteById("tag_id");
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

**tagId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tags.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tags.<a href="/src/api/resources/tags/client/Client.ts">updateById</a>(tagId, { ...params }) -> Monite.TagReadSchema</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Change the tag name. The new name must be unique among existing tags.
Tag names are case-sensitive, that is `Marketing` and `marketing` are two different tags.

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
await client.tags.updateById("tag_id");
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

**tagId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Monite.TagUpdateSchema`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tags.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Text templates

<details><summary><code>client.textTemplates.<a href="/src/api/resources/textTemplates/client/Client.ts">get</a>({ ...params }) -> Monite.TextTemplateResponseList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get text templates

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
await client.textTemplates.get();
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

**request:** `Monite.TextTemplatesGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TextTemplates.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.textTemplates.<a href="/src/api/resources/textTemplates/client/Client.ts">create</a>({ ...params }) -> Monite.TextTemplateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a text template

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
await client.textTemplates.create({
    document_type: "quote",
    name: "name",
    template: "template",
    type: "email_header",
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

**request:** `Monite.CreateTextTemplatePayload`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TextTemplates.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.textTemplates.<a href="/src/api/resources/textTemplates/client/Client.ts">getById</a>(textTemplateId) -> Monite.TextTemplateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get all custom contents

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
await client.textTemplates.getById("text_template_id");
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

**textTemplateId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TextTemplates.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.textTemplates.<a href="/src/api/resources/textTemplates/client/Client.ts">deleteById</a>(textTemplateId) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete custom content by ID

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
await client.textTemplates.deleteById("text_template_id");
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

**textTemplateId:** `string` — UUID text_template ID

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TextTemplates.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.textTemplates.<a href="/src/api/resources/textTemplates/client/Client.ts">updateById</a>(textTemplateId, { ...params }) -> Monite.TextTemplateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update custom content by ID

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
await client.textTemplates.updateById("text_template_id");
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

**textTemplateId:** `string` — UUID text_template ID

</dd>
</dl>

<dl>
<dd>

**request:** `Monite.UpdateTextTemplatePayload`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TextTemplates.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.textTemplates.<a href="/src/api/resources/textTemplates/client/Client.ts">makeDefaultById</a>(textTemplateId) -> Monite.TextTemplateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Make text template default

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
await client.textTemplates.makeDefaultById("text_template_id");
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

**textTemplateId:** `string` — UUID text_template ID

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TextTemplates.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## VAT rates

<details><summary><code>client.vatRates.<a href="/src/api/resources/vatRates/client/Client.ts">get</a>({ ...params }) -> Monite.VatRateListResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vatRates.get();
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

**request:** `Monite.VatRatesGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VatRates.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Webhook deliveries

<details><summary><code>client.webhookDeliveries.<a href="/src/api/resources/webhookDeliveries/client/Client.ts">get</a>({ ...params }) -> Monite.WebhookDeliveryPaginationResource</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhookDeliveries.get();
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

**request:** `Monite.WebhookDeliveriesGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WebhookDeliveries.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Webhook subscriptions

<details><summary><code>client.webhookSubscriptions.<a href="/src/api/resources/webhookSubscriptions/client/Client.ts">get</a>({ ...params }) -> Monite.WebhookSubscriptionPaginationResource</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhookSubscriptions.get();
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

**request:** `Monite.WebhookSubscriptionsGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WebhookSubscriptions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.webhookSubscriptions.<a href="/src/api/resources/webhookSubscriptions/client/Client.ts">create</a>({ ...params }) -> Monite.WebhookSubscriptionResourceWithSecret</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhookSubscriptions.create({
    object_type: "account",
    url: "url",
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

**request:** `Monite.CreateWebhookSubscriptionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WebhookSubscriptions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.webhookSubscriptions.<a href="/src/api/resources/webhookSubscriptions/client/Client.ts">getById</a>(webhookSubscriptionId) -> Monite.WebhookSubscriptionResource</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhookSubscriptions.getById("webhook_subscription_id");
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

**webhookSubscriptionId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WebhookSubscriptions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.webhookSubscriptions.<a href="/src/api/resources/webhookSubscriptions/client/Client.ts">deleteById</a>(webhookSubscriptionId) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhookSubscriptions.deleteById("webhook_subscription_id");
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

**webhookSubscriptionId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WebhookSubscriptions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.webhookSubscriptions.<a href="/src/api/resources/webhookSubscriptions/client/Client.ts">updateById</a>(webhookSubscriptionId, { ...params }) -> Monite.WebhookSubscriptionResource</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhookSubscriptions.updateById("webhook_subscription_id");
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

**webhookSubscriptionId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Monite.UpdateWebhookSubscriptionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WebhookSubscriptions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.webhookSubscriptions.<a href="/src/api/resources/webhookSubscriptions/client/Client.ts">disableById</a>(webhookSubscriptionId) -> Monite.WebhookSubscriptionResource</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhookSubscriptions.disableById("webhook_subscription_id");
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

**webhookSubscriptionId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WebhookSubscriptions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.webhookSubscriptions.<a href="/src/api/resources/webhookSubscriptions/client/Client.ts">enableById</a>(webhookSubscriptionId) -> Monite.WebhookSubscriptionResource</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhookSubscriptions.enableById("webhook_subscription_id");
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

**webhookSubscriptionId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WebhookSubscriptions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.webhookSubscriptions.<a href="/src/api/resources/webhookSubscriptions/client/Client.ts">regenerateSecretById</a>(webhookSubscriptionId) -> Monite.WebhookSubscriptionResourceWithSecret</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhookSubscriptions.regenerateSecretById("webhook_subscription_id");
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

**webhookSubscriptionId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WebhookSubscriptions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Accounting Payables

<details><summary><code>client.accounting.payables.<a href="/src/api/resources/accounting/resources/payables/client/Client.ts">get</a>({ ...params }) -> Monite.AccountingPayableList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of accounts payable invoices (bills) that exist in the entity's accounting system. This requires that an accounting connection has been previously established. Refer to the [Accounting integration guide](https://docs.monite.com/accounting/integration/index) for details.

This endpoint only provides read-only access to the accounting system's data but does not pull those payables into Monite. You can use it to review the data in the accounting system and find out which of those payables already exist or do not exist in Monite.

Data is actual as of the date and time of the last accounting synchronization, which is specified by the `last_pull` value in the response from `GET /accounting_connections/{connection_id}`. To make sure you are accessing the most up-to-date accounting data, you can use `POST /accounting_connections/{connection_id}/sync` to trigger on-demand synchronization before getting the list of payables.

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
await client.accounting.payables.get();
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

**request:** `Monite.accounting.PayablesGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Payables.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.accounting.payables.<a href="/src/api/resources/accounting/resources/payables/client/Client.ts">getById</a>(payableId) -> Monite.AccountingPayable</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns information about an individual payable invoice (bill) that exists in the entity's accounting system. This payable may or may not also exist in Monite.

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
await client.accounting.payables.getById("payable_id");
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

**payableId:** `string` — An internal ID of the payable invoice (bill) in the accounting system. You can get these IDs from `GET /accounting/payables`.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Payables.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Accounting Receivables

<details><summary><code>client.accounting.receivables.<a href="/src/api/resources/accounting/resources/receivables/client/Client.ts">get</a>({ ...params }) -> Monite.AccountingReceivableList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of invoices that exist in the entity's accounting system. This requires that an accounting connection has been previously established. Refer to the [Accounting integration guide](https://docs.monite.com/accounting/integration/index) for details.

This endpoint only provides read-only access to the accounting system's data but does not pull those invoices into Monite. You can use it to review the data in the accounting system and find out which of those invoices already exist or do not exist in Monite.

Data is actual as of the date and time of the last accounting synchronization, which is specified by the `last_pull` value in the response from `GET /accounting_connections/{connection_id}`. To make sure you are accessing the most up-to-date accounting data, you can use `POST /accounting_connections/{connection_id}/sync` to trigger on-demand synchronization before getting the invoice list.

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
await client.accounting.receivables.get();
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

**request:** `Monite.accounting.ReceivablesGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Receivables.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.accounting.receivables.<a href="/src/api/resources/accounting/resources/receivables/client/Client.ts">getById</a>(invoiceId) -> Monite.AccountingReceivable</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns information about an individual invoice that exists in the entity's accounting system. This invoice may or may not also exist in Monite.

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
await client.accounting.receivables.getById("invoice_id");
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

**invoiceId:** `string` — An internal ID of the invoice in the accounting system. You can get these IDs from `GET /accounting/receivables`.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Receivables.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Accounting Connections

<details><summary><code>client.accounting.connections.<a href="/src/api/resources/accounting/resources/connections/client/Client.ts">get</a>() -> Monite.AccountingConnectionList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get all connections

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
await client.accounting.connections.get();
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

**requestOptions:** `Connections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.accounting.connections.<a href="/src/api/resources/accounting/resources/connections/client/Client.ts">create</a>({ ...params }) -> Monite.AccountingConnectionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create new connection

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
await client.accounting.connections.create();
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

**request:** `Monite.accounting.AccountingConnectionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Connections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.accounting.connections.<a href="/src/api/resources/accounting/resources/connections/client/Client.ts">getById</a>(connectionId) -> Monite.AccountingConnectionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get connection by id

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
await client.accounting.connections.getById("connection_id");
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

**connectionId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Connections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.accounting.connections.<a href="/src/api/resources/accounting/resources/connections/client/Client.ts">disconnectById</a>(connectionId) -> Monite.AccountingConnectionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Disconnect

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
await client.accounting.connections.disconnectById("connection_id");
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

**connectionId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Connections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.accounting.connections.<a href="/src/api/resources/accounting/resources/connections/client/Client.ts">syncById</a>(connectionId) -> Monite.AccountingMessageResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.connections.syncById("connection_id");
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

**connectionId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Connections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Accounting SyncedRecords

<details><summary><code>client.accounting.syncedRecords.<a href="/src/api/resources/accounting/resources/syncedRecords/client/Client.ts">get</a>({ ...params }) -> Monite.SyncRecordResourceList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get synchronized records

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
await client.accounting.syncedRecords.get({
    object_type: "product",
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

**request:** `Monite.accounting.SyncedRecordsGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SyncedRecords.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.accounting.syncedRecords.<a href="/src/api/resources/accounting/resources/syncedRecords/client/Client.ts">getById</a>(syncedRecordId) -> Monite.SyncRecordResource</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get synchronized record by id

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
await client.accounting.syncedRecords.getById("synced_record_id");
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

**syncedRecordId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SyncedRecords.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.accounting.syncedRecords.<a href="/src/api/resources/accounting/resources/syncedRecords/client/Client.ts">pushById</a>(syncedRecordId) -> Monite.SyncRecordResource</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Push object to the accounting system manually

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
await client.accounting.syncedRecords.pushById("synced_record_id");
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

**syncedRecordId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SyncedRecords.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Accounting TaxRates

<details><summary><code>client.accounting.taxRates.<a href="/src/api/resources/accounting/resources/taxRates/client/Client.ts">get</a>({ ...params }) -> Monite.AccountingTaxRateListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get all tax rate accounts

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
await client.accounting.taxRates.get();
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

**request:** `Monite.accounting.TaxRatesGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TaxRates.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.accounting.taxRates.<a href="/src/api/resources/accounting/resources/taxRates/client/Client.ts">getById</a>(taxRateId) -> Monite.AccountingTaxRateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get tax rate account by id

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
await client.accounting.taxRates.getById("tax_rate_id");
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

**taxRateId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TaxRates.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Accounting LedgerAccounts

<details><summary><code>client.accounting.ledgerAccounts.<a href="/src/api/resources/accounting/resources/ledgerAccounts/client/Client.ts">get</a>({ ...params }) -> Monite.LedgerAccountListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get all ledger accounts

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
await client.accounting.ledgerAccounts.get();
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

**request:** `Monite.accounting.LedgerAccountsGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LedgerAccounts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.accounting.ledgerAccounts.<a href="/src/api/resources/accounting/resources/ledgerAccounts/client/Client.ts">getById</a>(ledgerAccountId) -> Monite.LedgerAccountResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get ledger account by id

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
await client.accounting.ledgerAccounts.getById("ledger_account_id");
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

**ledgerAccountId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LedgerAccounts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## ApprovalPolicies Processes

<details><summary><code>client.approvalPolicies.processes.<a href="/src/api/resources/approvalPolicies/resources/processes/client/Client.ts">get</a>(approvalPolicyId) -> Monite.ApprovalProcessResourceList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a list of all approval policy processes.

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
await client.approvalPolicies.processes.get("approval_policy_id");
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

**requestOptions:** `Processes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.approvalPolicies.processes.<a href="/src/api/resources/approvalPolicies/resources/processes/client/Client.ts">getById</a>(approvalPolicyId, processId) -> Monite.ProcessResource</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a specific approval policy process.

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
await client.approvalPolicies.processes.getById("approval_policy_id", "process_id");
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

**processId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Processes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.approvalPolicies.processes.<a href="/src/api/resources/approvalPolicies/resources/processes/client/Client.ts">cancelById</a>(approvalPolicyId, processId) -> Monite.ProcessResource</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Cancel an ongoing approval process for a specific approval policy.

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
await client.approvalPolicies.processes.cancelById("approval_policy_id", "process_id");
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

**processId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Processes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.approvalPolicies.processes.<a href="/src/api/resources/approvalPolicies/resources/processes/client/Client.ts">getSteps</a>(approvalPolicyId, processId) -> Monite.ApprovalProcessStepResourceList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a list of approval policy process steps.

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
await client.approvalPolicies.processes.getSteps("approval_policy_id", "process_id");
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

**processId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Processes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Counterparts Addresses

<details><summary><code>client.counterparts.addresses.<a href="/src/api/resources/counterparts/resources/addresses/client/Client.ts">get</a>(counterpartId) -> Monite.CounterpartAddressResourceList</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.counterparts.addresses.get("counterpart_id");
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

**requestOptions:** `Addresses.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.counterparts.addresses.<a href="/src/api/resources/counterparts/resources/addresses/client/Client.ts">create</a>(counterpartId, { ...params }) -> Monite.CounterpartAddressResponseWithCounterpartId</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.counterparts.addresses.create("counterpart_id", {
    city: "Berlin",
    country: "AF",
    line1: "Flughafenstrasse 52",
    postal_code: "10115",
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

**request:** `Monite.CounterpartAddress`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Addresses.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.counterparts.addresses.<a href="/src/api/resources/counterparts/resources/addresses/client/Client.ts">getById</a>(addressId, counterpartId) -> Monite.CounterpartAddressResponseWithCounterpartId</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.counterparts.addresses.getById("address_id", "counterpart_id");
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

**addressId:** `string`

</dd>
</dl>

<dl>
<dd>

**counterpartId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Addresses.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.counterparts.addresses.<a href="/src/api/resources/counterparts/resources/addresses/client/Client.ts">deleteById</a>(addressId, counterpartId) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.counterparts.addresses.deleteById("address_id", "counterpart_id");
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

**addressId:** `string`

</dd>
</dl>

<dl>
<dd>

**counterpartId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Addresses.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.counterparts.addresses.<a href="/src/api/resources/counterparts/resources/addresses/client/Client.ts">updateById</a>(addressId, counterpartId, { ...params }) -> Monite.CounterpartAddressResponseWithCounterpartId</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.counterparts.addresses.updateById("address_id", "counterpart_id");
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

**addressId:** `string`

</dd>
</dl>

<dl>
<dd>

**counterpartId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Monite.counterparts.CounterpartUpdateAddress`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Addresses.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Counterparts BankAccounts

<details><summary><code>client.counterparts.bankAccounts.<a href="/src/api/resources/counterparts/resources/bankAccounts/client/Client.ts">get</a>(counterpartId) -> Monite.CounterpartBankAccountResourceList</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.counterparts.bankAccounts.get("counterpart_id");
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

**requestOptions:** `BankAccounts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.counterparts.bankAccounts.<a href="/src/api/resources/counterparts/resources/bankAccounts/client/Client.ts">create</a>(counterpartId, { ...params }) -> Monite.CounterpartBankAccountResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.counterparts.bankAccounts.create("counterpart_id", {
    country: "AF",
    currency: "AED",
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

**request:** `Monite.counterparts.CreateCounterpartBankAccount`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BankAccounts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.counterparts.bankAccounts.<a href="/src/api/resources/counterparts/resources/bankAccounts/client/Client.ts">getById</a>(bankAccountId, counterpartId) -> Monite.CounterpartBankAccountResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.counterparts.bankAccounts.getById("bank_account_id", "counterpart_id");
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

**bankAccountId:** `string`

</dd>
</dl>

<dl>
<dd>

**counterpartId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BankAccounts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.counterparts.bankAccounts.<a href="/src/api/resources/counterparts/resources/bankAccounts/client/Client.ts">deleteById</a>(bankAccountId, counterpartId) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.counterparts.bankAccounts.deleteById("bank_account_id", "counterpart_id");
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

**bankAccountId:** `string`

</dd>
</dl>

<dl>
<dd>

**counterpartId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BankAccounts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.counterparts.bankAccounts.<a href="/src/api/resources/counterparts/resources/bankAccounts/client/Client.ts">updateById</a>(bankAccountId, counterpartId, { ...params }) -> Monite.CounterpartBankAccountResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.counterparts.bankAccounts.updateById("bank_account_id", "counterpart_id");
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

**bankAccountId:** `string`

</dd>
</dl>

<dl>
<dd>

**counterpartId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Monite.counterparts.UpdateCounterpartBankAccount`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BankAccounts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.counterparts.bankAccounts.<a href="/src/api/resources/counterparts/resources/bankAccounts/client/Client.ts">makeDefaultById</a>(bankAccountId, counterpartId) -> unknown</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.counterparts.bankAccounts.makeDefaultById("bank_account_id", "counterpart_id");
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

**bankAccountId:** `string`

</dd>
</dl>

<dl>
<dd>

**counterpartId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BankAccounts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Counterparts Contacts

<details><summary><code>client.counterparts.contacts.<a href="/src/api/resources/counterparts/resources/contacts/client/Client.ts">get</a>(counterpartId) -> Monite.CounterpartContactsResourceList</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.counterparts.contacts.get("counterpart_id");
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

**requestOptions:** `Contacts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.counterparts.contacts.<a href="/src/api/resources/counterparts/resources/contacts/client/Client.ts">create</a>(counterpartId, { ...params }) -> Monite.CounterpartContactResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.counterparts.contacts.create("counterpart_id", {
    address: {
        city: "Berlin",
        country: "AF",
        line1: "Flughafenstrasse 52",
        postal_code: "10115",
    },
    first_name: "Mary",
    last_name: "O'Brien",
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

**request:** `Monite.counterparts.CreateCounterpartContactPayload`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Contacts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.counterparts.contacts.<a href="/src/api/resources/counterparts/resources/contacts/client/Client.ts">getById</a>(contactId, counterpartId) -> Monite.CounterpartContactResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.counterparts.contacts.getById("contact_id", "counterpart_id");
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

**contactId:** `string`

</dd>
</dl>

<dl>
<dd>

**counterpartId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Contacts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.counterparts.contacts.<a href="/src/api/resources/counterparts/resources/contacts/client/Client.ts">deleteById</a>(contactId, counterpartId) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.counterparts.contacts.deleteById("contact_id", "counterpart_id");
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

**contactId:** `string`

</dd>
</dl>

<dl>
<dd>

**counterpartId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Contacts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.counterparts.contacts.<a href="/src/api/resources/counterparts/resources/contacts/client/Client.ts">updateById</a>(contactId, counterpartId, { ...params }) -> Monite.CounterpartContactResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.counterparts.contacts.updateById("contact_id", "counterpart_id");
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

**contactId:** `string`

</dd>
</dl>

<dl>
<dd>

**counterpartId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Monite.counterparts.UpdateCounterpartContactPayload`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Contacts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.counterparts.contacts.<a href="/src/api/resources/counterparts/resources/contacts/client/Client.ts">makeDefaultById</a>(contactId, counterpartId) -> Monite.CounterpartContactResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.counterparts.contacts.makeDefaultById("contact_id", "counterpart_id");
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

**contactId:** `string`

</dd>
</dl>

<dl>
<dd>

**counterpartId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Contacts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Counterparts VatIds

<details><summary><code>client.counterparts.vatIds.<a href="/src/api/resources/counterparts/resources/vatIds/client/Client.ts">get</a>(counterpartId) -> Monite.CounterpartVatIdResourceList</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.counterparts.vatIds.get("counterpart_id");
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

**requestOptions:** `VatIds.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.counterparts.vatIds.<a href="/src/api/resources/counterparts/resources/vatIds/client/Client.ts">create</a>(counterpartId, { ...params }) -> Monite.CounterpartVatIdResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.counterparts.vatIds.create("counterpart_id", {
    value: "123456789",
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

**request:** `Monite.counterparts.CounterpartVatId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VatIds.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.counterparts.vatIds.<a href="/src/api/resources/counterparts/resources/vatIds/client/Client.ts">getById</a>(vatId, counterpartId) -> Monite.CounterpartVatIdResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.counterparts.vatIds.getById("vat_id", "counterpart_id");
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

**vatId:** `string`

</dd>
</dl>

<dl>
<dd>

**counterpartId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VatIds.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.counterparts.vatIds.<a href="/src/api/resources/counterparts/resources/vatIds/client/Client.ts">deleteById</a>(vatId, counterpartId) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.counterparts.vatIds.deleteById("vat_id", "counterpart_id");
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

**vatId:** `string`

</dd>
</dl>

<dl>
<dd>

**counterpartId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VatIds.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.counterparts.vatIds.<a href="/src/api/resources/counterparts/resources/vatIds/client/Client.ts">updateById</a>(vatId, counterpartId, { ...params }) -> Monite.CounterpartVatIdResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.counterparts.vatIds.updateById("vat_id", "counterpart_id");
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

**vatId:** `string`

</dd>
</dl>

<dl>
<dd>

**counterpartId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Monite.counterparts.CounterpartUpdateVatId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VatIds.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## DataExports ExtraData

<details><summary><code>client.dataExports.extraData.<a href="/src/api/resources/dataExports/resources/extraData/client/Client.ts">get</a>({ ...params }) -> Monite.ExtraDataResourceList</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.dataExports.extraData.get();
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

**request:** `Monite.dataExports.ExtraDataGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExtraData.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.dataExports.extraData.<a href="/src/api/resources/dataExports/resources/extraData/client/Client.ts">create</a>({ ...params }) -> Monite.ExtraDataResource</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.dataExports.extraData.create({
    field_name: "default_account_code",
    field_value: "field_value",
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

**request:** `Monite.dataExports.ExtraDataCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExtraData.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.dataExports.extraData.<a href="/src/api/resources/dataExports/resources/extraData/client/Client.ts">getById</a>(extraDataId) -> Monite.ExtraDataResource</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.dataExports.extraData.getById("extra_data_id");
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

**extraDataId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExtraData.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.dataExports.extraData.<a href="/src/api/resources/dataExports/resources/extraData/client/Client.ts">deleteById</a>(extraDataId) -> Monite.ExtraDataResource</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.dataExports.extraData.deleteById("extra_data_id");
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

**extraDataId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExtraData.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.dataExports.extraData.<a href="/src/api/resources/dataExports/resources/extraData/client/Client.ts">updateById</a>(extraDataId, { ...params }) -> Monite.ExtraDataResource</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.dataExports.extraData.updateById("extra_data_id");
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

**extraDataId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Monite.dataExports.ExtraDataUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExtraData.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Entities BankAccounts

<details><summary><code>client.entities.bankAccounts.<a href="/src/api/resources/entities/resources/bankAccounts/client/Client.ts">get</a>() -> Monite.EntityBankAccountPaginationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get all bank accounts of this entity.

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
await client.entities.bankAccounts.get();
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

**requestOptions:** `BankAccounts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entities.bankAccounts.<a href="/src/api/resources/entities/resources/bankAccounts/client/Client.ts">create</a>({ ...params }) -> Monite.EntityBankAccountResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Add a new bank account for the specified entity.

The minimum required fields are `currency` and `country`. Other required fields depend on the currency:

-   EUR accounts require `iban`.
-   GBP accounts require `account_holder_name`, `account_number`, and `sort_code`.
-   USD accounts require `account_holder_name`, `account_number`, and `routing_number`.
-   Accounts in other currencies require one of:
    -   `iban`
    -   `account_number` and `sort_code`
    -   `account_number` and `routing_number`
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
await client.entities.bankAccounts.create({
    country: "AF",
    currency: "AED",
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

**request:** `Monite.entities.CreateEntityBankAccountRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BankAccounts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entities.bankAccounts.<a href="/src/api/resources/entities/resources/bankAccounts/client/Client.ts">completeVerification</a>({ ...params }) -> Monite.CompleteVerificationResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entities.bankAccounts.completeVerification({
    airwallex_plaid: {
        account: {
            id: "id",
            mask: "mask",
            name: "name",
        },
        institution: {
            id: "id",
            name: "name",
        },
        mandate: {
            email: "email",
            signatory: "signatory",
            type: "us_ach_debit",
            version: "1.0",
        },
        public_token: "public_token",
    },
    type: "airwallex_plaid",
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

**request:** `Monite.entities.CompleteVerificationRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BankAccounts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entities.bankAccounts.<a href="/src/api/resources/entities/resources/bankAccounts/client/Client.ts">startVerification</a>({ ...params }) -> Monite.VerificationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Start entity bank account verification. The flow depends on verification type.
For airwallex_plaid it generates Plaid Link token to init the Plaid SDK.

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
await client.entities.bankAccounts.startVerification({
    airwallex_plaid: {
        client_name: "client_name",
        redirect_url: "redirect_url",
    },
    type: "airwallex_plaid",
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

**request:** `Monite.VerificationRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BankAccounts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entities.bankAccounts.<a href="/src/api/resources/entities/resources/bankAccounts/client/Client.ts">getById</a>(bankAccountId) -> Monite.EntityBankAccountResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a bank account by its ID.

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
await client.entities.bankAccounts.getById("bank_account_id");
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

**bankAccountId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BankAccounts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entities.bankAccounts.<a href="/src/api/resources/entities/resources/bankAccounts/client/Client.ts">deleteById</a>(bankAccountId) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete the bank account specified by its ID.

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
await client.entities.bankAccounts.deleteById("bank_account_id");
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

**bankAccountId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BankAccounts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entities.bankAccounts.<a href="/src/api/resources/entities/resources/bankAccounts/client/Client.ts">updateById</a>(bankAccountId, { ...params }) -> Monite.EntityBankAccountResponse</code></summary>
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
await client.entities.bankAccounts.updateById("bank_account_id");
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

**bankAccountId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Monite.entities.UpdateEntityBankAccountRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BankAccounts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entities.bankAccounts.<a href="/src/api/resources/entities/resources/bankAccounts/client/Client.ts">completeVerificationById</a>(bankAccountId, { ...params }) -> Monite.CompleteRefreshVerificationResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entities.bankAccounts.completeVerificationById("bank_account_id", {
    type: "airwallex_plaid",
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

**bankAccountId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Monite.entities.CompleteRefreshVerificationRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BankAccounts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entities.bankAccounts.<a href="/src/api/resources/entities/resources/bankAccounts/client/Client.ts">makeDefaultById</a>(bankAccountId) -> Monite.EntityBankAccountResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Set a bank account as the default for this entity per currency.

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
await client.entities.bankAccounts.makeDefaultById("bank_account_id");
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

**bankAccountId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BankAccounts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entities.bankAccounts.<a href="/src/api/resources/entities/resources/bankAccounts/client/Client.ts">refreshVerificationById</a>(bankAccountId, { ...params }) -> Monite.VerificationResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entities.bankAccounts.refreshVerificationById("bank_account_id", {
    airwallex_plaid: {
        client_name: "client_name",
        redirect_url: "redirect_url",
    },
    type: "airwallex_plaid",
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

**bankAccountId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Monite.VerificationRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BankAccounts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entities.bankAccounts.<a href="/src/api/resources/entities/resources/bankAccounts/client/Client.ts">getVerificationsById</a>(bankAccountId) -> Monite.BankAccountVerifications</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entities.bankAccounts.getVerificationsById("bank_account_id");
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

**bankAccountId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BankAccounts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Entities OnboardingData

<details><summary><code>client.entities.onboardingData.<a href="/src/api/resources/entities/resources/onboardingData/client/Client.ts">get</a>(entityId) -> Monite.EntityOnboardingDataResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entities.onboardingData.get("entity_id");
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

**requestOptions:** `OnboardingData.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entities.onboardingData.<a href="/src/api/resources/entities/resources/onboardingData/client/Client.ts">update</a>(entityId, { ...params }) -> Monite.EntityOnboardingDataResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entities.onboardingData.update("entity_id");
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

**request:** `Monite.entities.EntityOnboardingDataRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OnboardingData.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Entities PaymentMethods

<details><summary><code>client.entities.paymentMethods.<a href="/src/api/resources/entities/resources/paymentMethods/client/Client.ts">get</a>(entityId) -> Monite.OnboardingPaymentMethodsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get all enabled payment methods.

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
await client.entities.paymentMethods.get("entity_id");
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

**requestOptions:** `PaymentMethods.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entities.paymentMethods.<a href="/src/api/resources/entities/resources/paymentMethods/client/Client.ts">set</a>(entityId, { ...params }) -> Monite.OnboardingPaymentMethodsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Set which payment methods should be enabled.

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
await client.entities.paymentMethods.set("entity_id");
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

**request:** `Monite.entities.EnabledPaymentMethods`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentMethods.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Entities VatIds

<details><summary><code>client.entities.vatIds.<a href="/src/api/resources/entities/resources/vatIds/client/Client.ts">get</a>(entityId) -> Monite.EntityVatIdResourceList</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entities.vatIds.get("entity_id");
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

**requestOptions:** `VatIds.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entities.vatIds.<a href="/src/api/resources/entities/resources/vatIds/client/Client.ts">create</a>(entityId, { ...params }) -> Monite.EntityVatIdResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entities.vatIds.create("entity_id", {
    country: "AF",
    value: "123456789",
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

**request:** `Monite.entities.EntityVatId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VatIds.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entities.vatIds.<a href="/src/api/resources/entities/resources/vatIds/client/Client.ts">getById</a>(id, entityId) -> Monite.EntityVatIdResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entities.vatIds.getById("id", "entity_id");
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**entityId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VatIds.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entities.vatIds.<a href="/src/api/resources/entities/resources/vatIds/client/Client.ts">deleteById</a>(id, entityId) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entities.vatIds.deleteById("id", "entity_id");
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**entityId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VatIds.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entities.vatIds.<a href="/src/api/resources/entities/resources/vatIds/client/Client.ts">updateById</a>(id, entityId, { ...params }) -> Monite.EntityVatIdResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entities.vatIds.updateById("id", "entity_id");
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**entityId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Monite.entities.EntityUpdateVatId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VatIds.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Entities Persons

<details><summary><code>client.entities.persons.<a href="/src/api/resources/entities/resources/persons/client/Client.ts">get</a>() -> Monite.PersonsResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entities.persons.get();
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

**requestOptions:** `Persons.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entities.persons.<a href="/src/api/resources/entities/resources/persons/client/Client.ts">create</a>({ ...params }) -> Monite.PersonResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entities.persons.create({
    first_name: "first_name",
    last_name: "last_name",
    email: "email",
    relationship: {},
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

**request:** `Monite.entities.PersonRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Persons.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entities.persons.<a href="/src/api/resources/entities/resources/persons/client/Client.ts">getById</a>(personId) -> Monite.PersonResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entities.persons.getById("person_id");
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

**personId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Persons.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entities.persons.<a href="/src/api/resources/entities/resources/persons/client/Client.ts">deleteById</a>(personId) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entities.persons.deleteById("person_id");
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

**personId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Persons.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entities.persons.<a href="/src/api/resources/entities/resources/persons/client/Client.ts">updateById</a>(personId, { ...params }) -> Monite.PersonResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entities.persons.updateById("person_id");
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

**personId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Monite.entities.OptionalPersonRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Persons.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entities.persons.<a href="/src/api/resources/entities/resources/persons/client/Client.ts">uploadOnboardingDocuments</a>(personId, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Provide files for person onboarding verification

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
await client.entities.persons.uploadOnboardingDocuments("person_id");
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

**personId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Monite.entities.PersonOnboardingDocumentsPayload`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Persons.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Payables LineItems

<details><summary><code>client.payables.lineItems.<a href="/src/api/resources/payables/resources/lineItems/client/Client.ts">get</a>(payableId, { ...params }) -> Monite.LineItemPaginationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a list of all line items related to a specific payable.
Related guide: [List all payable line items](https://docs.monite.com/docs/manage-line-items#list-all-line-items-of-a-payable)

See also:

[Manage line items](https://docs.monite.com/docs/manage-line-items)

[Collect payables](https://docs.monite.com/docs/collect-payables)

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
await client.payables.lineItems.get("payable_id");
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

**payableId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Monite.payables.LineItemsGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LineItems.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.payables.lineItems.<a href="/src/api/resources/payables/resources/lineItems/client/Client.ts">create</a>(payableId, { ...params }) -> Monite.LineItemResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Add a new line item to a specific payable.

The `subtotal` and `total` fields of line items are automatically calculated based on the `unit_price`,
`quantity`, and `tax` fields, therefore, are read-only and appear only in the response schema. The field
`ledger_account_id` is required **only** for account integration, otherwise, it is optional.

Related guide: [Add line items to a payable](https://docs.monite.com/docs/manage-line-items#add-line-items-to-a-payable)

See also:

[Manage line items](https://docs.monite.com/docs/manage-line-items)

[Collect payables](https://docs.monite.com/docs/collect-payables)

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
await client.payables.lineItems.create("payable_id", {});
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

**payableId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Monite.LineItemRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LineItems.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.payables.lineItems.<a href="/src/api/resources/payables/resources/lineItems/client/Client.ts">replace</a>(payableId, { ...params }) -> Monite.LineItemsReplaceResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Replaces the information of all line items of a specific payable.

Related guide: [Replace all line items](https://docs.monite.com/docs/manage-line-items#replace-all-line-items)

See also:

[Manage line items](https://docs.monite.com/docs/manage-line-items)

[Collect payables](https://docs.monite.com/docs/collect-payables)

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
await client.payables.lineItems.replace("payable_id", {
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

**payableId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Monite.payables.LineItemsReplaceRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LineItems.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.payables.lineItems.<a href="/src/api/resources/payables/resources/lineItems/client/Client.ts">getById</a>(lineItemId, payableId) -> Monite.LineItemResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get information about a specific line item with a given ID.

Related guide: [Retrieve a line item](https://docs.monite.com/docs/manage-line-items#retrieve-a-line-item)

See also:

[Manage line items](https://docs.monite.com/docs/manage-line-items)

[Collect payables](https://docs.monite.com/docs/collect-payables)

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
await client.payables.lineItems.getById("line_item_id", "payable_id");
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

**lineItemId:** `string`

</dd>
</dl>

<dl>
<dd>

**payableId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LineItems.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.payables.lineItems.<a href="/src/api/resources/payables/resources/lineItems/client/Client.ts">deleteById</a>(lineItemId, payableId) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete the line item with the given ID.

Related guide: [Remove a line item](https://docs.monite.com/docs/manage-line-items#remove-a-line-item)

See also:

[Manage line items](https://docs.monite.com/docs/manage-line-items)

[Collect payables](https://docs.monite.com/docs/collect-payables)

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
await client.payables.lineItems.deleteById("line_item_id", "payable_id");
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

**lineItemId:** `string`

</dd>
</dl>

<dl>
<dd>

**payableId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LineItems.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.payables.lineItems.<a href="/src/api/resources/payables/resources/lineItems/client/Client.ts">updateById</a>(lineItemId, payableId, { ...params }) -> Monite.LineItemResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Edits the information of a specific line item.

Related guide: [Update a line item](https://docs.monite.com/docs/manage-line-items#update-a-line-item)

See also:

[Manage line items](https://docs.monite.com/docs/manage-line-items)

[Collect payables](https://docs.monite.com/docs/collect-payables)

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
await client.payables.lineItems.updateById("line_item_id", "payable_id", {});
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

**lineItemId:** `string`

</dd>
</dl>

<dl>
<dd>

**payableId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Monite.LineItemRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LineItems.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>
