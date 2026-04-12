<script setup lang="ts">
const navigation = ['WORK', 'SERVICES', 'EQUIPMENT', 'STUDIO']

const stats = [
  { value: '[500]+', label: 'Video da san xuat' },
  { value: '[10]M+', label: 'Tong luot xem' },
  { value: '[150]+', label: 'Doi tac chien luoc' },
]

const clients = ['WIKA', 'SPIRITBASE', 'VTV', 'YAMAHA', 'FPT', 'UNILEVER']

const marqueeClients = [...clients, ...clients]

const featuredServices = [
  {
    id: '01',
    title: 'PHIM QUANG CAO (TVC)',
    description:
      'San xuat TVC chuan dien anh cho chien dich thuong hieu, ket hop concept sang tao, quay dung cao cap va thong diep ngan gon nhung sac net.',
    action: 'VIEW TVC SHOWREEL',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCgN0zh1ILcEE-VNeqTVSWTKdJeuhV8imIGmufj45K0eGHtT84CvjPCUu8HsWSRAFmB13EmgwA8Tc-wolSbulsJSSAfDzBKt1wVsMSs0l8-2exKmrsy3Q5kk_hMrIX_3trpPGepGWVt5Ztak4AwykbIbV9sEuUzywfnoMpEqLsG40lyt8e4HpgaHT_fS_L6iZgCG_VGI3jCw0zzvQNbxUAbj7PTCIMGYZ9JLoQlrJ1JUDYFZWJpB9KnErBk1nsUS6BRr_lR15orrsmD',
    alt: 'Canh quay TVC xe hoi duoc bo tri anh sang cao cap trong dem.',
    layout: 'wide',
  },
  {
    id: '02',
    title: 'FOCUS CAM',
    description:
      'Giai phap quay bam net va chuyen dong toc do cao cho cac canh hanh dong, the thao va thuong mai can do on dinh va nhan manh vao nhan vat.',
    action: 'TECHNICAL SPECS',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuADFeB9wBvyp18wRMdfMegjIhPLXpx4-Dfw8qQdpRbaLuF2lYtXrR-8S7HDVrFqq8dBtHwUGhAPlm_DtcxJ5YfkSKQt7rckRkpPGwcsJdsCTR5NvDoiFkYkIIYwxtjkVryVUF8DAea2meguPZ9k0JXVU7eH7Fi14AUd5MR3RN0NKcgUfxi8WyIYpfuW4faxjeVkVWVlZzAd1codzGM3dmrV_LXn7h4G3DXbU9mtKp-8C35Pnsk_F76XPqzOiSD1aIp1hKzqx5057g_Z',
    alt: 'Nguoi quay phim van hanh gimbal theo sat van dong vien.',
    layout: 'portrait',
  },
]

const supportServices = [
  {
    id: '03',
    title: 'EVENT RECAP',
    description:
      'Tong hop khoanh khac quan trong, nang luong su kien va luong khan gia thanh mot video highlight gia tri thuong hieu cao.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDzWrCXwmKd0U7KwuDS51GD-iVW_YRqSZ5NBQHQgBLceP-45dlViGsJqHdDSQtQHuq9C6ee6qMVTj0cX3NbUqbwBt_uFp-sSzv6hBRe3FkHz6IjoypwovC3pSaZAeI03tuxjY2wBZyFB0zCws5PYnhSswUlvKK6WLry2tC3lrrf7EkEkPZ-7rHvkD8AKen0rAAnW1mxZwJ4ig-clynUtbvOANDEZ-AdlGr2fpJG4iKgpXSQBKS5-e7XIF4EqCZFYUr1GahMbHVKZJOi',
    alt: 'San khau am nhac lon voi den laser va dam dong.',
  },
  {
    id: '04',
    title: 'PRODUCT REVIEW',
    description:
      'Video review san pham chinh xac ve thong so, day chat lieu va toi uu bo cuc anh sang de gia tang chuyen doi.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCUPz6fxnooBh6sIWIPTDYmpWGQPnM1LxvxLfM0P0m_rKDSbnfgqm0iZA2aOzPKCb4hmMf9q2_768XP1EkmGxQCTtlSdTJzmqiZVhjWTxuTCuq5GVuWF7Hccp8FKHAQEIKzPpN40zhdWjgdkY3pktgJk5OUXb6C_jxil-iNzQOzm1JRPjzIZgf3zrmUMY-Sjd8-GzbOcNKF8-m3hLI1Z2lMccslcH5P1PbiYBqbPP-5V_PxfI3Eh8poDAeONnk_9hg6CoBSfreFYTjx',
    alt: 'Canh dong ho thong minh duoc chieu sang toi gian.',
  },
]

