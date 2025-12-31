<!-- src/routes/privacy/+page.svelte -->
<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Privacy Policy | ASIC ROI Calculator</title>
  <meta name="description" content="The ASIC ROI Calculator collects no personal data—all calculations are performed client-side in your browser for complete privacy." />
  <meta property="og:title" content="Privacy Policy | ASIC ROI Calculator" />
  <meta property="og:description" content="The ASIC ROI Calculator collects no personal data—all calculations are performed client-side in your browser for complete privacy." />
  <meta property="og:url" content="{base}/privacy" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>Privacy Policy</p>
  </div>

  <article class="prose">
    <h1>Privacy Policy</h1>

    <p class="post-meta">Effective Date: December 31, 2025</p>

    <h2>1. Introduction</h2>
    <p>Welcome to the <strong>ASIC ROI Calculator</strong>, a free, open-source, static web utility designed to help cryptocurrency miners evaluate the profitability of ASIC mining hardware ("we," "us," or "our"). This Privacy Policy explains our data practices when you use our tool, which allows entry of parameters like hardware cost, hash rate, power consumption, electricity rate, coin price, block reward, and network hashrate to compute break-even time and ROI metrics.</p>
    <p>We prioritize <strong>user privacy above all</strong>. The calculator operates entirely <em>client-side</em> in your browser—no data is transmitted to any server. This means <strong>we do not collect, store, or process any personal information</strong>. All inputs and calculations remain on your device, ensuring complete confidentiality.</p>

    <h2>2. Information We Do Not Collect</h2>
    <p>As a fully static tool hosted on platforms like GitHub Pages, we collect zero data. Specifically:</p>
    <ul>
      <li><strong>No Personal Data</strong>: Names, emails, IP addresses, or location information.</li>
      <li><strong>No Usage Analytics</strong>: We do not track visits, page views, or interaction patterns.</li>
      <li><strong>No Input Data</strong>: Your entered values (e.g., ASIC specs or coin prices) are processed locally and never sent anywhere.</li>
      <li><strong>No Cookies or Trackers</strong>: No cookies, local storage persistence, or third-party scripts for monitoring.</li>
    </ul>
    <p>Everything happens in your browser's memory during the session.</p>

    <h2>3. How the Tool Functions</h2>
    <p>The ASIC ROI Calculator uses pure JavaScript to perform calculations instantly:</p>
    <ul>
      <li><strong>Local Processing</strong>: Formulas for daily revenue (based on hash share), power costs, and break-even are executed on your device.</li>
      <li><strong>No External Calls</strong>: Beyond loading Bootstrap CSS/JS from CDNs (which do not track users), no network requests occur.</li>
      <li><strong>Temporary Data</strong>: Any reactive state is held in browser memory and cleared on refresh.</li>
    </ul>
    <p>This architecture guarantees <strong>absolute data isolation</strong>.</p>

    <h2>4. Third-Party Services</h2>
    <p>We use only Bootstrap via public CDNs for styling—these load static files without tracking. No analytics, advertising, or data-sharing services are integrated.</p>

    <h2>5. Security and Your Responsibility</h2>
    <p>Since no data leaves your device, security risks are minimal. However:</p>
    <ul>
      <li>Use updated browsers for best protection.</li>
      <li>Avoid public computers for sensitive calculations.</li>
    </ul>

    <h2>6. Children's Privacy</h2>
    <p>The tool is not directed at children under 13. We do not knowingly collect any data from minors.</p>

    <h2>7. Compliance and Changes</h2>
    <p>Our no-collection approach complies with GDPR, CCPA, and similar laws by default. We may update this policy—changes will appear here with the new effective date.</p>

    <h2>8. Contact</h2>
    <p>Questions? Open an issue on our GitHub repository.</p>

    <p class="italic-note">We are committed to <strong>zero data collection</strong>—your mining calculations stay private forever.</p>
  </article>
</div>

<style>
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