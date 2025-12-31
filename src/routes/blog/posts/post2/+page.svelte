<!-- src/routes/blog/posts/post2/+page.svelte -->
<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>How the Profitability Calculation Works | ASIC ROI Blog</title>
  <meta name="description" content="Explore the client-side formulas behind the ASIC ROI Calculator: daily revenue from network share, power costs, net profit, and projections." />
  <meta property="og:title" content="How the Profitability Calculation Works | ASIC ROI Blog" />
  <meta property="og:description" content="Explore the client-side formulas behind the ASIC ROI Calculator: daily revenue from network share, power costs, net profit, and projections." />
  <meta property="og:url" content="{base}/blog/posts/post2" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>How the Profitability Calculation Works</p>
  </div>

  <article class="prose">
    <h1>How the Profitability Calculation Works</h1>
   
    <p class="post-meta">Published: December 31, 2025</p>
   
    <p>The ASIC ROI Calculator performs all computations directly in your browser using straightforward mathematical formulas based on standard mining economics. Understanding these calculations helps you interpret the results and make informed decisions about ASIC investments.</p>
   
    <p>At its core, mining profitability comes down to revenue earned from block rewards minus the cost of electricity to run the hardware.</p>
   
    <h2>Daily Revenue Calculation</h2>
    <p>Your miner contributes a tiny fraction of the total network hashrate. The calculator determines your share by dividing your hash rate (in TH/s) by the network hashrate (converted to TH/s). This share is then multiplied by the total daily block rewards.</p>
   
    <p>For Bitcoin-like networks, approximately 144 blocks are mined per day. Each block pays the current block reward (3.125 BTC in 2025) plus transaction fees (ignored here for simplicity). The revenue is then converted to USD using the coin price you provide.</p>
   
    <h3>Power Cost Calculation</h3>
    <ul>
      <li>Convert power consumption from watts to kilowatts</li>
      <li>Multiply by 24 hours</li>
      <li>Multiply by your electricity rate in dollars per kWh</li>
    </ul>
   
    <h3>Net Daily Profit</h3>
    <p>Daily profit is simply revenue minus power cost. If revenue is lower than power cost, the result is negative, indicating a loss.</p>
   
    <p>The tool displays daily profit prominently, coloring it green for positive and red for negative values to highlight profitability at a glance.</p>
   
    <h2>Projections and Break-Even</h2>
    <p>Yearly profit multiplies daily profit by 365. Break-even time divides the initial ASIC cost by daily profit, giving the number of days needed to recover the investment. This is also shown in approximate months for easier interpretation.</p>
   
    <p>If daily profit is zero or negative, break-even is marked as "Never" to clearly indicate the setup would not pay for itself.</p>
   
    <h2>FAQ</h2>
    <details>
      <summary>Why approximate 144 blocks per day?</summary>
      <p>Bitcoin targets 10-minute blocks, resulting in about 144 per day on average.</p>
    </details>
    <details>
      <summary>Are transaction fees included?</summary>
      <p>No, the calculator focuses on block subsidy for conservative estimates.</p>
    </details>
    <details>
      <summary>How accurate are the results?</summary>
      <p>They reflect the exact inputs provided; update coin price and network hashrate regularly for current conditions.</p>
    </details>
   
    <p class="italic-note">Mastering these formulas gives you confidence in evaluating any ASIC mining opportunity.</p>
  </article>
</div>

<style>
  /* Same styles as post1 */
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