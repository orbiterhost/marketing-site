---
title: "How To Build and Host a Hugo Site"
description: "Hugo, built on top of Go, is one of the most popular static site generators on the market. Let's build a site and host it on Orbiter."
pubDate: "Jan 22 2025"
heroImage: "https://cdn.orbiter.host/ipfs/bafybeiehuetnicapfy2q2xt3mej2ysos2bfg5pmn3hnaw7a2iahncsjhzy"
---
Hugo is a static site generator that first launched in 2013. While many static site generators are built in Node.js, Hugo is built using Go. The open source project has gained a ton of traction over the years and currently has over 77,000 stars on Github.

Today, we’re going to build and host a Hugo site using Orbiter. Orbiter is the fastest and easiest way to get static websites online.

## Getting Started

Since we’re going to build a site using Hugo and we’re going to host it using Orbiter, you’ll need a few things:

1.  A free account on Orbiter. [You can sign up here](https://orbiter.host).
    
2.  [Install Hugo](https://gohugo.io/installation/macos/) (you may also need to install [Homebrew](https://brew.sh/) depending on your operating system and how you choose to install Hugo)
    
3.  A code editor like VSCode or Zed or really anything
    
4.  Git needs to be installed (this comes on most computers, but [here’s a guide if you need it](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git))
    

That’s it! Now, we can get into creating our Hugo site. Assuming you have already installed Hugo, let’s make open the terminal application on our computer and navigate to the folder where we keep our projects.

Run the following command to initialize a new Hugo project:

```json
hugo new site hugo-orbiter
```

You can call your site whatever you’d like. I called mine `hugo-orbiter`.

Now, we need to change into the new project directory. Run this command:

```json
cd hugo-orbiter
```

Now, we need to install a Hugo theme. We’re going to use Git submodules to do that as it’s recommended in the Hugo quickstart guide. So, run the following command:

```json
git init
```

Then run:

```json
git submodule add <https://github.com/theNewDynamic/gohugo-theme-ananke.git> themes/ananke
```

Now, we need to tell Hugo to use that theme. We can do that with this command:

```json
echo "theme = 'ananke'" >> hugo.toml
```

To see our site, we need to run a local Hugo server. You can do that with this command:

```json
hugo server
```

The site will be available in the browser at `http://localhost:1313`. This is a start, but we want to add some content before we host our site. To do so, you can use Hugo to create the markdown scaffolding of a blog post like this:

```json
hugo new content content/posts/my-first-post.md
```

This will create a markdown post in the `content` folder of your project. To see this, open the project in your code editor of choice. Open the `content` folder, and you’ll see a `posts` folder inside. Inside that, you’ll see the markdown file. Right now, there’s not much in the file, but we can change that.

Update your markdown file to look like this:

```json
+++
date = '2025-01-20T15:32:29-06:00'
draft = false
title = 'My First Post'
+++

## Hello, Orbiter!

This is a simple example post that will be part of my Hugo site. It will be hosted on [Orbiter](<https://orbiter.host>). 
```

Now, we need to tell Hugo to build the site with new files. If your Hugo server is still running, you can stop it with `crtl + c`. Then, run this command:

```json
hugo server -D
```

Now, when you visit the site in the browser, you should see your post and can click the read more button. It should look something like this:

![Hugo example](https://cdn.orbiter.host/ipfs/bafkreieicqqvwh3ar26xdechzigxfbybrmpjnd7wtr5i2wwxshtjerq5pq)

We have the basics of a site. Let’s see about hosting it on Orbiter now.

## Hosting the site

Hosting a Hugo site on Orbiter is as simple as uploading files. Let’s make sure we have the right files to upload though first. Shut down the local Hugo server and run this command:

```json
hugo
```

This will build your site and output the static pages in a folder called `public`. That’s the folder we will use to upload to Orbiter.

Log into your Orbiter account and click the Upload Site button. Drag your public folder into the modal or click the Select Folder button then choose your public folder. Give your site a subdomain, and click Create.

![upload screen](https://cdn.orbiter.host/ipfs/bafkreiaybqrmp7qs3dbclbrhepxdritwt7poprgpinokoxhhzaindazpxy)

In a few seconds, your site will be online and ready for you to share with the world! If you’d prefer to work at the command line level, you can also use the Orbiter CLI. [The docs can be found here.](https://docs.orbiter.host/cli)

And that’s it. You’ve hosted your Hugo site on Orbiter in just a few clicks and spent just a few seconds doing it. Updating your site is just as simple. Click the gear icon next to your site, choose Update Site, and then upload a new version of the `public` folder.

## Conclusion

Hugo is one of the most popular static site generators on the market. Hosting your Hugo sites can be as simple as an upload. Go from generated site to hosted site in seconds. [Get started today!](https://orbiter.host)