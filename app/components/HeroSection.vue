<script setup lang="ts">
const heroMaskImage = '/figma/hero-folder-mask.svg'

const heroStats = [
  { value: '[500]+', label: 'Video da san xuat' },
  { value: '[10]M+', label: 'Tong luot xem' },
  { value: '[20]+', label: 'Doi tac & Nhan hang' },
]

const heroCardMaskStyle = {
  WebkitMaskImage: `url('${heroMaskImage}')`,
  maskImage: `url('${heroMaskImage}')`,
}
</script>

<template>
  <section class="hero-section" data-node-id="8:1058">
    <div class="hero-section__container">
      <div class="hero-glow hero-glow--main" />
      <div class="hero-glow hero-glow--right-bottom" />
      <div class="hero-glow hero-glow--right-top" />

      <article class="hero-card" :style="heroCardMaskStyle">
        <div class="hero-card__line" />
        <div class="hero-card__content">
          <div class="hero-badge">Production Agency</div>
          <h1>
            THE MEDIA
            <br>
            PRODUCTION
          </h1>
          <p>Kien tao hinh anh - Nang tam thuong hieu</p>
        </div>
      </article>

      <aside class="hero-stats">
        <article v-for="item in heroStats" :key="item.label" class="hero-stat">
          <strong>{{ item.value }}</strong>
          <small>{{ item.label }}</small>
        </article>
      </aside>
    </div>
    <div class="hero-section__bottom-line" />
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  min-height: 814px;
  padding-top: 140px;
  padding-bottom: 98px;
  overflow: hidden;
}

.hero-section__container {
  position: relative;
  display: flex;
  align-items: center;
  gap: 48px;
  width: min(1600px, calc(100% - 48px));
  min-height: 576px;
  margin: 0 auto;
}

.hero-glow {
  position: absolute;
  border-radius: 999px;
  pointer-events: none;
}

.hero-glow--main {
  left: 27%;
  top: 50%;
  width: 864px;
  height: 861px;
  transform: translate(-50%, -50%);
  filter: blur(110px);
  background:
    radial-gradient(circle, rgba(255, 87, 34, 0.15) 0%, rgba(255, 87, 34, 0) 70%),
    rgba(255, 87, 34, 0.2);
}

.hero-glow--right-bottom,
.hero-glow--right-top {
  width: 392px;
  height: 392px;
  filter: blur(100px);
  background:
    radial-gradient(circle, rgba(255, 87, 34, 0.15) 0%, rgba(255, 87, 34, 0) 70%),
    rgba(255, 87, 34, 0.1);
}

.hero-glow--right-bottom {
  left: calc(50% + 616px);
  top: calc(50% + 201px);
  transform: translate(-50%, -50%);
}

.hero-glow--right-top {
  left: calc(50% + 898px);
  top: calc(50% - 232px);
  transform: translate(-50%, -50%);
}

.hero-card {
  position: relative;
  z-index: 1;
  flex: 1 0 0;
  max-width: 1087px;
  min-height: 576px;
  padding: 97px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  background:
    linear-gradient(99deg, rgba(255, 87, 34, 0.22) 0%, rgba(255, 87, 34, 0.16) 38%, rgba(8, 14, 25, 0.5) 100%),
    rgba(255, 255, 255, 0.05);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
}

.hero-card__line {
  position: absolute;
  left: 0;
  right: 0;
  top: 10.14%;
  height: 1px;
  opacity: 0.5;
  background: linear-gradient(90deg, rgba(255, 87, 34, 0) 0%, #ff5722 50%, rgba(255, 87, 34, 0) 100%);
}

.hero-card__content {
  position: relative;
  z-index: 1;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  min-height: 28px;
  padding: 5px 13px;
  margin-bottom: 28px;
  border: 1px solid rgba(255, 87, 34, 0.5);
  background: rgba(255, 255, 255, 0.1);
  color: #ff5722;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 3.6px;
  line-height: 16px;
  text-transform: uppercase;
}

h1 {
  margin: 0;
  color: #fff;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 110px;
  font-weight: 700;
  letter-spacing: -5.5px;
  line-height: 110px;
}

p {
  margin: 28px 0 0;
  max-width: 672px;
  color: rgba(255, 255, 255, 0.7);
  font-family: 'Space Grotesk', sans-serif;
  font-size: 30px;
  font-weight: 300;
  line-height: 36px;
}

.hero-stats {
  position: relative;
  z-index: 1;
  width: 280px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.hero-stat {
  padding: 42px 41px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 0;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.03);
}

.hero-stat strong {
  display: block;
  padding-bottom: 8px;
  color: #ff5722;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 48px;
}

.hero-stat small {
  display: block;
  color: rgba(255, 255, 255, 0.7);
  font-family: 'Space Grotesk', sans-serif;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 2.4px;
  line-height: 16px;
  text-transform: uppercase;
}

.hero-section__bottom-line {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 98px;
  height: 1px;
  opacity: 0.5;
  background: linear-gradient(90deg, rgba(255, 87, 34, 0) 0%, #ff5722 50%, rgba(255, 87, 34, 0) 100%);
}

@media (max-width: 1500px) {
  h1 {
    font-size: 88px;
    letter-spacing: -4px;
    line-height: 88px;
  }

  p {
    font-size: 24px;
    line-height: 30px;
  }
}

@media (max-width: 1180px) {
  .hero-section {
    min-height: auto;
    padding-top: 116px;
    padding-bottom: 78px;
  }

  .hero-section__container {
    flex-direction: column;
    align-items: stretch;
    width: min(1600px, calc(100% - 28px));
    min-height: auto;
    gap: 16px;
  }

  .hero-card {
    min-height: auto;
    padding: 56px 40px;
  }

  .hero-stats {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .hero-stat {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .hero-section__bottom-line {
    bottom: 78px;
  }
}

@media (max-width: 820px) {
  .hero-section {
    padding-top: 104px;
    padding-bottom: 64px;
  }

  .hero-card {
    padding: 28px 22px;
  }

  .hero-badge {
    margin-bottom: 20px;
    font-size: 11px;
    letter-spacing: 2.1px;
  }

  h1 {
    font-size: clamp(44px, 10vw, 72px);
    line-height: 1.02;
    letter-spacing: -0.05em;
  }

  p {
    margin-top: 18px;
    font-size: 20px;
    line-height: 1.35;
  }

  .hero-stats {
    grid-template-columns: 1fr;
  }

  .hero-stat {
    padding: 24px 22px;
  }

  .hero-stat strong {
    font-size: 38px;
    line-height: 1;
  }

  .hero-section__bottom-line {
    bottom: 64px;
  }
}
</style>
