---
title: How Orbz Built A Modern Version of Stumbleupon With Orbiter
description: Orbz is a fun, modern version of Stumbleupon built with Orbiter.
pubDate: Mar 08 2025
heroImage: https://cdn.orbiter.host/ipfs/bafybeihuvn6f5tpp3qzlgqj2fe7ackfxqn6rtl5vfyudryol2gweyidn64
author: Justin Hunter
authorPfp: https://cdn.orbiter.host/ipfs/bafkreidafe5bjh7btrw42mjsd44mfkq5zamonfgxr2p5dlatwod66ltjxq
---
Remember Stumbleupon? The joy of discovering new websites by randomly accessing them? Back when the web was fun and fresh, and [people surfed instead of scrolled](https://orbiter.host/blog/the-web-was-meant-for-surfing-not-scrolling). While things have changed, the web remains open, and with a little creativity, we can bring back the fun we used to have. That's exactly what Matthias Jordan is doing thanks to Orbiter.
### Introducing Orbz.fun

![Orbz](https://cdn.orbiter.host/ipfs/bafybeihuvn6f5tpp3qzlgqj2fe7ackfxqn6rtl5vfyudryol2gweyidn64)

Matthias learned of Orbiter's architecture and how every site is publicly available without needing an API from Orbiter. Always a tinkerer, the product marketer, design engineer, and indie hacker, immediately had the idea to bring back a Stumbleupon type experience.

[Orbz.fun](https://orbz.fun) is the spiritual successor to the classic website ([which peaked at 25 million monthly visitors in 2012](https://www.yahoo.com/lifestyle/internet-stumbleupon-era-peaked-10-151505546.html)). Matthias saw that Orbiter was built on open technologies, and he saw a post that mentioned Orbiter's contract factory. Every Orbiter site has its own smart contract that allows tracking of the site's current version. This is all publicly available, and with the contract factory details, he was able to see and monitor each new site created.

>I think I saw Steve post the contract factory address, so I started wondering if I could monitor the events emitted from that contract to find the sites being created with Orbiter. As I started experimenting, I realized I could build a Stumbleupon type experience. I always loved Stumbleupon, and this felt like a fun experiment.

Within a couple of nights of coding after his kids went to bed, Matthias had a working version of Orbz. But he realized something else. In addition to monitoring the events emitted by the contract factory, he could trace back the events from each site's contract and get a full version history of the sites. Orbiter provides an easy interface for users to access their site versions, but the beauty of building on open technology like blockchain and IPFS is that others can build their own implementations. And that's exactly what he did.

By leveraging the history of the sites, Orbz isn't just a successor to Stumbleupon, it has a built-in Wayback Machine.

>I love the open and permissionless nature of Orbiter's architecture. Because everything is built on the blockchain, it means anyone can do what I did. It was even better when I went to host Orbz on Orbiter, it was such a great experience. Simple and intuitive.

### Using Orbiter To Build Orbz

Prior to using Orbiter to host websites, Matthias had used Vercel, Netlify, and Cloudflare Pages. What attracted him to Orbiter, in addition to it being open and permissionless, was how it reminded him of building and hosting websites in the past. It used to be that you'd use FTP to upload your site assets to a server and that was it. Things have gotten so complex, but Matthias found that Orbiter was a return to simplicity.

>Orbiter challenges you to rethink what you can do on the internet and how you build it.

The freedom, simplicity, and support drew Matthias to Orbiter, but the return to the way the web used to be is what has kept him. Initially, Matthias used Orbiter's web app to upload his sites. He's since started exploring [Orbiter's CLI](https://docs.orbiter.host/cli) and the new [Github Action](https://docs.orbiter.host/github-actions-and-hooks).
### Conclusion

Matthias was especially fond of Orbiter's ease of use and would recommend anyone hosting static sites and apps to give Orbiter a try. If you're looking to host your static sites and want to return to the simplicity and the fun of the old web, [Orbiter is for you](https://orbiter.host).

And if you want to experience the nostalgia of Stumbleupon, give [Orbz](https://orbz.fun) a try!