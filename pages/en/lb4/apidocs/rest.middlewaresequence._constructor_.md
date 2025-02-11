---
lang: en
title: 'API docs: rest.middlewaresequence._constructor_'
keywords: LoopBack 4.0, LoopBack 4, Node.js, TypeScript, OpenAPI
sidebar: lb4_sidebar
editurl: https://github.com/loopbackio/loopback-next/tree/master/packages/rest
permalink: /doc/en/lb4/apidocs.rest.middlewaresequence._constructor_.html
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@loopback/rest](./rest.md) &gt; [MiddlewareSequence](./rest.middlewaresequence.md) &gt; [(constructor)](./rest.middlewaresequence._constructor_.md)

## MiddlewareSequence.(constructor)

Constructor: Injects `InvokeMiddleware` and `InvokeMiddlewareOptions`

**Signature:**

```typescript
constructor(context: Context, invokeMiddleware: InvokeMiddleware, options?: InvokeMiddlewareOptions);
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  context | [Context](./context.context.md) |  |
|  invokeMiddleware | [InvokeMiddleware](./express.invokemiddleware.md) | invoker for registered middleware in a chain. To be injected via RestBindings.INVOKE\_MIDDLEWARE\_SERVICE. |
|  options | [InvokeMiddlewareOptions](./express.invokemiddlewareoptions.md) | _(Optional)_ |


