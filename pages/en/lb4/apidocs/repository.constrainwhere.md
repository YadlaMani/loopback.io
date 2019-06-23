---
lang: en
title: 'API docs: repository.constrainwhere'
keywords: LoopBack 4.0, LoopBack 4
sidebar: lb4_sidebar
permalink: /doc/en/lb4/apidocs.repository.constrainwhere.html
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@loopback/repository](./repository.md) &gt; [constrainWhere](./repository.constrainwhere.md)

## constrainWhere() function

A utility function which takes a where filter and enforces constraint(s) on it

<b>Signature:</b>

```typescript
export declare function constrainWhere<T extends object>(originalWhere: Where<T> | undefined, constraint: Where<T>): Where<T>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  originalWhere | <code>Where&lt;T&gt; &#124; undefined</code> | the where filter to apply the constrain(s) to |
|  constraint | <code>Where&lt;T&gt;</code> | the constraint which is to be applied on the filter |

<b>Returns:</b>

`Where<T>`

Filter the modified filter with the constraint, otherwise the original filter

