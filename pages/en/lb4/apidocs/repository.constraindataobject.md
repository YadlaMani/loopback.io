---
lang: en
title: 'API docs: repository.constraindataobject'
keywords: LoopBack 4.0, LoopBack 4, Node.js, TypeScript, OpenAPI
sidebar: lb4_sidebar
editurl: https://github.com/loopbackio/loopback-next/tree/master/packages/repository
permalink: /doc/en/lb4/apidocs.repository.constraindataobject.html
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@loopback/repository](./repository.md) &gt; [constrainDataObject](./repository.constraindataobject.md)

## constrainDataObject() function

A utility function which takes a model instance data and enforces constraint(s) on it

**Signature:**

```typescript
export declare function constrainDataObject<T extends Entity>(originalData: DataObject<T>, constraint: DataObject<T>): DataObject<T>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  originalData | [DataObject](./repository.dataobject.md)<!-- -->&lt;T&gt; | the model data to apply the constrain(s) to |
|  constraint | [DataObject](./repository.dataobject.md)<!-- -->&lt;T&gt; | the constraint which is to be applied on the data object |

**Returns:**

[DataObject](./repository.dataobject.md)<!-- -->&lt;T&gt;

the modified data with the constraint, otherwise the original instance data