useHead({
  title: 'Cinema Core | Landing Page',
  meta: [
    {
      name: 'description',
      content:
        'Landing page cho studio media production voi bo cuc cinematic, nhan manh TVC, event recap va full match coverage.',
    },
  ],
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Epilogue:wght@400;700;800;900&family=Inter:wght@300;400;600;700;800&display=swap',
    },
  ],
})
</script>

<template>
  <div class="page-shell">
    <NuxtRouteAnnouncer />

    <div class="ambient ambient-left" />
    <div class="ambient ambient-right" />
    <div class="grid-overlay" />

    <header class="site-header">
      <div class="brand animate-rise">CINEMA_CORE</div>

      <nav class="desktop-nav animate-rise" style="--delay: 120ms">
        <a v-for="item in navigation" :key="item" href="#">{{ item }}</a>
      </nav>

      <a class="button button-primary animate-rise" style="--delay: 180ms" href="#contact">
        START PROJECT
      </a>
    </header>

    <main>
      <section class="hero">
        <div class="hero-media">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZAOcnJ9_JtnDM6fcRLEQ-_xib9CIVCpoO2ztNhz41YuCEUXlGgQ7N0VNVVGqRnAKb2fXKuKtt5gctUoxVatvkrQ_ePlNJFBe_t_Mgy2tzptV151oU1Zohb1sfRPiePehobR53BQtpWge_VZ-Zgvl_5qm_2YfjY_IXg2N1Eo8Ray7l1nYbgX5hTWT8mhU4yXT7vMEZJlm4iwjkZh46P4-hx4FkrotmVDRS7w_OswMsIX5RHvvG9k6QrVMmBofT_fQpwYQrC7xyzTEU"
            alt="Ong kinh may quay trong khong gian studio toi."
          >
        </div>

        <div class="container hero-grid">
          <div class="hero-copy">
            <span class="eyebrow animate-rise" style="--delay: 120ms">CREATIVE POWERHOUSE</span>
            <h1 class="hero-title animate-rise" style="--delay: 200ms">
              THE
              <br>
              MEDIA
              <br>
              <span>PRODUCTION</span>
            </h1>

            <div class="hero-stats">
              <div
                v-for="(item, index) in stats"
                :key="item.label"
                class="stat-card animate-rise"
                :style="{ '--delay': `${320 + index * 110}ms` }"
              >
                <strong>{{ item.value }}</strong>
                <span>{{ item.label }}</span>
              </div>
            </div>
          </div>

          <div class="hero-side animate-rise" style="--delay: 360ms">
            <p>
              Chung toi khong chi quay hinh. Chung toi thiet ke trai nghiem thi giac cho
              nhan hang bang storytelling, nhiep anh va hau ky mang tinh dien anh.
            </p>
            <div class="scroll-cue">
              <span />
              SCROLL FOR WORK
            </div>
          </div>
        </div>
      </section>

      <section class="clients">
        <div class="container">
          <p class="section-label">KHACH HANG TIN CAY</p>
          <div class="marquee-shell">
            <div class="marquee-track">
              <div v-for="(client, index) in marqueeClients" :key="`${client}-${index}`" class="client-pill">
                {{ client }}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="services container">
        <article
          v-for="(service, index) in featuredServices"
          :key="service.id"
          class="feature-row"
          :class="[`feature-row-${service.layout}`, { reverse: index % 2 === 1 }]"
        >
          <div class="feature-copy animate-rise" :style="{ '--delay': `${120 + index * 120}ms` }">
            <span class="feature-index">{{ service.id }}</span>
            <h2>{{ service.title }}</h2>
            <p>{{ service.description }}</p>
            <a class="text-link" href="#">
              {{ service.action }}
              <span aria-hidden="true">-></span>
            </a>
          </div>

          <div class="feature-media glass-card animate-rise" :style="{ '--delay': `${220 + index * 120}ms` }">
            <img :src="service.image" :alt="service.alt">
          </div>
        </article>

        <div class="support-grid">
          <article
            v-for="(service, index) in supportServices"
            :key="service.id"
            class="support-card glass-card animate-rise"
            :style="{ '--delay': `${160 + index * 120}ms` }"
          >
            <div class="support-copy">
              <span class="feature-index">{{ service.id }}</span>
              <h3>{{ service.title }}</h3>
              <p>{{ service.description }}</p>
            </div>
            <div class="support-media">
              <img :src="service.image" :alt="service.alt">
            </div>
          </article>
        </div>
      </section>

      <section class="full-match container">
        <div class="match-card">
          <div class="match-copy animate-rise" style="--delay: 120ms">
            <div class="pulse-orb" />
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
              Giai phap ghi hinh the thao va livestream voi tu duy broadcast, giu tron
              khoanh khac quyet dinh va nang luong san dau.
            </p>
            <a class="button button-dark" href="#contact">BOOK COVERAGE</a>
          </div>

          <div class="match-media animate-rise" style="--delay: 240ms">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaFIQztd3-amw3_Z45xy-Z5sUWqJUQR6tGSZ1vodAsdJjZeCHxHz8V62zSi93xb3_8WrebWSuttW3ar_DVTVJ63mPVksIzXADkgOpdiGaLkQS9UgQyJWTie6z0aI6u48biSKsxreDHnReDlNVR7RSKsbeuc6dOMD77jRNBI5VTDLu3hNQ2Sp7cbEawd5v4EZ7wuL7a0P1QLrBt2p6Wf5to5d5iGLjzrUFlozH0STWinaASJES5WPee9pQTis4d1uG8qlnpKqCXmZJy"
              alt="San bong duoi anh den vao ban dem."
            >
          </div>
        </div>
      </section>

      <section id="contact" class="cta">
        <div class="cta-glow" />
        <div class="container cta-inner">
          <h2 class="animate-rise" style="--delay: 120ms">
            LET'S BUILD
            <br>
            YOUR VISION.
          </h2>
          <div class="cta-actions animate-rise" style="--delay: 220ms">
            <a class="button button-primary" href="mailto:hello@cinemacore.vn">GET IN TOUCH</a>
            <a class="button button-secondary" href="#">OUR PORTFOLIO</a>
          </div>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="brand footer-brand">CINEMA CORE</div>
      <div class="footer-links">
        <a href="#">CONTACT</a>
        <a href="#">INSTAGRAM</a>
        <a href="#">VIMEO</a>
        <a href="#">LINKEDIN</a>
        <a href="#">PRIVACY</a>
      </div>
      <p>© 2026 CINEMA CORE PRODUCTIONS. ALL RIGHTS RESERVED.</p>
    </footer>
  </div>
