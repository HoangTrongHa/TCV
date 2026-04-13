<script setup lang="ts">
const navItems = [
  { label: 'SERVICES', href: '#', active: true },
  { label: 'PORTFOLIO', href: '#', active: false },
  { label: 'ABOUT', href: '#', active: false },
  { label: 'CONTACT', href: '#contact', active: false },
]
</script>

<template>
  <header class="app-header" data-node-id="8:1141">
    <div class="app-header__inner">
      <div class="app-header__brand">Production Agency</div>
      <nav class="app-header__menu">
        <a
          v-for="item in navItems"
          :key="item.label"
          :href="item.href"
          :class="{ active: item.active }"
        >
          {{ item.label }}
        </a>
      </nav>
      <a class="app-header__cta" href="#contact">START PROJECT</a>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
  background: rgba(19, 19, 19, 0.7);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
}

.app-header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  width: min(1920px, 100%);
  margin: 0 auto;
  padding: 12px clamp(16px, 6vw, 132px) 11px;
}

.app-header__brand {
  color: #ff5722;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: -0.05em;
}

.app-header__menu {
  display: flex;
  margin-left: auto;
  gap: 40px;
  align-items: center;
}

.app-header__menu a {
  padding-bottom: 6px;
  border-bottom: 2px solid transparent;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1.4px;
  line-height: 20px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.6);
}

.app-header__menu a.active {
  color: #ff5722;
  border-bottom-color: #ff5722;
}

.app-header__cta {
  padding: 8px 24px;
  background: #ff5722;
  color: #fff;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1.4px;
  line-height: 20px;
  text-transform: uppercase;
}

@media (max-width: 820px) {
  .app-header__inner {
    padding-inline: 14px;
  }

  .app-header__brand {
    font-size: 18px;
  }

  .app-header__menu {
    display: none;
  }
}

@media (max-width: 560px) {
  .app-header__cta {
    padding: 7px 14px;
    font-size: 11px;
    letter-spacing: 1px;
  }
}
</style>
