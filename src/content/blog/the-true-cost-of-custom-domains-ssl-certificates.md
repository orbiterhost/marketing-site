---
title: The True Cost of Custom Domains
pubDate: May 03 2025
description: Custom domains and SSL certificates aren't free, and here's why.
heroImage: https://cdn.orbiter.host/ipfs/bafkreig5frmcofvaav5o5uzdt6qchbpa2zzfmu42kf3rbmr3d6hsorgmx4
author: Justin Hunter
authorPfp: https://cdn.orbiter.host/ipfs/bafkreidafe5bjh7btrw42mjsd44mfkq5zamonfgxr2p5dlatwod66ltjxq
---
Like many things on the modern web, many people expect custom domains and SSL certificates* to be free. SSL certificates are digital certificates that web servers present to browsers. These certificates contain a public key which can be used to encrypt traffic to and from the site. It's an important part of the modern web, no doubt. 

_*(TLS is the correct actual term as SSL is deprecated but most of the web still calls them SSL certs) _

But it's not free. 

This is not to say that there aren't free and open source solutions for generating SSL certificates. There absolutely are, and Orbiter uses one of those solutions (Let's Encrypt). What I mean by SSL certificates not being free is that there is an overhead cost to issuing and supporting these certificates. Before diving further into this, perhaps it's important to explain how SSL certificates are generated and managed as well as how they interact with DNS resolvers. 

## Issuing and Managing TLS Certificates

TLS certificates (which as mentioned are often called SSL certificates) follow a trust-based system anchored in Public Key Infrastructure (PKI). Here's how they work at a high level:

### Certificate Generation and Trust

When a certificate is generated, two cryptographic keys are created: a private key (kept secure on the server) and a public key (embedded in the certificate). To make browsers trust your certificate, it must be signed by a Certificate Authority (CA) that browsers already trust. This process typically involves:

1. Creating a Certificate Signing Request (CSR) containing your server information and public key
2. Sending this CSR to a CA like Let's Encrypt, DigiCert, or Sectigo
3. The CA verifying you actually control the domain (through DNS challenges or HTTP validation)
4. The CA signing your certificate with their private key, creating a chain of trust

### Certificate Management

Certificates require ongoing management because they expire—typically after 90 days (Let's Encrypt) to 1-2 years (commercial CAs). This management involves:

- Monitoring expiration dates
- Automating renewal processes (critical for Let's Encrypt's short-lived certificates)
- Deploying renewed certificates to your servers without service disruption
- Maintaining proper configurations like cipher suites and protocol versions

### Proxy Servers and TLS Termination

Many modern web architectures use proxy servers like NGINX, which play a crucial role in TLS implementation:

NGINX can handle what's called "TLS termination"—it accepts encrypted connections from clients, decrypts them, and then forwards the now-unencrypted requests to your application servers. This architecture provides several benefits:

- Your application servers don't need to handle encryption/decryption overhead
- TLS configurations can be centrally managed at the proxy level
- NGINX can distribute traffic across multiple backend servers while maintaining TLS security
- Certificate updates can happen at the proxy without requiring changes to application code

For example, when a user connects to your website, their browser might establish a TLS connection with your NGINX proxy server. NGINX presents the certificate, performs the TLS handshake, and then forwards the decrypted request to your application. The response travels back through NGINX, gets encrypted, and is sent to the user's browser.

This proxy approach creates a secure perimeter while keeping your internal architecture flexible—but it also means your TLS certificate management becomes a critical part of your infrastructure operations.

### TTL and DNS Resolution

When associating custom domains with TLS certificates, DNS (Domain Name System) plays a crucial role in both certificate validation and service availability. Every DNS record has a TTL (Time To Live) value that determines how long resolvers should cache that information before checking for updates. This becomes particularly important in the certificate lifecycle for several reasons.

When you change DNS records to validate domain ownership during certificate issuance (using DNS-01 challenges for Let's Encrypt, for example), low TTL values ensure these validation records propagate quickly across the internet. However, once your certificates are issued and your service is stable, longer TTL values (4-24 hours) can improve performance by reducing DNS lookup times. During certificate renewals or when migrating between hosting providers, you'll need to carefully manage these TTL values—reducing them temporarily before making changes ensures faster propagation, while increasing them afterward improves performance and reduces DNS provider load. Certificate validation often involves adding specific TXT records to your DNS configuration, and incorrect TTL settings can delay this process if DNS propagation takes longer than the validation window. Furthermore, many Content Delivery Networks (CDNs) that offer TLS certificate management require specific DNS configurations like CNAME records pointing to their edge servers, making proper DNS management essential for certificate functionality. Remember that DNS caching occurs at multiple levels—from local resolvers to ISPs—so even if you update records at your DNS provider, clients may still see outdated information until their cached TTL expires.

## The True Cost of SSL and Custom Domains

At Orbiter, unlike larger, venture-backed competitors, we do not offer custom domains on free plans. This is not likely to change anytime soon for one simple reason: the cost.

We run a proxy server to help ensure custom domain traffic resolves to the correct Orbiter website, but we also run a server to issue and maintain SSL/TLS certificates. The cost of these servers is not a problem (at least not at the moment), so when I talk about cost, I'm not talking about it in terms of dollars and cents. 

Instead, the cost comes in supporting custom domains. Re-read the last paragraph in the Issuing and Managing TLS Certificates section. TTL and DNS resolution is a real headache. Combine that with the potential for errors in SSL certificate issuance, and you end up with a situation where custom domains actually require quite a bit of customer support. 

We provide this customer support promptly and explain things in great detail for our paying customers. If there is an issue with SSL issuance, we fix it immediately. If the issue is tied to ISP (internet service providers) resolving DNS entries and TTL problems, we explain and troubleshoot as best we can until the site resolves. 

Custom domains are one of the last complicated parts left to getting sites online for the average user. Even with the best interfaces and tutorials or managed solutions, DNS propagation can be a massive headache. And that's why it generates support. 

We absolutely love supporting our customers, and we also understand SSL and DNS is confusing and complicated. However, were we to expand this to free customers, we would suddenly be overwhelmed with support from customers that are not paying for the time it takes to support these issues. 

This is generally not a problem for our large competitors because they are perfectly happy operating at a loss in hopes of profiting from upmarket (enterprise) sales in the future. This is usually the venture capital model. 

So just as [I've previously written about business sustainability](https://orbiter.host/blog/expect-businesses-to-be-sustainable), Orbiter operates with the intention of being around for a VERY long time and being profitable to ensure we can keep running the service. 

And that's why custom domains are only available on paid plans. 