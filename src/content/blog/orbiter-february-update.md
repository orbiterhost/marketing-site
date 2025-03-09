---
title: Orbiter February Update
description: A look back at how Orbiter did in February and what we shipped
heroImage: https://cdn.orbiter.host/ipfs/bafkreiha4owv7xtlfcp36dwieqhjfzrmuptpydsj2fbkdyzr62oxng7zbu
author: Justin Hunter
authorPfp: https://cdn.orbiter.host/ipfs/bafkreidafe5bjh7btrw42mjsd44mfkq5zamonfgxr2p5dlatwod66ltjxq
pubDate: Mar 09 2025
---
I'm a few days late to get this update out, but it's important to us that we look back on each month to see what went right, what went wrong, and what we can improve upon. So I'm committed to getting these updates done monthly. 

February was Orbiter's second month of operation. Things slowed down decidedly, and we'll explore the likely reasons in a bit. But first, let's dive in to the numbers. 

## The Numbers

As mentioned, overall growth was slower in February. We didn't have a splashy launch and instead were focused on refinement and grinding out marketing channels. 

Let's take a look at the numbers: 

* Total Users: 171 (^ 31%)

* Paid Users: 9 (^ 50%)

* MRR: $108 (Tracking here for the first time)

* Total Sites: 131 (^ 45%)

* Total Site Updates: 336 (^ 128%)

There are a couple of stand-out stats here. While total users was "only" up 31% month over month, paid users being up 50% is huge. We are working on Orbiter on the side, building features and marketing it as we have time. So, to see paid adoption continue to increase is a great motivator. 

The other major indicator that we're on to something is the site updates stats. 128% growth far outpaces the site growth. That means we have people who, once they spin up their site, use us heavily to update their site. That's the true measure of active users.

Since our marketing site is the top of our funnel, let's look at traffic to that site. 

