---
title: "Stop Paying For Build Minutes"
description: "If you rely on local builds before deploying your site, you can avoid build minutes on someone else's server."
pubDate: "Feb 02 2025"
heroImage: "https://cdn.orbiter.host/ipfs/bafybeid7yguf6hpu6f7b4nrqrygghsvgaylfra23u2ae5lnjoxrecfrayi?img-width=750"
author: "Justin Hunter"
authorPfp: "https://cdn.orbiter.host/ipfs/bafkreidafe5bjh7btrw42mjsd44mfkq5zamonfgxr2p5dlatwod66ltjxq"
---
You might never hit a build limit with your hosting provider. But you could. Build limits are measured in minutes or hours, and as the name suggests, they are the number of minutes or hours that the hosting provider's server will spend building your app or website before they start charging you extra. To understand these limits, we need to look at the lifecycle of a project.

Developers fire up their terminal and initialize a new project—let's assume it's a React project using Vite. They write code, preview changes, and build their app to their heart's content. Then, in many cases, they will commit their code to a remote repository (generally Github or Gitlab). And from there, the developer will connect that remote repository to a CI/CD pipeline associated with a hosting provider. This is where the build happens.

Most hosting providers expect you you to tell them the type of project and the build command. Then, their integration with your remote repository listens for new code updates, pulls the code in, runs the build command to get an output folder that can be used in serving your website or web application.

The server that manages this pipeline costs money, and the time it takes to build your site or app is what the provider is measuring when they apply build limits and charges. The thing is, these builds don't need to happen on their server.

![Build Minute Meme](https://cdn.orbiter.host/ipfs/bafybeid7yguf6hpu6f7b4nrqrygghsvgaylfra23u2ae5lnjoxrecfrayi)

## The benefits of building locally

Developers already run builds locally in many cases. It's the best way to catch bugs that only happen at build time but not when previewing your app. So, if developers are running builds locally, why are they paying for or limited by build minutes with the hosting provider of their choice?

Building locally has two main benefits. First, your not incurring cost on someone else's server just to build your project. Second, you ensure the output is created without any concerns over build environment.

### No more build minutes

If you can simply run the build command on your machine and then upload the build folder, you've cut out the entire remote build process. You've also cut out the cost associated with said process.

Not everyone hits build limits, but if you have a lot of projects, work with a large team, or are just a prolific developer, chances are you'll run into build limits and have to pay more. Run the build on your machine, and avoid those limits.

### No more environment issues

This is literally the "works on my machine" meme in action. But in this case, it actually makes sense and is useful. If you can successfully build your project on your machine, you have everything you need to host your project.

Compare that to using someone else's server to build. Let's say your project uses Node.js 20 and the remote hosting provider's server is stuck on Node.js 18. You might be able to configure the remote service, but that's a pain. And if you can't, you're going to run into build errors. The beauty of building locally is that it works collaboratively as well. Any engineer on the team can do the same.

## Conclusion

Building isn't just easy, it can save you time and money. And what is programming if not a method for saving time and money, right?

If you're building a static website or app, relying on a third party server to manage your builds doesn't make much sense. Build locally, never run into build minute limits, ensure your environment always works, and profit...or at least see your site online much easier.

[Start deploying your local build folders with Orbiter today](https://orbiter.host).
