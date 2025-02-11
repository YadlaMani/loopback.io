---
lang: en
title: 'API docs: sequelize.sequelizecrudrepository.includereferencesifrequested'
keywords: LoopBack 4.0, LoopBack 4, Node.js, TypeScript, OpenAPI
sidebar: lb4_sidebar
editurl: https://github.com/loopbackio/loopback-next/tree/master/extensions/sequelize
permalink: /doc/en/lb4/apidocs.sequelize.sequelizecrudrepository.includereferencesifrequested.html
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@loopback/sequelize](./sequelize.md) &gt; [SequelizeCrudRepository](./sequelize.sequelizecrudrepository.md) &gt; [includeReferencesIfRequested](./sequelize.sequelizecrudrepository.includereferencesifrequested.md)

## SequelizeCrudRepository.includeReferencesIfRequested() method

Include related entities of `@referencesMany` relation

referencesMany relation is NOT handled by `sequelizeModel.findAll` as it doesn't have any direct alternative to it, so to include relation data of referencesMany, we're manually fetching related data requested

**Signature:**

```typescript
protected includeReferencesIfRequested(parentEntities: Model<T, T>[], parentEntityClass: typeof Entity, inclusionFilters?: InclusionFilter[]): Promise<(T & Relations)[]>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  parentEntities | Model&lt;T, T&gt;\[\] | source table data |
|  parentEntityClass | typeof [Entity](./repository.entity.md) | loopback entity class for the parent entity |
|  inclusionFilters | [InclusionFilter](./filter.inclusionfilter.md)<!-- -->\[\] | _(Optional)_ |

**Returns:**

Promise&lt;(T &amp; Relations)\[\]&gt;

entities with related models in them