![Visits](https://cdn.orbiter.host/ipfs/bafkreia5cbj3g7t4ijwax37aipsujrfmj6tohhq72fpkqzw2nncwwdoeyq)

Views and visitors were way down, the bounce rate was slightly higher, but the time on page was slightly longer. Generally, this lines up with the fact that we didn't drive as much traffic due to a lack of "launches" and less focused marketing. 

As far as traffic to the websites hosted on Orbiter, things are trending up as we want to see. We're closing in on a million requests. 

![Traffic](https://cdn.orbiter.host/ipfs/bafkreiha4owv7xtlfcp36dwieqhjfzrmuptpydsj2fbkdyzr62oxng7zbu)

Let's break it down: 

* Requests: 994,730 (^ 100%)
* Bandwidth: 19.84 GB (^41%)

Our north star is number of active sites, but we keep a close eye on how each site receives traffic. A big differentiator between Orbiter and other hosting platforms is we don't penalize people when their sites get popular. 

## Product

February was a busy month. While we didn't have the same splashiness of an initial launch, we quietly (and sometimes loudly) plugged away at improving the product. 

### Full ENS Support 

Unless you're in the crypto/blockchain space, you might not know what ENS (Ethereum Name System) is. It's a way for people to create an Ethereum username that they can link wallets, websites, and more to. A lot of people in the crypto space use ENS to link their website, and we've had many requests to support this. 

However, one of the big problems with linking a website to ENS is that it can be expensive when you want to make updates to the site. Each update is generally a transaction on the Ethereum blockchain. 

We built a custom ENS resolver that leverages the existing blockchain technology Orbiter already uses to make this process much simpler. [You can read more about it here.](https://orbiter.host/blog/announcing-ens-support) 
### Github Action

While we believe [the best way to deploy sites is to build them locally and not rely on a cloud provider's server](https://orbiter.host/blog/a-case-for-local-builds), the reality is that many developers want to directly integrate builds and deployment into their git flow. So, we launched a Github Action. 

The Github Action is simple to install and will automate the entire build and deployment process for your site. If you prefer CI/CD workflows, this is for you. And the action can be modified however you'd like. For example, I like to build my site locally still, so I modified the action to just deploy my build folder once I commit to the main branch. 

[Find the Github Action on the Github Marketplace](https://github.com/marketplace/actions/deploy-to-orbiter).

### Orbiter CLI 0.5.0

The CLI has been a hit with developers, and we continue to improve it where we can. One such improvement was to make it simpler to deploy sites with a single command. 

Previously, to deploy, you'd have to pass in a bunch of arguments. Now, you can set these items as variables that the CLI will read from and you can simply run `orbiter deploy`.

We also added API key authentication for the CLI. This was necessary for the Github Action but has also been a nice benefit to local users. Prior to this, authentication for the CLI happened through an OAuth flow that required a browser window. 

### Orbiter Analytics

We're still tweaking this one, but we officially launch analytics for customers on the Orbit plan. These analytics were built from scratch, are run server side, store no personal information from visitors, and are GDPR and privacy friendly. 

![Analytics](https://cdn.orbiter.host/ipfs/bafkreiet6e4cq4gzvlhuxyodwbbetqtxnlyxctegnmjl3vhxdy35pxwxy4)

We experimented with this product by building it entirely locally in my office. This was a fun experiment and we plan to polish the feature further to make it more useful for anyone building on Orbiter. 
### Open Sourced The Company

We always wanted to be open source. It just took us a month an a half to do it. However, [Orbiter is entirely open source now](https://orbiter.host/blog/orbiter-is-now-open-source). 

We did this to build trust but also to align with our entire vision. We believe the web should be open. Part of being open is showing people how we do what we do and letting others do it if they want. We're excited to have our entire stack publicly available under GPL license. 

[You can find us on Github here.](https://github.com/orbiterhost) 
### Rebranded Marketing Site

Because we're now an open source company, it made sense to rebrand and update the messaging on our marketing site. Thanks to Orbiter's version history feature, I can very easily show you the previous version vs. the current version. 

This was our old site: 

![Old Site](https://cdn.orbiter.host/ipfs/bafybeihelcnfn3cbnwjj63pmjtw5niqp5vrwrci6sdzf6akp4pzqdgy5me)

And this is the updated site: 

![Updated Site](https://cdn.orbiter.host/ipfs/bafkreidackbhke6mkgrlvafhywqi3j7yk73xlbcizukggn2zrt73ed7fs4)

We played up the space theme a little more, and our H1 hit right at the core of what we're doing. We're open source, we're easy. We think everyone should be hosting their static sites on us vs any of the big hosting platforms. 

## Marketing

As I've mentioned a few times, we didn't have the benefit of a big launch to help propel us, so we had to be much more intentional with our marketing this month. Before diving into the tactics we used, let's look at our referral traffic stats. 

![Referral Traffic](https://cdn.orbiter.host/ipfs/bafkreidjblx4ugc36gp7m5m45grx44kh5qnjacep7f3ngnxfqzn6xiacfy)

The raw numbers are not impressive, but the traffic percentages paint a picture that we can study for future marketing. The top four referral sources have proven to be our main channels and we will need to find ways to lean into all of them. 

In addition to leveraging these platforms, we continued to focus on the long game of SEO. We believe in SEO still, and we believe in the follow-on effects of AIO (AI Optimization) as a distinct follower to SEO. 

We wrote 9 more blog posts in February (a short month). This is solid, but it shows a clear dip from January, which has been the trend throughout this entire update. We're still happy with the amount of content we've put out and our marketing efforts in general. 

## What Did We Learn 

The biggest thing we learned is that you can't take days off if you want to sustain momentum. This is still a side project for us, but we saw if you take your foot off the gas you...surprisingly slow down. 

We'll need to find a balance between maintaining the high level of performance we expect from ourselves at our day job, being with family, and working on Orbiter. There are ways for us to do all of it without burning out, we just need to find a gear we like and hit cruise control. We can always downshift anytime to speed up. 

Additionally, we learned that there is clear demand to return to the days when the web was much easier. People miss the simplicity and fun of the web. We will continue to lean into that messaging while making sure our product matches that messaging. 

## Conclusion

We're having a blast working on Orbiter, and we're genuinely proud of what we've built. We're even more proud that we have people using our product and loving our product. They say that having a few true fans is worth far more than thousands of casual users, and we couldn't agree more. 

We're excited to double down on our marketing efforts and our product development to make the web fun. 