<!-- src/routes/blog/posts/post6/+page.svelte -->
<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Stress Testing and Edge Cases | ASIC ROI Blog</title>
  <meta name="description" content="Discover how the ASIC ROI Calculator handles extreme inputs: high costs, low prices, large farms, and unprofitable conditions." />
  <meta property="og:title" content="Stress Testing and Edge Cases | ASIC ROI Blog" />
  <meta property="og:description" content="Discover how the ASIC ROI Calculator handles extreme inputs: high costs, low prices, large farms, and unprofitable conditions." />
  <meta property="og:url" content="{base}/blog/posts/post6" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Stress Testing and Edge Cases</p>
  </div>

  <article class="prose">
    <h1>Stress Testing and Edge Cases</h1>
   
    <p class="post-meta">Published: December 31, 2025</p>
   
    <p>The ASIC ROI Calculator is built to handle a wide range of inputs, from realistic setups to extreme scenarios. Stress testing reveals how profitability changes under adverse conditions or massive scale.</p>
   
    <p>Invalid entries trigger clear warnings, while extreme values compute correctly without errors.</p>
   
    <h2>High Electricity Costs</h2>
    <p>Raising rates to $0.30–$0.50/kWh often flips profitable setups negative. This simulates regions with expensive power or penalties.</p>
   
    <p>Results show red daily profit cards and "Never" break-even, highlighting the importance of cheap energy.</p>
   
    <h3>Low Coin Prices</h3>
    <ul>
      <li>Dropping price to $10,000–$50,000 mimics bear markets</li>
      <li>Revenue falls sharply while power costs remain fixed</li>
      <li>Most setups become unprofitable</li>
    </ul>
   
    <h3>Massive Network Growth</h3>
    <p>Increasing network hashrate to 2,000 EH/s reduces individual shares dramatically. Even efficient hardware struggles.</p>
   
    <h2>Large-Scale Operations</h2>
    <p>Scaling to farm levels (e.g., 140,000 TH/s, $2.5M cost, 3.1 MW power) multiplies figures accurately. Daily profits reach thousands, with break-even scaling proportionally.</p>
   
    <p>The tool handles large numbers without overflow, showing realistic projections.</p>
   
    <h3>Invalid Inputs</h3>
    <ul>
      <li>Zero or negative critical values (hash rate, network rate) prevent calculations</li>
      <li>Warning message appears instead of misleading results</li>
    </ul>
   
    <h2>Future-Proof Scenarios</h2>
    <p>Lowering block reward to 1.5625 simulates post-2028 halving. Many current setups turn unprofitable absent price growth.</p>
   
    <p>These tests help miners prepare for volatility.</p>
   
    <h2>FAQ</h2>
    <details>
      <summary>Does the calculator crash on extremes?</summary>
      <p>No—all computations stay client-side and responsive.</p>
    </details>
    <details>
      <summary>Why test unprofitable cases?</summary>
      <p>To identify risk thresholds before investing.</p>
    </details>
    <details>
      <summary>Can it model future hashrate growth?</summary>
      <p>Yes—manually increase network hashrate for conservative estimates.</p>
    </details>
   
    <p class="italic-note">Stress testing builds resilience in mining planning.</p>
  </article>
</div>

<style>
  /* Identical styling */
  .post-layout {
    max-width: 800px;
    padding-top: 2rem;
    padding-bottom: 4rem;
  }

  .breadcrumbs {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
    color: var(--text-secondary);
  }
  .breadcrumbs a {
    color: var(--accent-secondary);
  }
  .breadcrumbs a:hover {
    text-decoration: underline;
  }
  .breadcrumbs p {
    margin: 0;
  }

  .prose {
    line-height: 1.8;
  }

  .prose .post-meta {
    color: var(--text-secondary);
    font-size: 0.9rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 1rem;
  }

  .prose h1, .prose h2, .prose h3 {
    color: var(--accent-secondary);
  }

  .prose h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }

  .prose h2 {
    margin-top: 2.5rem;
    border-bottom: 1px solid var(--secondary-bg);
    padding-bottom: 0.5rem;
  }

  .prose p {
    color: var(--text-primary);
  }

  .prose ul {
    list-style-type: '→ ';
    padding-left: 1.5rem;
    color: var(--text-primary);
  }
  .prose ul li::marker {
    color: var(--accent-primary);
  }
  .prose ul li {
    padding-left: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .prose details {
    background: var(--secondary-bg);
    border: 1px solid var(--border-color);
    border-radius: 6px;
    padding: 1rem;
    margin-bottom: 1rem;
    transition: background-color 0.2s ease;
  }

  .prose details[open] {
    background-color: var(--card-bg);
  }

  .prose summary {
    cursor: pointer;
    font-weight: 600;
    color: var(--accent-secondary);
    list-style: none;
  }

  .prose summary::-webkit-details-marker {
    display: none;
  }

  .prose summary::before {
    content: '+';
    margin-right: 0.75rem;
    color: var(--accent-primary);
    font-weight: bold;
    display: inline-block;
    transition: transform 0.2s ease;
  }

  .prose details[open] summary::before {
    transform: rotate(45deg);
  }

  .prose details p {
    margin-top: 1rem;
    padding-left: 1.5rem;
    border-left: 2px solid var(--accent-primary);
    color: var(--text-secondary);
  }

  .prose .italic-note {
    font-style: italic;
    color: var(--text-secondary);
    text-align: center;
    margin-top: 3rem;
  }
</style>