---
lang: en
title: 'API docs: repository.createhasmanyrepositoryfactory'
keywords: LoopBack 4.0, LoopBack 4
sidebar: lb4_sidebar
permalink: /doc/en/lb4/apidocs.repository.createhasmanyrepositoryfactory.html
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@loopback/repository](./repository.md) &gt; [createHasManyRepositoryFactory](./repository.createhasmanyrepositoryfactory.md)

## createHasManyRepositoryFactory() function

Enforces a constraint on a repository based on a relationship contract between models. For example, if a Customer model is related to an Order model via a HasMany relation, then, the relational repository returned by the factory function would be constrained by a Customer model instance's id(s).

<b>Signature:</b>

```typescript
export declare function createHasManyRepositoryFactory<Target extends Entity, TargetID, ForeignKeyType>(relationMetadata: HasManyDefinition, targetRepositoryGetter: Getter<EntityCrudRepository<Target, TargetID>>): HasManyRepositoryFactory<Target, ForeignKeyType>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  relationMetadata | <code>HasManyDefinition</code> | The relation metadata used to describe the relationship and determine how to apply the constraint. |
|  targetRepositoryGetter | <code>Getter&lt;EntityCrudRepository&lt;Target, TargetID&gt;&gt;</code> | The repository which represents the target model of a relation attached to a datasource. |

<b>Returns:</b>

`HasManyRepositoryFactory<Target, ForeignKeyType>`

The factory function which accepts a foreign key value to constrain the given target repository

