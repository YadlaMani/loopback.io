---
lang: en
title: 'API docs: sequelize.sequelizecrudrepository.createhasmanyrepositoryfactoryfor'
keywords: LoopBack 4.0, LoopBack 4, Node.js, TypeScript, OpenAPI
sidebar: lb4_sidebar
editurl: https://github.com/loopbackio/loopback-next/tree/master/extensions/sequelize
permalink: /doc/en/lb4/apidocs.sequelize.sequelizecrudrepository.createhasmanyrepositoryfactoryfor.html
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@loopback/sequelize](./sequelize.md) &gt; [SequelizeCrudRepository](./sequelize.sequelizecrudrepository.md) &gt; [createHasManyRepositoryFactoryFor](./sequelize.sequelizecrudrepository.createhasmanyrepositoryfactoryfor.md)

## SequelizeCrudRepository.createHasManyRepositoryFactoryFor() method

Function to create a constrained relation repository factory

**Signature:**

```typescript
protected createHasManyRepositoryFactoryFor<Target extends Entity, TargetID, ForeignKeyType>(relationName: string, targetRepositoryGetter: Getter<EntityCrudRepository<Target, TargetID>>): HasManyRepositoryFactory<Target, ForeignKeyType>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  relationName | string | Name of the relation defined on the source model |
|  targetRepositoryGetter | Getter&lt;[EntityCrudRepository](./repository.entitycrudrepository.md)<!-- -->&lt;Target, TargetID&gt;&gt; |  |

**Returns:**

[HasManyRepositoryFactory](./repository.hasmanyrepositoryfactory.md)<!-- -->&lt;Target, ForeignKeyType&gt;

## Example


```ts
class CustomerRepository extends SequelizeCrudRepository<
  Customer,
  typeof Customer.prototype.id,
  CustomerRelations
> {
  public readonly orders: HasManyRepositoryFactory<Order, typeof Customer.prototype.id>;

  constructor(
    protected db: SequelizeDataSource,
    orderRepository: EntityCrudRepository<Order, typeof Order.prototype.id>,
  ) {
    super(Customer, db);
    this.orders = this.createHasManyRepositoryFactoryFor(
      'orders',
      orderRepository,
    );
  }
}
```


