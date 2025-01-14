# loopback.io

LoopBack community site, http://loopback.io. This website now includes the LoopBack documentation.

NOTE: The website is served from the `gh-pages` branch.

This repository is provided under the [MIT License](LICENSE).


## Setup

To preview the website locally:

1.  Install [Ruby and Bundler](https://help.github.com/articles/setting-up-your-pages-site-locally-with-jekyll/) if you don't have them already.

2.  Clone this repo (you might use the SSH URL instead of HTTPS).:

```
git clone https://github.com/loopbackio/loopback.io.git
```

3.  `cd` to the repository directory and run the following command:

```
$ cd loopback.io
$ bundle install
```

Bundler will look in the Gemfile for which gems to install. The `github-pages` gem includes the same version of Jekyll and other dependencies as used by GitHub Pages, so that your local setup mirrors GitHub Pages as closely as possible.

## Run and view site locally

Run Jekyll using the following command:

```
$ npm start
```

Then, load [http://localhost:4001/](http://localhost:4001/) on your browser.

NOTE: The docs part will be at [http://localhost:4001/doc](http://localhost:4001/doc). It's not yet linked from the main "overview" part of the site, but will be once we launch (RSN).

## Formatting

Jekyll uses a variant of Markdown known as [Kramdown](http://kramdown.gettalong.org/quickref.html).

Jekyll uses the [Liquid template engine](http://liquidmarkup.org/) for templating.

## Incorporating external READMEs

The documentation incorporates README files from a number of LoopBack example repositories.
We use the [get-readmes](https://github.com/strongloop/get-readmes) utility to fetch
the README files directly from GitHub. Here is how to update the READMEs

1.  `npm install` (_first time/setup only_)
2.  `npm run fetch-readmes`

From there, the README markdown files are incorporated into documentation articles
using the standard Jekyll "include" syntax as follows (for example):

```
---
title: "Angular example app"
lang: en
layout: readme
source: loopback-example-angular
keywords: LoopBack
tags:
sidebar: lb2_sidebar
permalink: /doc/en/lb2/Angular-example-app.html
summary: A brief tutorial on creating an Angular client app using the Loopback AngularJS SDK.
---

{% include readmes/loopback-example-angular.md %}
```

## Incorporating updates from loopback-next

We use a node script `update-lb4-docs` to copy over contents from the loopback-next
repository using `@loopback/docs` package. The script is responsible for copying
over the markdown documentation and related tables, as well as the sidebar used
for LoopBack 4 content. The changes are then picked up as part of Travis CI's
builds along with README update scripts and deployed to GitHub Pages once
successful. The `upgrade-swagger-ui.js` script is also run as part of the
builds. If you'd like to make documentation changes for LoopBack 4, please do so
on its own [repository](https://github.com/loopbackio/loopback-next/).

### Linting Readmes

There is an additional `npm script` that "lints" the readmes for markdown formatting problems. It is currently "experimental", see [this issue](https://github.com/loopbackio/loopback.io/issues/49#issuecomment-253672668) for more info.

You can run this script thus:

```js
$ npm run lint-readmes
```

## LoopBack.io Docs Search

Docs Search is powered by [IBM Watson Discovery](https://www.ibm.com/watson/services/discovery/).

### How it works

There are two parts of work to get this working:

1. The [Discovery service](https://www.ibm.com/watson/services/discovery/) is one of the services provided by [IBM Cloud](https://cloud.ibm.com/). A collection is created with loopback.io as the URL we'd like to sync.

2. The [IBM Cloud function](https://www.ibm.com/cloud/functions) is used for the search function calling the discovery service and parse the output in the form that the LoopBack website understands.  

### Front End

Each documentation page has a search bar at the top. The search will redirect the
user to a `/search` page to show the results. The results are retrieved from a
[IBM Cloud Function](https://www.ibm.com/cloud/functions) that acts as a proxy
to protect Watson Discovery credentials. The search bar also contains a hidden
form input that sets the `sidebar` value and Watson Discovery filters content
based on this value to return context aware results. Ex: Searching for the word
`controller` from a LoopBack 4 documentation page will return LoopBack 4 results.
To search all documents you can search from the `/search` page. Community Docs
and Contribution docs are included in all results.

### Cloud Function

The code for the Cloud function can be found [here](https://github.com/strongloop/loopback.io-search).
It is deployed to the same account and must be edited directly in IBM Cloud
(formerly BlueMix). The repository exists to document code changes and have peer
reviews. Credentials for accessing the Cloud Function can be obtained from Diana Lau OR you can ask them to re-deploy changes.

#### Your own version

You can deploy the code on your own IBM Cloud account and upload the URL for
Discovery in [search.html](https://github.com/loopbackio/loopback.io/blob/gh-pages/_layouts/search.html).


## Contributing 

This project uses [DCO](https://developercertificate.org/). Be sure to sign off
your commits using the `-s` flag or adding `Signed-off-By: Name<Email>` in the
commit message.

**Example**

```
git commit -s -m "feat: my commit message"
```

Also see the [Contributing to LoopBack documentation](https://loopback.io/doc/en/contrib/doc-contrib.html) to get you started.
