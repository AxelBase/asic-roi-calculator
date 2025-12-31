<script lang="ts">
  import { base } from '$app/paths';
  import { fly, fade } from 'svelte/transition';
  import '../app.css';

  const paypalUsername = 'AxelLab427'; // Update this!
  const donationAmounts = [1, 3, 5, 10];
  let isDropdownOpen = false;

  function toggleDropdown() {
    isDropdownOpen = !isDropdownOpen;
  }
  function closeDropdown() {
    isDropdownOpen = false;
  }
  function clickOutside(node: HTMLElement) {
    const handleClick = (event: MouseEvent) => {
      if (node && !node.contains(event.target as Node) && !isDropdownOpen) {
        node.dispatchEvent(new CustomEvent('click_outside'));
      }
    };
    document.addEventListener('click', handleClick, true);
    return {
      destroy() {
        document.removeEventListener('click', handleClick, true);
      }
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

      <div class="position-relative" use:clickOutside on:click_outside={closeDropdown}>
        <button class="btn-bubbly btn-sm d-flex align-items-center gap-2" on:click={toggleDropdown}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>
          Buy me a coffee
        </button>

        {#if isDropdownOpen}
          <div class="dropdown-menu show bubbly-card mt-2 p-2" transition:fly={{ y: -10, duration: 250 }} style="position: absolute; border:none;">
            {#each donationAmounts as amount}
              <a 
                href="https://paypal.me/{paypalUsername}/{amount}" 
                target="_blank" 
                rel="noopener noreferrer"
                class="dropdown-item rounded-pill mb-1 text-center py-2"
                style="font-weight: 600; color: var(--sky-blue);"
                on:click={closeDropdown}
              >
                ${amount}
              </a>
            {/each}
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
      &copy; AxelBase ASIC ROI Calculator – 2025
    </div>
    <div class="d-flex gap-3">
      <a href="{base}/privacy" class="text-muted text-decoration-none">Privacy</a>
      <a href="{base}/terms" class="text-muted text-decoration-none">Terms</a>
    </div>
  </div>
</footer>