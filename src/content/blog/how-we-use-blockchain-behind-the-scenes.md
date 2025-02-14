---
title: 'How We Use Blockchain Technology Behind the Scenes'
description: 'Learn how Orbiter uses blockchain technology in static website hositng to prevent walled gardens'
pubDate: 'Jan 02 2025'
heroImage: '/blog/blockchain-cover.jpg'
author: "Steve Simkins"
authorPfp: "https://cdn.orbiter.host/ipfs/bafkreifusckbeuxuih4o6p5un5j34selfg3uvt6ltqwbv4glsigekdx7lq"
---

The chances are you might have seen other static site hosting platforms, but the likelihood of finding something exactly like Orbiter is going to be pretty unlikely. Most other platforms inevitably become walled gardens, where a user is locked in and has a hard time migrating their website or content. This is partly due to the tech stack underneath most platforms, which is centralized servers owned by said companies. Orbiter on the other hand has a different approach.

At Orbiter we’ve used our previous experience with IPFS and blockchain to build a more open model that can give users control over their websites. In this post we’ll go into some of the details of how we’ve built Orbiter and the blockchain technology behind it!

## IPFS

The InterPlanetary File System, or “IPFS” for short, is a unique file sharing protocol that uses a mix of peer to peer and cryptography principles to build a distributed network for sharing content. The network is made up of lots of computer or servers running IPFS nodes,  a way to access and help upkeep the network. By running a node you can share files from your own machine or import from other machines. When you share a file on IPFS it gets a special cryptographic hash called the Content Identifier, or CID. They look something like this:

```jsx
bafkreih5aznjvttude6c3wbvqeebb6rlx5wkbzyppv7garjiubll2ceym4
```

Like other file hashing techniques, this hash is based on the contents of the file. One small change and you’ll get a totally different hash. However this CID also acts as the address to locate the content on the IPFS network, and through its cryptographic hashing the file is also immutable. This ends up working pretty well for static website hosting, as the immutable properties make it great for CDNs and caching the content.

The only problem is that since IPFS is immutable, you can’t really update it efficiently. That’s an issue for websites where you might be updating it pretty frequently, and it can become a hassle to keep giving people a new CID for every new version. This is where Blockchain comes into play.

## Blockchain

Believe it or not, we’re going to use immutability to solve our immutability problem. Blockchains are essentially a long ledger of immutable transaction history, but on more modern blockchains like Ethereum or Base, they also run code and store data. For every website on Orbiter we make a new smart contract on Base called an [IPCM](https://ipcm.dev) (InterPlanetary CID Mapping) contract.

This special type of smart contract stores a simple string state for a CID that will act as the pointer to the latest state of the website. Also inside the contract are a few functions, including one to update that CID state which only the owner can do, as well as a function to read the latest state of the CID which is available to anyone. With the lock on who can actually update the file we have a cryptographic auth mechanism built in through blockchain.

![IPCM](https://cdn.orbiter.host/ipfs/bafkreigpjwojh5opfntb6yg7tvnmusil2lt6oqomfnthpjhurreutz64be)

Another key piece of IPCM is that anytime the CID state is updated onchain it will emit a smart contract event with a log of the latest CID. Since these events are recorded all the way back to the origin of the contract, anyone can go through and build a version history of their site. This is pretty powerful considering not only the cryptographic authentication of blockchain, but also the fact that no one can delete or remove that history.

Through the combination of IPFS and blockchains we have a pretty great system for sharing and updating static websites!

## Integration

If you have used Orbiter before, you might have noticed there is nothing that indicates that any of this is happening. We’ve purposely abstracted all of this away so you don’t have to worry about the complexity of what’s under the hood, and instead you can just upload and view your websites.

To turn all of this into a website domain Orbiter is using cloud infrastructure to pull the latest state of the smart contract CID and route the content to the domain. Now like we mentioned earlier, this creates an open garden system where anyone could access the website outside of Orbiter. Take for example our very own marketing site which currently (at the time of this writing) has the CID below:

```jsx
bafybeiekhpdxrfsiqoumbwykglwkz35v6i36tkoiobnxj4xjabbusxgxee
```

You can access this IPFS content on the public network using a gateway like this:

```
https://bafybeiekhpdxrfsiqoumbwykglwkz35v6i36tkoiobnxj4xjabbusxgxee.ipfs.dweb.link
```

It’s these combined pieces of IPFS and blockchain which help build an open garden instead of a walled garden. With Orbiter, users can rest assured that they could easily migrate their content to a number of different places without needing Orbiter’s permission. IPFS allows anyone with a node to pin existing content and help ensure its availability, so with any website uploaded through Orbiter you have the option to do exactly that. Options out there include running your own node (I do my raspberry pi!), or you can use a service like [Pinata](https://pinata.cloud). In the end, you stay in control!

## Wrapping Up

Our goal with Orbiter is to [bring back the fun of the web](https://orbiter.host/blog/the-static-website-manifesto/), and how you might define that could vary. For us it means:

- The easiest way to host a static site
- Prevent walled gardens around your websites

With our IPFS and blockchain stack we’re able to achieve both of these, and if you haven’t experienced it for yourself then [sign up today](https://app.orbiter.host)!
