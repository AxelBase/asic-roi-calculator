<script lang="ts">
  import { base } from '$app/paths';
  import { fly } from 'svelte/transition';
  import '../app.css';

  const currentYear = new Date().getFullYear();
  const bmacUsername = 'axelbase';           // ← your BuyMeACoffee username
  const bitcoinAddress = 'bc1q3p0e6vt492m4w4fpz5m2cl4zcfuqqkgaj6myc9';

  let isDropdownOpen = false;

  function toggleDropdown() { isDropdownOpen = !isDropdownOpen; }
  function closeDropdown() { isDropdownOpen = false; }

  function clickOutside(node: HTMLElement) {
    const handleClick = (event: MouseEvent) => {
      if (node && !node.contains(event.target as Node)) {
        node.dispatchEvent(new CustomEvent('click_outside'));
      }
    };
    document.addEventListener('click', handleClick, true);
    return {
      destroy() { document.removeEventListener('click', handleClick, true); }
    };
  }
</script>

<header class="custom-navbar">
  <nav class="container d-flex justify-content-between align-items-center">
    <div class="d-flex align-items-center gap-3">
      <a href="{base}/" aria-label="Home" class="d-flex align-items-center">
        <img src="{base}/AxelLab-Logo.ico" alt="Logo" class="navbar-brand-logo me-2" />
      </a>
      <a class="navbar-brand-text text-decoration-none" href="{base}/">AxelBase</a>

      <!-- Buy me a Coffee + Bitcoin dropdown -->
      <div class="position-relative" use:clickOutside on:click_outside={closeDropdown}>
        <button
          class="btn-bubbly btn-sm d-flex align-items-center gap-2"
          on:click={toggleDropdown}
          aria-label="Support us"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
            <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
            <line x1="6" y1="1" x2="6" y2="4"></line>
            <line x1="10" y1="1" x2="10" y2="4"></line>
            <line x1="14" y1="1" x2="14" y2="4"></line>
          </svg>
          <span class="d-none d-sm-inline">Buy me a coffee</span>
        </button>

        {#if isDropdownOpen}
          <div
            class="bmac-dropdown bubbly-card mt-2 p-1"
            transition:fly={{ y: -10, duration: 220 }}
            style="position: absolute; left: 50%; transform: translateX(-50%); width: 240px; z-index: 1000;"
          >
            <a
              href="https://buymeacoffee.com/{bmacUsername}/3"
              target="_blank"
              rel="noopener noreferrer"
              class="dropdown-support-item"
              on:click={closeDropdown}
            >
              <span class="amount">$3</span> One Coffee
            </a>

            <a
              href="https://buymeacoffee.com/{bmacUsername}/5"
              target="_blank"
              rel="noopener noreferrer"
              class="dropdown-support-item"
              on:click={closeDropdown}
            >
              <span class="amount">$5</span> Two Coffees
            </a>

            <a
              href="https://buymeacoffee.com/{bmacUsername}/10"
              target="_blank"
              rel="noopener noreferrer"
              class="dropdown-support-item"
              on:click={closeDropdown}
            >
              <span class="amount">$10</span> Three Coffees
            </a>

            <a
              href="https://buymeacoffee.com/{bmacUsername}"
              target="_blank"
              rel="noopener noreferrer"
              class="dropdown-support-item custom-amount"
              on:click={closeDropdown}
            >
              Custom Amount
            </a>

            <a
              href="bitcoin:{bitcoinAddress}?label=AxelBase&message=Buy%20me%20a%20coffee"
              target="_blank"
              rel="noopener noreferrer"
              class="dropdown-support-item custom-amount bitcoin-option"
              on:click={closeDropdown}
            >
              Buy via Bitcoin
            </a>
          </div>
        {/if}
      </div>
    </div>

    <ul class="d-none d-md-flex list-unstyled gap-4 mb-0 align-items-center">
      <li><a class="nav-link text-decoration-none" href="{base}/">Home</a></li>
      <li><a class="nav-link text-decoration-none" href="{base}/#about">About</a></li>
      <li><a class="nav-link text-decoration-none" href="{base}/#how-to-use">How to use</a></li>
      <li><a class="nav-link text-decoration-none" href="{base}/#faq">FAQ</a></li>
      <li><a class="nav-link text-decoration-none" href="{base}/blog">Blog</a></li>
    </ul>
  </nav>
</header>

<main>
  <slot />
</main>

<footer class="fixed-footer">
  <div class="container d-flex justify-content-between align-items-center">
    <div class="text-muted">
      © {currentYear} AxelBase ASIC ROI Calculator
    </div>
    <div class="d-flex gap-3">
      <a href="{base}/privacy" class="text-muted text-decoration-none">Privacy</a>
      <a href="{base}/terms" class="text-muted text-decoration-none">Terms</a>
    </div>
  </div>
</footer>

<style>
  /* Buy me a coffee dropdown styles (adapted to glassmorphism) */
  .bmac-dropdown {
    background: var(--glass-bg);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
  }

  .dropdown-support-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 18px;
    color: #333;
    text-decoration: none;
    font-size: 0.97rem;
    transition: all 0.22s ease;
    border-radius: 12px;
    margin: 3px 4px;
  }

  .dropdown-support-item:hover {
    background: rgba(34, 113, 179, 0.08);
    color: var(--sky-blue);
    transform: translateX(4px);
  }

  .amount {
    font-weight: 700;
    color: var(--sky-blue);
    min-width: 42px;
  }

  .custom-amount {
    justify-content: center !important;
    font-weight: 600;
    color: var(--sky-blue);
    border-top: 1px solid rgba(34, 113, 179, 0.12);
    margin-top: 6px;
    padding-top: 14px;
  }

  .bitcoin-option {
    color: #f7931a !important;
    font-weight: 600;
  }

  .bitcoin-option:hover {
    background: rgba(247, 147, 26, 0.08) !important;
    color: #f7931a !important;
  }
</style>