</template>

<style>
:root {
  color-scheme: dark;
  --bg: #131313;
  --bg-soft: #1c1b1b;
  --bg-card: rgba(34, 33, 33, 0.85);
  --line: rgba(92, 64, 55, 0.28);
  --text: #e5e2e1;
  --muted: rgba(229, 226, 225, 0.62);
  --muted-strong: rgba(229, 226, 225, 0.82);
  --accent: #ff571a;
  --accent-soft: #ffb59e;
  --shadow: 0 24px 60px rgba(0, 0, 0, 0.35);
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-width: 320px;
  background:
    radial-gradient(circle at top right, rgba(255, 87, 26, 0.12), transparent 28%),
    radial-gradient(circle at bottom left, rgba(255, 181, 158, 0.08), transparent 30%),
    var(--bg);
  color: var(--text);
  font-family: 'Inter', sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  display: block;
  max-width: 100%;
}

.page-shell {
  position: relative;
  overflow: clip;
  isolation: isolate;
}

.ambient {
  position: fixed;
  inset: auto;
  z-index: -2;
  width: 34rem;
  height: 34rem;
  border-radius: 999px;
  filter: blur(120px);
  opacity: 0.3;
  pointer-events: none;
  animation: drift 16s ease-in-out infinite;
}

.ambient-left {
  top: 6rem;
  left: -12rem;
  background: rgba(255, 87, 26, 0.22);
}

