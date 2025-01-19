---
title: "How To Host a Gatsby Blog on Orbiter"
pubDate: "Jan 19 2025"
description: "Gatsby is one of the most popular static site frameworks on the market. Let's explore how to host a Gatsby blog on Orbiter."
heroImage: "https://cdn.orbiter.host/ipfs/bafybeiff42un3t63hyq6fkod7ceaivetubq5glu2ulgn2otdiid2l2hvbq"
---
[Gatsby](https://www.gatsbyjs.com/docs) is one of the most popular static site generators available. Started in 2015 as an open source project, with a company being formed a few years later around hosting services, Gatsby has seen thousands of developers build sites on the React-based site generator. In 2023, Netlify acquired Gatsby and has been integrating the hosting services into their platform since.

While Netlify is a great solution for web application and static site hosting, if you want something simpler and something specifically built to bring back control and fun on the web, Orbiter is a great solution for hosting Gatsby sites. In this guide, we’ll walk through hosting a simple Gatsby blog on Orbiter.

## Getting Started

As mentioned, Gatsby is a static site generator built on top of React. We won’t need much, but you will want to make sure you have the following:

1.  A free Orbiter account. [Sign up here](https://orbiter.host).
    
2.  Node.js v18 or later. This comes installed on most computers, but you can [download it if necessary here](https://nodejs.org/en).
    
3.  A code/text editor - I use VSCode and Steve uses Zed, but anything will do.
    

Now, we need to fire up the terminal application on our computer. For Mac that’s Terminal, and for Windows and Linux, it could be a few different things. Here’s a quick guide on finding and using yours. With ther terminal application open, change into whatever directory you want to keep your project:

```jsx
cd my-projects-folder
```

Then, we need to initialize our Gatsby project. To make things as simple as possible, we’re going to be using a [pre-made blog template for Gatsby](https://www.gatsbyjs.com/starters/gatsbyjs/gatsby-starter-blog). In your terminal, run the following command:

```jsx
npx gatsby new gatsby-starter-blog <https://github.com/gatsbyjs/gatsby-starter-blog>
```

This will set up the project and install dependencies. You’ll see a message printed with the next instructions. It should look like this:

```jsx
  cd gatsby-starter-blog
  gatsby develop
```

Follow those instructions. Run this command in your terminal:

```jsx
cd gatsby-starter-blog
```

Then, run this command to start the local version of your blog:

```jsx
gatsby develop
```

If you open `http://localhost:8000` in your browser, you should see something like this:

![Gatsby blog starter demo](https://cdn.orbiter.host/ipfs/bafybeiff42un3t63hyq6fkod7ceaivetubq5glu2ulgn2otdiid2l2hvbq)

This is the default blog template with some temporary post placeholders. Let’s edit our site to make it more personal, though.

## Editing the site

Open the project in your code editor and find the `gatsby-config.js` file. It should look like this:

```json
module.exports = {
  siteMetadata: {
    title: `Gatsby Starter Blog`,
    author: {
      name: `Kyle Mathews`,
      summary: `who lives and works in San Francisco building useful things.`,
    },
    description: `A starter blog demonstrating what Gatsby can do.`,
    siteUrl: `https://gatsbystarterblogsource.gatsbyjs.io/`,
    social: {
      twitter: `kylemathews`,
    },
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ "content:encoded": node.html }],
                })
              })
            },
            query: `{
              allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
                nodes {
                  excerpt
                  html
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    date
                  }
                }
              }
            }`,
            output: "/rss.xml",
            title: "Gatsby Starter Blog RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `Gatsby`,
        start_url: `/`,
        background_color: `#ffffff`,
        // This will impact how browsers show your PWA/website
        // <https://css-tricks.com/meta-theme-color-and-trickery/>
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}

