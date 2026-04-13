<script setup lang="ts">
const clientLogoMasks = [
  {
    id: 'wika',
    src: '/figma/clients/logo-1.png',
    size: '97px 111px',
    position: '99.75px -0.5px',
  },
  {
    id: 'interlock',
    src: '/figma/clients/logo-2.png',
    size: '121px 101px',
    position: '88px 4.5px',
  },
  {
    id: 'spiritbase',
    src: '/figma/clients/logo-3.png',
    size: '120px 111px',
    position: '87.75px -0.5px',
  },
  {
    id: 'dc',
    src: '/figma/clients/logo-4.png',
    size: '184px 111.521px',
    position: '55.75px -0.76px',
  },
]

const getClientLogoStyle = (logo: { src: string; size: string; position: string }) => ({
  WebkitMaskImage: `url('${logo.src}')`,
  maskImage: `url('${logo.src}')`,
  WebkitMaskSize: logo.size,
  maskSize: logo.size,
  WebkitMaskPosition: logo.position,
  maskPosition: logo.position,
})

const serviceSection = {
  title: 'PHIM QUANG CAO',
  accent: '(TVC)',
  description:
    'Dua cau chuyen thuong hieu den gan hon voi khach hang qua nhung khung hinh dien anh, dat chuan phat song truyen hinh va digital media.',
  image: '/figma/services/service-hero.png',
  arrows: {
    left: '/figma/services/arrow-left.svg',
    right: '/figma/services/arrow-right.svg',
  },
  deliverables: [
    {
      label: 'DELIVERABLE 01',
      value: '4K/6K Cinematic Event Film',
      detail: '(Duration: 1m30s - 7m)',
    },
    {
      label: 'DELIVERABLE 02',
      value: 'Full Multi-angle Production',
      tag: 'COMPLIMENTARY ADD-ON',
    },
  ],
}

const services = [
  { id: '', title: '', description: '', action: '', image: '' },
  { id: '', title: '', description: '', action: '', image: '' },
]

const miniServices: Array<{ id: string; title: string; description: string; image: string }> = []

useHead({
  title: 'Production Agency - Portfolio',
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Epilogue:wght@400;700;800;900&family=Inter:wght@300;400;600;700;800&family=Space+Grotesk:wght@400;700&display=swap',
    },
  ],
})
</script>