.ambient-right {
  right: -12rem;
  bottom: 16rem;
  background: rgba(255, 181, 158, 0.18);
  animation-delay: -6s;
}

.grid-overlay {
  position: fixed;
  inset: 0;
  z-index: -3;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
  background-size: 72px 72px;
  mask-image: radial-gradient(circle at center, black 40%, transparent 100%);
  opacity: 0.15;
  pointer-events: none;
}

.container {
  width: min(1180px, calc(100% - 48px));
  margin: 0 auto;
}

.site-header {
  position: fixed;
  inset: 0 0 auto;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  width: min(1280px, calc(100% - 32px));
  margin: 16px auto 0;
  padding: 18px 24px;
  background: rgba(19, 19, 19, 0.62);
  backdrop-filter: blur(22px);
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.brand,
.hero-title,
.feature-copy h2,
.support-copy h3,
.match-copy h2,
.cta h2 {
  font-family: 'Epilogue', sans-serif;
}

.brand {
  font-size: 1.35rem;
  font-weight: 900;
  letter-spacing: -0.06em;
}

.desktop-nav {
  display: flex;
  gap: 1.6rem;
  margin-left: auto;
  margin-right: 1rem;
}

.desktop-nav a,
.footer-links a {
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.24em;
  color: rgba(229, 226, 225, 0.65);
  transition:
    color 220ms ease,
    transform 220ms ease;
}

.desktop-nav a:hover,
.footer-links a:hover {
  color: var(--accent-soft);
  transform: translateY(-2px);
}

.button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  overflow: hidden;
  border: 1px solid transparent;
  padding: 0.95rem 1.35rem;
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  transition:
    transform 220ms ease,
    border-color 220ms ease,
    background-color 220ms ease,
    box-shadow 220ms ease,
    color 220ms ease;
}

.button::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg, transparent 0%, rgba(255, 255, 255, 0.24) 50%, transparent 100%);
  transform: translateX(-130%);
  transition: transform 420ms ease;
}

.button:hover::before {
  transform: translateX(130%);
}

.button:hover {
  transform: translateY(-2px);
}

.button-primary {
  background: var(--accent);
  color: #2c0900;
  box-shadow: 0 12px 32px rgba(255, 87, 26, 0.25);
}

.button-primary:hover {
  box-shadow: 0 18px 36px rgba(255, 87, 26, 0.38);
}

.button-secondary {
  border-color: rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.02);
}

.button-secondary:hover,
.button-dark:hover {
  border-color: rgba(255, 255, 255, 0.26);
  background: rgba(255, 255, 255, 0.06);
}

.button-dark {
  background: #101010;
  color: var(--text);
}

.hero {
  position: relative;
  min-height: 100vh;
  padding: 8.5rem 0 4rem;
}

.hero-media {
  position: absolute;
  inset: 0;
  overflow: hidden;
  opacity: 0.38;
}

.hero-media::after {
  content: '';
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgba(19, 19, 19, 0.84) 0%, rgba(19, 19, 19, 0.24) 48%, rgba(19, 19, 19, 0.78) 100%),
    linear-gradient(180deg, rgba(19, 19, 19, 0.18) 0%, rgba(19, 19, 19, 0.92) 100%);
}

.hero-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(1) saturate(0.9);
  animation: slow-zoom 18s ease-in-out infinite alternate;
}

.hero-grid {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 300px;
  gap: 2rem;
  align-items: end;
  min-height: calc(100vh - 12rem);
}

.hero-copy {
  max-width: 760px;
}

.eyebrow,
.section-label,
.stat-card span,
.feature-index,
.text-link,
.scroll-cue,
.site-footer p {
  letter-spacing: 0.24em;
  text-transform: uppercase;
}

.eyebrow {
  display: inline-flex;
  margin-bottom: 1.2rem;
  padding: 0.45rem 0.7rem;
  border: 1px solid rgba(255, 87, 26, 0.2);
  background: rgba(255, 87, 26, 0.12);
  color: var(--accent-soft);
  font-size: 0.68rem;
  font-weight: 800;
}

