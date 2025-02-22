---
title: 'Why Am I The Way I Am, Or Bare Metal Analytics on a Homelab'
description: 'My wife brought home a couple of HP business machine PCs and I knew I had to build something with them.'
pubDate: 'Feb 22 2025'
heroImage: 'https://cdn.orbiter.host/ipfs/bafkreiemng6fskapxy26lajfhtg5i27e7atufx35xfexmsr6kb52rfvofu'
author: "Justin Hunter"
authorPfp: "https://cdn.orbiter.host/ipfs/bafkreidafe5bjh7btrw42mjsd44mfkq5zamonfgxr2p5dlatwod66ltjxq"
---
When we first launched Orbiter, we knew we would offer analytics. In fact, [if you use our handy versioning system, you can see the original Orbiter marketing site listed analytics as coming soon](https://marketing.orbiter.website/pricing?orbiterVersionCid=bafybeig37dtr4i3xuxskmyucazgqra7oqk24upq4tr27uoknfixy4aogsi).

![](https://cdn.orbiter.host/ipfs/bafkreiambbodpzifuhmdxwxflahjn3mzmekciilyswgenulwvj7j5asnje)

We launched without the ability to charge people, but you can also see our immediate asipriations for features that would be for paid plans only. So, as we progressed and introduced the features we wanted, we knew the last big one that we promised would be analytics.

We wanted analytics to be something that was privacy-friendly and GDPR compliant, but we also wanted it to be useful. Because we build on top of Cloudflare workers, it seemed possible, and dare I even say easy, to build server-side analytics and not store private info. The trick was going to be filtering out bots and other unecessary request data. That and figuring out the architecture.

Orbiter already has servers and serverless infrastructure. We had plenty of options to choose from. But then, my wife brought home two HP Business Machines that her office used as servers before moving to their new place along with four 2TB HDDs. Was this a sign? Should I build our analytics feature on bare metal running in my own office?

Should I and could I are two very different questions, but I chose to follow the could I line of questioning.

![Jurrasic Park meme](https://cdn.orbiter.host/ipfs/bafkreiemng6fskapxy26lajfhtg5i27e7atufx35xfexmsr6kb52rfvofu)

These HP 280 Business Machines were pretty solid, and if I could just get rid of that pesky Window operating system, I knew they'd be even better. Enter Ubuntu.

I removed Windows and flashed Ubuntu Server 24.04.1 onto the first machine and fired it up. It was a beautiful blinking cursor of power staring back at me. I got to work.

To keep things simple, and because we didn't know if anyone would even care about analytics, I wanted to keep everything local to the machine. That meant we'd be writing all our analytics data to SQLite. Considering the number of hard drives I had sitting around, this wasn't a problem. However, the trade-off was that we'd be using HDD drives and drive failure is a well-documented problem with HDDs. We chose to accept the risk as analytics was not a mission critical functionality for Orbiter.

Now, it was time to get the server connected to the internet so I could SSH in from anywhere. But I ran into a problem. The machine didn't have a wifi card. Made sense when I stopped to think about it. It was a server at my wife's office and had always been hardwired to the office's modem. The little machine had never know the freedom and packet loss of over the air WiFi.

I had a WiFi card from my son's gaming PC left over from when we upgraded it. But I thought, wouldn't it be cool to just run ethernet and hardwire it so the machine could feel a little taste of home, a little bit of normalcy? And as we all know, any question that begins with "wouldn't it be cool" is always answered with "yes".

However, I had another problem. When my wife and I had our house built, I was driving a hard bargain with the builder and refused to pay extra to have every room wired for ethernet. I could do that later and for cheaper. Reader, if you choose later and cheaper it almost always means it will never happen.

So, this machine was sitting in my office with no WiFi card and no way to get access to an ethernet connection directly to my modem. Unless...

Early on after buying the house, we upgraded the WiFi to use Eero. The ISP's WiFi router was still sitting in my closet collecting dust. I wondered if I could make that router an extender and connect it to my internet-less server sitting on my office floor. It turned out I could do exactly that. After configuring the router, I was able to plug in an Ethernet cable and run it to the server machine where it refused to recognize the sweet, sweet internet flowing into its veins.

After a few configuration changes, that problem was solved easily though. And we were online!

The next step was to get the analytics server code I had written on my Macbook onto this machine. Locally over my own private network at my house, this was easy enough, but I knew I needed to solve for two things:

1.  I needed to make sure the server could be accessed from the outside world without exposing my entire home network to said world
    
2.  I needed to be able to SSH into the machine from anywhere in the world, again without exposing my home network or port 22 to the rest of the world
    

Fortunately, Cloudflare makes a great product called Tunnels that solved problem 1. And Tailscale has a secure tunnel system for SSH that solved problem number 2.

Now, I was able to pull down my server code. The code itself is a simple express app that writes the analytics data to SQLite and reads from the same database. It's a single table system because why complicate things when you're running a server on the floor of your office?

I booted the server up, added some PM2 niceness to it to make sure restarts and stops were easy, then connected the Cloudflare tunnel to a custom domain. We officially had an analytics server. Now, I needed to hook it up to our Cloudflare worker that renders Orbiter websites.

I knew that any analytics code (and really any code) I added to this worker could not block the process of rendering the website. Speed matters, and people don't care what features are running behind the scenes. They want their websites to load and load fast. Additionally, we didn't want to track every request the worker made. Considering the worker was responsible for fetching all subassets for a website, that would inflate analytics data. So, I wrote a function to filter out anything that wasn't a page load. Finally, we needed to filter out bot traffic, which if you're not in the website/server game you don't realize is insane. The amount of traffic even the tiniest website gets from crawlers is astounding.

With all of this in place, we launched the updated worker and verified the data funneling into the analytics server running in my office. But there were a couple of things that were worrying me. If the server went down, how could I know? And if something happened with the SQLite database, how could I restore it?

To solve the first problem, we spun up a simple health check using [val.town](http://val.town). The code does a simple fetch to a health check endpoint and if it doesn't get a response, it sends us an email and posts to our slack. Simple solutions for simple problems.

For the second issue, I took a page out of my own playbook and leaned on a [tutorial I wrote a few months ago](https://pinata.cloud/blog/how-to-build-a-persistent-crud-app-using-sqlite-and-deno-js/). Every hour, we write a snapshot of the SQLite database a simple file upload to our object storage provider ([Pinata](https://pinata.cloud)).

Is all of this a smart decision? Probably not. Did I learn some things that I will 100% forget within a month? Absolutely. No matter what, though, it was fun. And to top it off, we do have a valuable feature we've been able to ship to our customers. Here's a quick example of the analytics feature working in our web app.

![analytics](https://cdn.orbiter.host/ipfs/bafkreiafu23sbkb6caxghywfys7ozumwwzheier73vshc5ptkf7slqlqwa)

At some point, we will likely have to move this to a remote VPS somewhere, but for now it's fun looking over at this random computer my wife brought home and knowing it's powering a part of Orbiter.

If you'd like more stories about running bare metal implementations in your own home lab, find someone smarter than me to follow. But if you want to host your static website the easy way, [check out Orbiter today!](https://orbiter.host)