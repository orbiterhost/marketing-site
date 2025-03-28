---
title: How to Build and Deploy Vue.js Sites with Vite and Orbiter in Under 5 Minutes
pubDate: Mar 28 2025
description: Vue.js is one of the more popular single page app frameworks on the market. Let's build and deploy a site with it.
heroImage: https://cdn.orbiter.host/ipfs/bafybeidl7qy6kiqkbjzgfpngy7axctmr2n7m7uolxb6hksvwbe6du5cfcq
author: Justin Hunter
authorPfp: https://cdn.orbiter.host/ipfs/bafkreidafe5bjh7btrw42mjsd44mfkq5zamonfgxr2p5dlatwod66ltjxq
---
*Learn how to create blazing-fast Vue.js applications with Vite and deploy them instantly using Orbiter's simple hosting platform.*
## Introduction

Modern web development demands both speed and simplicity—both in performance and workflow. Combining Vue.js, Vite, and Orbiter gives you exactly that: a lightning-fast development experience, optimized production builds, and deployment that takes seconds, not minutes.

In this tutorial, you'll learn how to:
- Set up a new Vue.js project with Vite
- Create a simple but visually appealing application
- Optimize it for production
- Deploy it to Orbiter in under 30 seconds

Let's dive in!

## Prerequisites

