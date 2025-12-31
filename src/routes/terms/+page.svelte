<!-- src/routes/terms/+page.svelte -->
<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Terms and Conditions | ASIC ROI Calculator</title>
  <meta name="description" content="Terms of use for the ASIC ROI Calculator—a free, static tool provided as-is without warranties." />
  <meta property="og:title" content="Terms and Conditions | ASIC ROI Calculator" />
  <meta property="og:description" content="Terms of use for the ASIC ROI Calculator—a free, static tool provided as-is without warranties." />
  <meta property="og:url" content="{base}/terms" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>Terms and Conditions</p>
  </div>

  <article class="prose">
    <h1>Terms and Conditions</h1>

    <p class="post-meta">Effective Date: December 31, 2025</p>

    <h2>1. Acceptance of Terms</h2>
    <p>By accessing or using the <strong>ASIC ROI Calculator</strong> (the "Tool"), a free static web utility for estimating ASIC mining profitability, you agree to these Terms and Conditions. If you do not agree, please do not use the Tool.</p>

    <h2>2. Description of the Tool</h2>
    <p>The Tool is a client-side calculator that computes daily profit, break-even time, and projections based on user-provided inputs (hardware cost, hash rate, power, electricity rate, coin price, block reward, network hashrate). It uses approximate formulas and does not fetch live data.</p>

    <h2>3. Use of the Tool</h2>
    <p>You may use the Tool for personal, non-commercial purposes. Permitted uses include:</p>
    <ul>
      <li>Evaluating ASIC hardware investments</li>
      <li>Modeling mining scenarios</li>
      <li>Educational purposes</li>
    </ul>
    <p>Prohibited uses include automated scraping, redistribution as a service, or any unlawful activity.</p>

    <h2>4. No Warranties</h2>
    <p>The Tool is provided <strong>"as is"</strong> and <strong>"as available"</strong> without warranties of any kind, express or implied. We do not guarantee:</p>
    <ul>
      <li>Accuracy of calculations (results depend on your inputs and market volatility)</li>
      <li>Uninterrupted access</li>
      <li>Fitness for investment advice</li>
    </ul>
    <p><em>Mining involves financial risk—use at your own discretion.</em></p>

    <h2>5. Limitation of Liability</h2>
    <p>We shall not be liable for any damages arising from use of the Tool, including lost profits, hardware decisions, or data loss. Cryptocurrency markets are volatile; calculations are estimates only.</p>

    <h2>6. Intellectual Property</h2>
    <p>The Tool is open-source under a permissive license (view on GitHub). You may fork or modify it, but retain attribution.</p>

    <h2>7. Third-Party Links</h2>
    <p>Links to external sites (e.g., CDNs) are provided for convenience. We are not responsible for their content or availability.</p>

    <h2>8. Changes to Terms</h2>
    <p>We may update these Terms periodically. Continued use constitutes acceptance of changes.</p>

    <h2>9. Governing Law</h2>
    <p>These Terms are governed by general open-source principles and applicable laws.</p>

    <h2>10. Contact</h2>
    <p>For questions, open an issue on our GitHub repository.</p>

    <p class="italic-note">The ASIC ROI Calculator is a <strong>community tool</strong> offered freely—use responsibly and enjoy informed mining analysis.</p>
  </article>
</div>

<style>
  /* Identical to privacy page */
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

  .prose h1, .prose h2 {
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

  .prose .italic-note {
    font-style: italic;
    color: var(--text-secondary);
    text-align: center;
    margin-top: 3rem;
  }
</style>