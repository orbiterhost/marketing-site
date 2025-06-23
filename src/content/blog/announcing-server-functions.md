---
title: Announcing Server Functions
description: Server functions now allow developers to build fullstack
  applications with Orbiter
pubDate: Jun 23 2025
heroImage: https://marketing.orbiter.host/announcing-server-functions.png
author: Justin Hunter
authorPfp: https://cdn.orbiter.host/ipfs/bafkreidafe5bjh7btrw42mjsd44mfkq5zamonfgxr2p5dlatwod66ltjxq
---
Orbiter launched back in January with a singular focus: static websites and apps. We wanted to bring back the joy of building for the web and eliminate the complexity of modern deployments. Over the last six months, we've done exactly that. An Orbiter site can be deployed in just a few seconds by uploading a folder of assets, by using our CLI, or by connecting a Github repo to our Github Action. We've seen nearly 4,000 site deployments and updates in that time.

And today, we take the next step to support developer workflows. We're proud and excited to announce Server Functions!

## What are Server Functions

Orbiter's focus on static websites and web apps meant that developers who needed an API or server logic would have to build their own solution elsewhere and connect it to their Orbiter site. This wasn't terribly daunting for developers that already had a preferred backend hosting framework and provider, but for developers that were coming from the world of Next.js and wanted to have all the benefits of static, client-side rendering along with a server, they were stuck. We wanted to make things simple for both groups, and we wanted to do it in a very Orbiter-forward way.

Server functions use the [Hono framework](https://hono.dev/) to enable rich backend functionality for your apps. Hono is a feature-rich backend framework that acts as the modern successor to Express. You can write simple functions in your backend code or you can write a fullscale API with as many routes as you want. Orbiter's Server Functions support it all.

Our preferred stack for building these frontend and backend applications is [bhvr](https://bhvr.dev/). The bhvr stack is exactly what we always envisioned when we first set out to build Orbiter. It is a combination of the Bun runtime, the Hono backend framwork, the Vite build system, and React—the most popular frontend framework on the market. We liked bhvr so much we built it into our Orbiter CLI as a first-class template.

You can start building fullstack apps with a single command:

`orbiter new --template bhvr`

This will set up a project that has two folders: client and server

You can write all your React client-side logic and UI logic in the client folder. The server folder is where you can write all your backend logic. If you're building an API, you can create all of your API routes here. And when you're ready to deploy, Orbiter's got you covered. Run the `orbiter deploy` command and the CLI will deploy the client first then deploy the server function.

With Orbiter's Server Functions, you can now build any app you want!

## How much is it?

Orbiter's Server Functions are available on paid plans. That means for as little as $7 per month (when paying annually), you can start deploying fullstack apps on Orbiter. The Launch plan and the Orbit plan each have request limits that match or exceed what you'll get with other providers, but the key diference with Orbiter is the simplicity.

The Launch plan allows:

*   4 million requests to your client app and Server Function per month

*   5 million ms of CPU time (the time the CPU takes to process the request) per month


The Orbit plan allows:

*   10 million requests per month

*   10 million ms of CPU time


If you exceed your limits, we don't currently have overages. We'll work with you on how to address the excess usage as we decide how we'd like to bill for these types of things in the future. We want to avoid the surprise bills that come with most hosting platforms that implement usage based overage billing.

## Getting started

If you're ready to start using Orbiter Server Functions, [make sure you're on one of our paid plans](https://orbiter.host/pricing), then use the [Orbiter CLI](https://docs.orbiter.host/cli-reference/) to spin up your first project. You can have a fullstack app up and running in 30 seconds or less. We can't wait to see what you build!
