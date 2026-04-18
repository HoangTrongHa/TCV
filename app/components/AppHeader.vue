<script setup lang="ts">
const { t, te, locale, setLocale } = useI18n()

const navLabelFallback = {
  vi: {
    services: 'DỊCH VỤ',
    portfolio: 'DỰ ÁN',
    about: 'GIỚI THIỆU',
    contact: 'LIÊN HỆ',
  },
  en: {
    services: 'SERVICES',
    portfolio: 'PORTFOLIO',
    about: 'ABOUT',
    contact: 'CONTACT',
  },
} as const

const trNav = (key: 'services' | 'portfolio' | 'about' | 'contact') => {
  const i18nKey = `header.nav.${key}`
  if (te(i18nKey))
    return t(i18nKey)

  const lang = locale.value === 'en' ? 'en' : 'vi'
  return navLabelFallback[lang][key]
}

const navItems = computed(() => [
  { label: trNav('services'), href: '#services', active: false },
  { label: trNav('portfolio'), href: '#portfolio', active: false },
  { label: trNav('about'), href: '#about', active: false },
  { label: trNav('contact'), href: '#contact', active: false },
])

const onSwitchLocale = async (targetLocale: 'vi' | 'en') => {
  if (locale.value === targetLocale)
    return

  await setLocale(targetLocale)
}
</script>

<template>
  <header class="app-header" data-node-id="8:1141">
    <div class="app-header__inner">
      <div class="app-header__brand">{{ t('header.brand') }}</div>
      <nav class="app-header__menu">
        <a
          v-for="item in navItems"
          :key="`${item.href}-${item.label}`"
          :href="item.href"
          :class="{ active: item.active }"
        >
          {{ item.label }}
        </a>
      </nav>
      <div class="app-header__lang" aria-label="Language switcher">
        <span class="app-header__lang-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" focusable="false">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm6.92 9h-3.01a15.76 15.76 0 0 0-1.38-5.01A8.03 8.03 0 0 1 18.92 11ZM12 4.04c.83 1.2 1.87 3.6 2.36 6.96H9.64C10.13 7.64 11.17 5.24 12 4.04ZM4.26 13h3.02c.12 1.78.59 3.5 1.37 5.01A8.03 8.03 0 0 1 4.26 13Zm3.02-2H4.26a8.03 8.03 0 0 1 4.39-5.01A15.72 15.72 0 0 0 7.28 11Zm1.99 0c.55-3.64 1.75-6.3 2.73-7.55.98 1.25 2.18 3.91 2.73 7.55H9.27Zm0 2h5.46c-.55 3.64-1.75 6.3-2.73 7.55-.98-1.25-2.18-3.91-2.73-7.55Zm5.08 5.01A15.76 15.76 0 0 0 15.72 13h3.01a8.03 8.03 0 0 1-4.38 5.01Z" />
          </svg>
        </span>
        <button
          type="button"
          class="app-header__lang-button"
          :class="{ active: locale === 'vi' }"
          @click="onSwitchLocale('vi')"
        >
          VI
        </button>
        <span class="app-header__lang-sep">/</span>
        <button
          type="button"
          class="app-header__lang-button"
          :class="{ active: locale === 'en' }"
          @click="onSwitchLocale('en')"
        >
          EN
        </button>
      </div>
      <a class="app-header__cta" href="#contact">{{ t('header.cta') }}</a>
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

.app-header__lang {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-left: 20px;
  color: rgba(255, 255, 255, 0.62);
  font-family: 'Space Grotesk', sans-serif;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1.1px;
  line-height: 1;
  text-transform: uppercase;
}

.app-header__lang-button {
  border: 0;
  padding: 0;
  background: transparent;
  font: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  text-transform: inherit;
  color: inherit;
  cursor: pointer;
}

.app-header__lang-button:focus-visible {
  outline: 1px solid rgba(255, 87, 34, 0.7);
  outline-offset: 2px;
}

.app-header__lang button {
  color: inherit;
}

.app-header__lang-button.active {
  color: #ff5722;
}

.app-header__lang-sep {
  color: rgba(255, 255, 255, 0.35);
}

.app-header__lang-icon {
  width: 16px;
  height: 16px;
  display: grid;
  place-items: center;
}

.app-header__lang-icon svg {
  width: 100%;
  height: 100%;
  fill: currentColor;
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

  .app-header__lang {
    margin-left: auto;
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

