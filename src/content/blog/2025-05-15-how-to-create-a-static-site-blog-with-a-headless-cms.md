---
title: How To Create a Static Site Blog With a Headless CMS
description: Static sites are great, but adding a blog often means writing in
  markdown. What if it didn't?
author: Justin Hunter
---
I'm currently writing this blog post in a headless CMS. This is the first post on our site written that way. Up until now, Steve and I have written posts in our code editor, or in my case, I've written in Obsidian. Obsidian is great, but it's single player and less accessible than web apps. That's where a headless CMS shines.

But what is a headless CMS?

## Headless CMS

A CMS is a content management system. It does what it says on the tin. It manages content. WordPress, for example, is a CMS. WordPress is designed to be a CMS for your entire site where you never need to touch the code (unless you want to). It's also a server-side platform. A headless CMS on the other hand does not necessarily mean your entire site is run server-side. This is where the "headless" part of the name comes into play.

A headless CMS does not care what your site looks like or where it is hosted. Instead, it creates an application programming interface (API) that allows your site to communicate with the content the headless CMS manages. There are many flavors of this, but these types of CMS tools fall into two broad categories:

1.  Your site fetches content (either at build time or live) from the headless CMS and converts that content into pages on your site
    
2.  The CMS creates new files for your site to use but your site never needs to make a remote API request
    

The headless CMS we'll be using falls into the second category. We'll be using [Pages CMS](https://pagescms.org), an open source headless CMS that connects directly to your Github repo.