.hero-title {
  margin: 0;
  font-size: clamp(4rem, 10vw, 8.4rem);
  line-height: 0.86;
  letter-spacing: -0.08em;
  text-transform: uppercase;
}

.hero-title span {
  color: var(--accent);
  text-shadow: 0 0 36px rgba(255, 87, 26, 0.28);
}

.hero-stats {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2.6rem;
}

.stat-card {
  min-width: 150px;
  padding: 1.15rem 1.2rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(15, 15, 15, 0.62);
  backdrop-filter: blur(14px);
  box-shadow: var(--shadow);
}

.stat-card strong {
  display: block;
  font-family: 'Epilogue', sans-serif;
  font-size: clamp(1.8rem, 3vw, 2.4rem);
  font-weight: 900;
  letter-spacing: -0.06em;
}

.stat-card span {
  display: block;
  margin-top: 0.5rem;
  color: rgba(229, 226, 225, 0.46);
  font-size: 0.56rem;
  font-weight: 700;
}

.hero-side {
  align-self: end;
  max-width: 290px;
  margin-left: auto;
}

.hero-side p {
  margin: 0 0 2rem;
  color: var(--muted);
  font-size: 0.98rem;
  line-height: 1.75;
}

.scroll-cue {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  color: rgba(229, 226, 225, 0.54);
  font-size: 0.62rem;
  font-weight: 700;
}

.scroll-cue span {
  width: 56px;
  height: 1px;
  background: linear-gradient(90deg, var(--accent) 0%, rgba(255, 87, 26, 0.06) 100%);
  animation: pulse-line 2.4s ease-in-out infinite;
}

.clients,
.cta {
  position: relative;
  padding: 5rem 0;
}

.clients {
  background: linear-gradient(180deg, rgba(14, 14, 14, 0.9) 0%, rgba(19, 19, 19, 0.4) 100%);
  border-top: 1px solid rgba(255, 255, 255, 0.04);
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
}

.section-label {
  margin: 0 0 1.4rem;
  color: var(--accent);
  font-size: 0.62rem;
  font-weight: 800;
  text-align: center;
}

.marquee-shell {
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(14, 14, 14, 0.58);
}

.marquee-track {
  display: flex;
  width: max-content;
  animation: marquee 24s linear infinite;
}

.client-pill {
  min-width: 180px;
  padding: 1.55rem 1.2rem;
  border-right: 1px solid rgba(255, 255, 255, 0.06);
  text-align: center;
  font-family: 'Epilogue', sans-serif;
  font-size: 1.1rem;
  font-weight: 900;
  color: rgba(229, 226, 225, 0.62);
  transition:
    color 220ms ease,
    background-color 220ms ease;
}

.client-pill:hover {
  color: var(--text);
  background: rgba(255, 255, 255, 0.04);
}

.services {
  padding: 7rem 0;
  display: grid;
  gap: 6rem;
}

.feature-row {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 2rem;
  align-items: center;
}

.feature-row.reverse .feature-copy {
  order: 2;
}

.feature-row.reverse .feature-media {
  order: 1;
}

.feature-row-wide .feature-copy {
  grid-column: span 5;
}

.feature-row-wide .feature-media {
  grid-column: span 7;
}

.feature-row-portrait .feature-copy {
  grid-column: span 5;
}

.feature-row-portrait .feature-media {
  grid-column: span 7;
  min-height: 580px;
}

.feature-copy h2,
.match-copy h2,
.cta h2 {
  margin: 0;
  font-size: clamp(2.5rem, 5vw, 4.7rem);
  line-height: 0.95;
  letter-spacing: -0.08em;
  text-transform: uppercase;
}

.feature-copy p,
.support-copy p,
.match-copy p {
  margin: 1.3rem 0 0;
  color: var(--muted);
  font-size: 1rem;
  line-height: 1.85;
}

.feature-index {
  display: inline-block;
  margin-bottom: 1rem;
  color: rgba(255, 87, 26, 0.3);
  font-family: 'Epilogue', sans-serif;
  font-size: clamp(2.8rem, 5vw, 4rem);
  font-weight: 900;
  line-height: 1;
}

.text-link {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  margin-top: 2rem;
  font-size: 0.72rem;
  font-weight: 800;
  color: var(--accent);
}

.text-link span {
  transition: transform 220ms ease;
}

