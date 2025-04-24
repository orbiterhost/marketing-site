---
title: Exiting The Orbiter
pubDate: Apr 24 2025
author: Justin Hunter
heroImage: https://cdn.orbiter.host/ipfs/bafybeigp6gw4bfsejoy66wmx7e7ozpwfp34h5qei74knjydmgavpjj4oge
authorPfp: https://cdn.orbiter.host/ipfs/bafkreidafe5bjh7btrw42mjsd44mfkq5zamonfgxr2p5dlatwod66ltjxq
description: A new tool that makes Orbiter even more portable by leveraging the open technology its built upon.
---
Orbiter was built to bring back the openness and fun of the web. For that reason, [we build on open technologies](https://orbiter.host/blog/how-we-use-blockchain-behind-the-scenes).  However, to take full advantage of these open technologies, most people need a little bit of guidance. We want anyone to be able to download their sites and apps without having to touch any Orbiter APIs or ask us for permission. 

So, we built Orbiter Probe to help facilitate exactly that. Probe is a simple tool that makes use of those same open technologies Orbiter is built on to make it relatively simple for someone (with some technical knowledge) to grab a full copy of their website or app and download it to their computer. All without ever logging into Orbiter. 

## Why does this matter?

The web is getting increasingly closed. The walls of the various gardens continue to rise, making it difficult to migrate between service providers. Open web technologies are being usurped by bespoke tools hidden behind hosting solutions tailored to each unique flavor of said tools. If you don't believe me, try migrating a server-side rendered Next.js project from Vercel to somewhere else. 

Orbiter was built as the antidote to this. The web was built to be open. We brought that back with simple uploads-based deployments and hosting. We added developer favorites like a CLI and Github Actions for convenience. But we have not strayed from our commitment to being open. In fact, as part of that commitment, [we open sourced ALL of Orbiter a few months ago](https://orbiter.host/blog/orbiter-is-now-open-source). 

But building on open technologies and being open source only matters if people can actually migrate easily. For most of my career, I have swam against the stream in trying to make sure the products I built were easy for customers to leave. By making it easy to leave, you make it more appealing to come back. And you do the right thing. I will die on this hill. 

So, we needed some instructions or tools to make the process of exporting your sites and apps from Orbiter easy. It's always been possible, and we've had a few customers figure out how the deep technology we use works so they could access these open properties themselves. But it should be accessible to everyone. 

Which brings us back to Probe. 

## Orbiter Probe

In keeping with the space theme, we named this tool probe because it probes the smart contract storage that holds a user's individual site or app mapping. Every site update is mapped to a public ledger. This creates a record that anyone can access. This also links the publicly available files that make up your site or app with a location that makes it easy to find. 

With this you can search records of your site's updates and download whatever version you want. The tool defaults to downloading the most recent version, but it can be tweaked to download older versions or all versions. 

[You can check it out here!](https://github.com/orbiterhost/orbiter-probe)