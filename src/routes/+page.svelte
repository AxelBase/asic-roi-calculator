<script>
  import { base } from '$app/paths';
  import { calculateProfitability } from '$lib/calculator.js';
  import { fade } from 'svelte/transition';

  let inputs = {
    asicCost: 2500,
    hashRate: 140,
    power: 3100,
    electricityCost: 0.10,
    coinPrice: 100000,
    blockReward: 3.125,
    networkHashRate: 650
  };

  $: results = calculateProfitability(inputs);
</script>

<svelte:head>
  <title>ASIC ROI Calculator - Break-Even & Profitability Tool</title>
  <meta name="description" content="Free static client-side ASIC mining calculator. Instant break-even days, daily/yearly profit, ROI based on hash rate, power, electricity cost, coin price, and network hashrate. Privacy-focused, no tracking." />
  <meta property="og:title" content="ASIC ROI Calculator - Mining Profitability & Break-Even" />
  <meta property="og:description" content="Evaluate ASIC miners instantly: enter specs and market data for accurate daily profit, power cost, break-even time, and projections. Fully client-side, private, and static." />
  <meta property="og:url" content="{base}/" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="{base}/" />
</svelte:head>

<div class="container py-4">
  <div class="text-center mb-5" in:fade>
    <h1 class="display-5 fw-bold" style="color: var(--sky-blue);">ASIC Mining ROI & Break-Even</h1>
    <p class="text-muted">Professional precision for serious miners.</p>
  </div>

  <div class="row g-4">
    <div class="col-lg-5">
      <div class="bubbly-card p-4 h-100">
        <h2 class="h5 mb-4 fw-bold">Mining Parameters</h2>
        <div class="space-y-3">
          {#each Object.keys(inputs) as key}
            <div class="mb-3">
              <label for={key} class="form-label small fw-semibold text-uppercase text-muted">
                {key.replace(/([A-Z])/g, ' $1')}
              </label>
              <input 
                id={key} 
                type="number" 
                class="form-control rounded-pill border-light-subtle shadow-sm" 
                bind:value={inputs[key]} 
              >
            </div>
          {/each}
        </div>
      </div>
    </div>

    <div class="col-lg-7">
      <div class="bubbly-card p-4 h-100 border-0" style="background: white;">
        <h2 class="h5 mb-4 fw-bold">Projection Results</h2>

        {#if results.valid}
          <div class="row g-3">
            <div class="col-12">
              <div class="p-4 rounded-4 text-white text-center" 
                   style="background: {parseFloat(results.dailyProfit) >= 0 ? 'linear-gradient(135deg, #2271B3 0%, #3a91d9 100%)' : 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)'};">
                <span class="text-uppercase small opacity-75">Daily Profit</span>
                <div class="display-4 fw-bold">${results.dailyProfit}</div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="p-3 bg-light rounded-4 text-center border">
                <span class="text-muted small">Break-Even</span>
                <div class="h4 mb-0 fw-bold" style="color: var(--sky-blue);">
                  {results.breakEvenDays === 'Never' ? 'Never' : results.breakEvenDays + ' Days'}
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="p-3 bg-light rounded-4 text-center border">
                <span class="text-muted small">Daily Revenue</span>
                <div class="h4 mb-0 fw-bold">${results.dailyRevenue}</div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="p-3 bg-light rounded-4 text-center border">
                <span class="text-muted small">Monthly Est.</span>
                <div class="h4 mb-0 fw-bold">${(parseFloat(results.dailyProfit) * 30).toFixed(2)}</div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="p-3 bg-light rounded-4 text-center border">
                <span class="text-muted small">Yearly Profit</span>
                <div class="h4 mb-0 fw-bold">${results.yearlyProfit}</div>
              </div>
            </div>
          </div>
        {:else}
          <div class="alert alert-info rounded-4 border-0">
            Waiting for valid input parameters...
          </div>
        {/if}
      </div>
    </div>
  </div>

  <section id="about" class="mt-5 pt-5">
  <div class="bubbly-card p-5">
    <div class="row align-items-center mb-5">
      <div class="col-lg-7">
        <h2 class="fw-bold display-6 mb-3" style="color: var(--sky-blue);">About AxelBase</h2>
        <p class="lead text-muted">
          AxelBase is a high-performance, client-side utility engineered for the modern miner. 
          We provide transparent, real-time insights into ASIC hardware profitability without 
          server-side tracking or complex setups.
        </p>
      </div>
      <div class="col-lg-5">
        <div class="p-4 rounded-4 shadow-sm border-0 text-white" style="background: linear-gradient(135deg, var(--sky-blue) 0%, #1a5a91 100%);">
          <h5 class="fw-bold mb-2">Market Snapshot</h5>
          <div class="d-flex justify-content-between border-bottom border-white border-opacity-25 py-2">
            <span class="small opacity-75">Date</span>
            <span class="small fw-bold">Dec 31, 2025</span>
          </div>
          <div class="d-flex justify-content-between border-bottom border-white border-opacity-25 py-2">
            <span class="small opacity-75">BTC Price</span>
            <span class="small fw-bold">~$88,500</span>
          </div>
          <div class="d-flex justify-content-between py-2">
            <span class="small opacity-75">Network</span>
            <span class="small fw-bold">1,150 EH/s</span>
          </div>
        </div>
      </div>
    </div>

    <div class="row g-4 mb-5">
      <div class="col-md-4">
        <div class="h-100 p-4 rounded-4 bg-light border-0 bubbly-card">
          <div class="h3 mb-3" style="color: var(--sky-blue);">🔒</div>
          <h5 class="fw-bold">Privacy First</h5>
          <p class="small text-muted mb-0">Completely static and stateless. Calculations happen 100% in your browser. No data collection, no cookies, and no tracking.</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="h-100 p-4 rounded-4 bg-light border-0 bubbly-card">
          <div class="h3 mb-3" style="color: var(--sky-blue);">⚡</div>
          <h5 class="fw-bold">Reactive Engine</h5>
          <p class="small text-muted mb-0">Built with Svelte for instant feedback. Results update as you type, allowing for rapid stress-testing of different scenarios.</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="h-100 p-4 rounded-4 bg-light border-0 bubbly-card">
          <div class="h3 mb-3" style="color: var(--sky-blue);">📊</div>
          <h5 class="fw-bold">Farm Ready</h5>
          <p class="small text-muted mb-0">Engineered to scale. Whether you're running a single S21 or a $2.5M industrial farm, our logic handles the math with precision.</p>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-12">
        <div class="p-4 rounded-4 border-start border-4 border-primary" style="background-color: var(--sky-blue-light); border-color: var(--sky-blue) !important;">
          <h5 class="fw-bold mb-3" style="color: var(--sky-blue);">The AxelBase Philosophy</h5>
          <p class="text-muted mb-3">
            In a volatile market where small fluctuations in electricity costs or network difficulty can erase margins, 
            miners need honest metrics. We strip away the noise and focus on the core SHA-256 economics: 
            <strong>Hash Rate vs. Difficulty vs. Power.</strong>
          </p>
          <p class="text-muted mb-0">
            Our tool is adaptable for Bitcoin Cash and other SHA-256 altcoins—simply adjust the block reward 
            and network hashrate. Deployed via GitHub Pages, AxelBase ensures maximum uptime and 
            cross-device compatibility for miners on the go.
          </p>
        </div>
      </div>
    </div>

    <div class="text-center mt-5">
      <a href="{base}/blog" class="btn-bubbly text-decoration-none px-5">Explore Technical Guides</a>
    </div>
  </div>
</section>

<section id="how-to-use" class="mt-4 pt-5">
  <div class="bubbly-card p-5">
    <div class="text-center mb-5">
      <h2 class="fw-bold display-6" style="color: var(--sky-blue);">How to Use AxelBase</h2>
      <p class="text-muted mx-auto" style="max-width: 700px;">
        Our real-time calculator simplifies complex mining economics into actionable metrics. 
        Follow these steps to model your profitability in the 2025 mining landscape.
      </p>
    </div>

    <div class="row g-4">
      <div class="col-md-4">
        <div class="p-4 rounded-4 h-100 border border-opacity-10 border-primary bg-light bg-opacity-50">
          <div class="mb-3 d-inline-flex align-items-center justify-content-center bg-primary text-white rounded-circle" style="width: 40px; height: 40px; background-color: var(--sky-blue) !important;">1</div>
          <h4 class="fw-bold h5">Enter Hardware Specs</h4>
          <p class="small text-muted">Input your ASIC purchase cost, hashrate (TH/s), and power consumption (Watts). Check your manufacturer specs for accuracy.</p>
        </div>
      </div>

      <div class="col-md-4">
        <div class="p-4 rounded-4 h-100 border border-opacity-10 border-primary bg-light bg-opacity-50">
          <div class="mb-3 d-inline-flex align-items-center justify-content-center bg-primary text-white rounded-circle" style="width: 40px; height: 40px; background-color: var(--sky-blue) !important;">2</div>
          <h4 class="fw-bold h5">Set Economic Data</h4>
          <p class="small text-muted">Input your local $/kWh electricity rate and current coin price. Note: Electricity under $0.10 is critical for 2025 profitability.</p>
        </div>
      </div>

      <div class="col-md-4">
        <div class="p-4 rounded-4 h-100 border border-opacity-10 border-primary bg-light bg-opacity-50">
          <div class="mb-3 d-inline-flex align-items-center justify-content-center bg-primary text-white rounded-circle" style="width: 40px; height: 40px; background-color: var(--sky-blue) !important;">3</div>
          <h4 class="fw-bold h5">Analyze ROI</h4>
          <p class="small text-muted">Review the reactive cards. Green indicates profit; Red indicates a loss. Pay close attention to the "Break-Even" timeline.</p>
        </div>
      </div>
    </div>

    <hr class="my-5 opacity-10">

    <div class="row align-items-center">
      <div class="col-lg-6">
        <h3 class="h4 fw-bold mb-4" style="color: var(--sky-blue);">Understanding the Fields</h3>
        <ul class="list-unstyled">
          <li class="mb-3 d-flex align-items-start">
            <span class="badge rounded-pill me-2 px-3 py-2" style="background-color: var(--sky-blue-light); color: var(--sky-blue);">Hardware</span>
            <small class="text-muted">Enter cost and speed (e.g., Antminer S21 @ 200–270 TH/s).</small>
          </li>
          <li class="mb-3 d-flex align-items-start">
            <span class="badge rounded-pill me-2 px-3 py-2" style="background-color: var(--sky-blue-light); color: var(--sky-blue);">Electricity</span>
            <small class="text-muted">Calculated as: <i>Power (kW) × 24h × Rate</i>.</small>
          </li>
          <li class="mb-3 d-flex align-items-start">
            <span class="badge rounded-pill me-2 px-3 py-2" style="background-color: var(--sky-blue-light); color: var(--sky-blue);">Network</span>
            <small class="text-muted">Block reward is 3.125 BTC. Current EH/s is 1,000–1,150.</small>
          </li>
        </ul>
      </div>
      
      <div class="col-lg-6">
        <div class="p-4 rounded-4" style="background-color: #f8fbfe; border: 1px dashed var(--sky-blue);">
          <h5 class="fw-bold mb-3"><i class="bi bi-lightbulb"></i> Pro Tips for 2025</h5>
          <p class="small mb-2"><strong>Model Scenarios:</strong> Raise electricity to $0.30 to see when you must shut down.</p>
          <p class="small mb-2"><strong>Growth:</strong> Account for network difficulty growth by increasing EH/s values.</p>
          <p class="small mb-0"><strong>Safety:</strong> We don't include transaction fees to keep your ROI projections conservative and safe.</p>
        </div>
      </div>
    </div>

    <div class="mt-5 text-center">
      <p class="small text-muted">
        AxelBase works entirely in your browser. No data is ever sent to a server. 
        Responsive for mobile, desktop, and tablets.
      </p>
    </div>
  </div>
</section>

<section id="faq" class="mt-4 mb-5 pb-5">
  <div class="bubbly-card p-5">
    <div class="text-center mb-5">
      <h2 class="fw-bold display-6" style="color: var(--sky-blue);">Frequently Asked Questions</h2>
      <p class="text-muted">Everything you need to know about AxelBase and 2025 mining economics.</p>
    </div>

    <div class="accordion custom-accordion" id="faqAccordion">
      <div class="accordion-item mb-3 border-0 bubbly-card">
        <h2 class="accordion-header">
          <button class="accordion-button rounded-4 fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#q1">
            Is the data live or real-time?
          </button>
        </h2>
        <div id="q1" class="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
          <div class="accordion-body text-muted pt-0">
            No—the tool is fully static and client-side. For 100% accuracy on <strong>Dec 31, 2025</strong>, manually enter the current BTC price (~$88.5k) and network hashrate (~1,150 EH/s) from your preferred explorer.
          </div>
        </div>
      </div>

      <div class="accordion-item mb-3 border-0 bubbly-card">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed rounded-4 fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#q3">
            How accurate are the calculations?
          </button>
        </h2>
        <div id="q3" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
          <div class="accordion-body text-muted pt-0">
            Highly precise. We calculate revenue based on your share of the ~144 daily blocks. We omit transaction fees to provide a <strong>conservative baseline</strong> for your ROI projections.
          </div>
        </div>
      </div>

      <div class="accordion-item mb-3 border-0 bubbly-card">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed rounded-4 fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#q5">
            Can I use this for altcoins?
          </button>
        </h2>
        <div id="q5" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
          <div class="accordion-body text-muted pt-0">
            Yes! For SHA-256 coins like Bitcoin Cash or eCash, simply update the block reward, coin price, and that specific network's hashrate.
          </div>
        </div>
      </div>

      <div class="accordion-item mb-3 border-0 bubbly-card">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed rounded-4 fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#q4">
            What if results show "Never" break-even?
          </button>
        </h2>
        <div id="q4" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
          <div class="accordion-body text-muted pt-0">
            This means your daily power cost exceeds your revenue. To fix this, you need cheaper electricity (ideally <strong>below $0.10/kWh</strong>) or a significant rise in coin price.
          </div>
        </div>
      </div>

      <div class="accordion-item mb-3 border-0 bubbly-card">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed rounded-4 fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#q8">
            Does it account for difficulty increases or halvings?
          </button>
        </h2>
        <div id="q8" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
          <div class="accordion-body text-muted pt-0">
            This is a snapshot view. To simulate future difficulty growth, manually increase the network hashrate field. To model the next halving (~2028), lower the block reward to <strong>1.5625 BTC</strong>.
          </div>
        </div>
      </div>

      <div class="accordion-item border-0 bubbly-card">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed rounded-4 fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#q10">
            Is this financial advice?
          </button>
        </h2>
        <div id="q10" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
          <div class="accordion-body text-muted pt-0">
            No. AxelBase is an educational tool. Mining involves significant risks, including hardware depreciation and regulatory changes. Conduct your own thorough research.
          </div>
        </div>
      </div>
    </div>

    <div class="mt-5 p-4 rounded-4 text-center" style="background-color: var(--sky-blue-light);">
      <p class="mb-0 text-dark small">
        <strong>Need more detail?</strong> Explore our <a href="{base}/blog" class="fw-bold text-decoration-none" style="color: var(--sky-blue);">Technical Blog</a> 
        for in-depth guides on difficulty scaling and hardware efficiency.
      </p>
    </div>
  </div>
</section>

</div>

<style>
  .custom-accordion .accordion-button {
    background-color: transparent;
    color: #444;
    box-shadow: none;
    padding: 1.5rem;
  }

  .custom-accordion .accordion-button:not(.collapsed) {
    color: var(--sky-blue);
    background-color: transparent;
  }

  .custom-accordion .accordion-button::after {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%232271B3'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
  }

  .custom-accordion .accordion-item {
    transition: var(--transition-smooth);
  }

  .custom-accordion .accordion-item:hover {
    transform: translateX(5px);
    border-left: 4px solid var(--sky-blue) !important;
  }
</style>
