The Internet Archive's Wayback Machine is one of my favorite creation. It's useful for trips down memory lane, for proving someone said something, for product research, for marketing research, and so much more. However, it's a heavy lift. 

It's not a heavy lift for the end users accessing the service, but for the Internet Archive to run the Wayback Machine, they need to make use of bots that crawl the web in a similar way to search engines. These bots take snapshots of the underlying HTML, JavaScript, and CSS then store those files in a way that the Wayback Machine can render them when people request archived versions of sites. To date, [the Internet Archive has stored more than a trillion snapshots of sites](https://web.archive.org/details/waybacksummary). That's a lot of storage. That's a lot of compute. 

What if there was a way to accomplish this while distributing the storage and the record mapping across the internet? 

## Orbiter & IPCM 

One of Orbiter's most interesting features, and something that truly sets it apart from other web hosting platforms, is the version history feature. Many web hosting platforms allow you to see deployment history, and many have easy rollback features. However, these platforms do not enable a public view of the history of the sites hosted on them. 

Orbiter does. 

To understand how this works, you have to understand a bit about our infrastructure and technology choices. [We've written about this before](https://orbiter.host/blog/how-we-use-blockchain-behind-the-scenes), but I'll summarize it here. 

Orbiter uses an open protocol (built by Steve himself) called [IPCM](https://ipcm.dev). This protocol makes use of blockchain technology as well as [IPFS](https://ipfs.io) (a peer-to-peer storage protocol). Now, before you go running for the hills because of the mere mention of blockchain, take a second to use Orbiter and you'll realize it's not like blockchain applications you've probably heard of or experienced. It's not shoved in your face. It's not speculative. It's used for a practical purpose with a traditional and easy to use interface on top. 

The practical use of blockchain and IPFS is simple. We believe websites are inherently public, and that means both the creators of said websites and the public should be able to access them even if the hosting provider goes down, goes out of business, or loses content. To this end, every site on Orbiter has its own unique mapping of IPFS content identifiers on the Base blockchain. IPFS is the perfect tool for ensuring open, available data. It's also perfect for versioning and de-duplication because of its immutable, content-addressable nature. The Base blockchain is a perfect choice for mapping each version of a site because it's open to anyone, it's fast, it's inexpensive, and it doesn't use the same energy-intensive consensus as something like Bitcoin. 

Again, you don't have to care about this. But that's the background that leads to the feature. 

With Orbiter, every site has a version history. This is publicly available, but Orbiter wraps a nice interface on top of this for paid customers. This interface allows users to see a list of versions, preview any past version, and restore their site to a past version. 

![Versions](https://cdn.orbiter.host/ipfs/bafybeihbwiw3q7atstc3ifxrjhnkktfxkclrag5gxvxdse6vvb2f3onzoe)

In this gif, you can see I open my personal site and you can see the most recent blog post is about Substack. I then choose a preview version and preview it, and the most recent post is about product market fit. This is Orbiter's version history in action. 

More specifically, this is the power of IPFS and blockchain in action. Anyone can do this even if they don't have a paid Orbiter account. Don't believe me? Check out [Orbz](https://orbz.fun). [Orbz was built without any admin access to Orbiter APIs.](https://orbiter.host/blog/how-orbz-built-a-modern-version-of-stumbleupon-with-orbiter) It uses the open data of the blockchain and IPFS to fetch sites hosted on Orbiter and IPFS, renders them, and includes an option to see previous versions. 

## How Does This Impact Web Archiving

It'd be foolish to suggest that the Internet Archive could just use Orbiter for all its archiving needs. That also would shift the burden of storage and snapshotting entirely to one entity again (Orbiter) which we are trying to avoid in this scenario. 

Instead, if all sites defaulted to using IPCM and if there were a central registry of IPCM smart contract addresses, the Internet Archive or anyone else could easily pull down snapshots of any site on-demand. All without having to store the snapshots themselves. This is a powerful paradigm shift that would take a significant amount of buy-in. But it's possible, and it's proven through everything we've done at Orbiter thus far. 

The web is a treasure. The web is a library. The web is where we live. It's important that we can preserve it, and it shouldn't be up to a single entity to do the work. It's amazing what the Internet Archive has done, but we can help. Orbiter is doing its part. 

If you're ready to host your site with full version history, public availability, and more, [give Orbiter a try today!](https://orbiter.host/pricing)