Before we begin, make sure you have:
- [Node.js](https://nodejs.org/) (version 18.0 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- An [Orbiter account](https://app.orbiter.host/login) (free to sign up)
- Basic familiarity with Vue.js

## Step 1: Creating a New Vue.js Project with Vite

Vite (French for "quick") is a build tool that significantly improves the frontend development experience. It provides an extremely fast dev server and optimized production builds.

Let's start by creating a new Vue.js project with Vite:

```bash
# Using npm
npm create vite@latest my-vue-site -- --template vue

# Using yarn
yarn create vite my-vue-site --template vue
```

Navigate to your project folder and install dependencies:

```bash
cd my-vue-site
npm install # or yarn
```

You now have a basic Vue 3 project set up with Vite. Let's start the development server to see it in action:

```bash
npm run dev # or yarn dev
```

You should see a message that your development server is running, typically at `http://localhost:5173/`. Open this URL in your browser to see your Vue application.

## Step 2: Customizing Your Vue.js Application

The default template is a good starting point, but let's make it more interesting. Let's create a simple product showcase application that demonstrates some of Vue's features.

First, let's modify the `src/App.vue` file:

```vue
<script setup>
import { ref } from 'vue'
import ProductCard from './components/ProductCard.vue'

const products = ref([
  {
    id: 1,
    name: 'High Performance Hosting',
    description: 'Lightning-fast static site hosting with global CDN',
    price: 9.99,
    image: 'https://api.placeholder.com/300/200?text=Hosting'
  },
  {
    id: 2,
    name: 'Domain Name',
    description: 'Custom domain with free SSL certificate',
    price: 14.99,
    image: 'https://api.placeholder.com/300/200?text=Domain'
  },
  {
    id: 3,
    name: 'Developer Bundle',
    description: 'Complete package with hosting, domain, and support',
    price: 24.99,
    image: 'https://api.placeholder.com/300/200?text=Bundle'
  }
])
</script>

<template>
  <header>
    <div class="wrapper">
      <h1>VueShop Demo</h1>
      <p class="tagline">Built with Vue, Vite, and deployed on Orbiter</p>
    </div>
  </header>

  <main>
    <div class="products-container">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.wrapper {
  text-align: center;
  margin: 2rem 0;
}

h1 {
  font-size: 2.6rem;
  margin-bottom: 0.5rem;
  color: #41b883;
}

.tagline {
  color: #666;
  font-size: 1.2rem;
}

.products-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}
</style>
```

Now, let's create the `ProductCard.vue` component. Create a new file at `src/components/ProductCard.vue`:

```vue
<script setup>
import { ref } from 'vue'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const isInCart = ref(false)

function toggleCart() {
  isInCart.value = !isInCart.value
}
</script>

<template>
  <div class="product-card">
    <img :src="product.image" :alt="product.name" class="product-image" />
    <div class="product-info">
      <h2>{{ product.name }}</h2>
      <p class="description">{{ product.description }}</p>
      <div class="price-action">
        <span class="price">${{ product.price.toFixed(2) }}</span>
        <button 
          @click="toggleCart" 
          :class="{ 'in-cart': isInCart }"
        >
          {{ isInCart ? 'Remove from Cart' : 'Add to Cart' }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-card {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  background: white;
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.product-info {
  padding: 1.5rem;
}

h2 {
  margin-top: 0;
  color: #2c3e50;
  font-size: 1.5rem;
}

.description {
  color: #666;
  margin-bottom: 1.5rem;
}

.price-action {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.price {
  font-size: 1.4rem;
  font-weight: bold;
  color: #41b883;
}

button {
  background-color: #41b883;
  color: white;
  border: none;
  padding: 0.7rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #369e6a;
}

button.in-cart {
  background-color: #e74c3c;
}

button.in-cart:hover {
  background-color: #c0392b;
}
</style>
```

Finally, let's update the global styles in `src/index.css`:

```css
:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: #213547;
  background-color: #f5f5f5;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  padding: 2rem 0;
}
```

## Step 3: Building for Production

Now that we have our application ready, let's build it for production. Vite will optimize our code, minify it, and prepare it for deployment:

```bash
npm run build # or yarn build
```

This will create a `dist` folder with the production-ready version of your application. Vite automatically applies various optimizations like:

- Code splitting
- Asset optimization
- CSS minification
- Efficient chunking

## Step 4: Deploying to Orbiter

Now for the easiest part! Deploying to Orbiter is incredibly simple and can be done in multiple ways:

### Option 1: Using the Orbiter Web Interface

1. Go to [app.orbiter.host](https://app.orbiter.host) and login
2. Click "Create Site" in the top right corner
3. Drag and drop your `dist` folder onto the upload area
4. Give your site a name (e.g., "vue-vite-demo")
5. Click "Create"

That's it! Your site will be live in seconds, and you'll be provided with a URL to access it.

### Option 2: Using the Orbiter CLI

For a more developer-friendly approach, you can use the Orbiter CLI:

1. Install the Orbiter CLI:
   ```bash
   npm install -g @orbiter/cli
   ```

2. Login to Orbiter:
   ```bash
   orbiter login --provider google
   # or
   orbiter login --provider github
   ```

3. Deploy your site:
   ```bash
   orbiter deploy dist --name vue-vite-demo
   ```

The CLI will upload your site and provide you with the deployment URL.

### Option 3: Using GitHub Actions

For continuous deployment, you can set up a GitHub Actions workflow. Create a file at `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Orbiter

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy to Orbiter
        uses: orbiter-host/deploy-action@v1
        with:
          folder: dist
          site-name: vue-vite-demo
          token: ${{ secrets.ORBITER_TOKEN }}
```

(Note: You'll need to add your Orbiter token as a secret in your GitHub repository)

## Performance Optimizations

To make your Vue.js application even faster:

1. **Enable Vue's production mode**: Vite does this automatically in production builds.

2. **Lazy load components**: For larger applications, use dynamic imports:
   ```js
   const ProductDetails = () => import('./components/ProductDetails.vue')
   ```

3. **Use image optimization**: Consider using tools like `vite-plugin-imagemin` to optimize images during the build process.

4. **Implement code splitting**: Vite handles this automatically for dynamic imports.

5. **Use Vite's built-in caching**: Vite applies long-term caching for assets with content hashes.

## Why This Combination Works So Well

- **Vue.js**: Provides a reactive, component-based architecture that's easy to learn and powerful to use.
- **Vite**: Delivers an incredibly fast development experience and optimized production builds.
- **Orbiter**: Simplifies deployment down to seconds with permanent content addressing via IPFS.

This stack gives you the best of all worlds: developer experience, performance, and simplicity.

## Conclusion

You've just created and deployed a Vue.js application using Vite and Orbiter! This powerful combination allows you to focus on building great user experiences without getting bogged down by complex deployment processes.

Remember that Orbiter uses IPFS and blockchain technology behind the scenes, which means your content is not only fast to deploy but also permanently accessible through its content identifier.

## Next Steps

- Add a custom domain to your Orbiter site
- Implement a headless CMS for content management
- Explore Orbiter's CLI for more advanced deployment options
- Try integrating other Vue.js libraries like Pinia or Vue Router

Happy coding!

---

Orbiter is the simplest way to upload and host static sites and apps. Deploy your static sites in seconds at [orbiter.host](https://orbiter.host).*