.text-link:hover span {
  transform: translateX(4px);
}

.glass-card {
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: linear-gradient(180deg, rgba(42, 42, 42, 0.82) 0%, rgba(20, 20, 20, 0.86) 100%);
  box-shadow: var(--shadow);
}

.glass-card::after {
  content: '';
  position: absolute;
  inset: 0;
  border: 1px solid rgba(255, 255, 255, 0.04);
  pointer-events: none;
}

.feature-media {
  aspect-ratio: 16 / 9;
}

.feature-row-portrait .feature-media {
  aspect-ratio: 4 / 5;
}

.feature-media img,
.support-media img,
.match-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition:
    transform 700ms ease,
    filter 700ms ease;
}

.feature-media:hover img,
.support-card:hover img,
.match-media:hover img {
  transform: scale(1.05);
  filter: saturate(1.08);
}

.support-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.6rem;
}

.support-card {
  display: grid;
  gap: 1.6rem;
  padding: 2rem;
  transition:
    transform 240ms ease,
    border-color 240ms ease,
    box-shadow 240ms ease;
}

.support-card:hover {
  transform: translateY(-6px);
  border-color: rgba(255, 181, 158, 0.2);
  box-shadow: 0 26px 50px rgba(0, 0, 0, 0.42);
}

.support-copy h3 {
  margin: 0;
  font-size: 2rem;
  letter-spacing: -0.06em;
}

.support-media {
  overflow: hidden;
  aspect-ratio: 16 / 9;
}

.support-media img {
  filter: grayscale(1);
}

.support-card:hover .support-media img {
  filter: grayscale(0);
}

.full-match {
  padding-bottom: 6rem;
}

.match-card {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(320px, 1fr);
  overflow: hidden;
  background: linear-gradient(90deg, var(--accent) 0%, #fa6a34 44%, #1a1a1a 44%, #111111 100%);
  box-shadow: 0 30px 70px rgba(0, 0, 0, 0.35);
}

.match-copy,
.match-media {
  position: relative;
  min-height: 420px;
}

.match-copy {
  padding: 3rem;
  color: #2c0900;
}

.match-copy p {
  max-width: 420px;
  color: rgba(44, 9, 0, 0.76);
}

.pulse-orb {
  position: absolute;
  top: 2rem;
  right: 2rem;
  width: 88px;
  height: 88px;
  border-radius: 999px;
  border: 1px solid rgba(44, 9, 0, 0.22);
}

.pulse-orb::before {
  content: '';
  position: absolute;
  inset: 18px;
  border-radius: inherit;
  background: rgba(44, 9, 0, 0.1);
  animation: pulse-core 2.8s ease-in-out infinite;
}

.match-media::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(17, 17, 17, 0.08), rgba(17, 17, 17, 0.2));
}

.cta {
  padding: 7rem 0 8rem;
  text-align: center;
  background: #0f0f0f;
}

.cta-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  width: min(68vw, 780px);
  height: min(68vw, 780px);
  background: rgba(255, 87, 26, 0.18);
  border-radius: 999px;
  filter: blur(150px);
  transform: translate(-50%, -50%);
  animation: breathing 5.5s ease-in-out infinite;
}

.cta-inner {
  position: relative;
  z-index: 1;
}

.cta h2 {
  margin-bottom: 2rem;
  font-size: clamp(3.2rem, 9vw, 6.6rem);
}

.cta-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.site-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 2rem 24px 3rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  background: #0b0b0b;
}

.footer-brand {
  font-size: 1.05rem;
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.2rem;
}

.site-footer p {
  margin: 0;
  color: rgba(229, 226, 225, 0.42);
  font-size: 0.58rem;
  font-weight: 700;
}

.animate-rise {
  opacity: 0;
  transform: translateY(28px);
  animation: rise 780ms cubic-bezier(0.2, 0.7, 0.2, 1) forwards;
  animation-delay: var(--delay, 0ms);
}