<template>
  <div class="page">
    <NuxtRouteAnnouncer />
    <AppHeader />

    <main>
      <HeroSection />

      <section class="clients" data-node-id="8:1099">
        <div class="clients-shell">
          <div class="clients-head">
            <h2 class="clients-title">KHACH HANG TIN CAY</h2>
            <p class="clients-note">
              TECHNICAL PRECISION MEETS RAW
              <br>
              CREATIVE ENERGY.
            </p>
          </div>
          <div class="clients-logos">
            <article v-for="logo in clientLogoMasks" :key="logo.id" class="clients-logo-card">
              <div class="clients-logo-mask" :style="getClientLogoStyle(logo)" />
            </article>
          </div>
        </div>
      </section>

      <section class="services section services-v2" data-node-id="8:1106">
        <div class="services-v2-head">
          <div class="services-v2-heading">
            <h2 class="services-v2-title">
              {{ serviceSection.title }}
              <span>{{ serviceSection.accent }}</span>
            </h2>
            <p class="services-v2-description">{{ serviceSection.description }}</p>
          </div>

          <div class="services-v2-deliverables">
            <div class="services-v2-deliverable">
              <p class="services-v2-deliverable-label">{{ serviceSection.deliverables[0].label }}</p>
              <p class="services-v2-deliverable-value">
                {{ serviceSection.deliverables[0].value }}
                <br>
                {{ serviceSection.deliverables[0].detail }}
              </p>
            </div>

            <div class="services-v2-deliverable services-v2-deliverable--border">
              <p class="services-v2-deliverable-label">{{ serviceSection.deliverables[1].label }}</p>
              <div class="services-v2-deliverable-line">
                <p class="services-v2-deliverable-value">{{ serviceSection.deliverables[1].value }}</p>
                <p class="services-v2-deliverable-tag">{{ serviceSection.deliverables[1].tag }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="services-v2-visual">
          <img :src="serviceSection.image" alt="TVC service visual">
          <div class="services-v2-controls">
            <div class="services-v2-dots">
              <span class="active" />
              <span />
              <span />
              <span />
            </div>
            <div class="services-v2-arrows">
              <button type="button" aria-label="Previous service image">
                <img :src="serviceSection.arrows.left" alt="">
              </button>
              <button type="button" aria-label="Next service image">
                <img :src="serviceSection.arrows.right" alt="">
              </button>
            </div>
          </div>
        </div>
      </section>

      <section v-if="false" class="services section">
        <article class="service-row">
          <div class="service-copy">
            <span>{{ services[0].id }}</span>
            <h2>{{ services[0].title }}</h2>
            <p>{{ services[0].description }}</p>
            <a href="#">{{ services[0].action }} →</a>
          </div>
          <div class="service-media wide">
            <img :src="services[0].image" :alt="services[0].title">
          </div>
        </article>

        <article class="service-row reverse">
          <div class="service-copy">
            <span>{{ services[1].id }}</span>
            <h2>{{ services[1].title }}</h2>
            <p>{{ services[1].description }}</p>
            <button type="button">{{ services[1].action }}</button>
          </div>
          <div class="service-media tall">
            <img :src="services[1].image" :alt="services[1].title">
          </div>
        </article>

        <div class="mini-grid">
          <article v-for="item in miniServices" :key="item.id" class="mini-card">
            <div>
              <span>{{ item.id }}</span>
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </div>
            <div class="mini-media">
              <img :src="item.image" :alt="item.title">
            </div>
          </article>
        </div>
      </section>

      <section class="full-match section">
        <div class="split-card">
          <div class="split-copy">
            <h2>
              GHI HINH
              <br>
              TOAN TRAN
              <br>
              DAU
              <br>
              (FULL MATCH)
            </h2>
            <p>
              Giai phap ghi hinh the thao va livestream voi tu duy broadcast, giu tron khoanh khac
              quan trong.
            </p>
            <a href="#contact">BOOK COVERAGE</a>
          </div>
          <div class="split-media">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaFIQztd3-amw3_Z45xy-Z5sUWqJUQR6tGSZ1vodAsdJjZeCHxHz8V62zSi93xb3_8WrebWSuttW3ar_DVTVJ63mPVksIzXADkgOpdiGaLkQS9UgQyJWTie6z0aI6u48biSKsxreDHnReDlNVR7RSKsbeuc6dOMD77jRNBI5VTDLu3hNQ2Sp7cbEawd5v4EZ7wuL7a0P1QLrBt2p6Wf5to5d5iGLjzrUFlozH0STWinaASJES5WPee9pQTis4d1uG8qlnpKqCXmZJy"
              alt="Football full match"
            >
          </div>
        </div>
      </section>

      <section id="contact" class="cta">
        <div class="section">
          <h2>
            LET'S BUILD
            <br>
            YOUR VISION.
          </h2>
          <div class="cta-buttons">
            <a class="cta-primary" href="mailto:hello@cinemacore.vn">GET IN TOUCH</a>
            <a class="cta-secondary" href="#">OUR PORTFOLIO</a>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer">
      <div class="section footer-inner">
        <div class="brand">CINEMA CORE</div>
        <div class="links">
          <a href="#">CONTACT</a>
          <a href="#">INSTAGRAM</a>
          <a href="#">VIMEO</a>
          <a href="#">LINKEDIN</a>
          <a href="#">PRIVACY</a>
        </div>
        <p>© 2026 CINEMA CORE PRODUCTIONS. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  </div>
</template>

<style>
:root {
  color-scheme: dark;
  --bg: #131313;
  --bg-low: #0e0e0e;
  --bg-card: #1d1c1c;
  --bg-hi: #2a2a2a;
  --text: #e5e2e1;
  --muted: rgba(229, 226, 225, 0.6);
  --line: rgba(92, 64, 55, 0.2);
  --accent: #ff571a;
  --accent-strong: #ff4d00;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  min-width: 320px;
  background: var(--bg);
  color: var(--text);
  font-family: 'Inter', sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  display: block;
  width: 100%;
}

.section {
  width: min(1200px, calc(100% - 48px));
  margin: 0 auto;
}

.page {
  background:
    radial-gradient(circle at right 5%, rgba(255, 77, 0, 0.16), transparent 26%),
    radial-gradient(circle at 20% 90%, rgba(255, 181, 158, 0.08), transparent 28%),
    var(--bg);
}

.brand {
  font-family: 'Epilogue', sans-serif;
  font-size: 1rem;
  font-weight: 800;
  letter-spacing: -0.04em;
}

.service-copy span,
.service-copy a,
.service-copy button,
.links a,
.footer p {
  text-transform: uppercase;
  letter-spacing: 0.22em;
}

h2,
h3 {
  margin: 0;
  font-family: 'Epilogue', sans-serif;
  font-weight: 900;
  line-height: 0.88;
  letter-spacing: -0.05em;
  text-transform: uppercase;
}

.clients {
  padding: 80px 0;
}

.clients-shell {
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: min(1920px, 100%);
  margin: 0 auto;
  padding-inline: clamp(20px, 12.5vw, 240px);
}

.clients-head {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 2rem;
}

.clients-title {
  margin: 0;
  color: #e5e2e1;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 72px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 81px;
  text-transform: uppercase;
}

.clients-note {
  width: 266px;
  margin: 0;
  color: rgba(255, 255, 255, 0.4);
  text-align: right;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1.4px;
  line-height: 20px;
  text-transform: uppercase;
}

.clients-logos {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 8px;
}

.clients-logo-card {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 154px;
  overflow: hidden;
  background: #1f1f1f;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 21px 1px;
  position: relative;
}

.clients-logo-mask {
  width: 296px;
  height: 112px;
  background: #fff;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
}

.services-v2 {
  width: min(1920px, 100%);
  margin: 0 auto;
  padding: 80px clamp(20px, 12.5vw, 240px);
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.services-v2-head {
  display: flex;
  align-items: end;
  gap: 40px;
}

.services-v2-heading {
  flex: 1 0 0;
  min-width: 0;
}

.services-v2-title {
  margin: 0;
  color: #e5e2e1;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 72px;
  font-weight: 700;
  line-height: 72px;
  letter-spacing: 0;
  text-transform: uppercase;
}

.services-v2-title span {
  display: block;
  color: #ff5722;
}

.services-v2-description {
  width: min(479px, 100%);
  margin: 32px 0 0;
  color: rgba(255, 255, 255, 0.6);
  font-family: 'Inter', sans-serif;
  font-size: 20px;
  line-height: 28px;
}

.services-v2-deliverables {
  width: 524px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.services-v2-deliverable {
  display: grid;
  grid-template-columns: 164px minmax(0, 1fr);
  gap: 52px;
  align-items: start;
  padding-bottom: 16px;
}

.services-v2-deliverable--border {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 17px;
}

.services-v2-deliverable-label {
  margin: 0;
  color: rgba(255, 255, 255, 0.6);
  font-family: 'Space Grotesk', sans-serif;
  font-size: 14px;
  letter-spacing: 4.2px;
  line-height: 20px;
  text-transform: uppercase;
}

.services-v2-deliverable-value {
  margin: 0;
  color: #fff;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
}

.services-v2-deliverable-line {
  display: flex;
  align-items: center;
  gap: 12px;
}

.services-v2-deliverable-tag {
  margin: 0;
  padding: 4px 12px 4px 8px;
  background: #ff5722;
  color: #fff;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 10px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: 0;
  text-transform: uppercase;
}

.services-v2-visual {
  position: relative;
  width: 100%;
}

.services-v2-visual img {
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
}

.services-v2-controls {
  position: absolute;
  right: 24px;
  bottom: 24px;
  display: flex;
  align-items: center;
  gap: 40px;
}

.services-v2-dots {
  width: 292px;
  display: flex;
  gap: 8px;
}

.services-v2-dots span {
  flex: 1 0 0;
  height: 4px;
  border-radius: 13px;
  background: rgba(255, 255, 255, 0.28);
}

.services-v2-dots span.active {
  background: #fff;
}

.services-v2-arrows {
  display: flex;
  align-items: center;
  gap: 16px;
}

.services-v2-arrows button {
  width: 40px;
  height: 40px;
  border-radius: 24px;
  border: 0.8px solid #fff;
  background: rgba(255, 255, 255, 0.16);
  display: grid;
  place-items: center;
  padding: 0;
}

.services-v2-arrows img {
  width: 6.8px;
  height: 12.4px;
}

.services-v2-arrows button:first-child img {
  transform: scaleX(-1);
}

.services {
  padding: 4rem 0 5rem;
  display: grid;
  gap: 4rem;
}

.service-row {
  display: grid;
  grid-template-columns: 5fr 7fr;
  gap: 2rem;
  align-items: center;
}

.service-row.reverse {
  grid-template-columns: 7fr 5fr;
}

.service-row.reverse .service-copy {
  order: 2;
}

.service-row.reverse .service-media {
  order: 1;
}

.service-copy span {
  display: inline-block;
  margin-bottom: 0.6rem;
  color: rgba(255, 87, 26, 0.5);
  font-family: 'Epilogue', sans-serif;
  font-size: 2.7rem;
  font-weight: 800;
}

.service-copy h2 {
  font-size: clamp(2rem, 4vw, 3.4rem);
}

.service-copy p {
  margin: 1rem 0 1.4rem;
  color: var(--muted);
  font-size: 0.86rem;
  line-height: 1.7;
  max-width: 480px;
}

.service-copy a,
.service-copy button {
  border: 0;
  padding: 0;
  background: none;
  color: var(--accent);
  font-family: 'Inter', sans-serif;
  font-size: 0.56rem;
  font-weight: 700;
}

.service-row.reverse .service-copy button {
  padding: 0.7rem 1rem;
  background: #2b2b2b;
  color: var(--text);
}

.service-media {
  overflow: hidden;
  background: var(--bg-hi);
}

.service-media.wide {
  aspect-ratio: 16 / 9;
}

.service-media.tall {
  aspect-ratio: 4 / 5;
  max-height: 560px;
}

.service-media img,
.mini-media img {
  height: 100%;
  object-fit: cover;
}

.mini-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.2rem;
}

.mini-card {
  display: grid;
  gap: 1.2rem;
  padding: 1.35rem;
  background: var(--bg-card);
}

.mini-card span {
  color: rgba(255, 87, 26, 0.5);
  font-family: 'Epilogue', sans-serif;
  font-size: 1.7rem;
  font-weight: 800;
}

.mini-card h3 {
  margin-top: 0.35rem;
  font-size: 1.7rem;
}

.mini-card p {
  margin: 0.7rem 0 0;
  color: var(--muted);
  font-size: 0.78rem;
  line-height: 1.7;
}

.mini-media {
  aspect-ratio: 16 / 9;
  overflow: hidden;
}

.full-match {
  padding-bottom: 4rem;
}

.split-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.split-copy {
  padding: 2rem;
  background: var(--accent);
  color: #421100;
}

.split-copy h2 {
  font-size: clamp(2.1rem, 4vw, 4rem);
}

.split-copy p {
  max-width: 360px;
  margin: 1rem 0 1.4rem;
  color: rgba(66, 17, 0, 0.78);
  font-size: 0.84rem;
  line-height: 1.65;
}

.split-copy a {
  display: inline-block;
  padding: 0.55rem 0.95rem;
  background: #111;
  color: var(--text);
  font-size: 0.52rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.split-media img {
  height: 100%;
  min-height: 320px;
  object-fit: cover;
}

.cta {
  padding: 4.3rem 0;
  text-align: center;
  background: #0f0f0f;
}

.cta h2 {
  font-size: clamp(3rem, 8vw, 6rem);
  margin-bottom: 1.4rem;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 0.8rem;
}

.cta-primary,
.cta-secondary {
  padding: 0.62rem 0.95rem;
  font-family: 'Epilogue', sans-serif;
  font-size: 0.54rem;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.cta-primary {
  background: var(--accent);
  color: #431100;
}

.cta-secondary {
  border: 1px solid var(--line);
}

.footer {
  border-top: 1px solid var(--line);
  background: var(--bg-low);
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.4rem 0 2rem;
}

.links {
  display: flex;
  gap: 0.9rem;
}

.links a,
.footer p {
  color: rgba(229, 226, 225, 0.45);
  font-size: 0.44rem;
  font-weight: 600;
}

.footer p {
  margin: 0;
}

@media (max-width: 1024px) {
  .services-v2 {
    padding: 64px 28px;
    border-right: 0;
  }

  .services-v2-head {
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
  }

  .services-v2-deliverables {
    width: 100%;
  }

  .services-v2-controls {
    right: 16px;
    bottom: 16px;
    gap: 24px;
  }

  .services-v2-dots {
    width: 220px;
  }

  .service-row,
  .service-row.reverse,
  .split-card {
    grid-template-columns: 1fr;
  }

  .service-row.reverse .service-copy,
  .service-row.reverse .service-media {
    order: initial;
  }

  .service-media.tall {
    max-height: none;
  }

  .mini-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 820px) {
  .section {
    width: min(1200px, calc(100% - 28px));
  }

  .services-v2 {
    padding: 56px 14px;
  }

  .services-v2-title {
    font-size: clamp(42px, 10vw, 58px);
    line-height: 1.02;
  }

  .services-v2-description {
    margin-top: 20px;
    font-size: 16px;
    line-height: 24px;
  }

  .services-v2-deliverable {
    grid-template-columns: 1fr;
    gap: 10px;
    padding-bottom: 14px;
  }

  .services-v2-deliverable-line {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .services-v2-controls {
    position: static;
    margin-top: 16px;
    justify-content: space-between;
    gap: 16px;
  }

  .services-v2-dots {
    width: 100%;
    max-width: 292px;
  }

  .clients {
    padding: 56px 0;
  }

  .clients-shell {
    padding-inline: 14px;
  }

  .clients-head {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  .clients-title {
    font-size: clamp(36px, 10vw, 52px);
    line-height: 1.02;
  }

  .clients-note {
    width: auto;
    text-align: left;
  }

  .clients-logos {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .clients-logo-card {
    height: 128px;
    padding: 16px 1px;
  }

  .clients-logo-mask {
    transform: scale(0.86);
  }

  .cta-buttons {
    flex-direction: column;
  }

  .cta-primary,
  .cta-secondary {
    width: 100%;
  }

  .footer-inner {
    flex-direction: column;
    text-align: center;
  }
}

@media (max-width: 560px) {
  .services-v2 {
    padding: 48px 14px;
  }

  .services-v2-title {
    font-size: clamp(34px, 11vw, 44px);
  }

  .services-v2-description {
    font-size: 14px;
    line-height: 22px;
  }

  .services-v2-deliverable-label {
    font-size: 12px;
    letter-spacing: 3px;
  }

  .services-v2-deliverable-value {
    font-size: 16px;
    line-height: 24px;
  }

  .services-v2-arrows button {
    width: 36px;
    height: 36px;
  }

  .services-v2-dots {
    max-width: 170px;
  }

  .clients {
    padding: 48px 0;
  }

  .clients-logos {
    grid-template-columns: 1fr;
  }

  .clients-logo-card {
    height: 116px;
  }

  .clients-logo-mask {
    transform: scale(0.78);
  }

  .split-copy,
  .mini-card {
    padding: 1rem;
  }

  .links {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
