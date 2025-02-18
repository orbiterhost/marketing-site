---
title: "Expect Businesses To Be Sustainable"
description: "Orbiter is competing in a well-established space, which means we have to be affordable while maintaining sustainability."
pubDate: "Jan 25 2025"
heroImage: "https://cdn.orbiter.host/ipfs/bafybeibnlus6rne7vgqnszmvkmkuvkfhlcdakxgpjvvrqlt2cy667xbium?img-width=750"
author: "Justin Hunter"
authorPfp: "https://cdn.orbiter.host/ipfs/bafkreidafe5bjh7btrw42mjsd44mfkq5zamonfgxr2p5dlatwod66ltjxq"
---
An alternative title to this post could be: Question unsustainable business practices.

I was chatting with an Orbiter user yesterday, and the topic of price in comparison to other (larger) hosting platforms inevitably came up. This is natural and expected. Orbiter isn’t expensive, but our free option offers very different capabilities compared to the much larger, venture-backed companies that we are often compared with. The beauty of this conversation, though, came as I got to discuss business sustainability with the customer.

Everyone relying on a service should care about at least two things:

1.  How sustainable is this business?

2.  How easy is it to exit and move to another platform should the business not be sustainable?


To answer the first question, we have to look at business model, funding, and costs. Let’s take a look at Netlify compared to Orbiter. This is not meant to take pot shots at Netlify, by the way. It’s simply a way to talk about economics.

## Comparing Netlify

![Netlify pricing](https://cdn.orbiter.host/ipfs/bafybeiaaadlrx4jrnir5lnltqplb4fklcczqxgudnemqtqt3ycn7tisiiy)

Let’s compare the features listed on the free plan to Orbiter’s free plan:

*   Single member seat ✅

*   Global edge network ✅

*   Live site previews 🟠

*   100GB bandwidth (Orbiter is currently unlimited, but that’s not likely to be sustainable)

*   300 build minutes (Orbiter doesn’t require any build time since you’re just uploading assets)

*   Instant rollbacks ✅

*   Secrets controller (Orbiter is focused entirely on static sites, so no secrets manager required)

*   Static assets ✅

*   Dynamic serverless functions ❌


Now, what’s missing from Netlify’s free list here are two things that many people take for granted:

*   Custom domains

*   No Netlify branding (besides the domain)


Orbiter does not offer custom domains on free plans (yet - we have some ideas on how to do this in a limited way), and Orbiter includes a small banner at the bottom of free sites indicating that the site is powered by Orbiter. Let’s talk about each of these in turn.

### Custom Domains

Contrary to popular belief, allowing custom domains on sites hosted via a platform is not free. There are two main costs associated with allowing custom domains.

First, there is the proxy server costs. When supporting a custom domain, the site with the custom domain must run through a proxy server that maps to the original `.orbiter.website` or `.netlify.app` domain. To manage this, most platforms, including Orbiter, use NGINX. The server running this costs money, and the configuration files for each site are managed on disk. Storage is never free, even if it’s on disk.

Second, SSL certificates must be issued for each custom domain. Platforms could require customers to bring their own cert, but that’s a cumbersome process beyond the capabilities of most people. So, instead, platforms like Netlify and Orbiter issue SSL certificates for their customers. Much like the proxy configuration files, the certificate records must be stored. And the proxy server must handle these SSL certificates and the rules around them. Again, this is not free.

### Branded Banner

The Orbiter banner at the bottom of all free sites services two purposes (lot’s of rules of two in this post…). One, it serves as a small network effect generator. A site is shared with others. People see that the site is powered by Orbiter and they might be interested in learning more. Could we do this with just the domain (i.e. `site.orbiter.website`)? Probably, but on a much smaller scale. Additionally the domain-only approach doesn’t help with the second reason for the banner.

Two, the banner provides a small bit of phishing protection. A phishing site with an Orbiter banner at the bottom is going to be far less convincing than one without that banner. Obviously, this is not a foolproof solution, so we have phishing detection services and manual reviews. But I do believe the banner helps.

## Sustainability

If Orbiter wanted to go head-to-head with Netlify and offer the same or similar services under the free plan, we would be faced with a tough decision. Operate at a loss with no money in the bank or raise funds from investors. Actually, when I write it out like that, it’s not a tough decision at all. We’re not interested in raising venture funding, and we definitely aren’t going to operate at a loss.

So, Orbiter is built with sustainability in mind. We specifically architected the platform to ensure that we would not lose money as we grew. This is exactly what you should want from businesses. This is how business used to work in general.

However, VC money has skewed things. Netlify has raised $212 million over multiple funding rounds. That’s the type of money that means you don’t have to worry about sustainability for a long time. You can kick the can down the road, and you may never end up becoming sustainable. Just think of how frequently we see companies IPO even though they are losing money every year.

When a company is not sustainable, it can go out of business literally over night. Look no further than the venture-backed accounting startup Bench. [They turned off their service with no notice and shut down because they were not sustainable and last ditch efforts to raise money or sell the company failed](https://techcrunch.com/2025/01/03/inside-the-wild-fall-and-last-minute-revival-of-bench-the-vc-backed-accounting-startup-that-imploded-over-the-holidays/). This left customers scrambling to get access to their data and move to a new accounting service with tax day looming. It should be noted that after the shutdown, Bench was acquired by [Employee.com](http://Employee.com) who promised to keep services online.

Sustainability matters, and customers should care about the economics that enable or prevent sustainability.

But there’s another part of the equation customers should consider.

## Credible Exit

The idea of a credible exit is simply being able to move from one provider to another without going through extremes to make the switch happen. A credible exit is one where the customer can move seamlessly. To enable such an exit, the platform serving the customer has to believe that such openness is valuable.

Unfortunately, many platforms are built to lock customers in and make it hard to move. Orbiter is not. We made an intentional decision to build using technology that gives customers a credible exit. Permissionless migration. [We wrote about the underlying technology here](https://orbiter.host/blog/how-we-use-blockchain-behind-the-scenes), but the goal is to simply make it so if someone wants to leave and host their sites elsewhere, they can do so.

## Conclusion

When comparing services, there are a number of factors to consider. What’s the level of sustainability, how easy is it to move between providers, and does the service feel like it’s building something for you or building something for investors. Orbiter is very affordable, but it’s not going to match pricing with companies that have raised hundreds of millions from venture capital.

We hope you’ll choose sustainability.
