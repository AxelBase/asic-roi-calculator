<!-- src/routes/blog/+page.svelte -->
<script lang="ts">
  import { base } from '$app/paths';

  const posts = [
    {
      href: '/alternatives',
      title: 'Compare Top ASIC Profitability & ROI Calculators (2026 Update)',
      description: 'Neutral comparison of leading tools like ASIC Miner Value, WhatToMine ASIC, NiceHash, CoinWarz, Minerstat, Bitmain Calculator, Hashrate Index, and offline/static options for quick, private break-even and ROI checks. Updated February 2026.'
    },
    {
      href: '/blog/posts/post1',
      title: 'Introduction to the ASIC ROI Calculator',
      description: 'A complete overview of this static web utility designed to help miners quickly evaluate ASIC hardware profitability.'
    },
    {
      href: '/blog/posts/post2',
      title: 'How the Profitability Calculation Works',
      description: 'Deep dive into the client-side formulas: daily revenue from network share, power costs, and net profit computation.'
    },
    {
      href: '/blog/posts/post3',
      title: 'Understanding Break-Even Time',
      description: 'Explains how break-even days and months are derived from initial cost and daily profit, including "Never" scenarios.'
    },
    {
      href: '/blog/posts/post4',
      title: 'Key Inputs and Real-World Defaults',
      description: 'Guide to the seven essential parameters — from hash rate and power to coin price and network difficulty — with realistic Bitcoin examples.'
    },
    {
      href: '/blog/posts/post5',
      title: 'Interpreting Daily, Monthly, and Yearly Projections',
      description: 'How to read and use the daily profit/loss, revenue, power cost, and annual profit figures for investment decisions.'
    },
    {
      href: '/blog/posts/post6',
      title: 'Stress Testing and Edge Cases',
      description: 'What happens under extreme conditions: high electricity rates, low coin prices, massive farms, or unprofitable setups.'
    },
    {
      href: '/blog/posts/post7',
      title: 'Using the Calculator for Different Coins',
      description: 'Tips for adapting inputs (block reward, network hash rate, block time approximation) to evaluate ASICs on altcoins.'
    }
  ];
</script>

<svelte:head>
  <title>Blog | ASIC ROI Calculator Insights</title>
  <meta name="description" content="Articles, guides, and technical explanations for the ASIC ROI Calculator – a client-side tool for mining profitability analysis. Includes tool comparisons and 2026 updates." />
</svelte:head>

<div class="container fade-in blog-index">
  <header class="blog-header">
    <h1><i class="bi bi-journal-richtext"></i> Blog: ASIC ROI Insights</h1>
    <p class="subtitle">
      In-depth articles and technical guides about ASIC mining profitability, calculation methods, input parameters, and practical usage of the ROI calculator. Explore comparisons of leading tools in 2026.
    </p>
  </header>

  <div class="posts-grid">
    {#each posts as post}
      <a href="{base}{post.href}" class="card post-card">
        <div class="card-body">
          <h2 class="post-title">{post.title}</h2>
          <p class="post-description">{post.description}</p>
          <span class="read-more">Read Article &rarr;</span>
        </div>
      </a>
    {/each}
  </div>
</div>

<style>
  .blog-index {
    padding-top: 2rem;
    padding-bottom: 4rem;
  }

  .blog-header {
    text-align: center;
    margin-bottom: 3rem;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 2rem;
  }

  .blog-header h1 {
    font-size: 2.8rem;
    margin-bottom: 1rem;
  }

  .subtitle {
    font-size: 1.1rem;
    color: var(--text-secondary);
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.7;
  }

  .posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
  }

  .post-card {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .post-card .card-body {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .post-title {
    font-size: 1.25rem;
    color: var(--accent-secondary);
    margin-bottom: 0.75rem;
  }

  .post-description {
    color: var(--text-secondary);
    flex-grow: 1;
    margin-bottom: 1rem;
  }

  .read-more {
    color: var(--accent-primary);
    font-weight: 600;
    align-self: flex-start;
    transition: var(--transition-fast);
  }

  .post-card:hover .read-more {
    transform: translateX(5px);
  }
</style>