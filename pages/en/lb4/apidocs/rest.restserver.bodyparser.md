---
lang: en
title: 'API docs: rest.restserver.bodyparser'
keywords: LoopBack 4.0, LoopBack 4
sidebar: lb4_sidebar
permalink: /doc/en/lb4/apidocs.rest.restserver.bodyparser.html
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@loopback/rest](./rest.md) &gt; [RestServer](./rest.restserver.md) &gt; [bodyParser](./rest.restserver.bodyparser.md)

## RestServer.bodyParser() method

Bind a body parser to the server context

<b>Signature:</b>

```typescript
bodyParser(bodyParserClass: Constructor<BodyParser>, address?: BindingAddress<BodyParser>): Binding<BodyParser>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  bodyParserClass | <code>Constructor&lt;BodyParser&gt;</code> |  |
|  address | <code>BindingAddress&lt;BodyParser&gt;</code> | Optional binding address |

<b>Returns:</b>

`Binding<BodyParser>`

