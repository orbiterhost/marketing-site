---
title: 'How To Convert Your WordPress Site Into a Static Site'
description: 'If you have ever wanted to migrate your WordPress site to static HTML, this is your guide.'
pubDate: 'Dec 31 2024'
heroImage: '/blog/wordpress.jpg'
---
 WordPress has been a dominant player in the world of web hosting. At its peak, X% of all websites were hosted on WordPress. In recent months, WordPress has found itself mixed up in controversies, but even without those controversies, there’s always been an active pipeline of people who want to move their websites from the complexity of WordPress installations to static HTML.

Today, we’re going to walk through how to do exactly that and how to host the new static website on Orbiter. We’ll be using a free service called [Simply Static](https://simplystatic.com/) (fitting, right?) to convert our WordPress site. Let’s dive right in!

## Prerequisites

*   A working WordPress installation
*   Admin access to your WordPress dashboard
*   A free Orbiter account
*   Backup of your WordPress site

## Step 1: Installation and Initial Setup

1.  Install Simply Static:
    *   Log in to your WordPress dashboard
    *   Go to Plugins > Add New
    *   Search for "Simply Static"
    *   Click "Install Now" then "Activate"

2.  Initial Configuration:
    *   Navigate to Simply Static > Settings
    *   Under "General" tab, configure:
        *   Destination URLs (where your static site will be hosted)
        *   Delivery Method (ZIP archive or local directory)
        *   URLs to exclude from static generation


## Step 2: Prepare Your WordPress Site

1.  Check Your Theme:
    *   Ensure your theme doesn't rely heavily on dynamic PHP functionality
    *   Test all important pages work without dynamic features
    *   Remove or replace dynamic widgets if necessary

2.  Review Your Content:
    *   Check all internal links use relative paths
    *   Update any hardcoded URLs to match your new static domain
    *   Remove dynamic elements like live search or real-time features

3.  Handle Forms:
    *   Replace WordPress forms with static alternatives (e.g., Formspree)
    *   Update contact forms to work without PHP
    *   Document any forms that need special handling


## Step 3: Configure Simply Static Settings

1.  Basic Options:

    ```
    Simply Static > Settings > General
    - Set "Origin URL" to your current WordPress URL
    - Set "Destination URL" to your target static site URL

    ```

2.  Advanced Options:

    ```
    Simply Static > Settings > Advanced
    - Configure "Additional URLs" to include
    - Set "Additional Files and Directories"
    - Configure "Exclude URLs" for any pages you don't want to convert

    ```

3.  Configure Additional Settings:
    *   Set up HTTP Basic Authentication (if needed)
    *   Configure rate limiting
    *   Set up custom temporary files directory


## Step 4: Generate Static Files

1.  Initial Generation:
    *   Go to Simply Static > Generate
    *   Click "Generate Static Files"
    *   Monitor the progress in the activity log
    *   Review any errors or warnings

2.  Verify Generated Files:
    *   Check the generated static files in your chosen destination
    *   Verify all pages are generated correctly
        *   You can review the code or you can open the html files in your browser
    *   Test all internal links
    *   Ensure images and assets are properly included


## Step 5: Deploy Your Static Site

1.  If using ZIP archive method:
    *   Download the generated ZIP file
    *   Extract contents to your local machine
    *   Upload files to Orbiter

2.  If using local directory method:
    *   Access the generated files in your specified directory
    *   Upload files to Orbiter

![Orbiter upload](https://justin.mypinata.cloud/ipfs/bafkreiczvzearwwxoqntfgrxhsrf2giz7hxmtomb4pkiygcijre3zmdki4)

## Step 6: Testing and Verification

1.  Test Your Static Site:
    *   Check all pages load correctly
    *   Verify all links work
    *   Test media files and downloads
    *   Check mobile responsiveness
    *   Verify forms are working
    *   Test navigation and menus

2.  Performance Testing:
    *   Run speed tests (Google PageSpeed Insights)
    *   Check browser compatibility
    *   Verify SEO elements are preserved

## Common Issues and Solutions

1.  Missing Pages:
    *   Check Simply Static's activity log
    *   Add missing URLs to "Additional URLs" setting
    *   Verify page isn't in exclusion list
2.  Broken Links:
    *   Update absolute URLs to relative paths
    *   Check for hardcoded URLs in theme files
    *   Verify media files are properly included
3.  Style Issues:
    *   Ensure all CSS files are included
    *   Check for dynamic CSS generation
    *   Verify font files are included
4.  JavaScript Errors:
    *   Check browser console for errors
    *   Verify all JS files are included
    *   Update any WordPress-dependent scripts

## Conclusion

Static sites allow for more flexibility and portability. With WordPress, you are locked into WordPress (even if it is open source software). With a static site, you can host your site almost anywhere. If you want to move off Orbiter, it’s dead simple (though we hope you don’t!).

If you’re ready to move from WordPress to static sites, [give Orbiter a try for free](https://app.orbiter.com?ref=blog).