```

This has a lot of things you can edit about your site. Let’s start with the top section called `siteMetadata`. Go ahead and change the title of the site to whatever you want your blog site to be called. Then, change the author information. I changed mine to look like this:

```json
siteMetadata: {
  title: `Justin's Gatsby Tutorials`,
  author: {
    name: `Justin Hunter`,
    summary: `Co-founder of Orbiter, writing (hopefully) interesting things on the internet`,
  },
  description: `A blog site full of Gatsby tutorials.`,
  siteUrl: ``,
  social: {
    twitter: `polluterofminds`,
  },
},
```

Note: I removed the siteUrl, but you could replace that with your expected Orbiter site URL which would be: `YOUR_CHOSEN_SUBDOMAIN.orbiter.website`

If you check out your browser window after saving your changes, you’ll see the updates reflected immediately. However, the author image is still wrong. Let’s fix that. In the `src` folder, find the `images` folder. Inside that, you’ll see the `profile-pic.png` file. We need to replace this with our own image. Delete that file. Grab your own author image and rename it to `profile-pic.png` then place it in the `images` folder.

Now, it’s starting to look like your own site! Let’s work on the blog posts, though. In your code editor, find the `content` folder. Inside that folder is another folder called `blog`. This is where the markdown files are that represent your blog.

Markdown is a common syntax for writing that is easily converted into HTML. [You can read more about markdown from its creator here](https://daringfireball.net/projects/markdown/). Each blog post file you put in this `blog` folder will be converted to HTML and rendered on your site. Right now, there are three posts in the folder. Delete two of them and keep one (doesn’t matter which you pick). It should be noted that Gatsby expects each blog post to be represented by a folder that matches the post name, i.e. `hello-world` and then inside that folder is the markdown file (`index.md`) and any assets associated with the blog.

We’re going to edit the remaining post we left. Open the `index.md` file for the post. If you’re not yet comfortable with Markdown, you can use a tool like [Static](https://writestatic.com) to get a WYSIWYG (what you see is what you get) interface that will save the file back to the correct location. Either way, we want to edit this file to put our own content in. I’m going to edit it to include the contents of this tutorial so far.

When you’ve done this and saved the file, you can see the changes on your local blog site at `http://localhost:8000`. Here’s mine:

![Personalized version of gatsby site](https://cdn.orbiter.host/ipfs/bafkreifrmt4ddz4uwip24tstkhr4znlh7exylwslmkoc7funp5ik63aa3y)

And if you click the link to the blog post, you’ll see the content:

![Blog post](https://cdn.orbiter.host/ipfs/bafybeigheqf4grk4rzafq6pkz5ajy347s4dyr4vw3uoupcttcoo5kj44zu)

This is great, but there’s one thing we should change. If you look at the main page, the preview text for the blog post hasn’t been updated. This is powered by what’s called frontmatter. The frontmatter is also where you would change your blog post’s title and other information.

In your `index.md` file, you should see the frontmatter at the top. You’ll see a `description` property. Edit that to say whatever you want the preview text on the main page to say. Here’s mine after the change:

![Gatsby edited frontmatter](https://cdn.orbiter.host/ipfs/bafkreid3hq46tklnroprcwcj5mtkkfb6ss3q6vuchd6lfvevr5pa6x3pay)

You can create new posts and follow the same format. With that, you have the basics down and you have your own personal Gatsby blog. Now, we need to host it.

## Hosting your blog

Fortunately, Orbiter makes hosting your blog simple. First, from your terminal, run the following command:

```json
npm run build
```

This will ensure your blog site is output into a format with the correct HTML and other assets. Now, we’re ready to host.

Log into your Orbiter account and click the Upload Site button. You can drag and drop the correct folder here or you can click the Select Folder option.

![Orbiter upload screen](https://cdn.orbiter.host/ipfs/bafkreiaybqrmp7qs3dbclbrhepxdritwt7poprgpinokoxhhzaindazpxy)

But what is the correct folder? With Gatsby, you’re looking for the `public` folder. Go ahead and upload that, then give your site a subdomain. Click create, and within a few seconds, your blog site will be online! It’s that simple. Any time you update your site (make changes, add blog posts, etc), just run the build command again, then in Orbiter, click the gear icon and choose Update Site. You’ll be able to upload the new version of the `public` folder and see those changes online in seconds.

Here’s my site: [https://gatsby-blog-tutorial.orbiter.website/](https://gatsby-blog-tutorial.orbiter.website/)

## Conclusion

Gatsby is a popular framework for generating static sites, especially static sites with a blog. It’s built on top of React, so if you already know react, customizing a Gatsby site is going to be smooth for you.

Hosting a Gatsby site couldn’t be simpler with Orbiter. Just drag and drop or select your `public` folder, and you’ve got your site online. [Get started with Orbiter today](https://orbiter.host)!