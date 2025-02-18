---
title: "A Case for Local Builds"
pubDate: "Feb 18 2025"
description: "In a world where most devs sit and stare at a webpage to see if their code runs, we make a case for local builds"
heroImage: "https://cdn.orbiter.host/ipfs/bafkreiaxcnsy2ylefzyib4zwlzfk3lk2fkkjkms4vxxf3ljqbauyezuufm"
author: "Steve Simkins"
authorPfp: "https://cdn.orbiter.host/ipfs/bafkreifusckbeuxuih4o6p5un5j34selfg3uvt6ltqwbv4glsigekdx7lq"
---

When I was in grade school my mom forced me to read a short story called The Lottery. I won’t spoil it in case you haven’t read it (in which case you should), but the point of the story is that traditions shouldn’t go unquestioned. Just because “this is the way it’s always been” doesn’t mean it needs to stay that way, especially if it doesn’t make any sense. In some cases I think developers are stuck in a similar rut with cloud builds. Don’t get me wrong, there are some cases where it’s convenient or even necessary, but more often than not we find ourselves starting at the build screen waiting to see if it passes and if we succeeded.

In the current developer ecosystem cloud or remote builds are the standard. Anyone using platforms like Netlify or Vercel are pretty used to pushing up their code and then waiting several minutes to see if it succeeded or failed. The reason this takes so much time is because that cloud provider is listening for a GitHub event, fetching and cloning the new code, building it, then deploying it to various infrastructure. As said earlier that might be necessary for some server side code, but if your website is static, i.e. a front end, there’s a much better way: local builds.

When working on static sites there is generally going to be a command to create a static build, where your code and assets are compiled into a folder with HMTL CSS and Javascript. That little folder is what runs your site. It’s the same thing that your cloud provider is building, except:

- You already have the code
- Your build takes a matter of seconds

By using a local build you’re cutting out several steps that you would normally have to sit and wait around for. More importantly, a local build helps you determine if you code works! If you’re using a library with Typescript, which most of us are, then you get immediate errors that you can fix without waiting two or three minutes for on another provider’s website. Then if your build succeeds, it just needs to be hosted. That’s where Orbiter comes in with the simplest option: upload it. With either our Web App or with the CLI, you can deploy your site in a matter of seconds because you’re just uploading a folder of files.

This is just one area of web development where we are fanatics of local-first software, and it seems like an obvious one. The next time you’re thinking of waiting at a build screen, consider building it locally first, then uploading it to Orbiter!