@keyframes rise {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes drift {
  0%,
  100% {
    transform: translate3d(0, 0, 0) scale(1);
  }
  50% {
    transform: translate3d(24px, -18px, 0) scale(1.08);
  }
}

@keyframes slow-zoom {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
}

@keyframes pulse-line {
  0%,
  100% {
    opacity: 0.5;
    transform: scaleX(0.78);
    transform-origin: left center;
  }
  50% {
    opacity: 1;
    transform: scaleX(1);
    transform-origin: left center;
  }
}

@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

@keyframes pulse-core {
  0%,
  100% {
    transform: scale(0.92);
    opacity: 0.55;
  }
  50% {
    transform: scale(1.08);
    opacity: 1;
  }
}

@keyframes breathing {
  0%,
  100% {
    transform: translate(-50%, -50%) scale(0.92);
  }
  50% {
    transform: translate(-50%, -50%) scale(1.04);
  }
}

@media (max-width: 1100px) {
  .hero-grid,
  .match-card,
  .feature-row,
  .support-grid {
    grid-template-columns: 1fr;
  }

  .hero-side,
  .feature-row.reverse .feature-copy,
  .feature-row.reverse .feature-media {
    order: initial;
  }

  .hero-grid {
    min-height: auto;
    align-items: start;
  }

  .hero-copy,
  .hero-side {
    max-width: 100%;
  }

  .hero-side {
    margin-left: 0;
  }

  .feature-row-wide .feature-copy,
  .feature-row-wide .feature-media,
  .feature-row-portrait .feature-copy,
  .feature-row-portrait .feature-media {
    grid-column: auto;
  }

  .feature-row-portrait .feature-media {
    min-height: 0;
  }

  .match-card {
    background: linear-gradient(180deg, var(--accent) 0%, #fa6a34 48%, #111111 48%, #111111 100%);
  }
}

@media (max-width: 820px) {
  .site-header {
    width: calc(100% - 20px);
    padding: 14px 16px;
  }

  .desktop-nav {
    display: none;
  }

  .hero {
    padding-top: 7rem;
  }

  .container {
    width: min(100% - 24px, 1180px);
  }

  .hero-side p,
  .feature-copy p,
  .support-copy p,
  .match-copy p {
    font-size: 0.96rem;
    line-height: 1.75;
  }

  .hero-stats {
    gap: 0.8rem;
  }

  .stat-card {
    min-width: calc(50% - 0.4rem);
  }

  .cta-actions .button {
    min-width: 220px;
  }

  .site-footer {
    flex-direction: column;
    text-align: center;
  }
}

@media (max-width: 560px) {
  .site-header {
    gap: 0.75rem;
    padding: 12px 14px;
  }

  .button {
    padding: 0.9rem 1rem;
    font-size: 0.62rem;
    letter-spacing: 0.18em;
  }

  .brand {
    font-size: 1rem;
  }

  .hero-title {
    font-size: clamp(3.4rem, 18vw, 5rem);
  }

  .hero-title span {
    font-size: 0.86em;
    letter-spacing: -0.06em;
  }

  .hero {
    min-height: auto;
    padding-top: 6.6rem;
  }

  .hero-stats {
    margin-top: 1.6rem;
  }

  .stat-card {
    min-width: 100%;
  }

  .support-card,
  .match-copy {
    padding: 1.35rem;
  }

  .feature-row,
  .services {
    gap: 3rem;
  }

  .client-pill {
    min-width: 150px;
    padding: 1.2rem 0.9rem;
    font-size: 0.92rem;
  }

  .match-copy,
  .match-media {
    min-height: 320px;
  }

  .match-media {
    min-height: 260px;
  }

  .feature-copy h2,
  .support-copy h3,
  .match-copy h2 {
    font-size: 2.2rem;
  }

  .cta {
    padding: 5.5rem 0 6rem;
  }

  .cta-actions {
    flex-direction: column;
  }

  .cta-actions .button {
    width: 100%;
  }

  .site-footer {
    padding: 1.5rem 18px 2.2rem;
  }

  .pulse-orb {
    width: 70px;
    height: 70px;
  }
}

@media (max-width: 420px) {
  .hero-title {
    font-size: clamp(2.9rem, 15vw, 4rem);
    line-height: 0.9;
  }

  .hero-title span {
    font-size: 0.82em;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation: none !important;
    transition: none !important;
    scroll-behavior: auto !important;
  }

  .animate-rise {
    opacity: 1;
    transform: none;
  }
}
</style>
