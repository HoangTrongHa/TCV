<script setup lang="ts">
const ctaAssets = {
  union: '/figma/cta/union.svg',
  ellipse: '/figma/cta/ellipse.svg',
}
</script>

<template>
  <section id="contact" class="contact-cta" data-node-id="21:2008">
    <img class="contact-cta__union" :src="ctaAssets.union" alt="" aria-hidden="true">
    <img class="contact-cta__ellipse" :src="ctaAssets.ellipse" alt="" aria-hidden="true">

    <div class="contact-cta__inner">
      <h2>
        LET'S BUILD YOUR
        <span>VISION.</span>
      </h2>

      <a href="mailto:hello@kinetic.blueprint">GET IN TOUCH</a>
    </div>
  </section>
</template>

<style scoped>
.contact-cta {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 129px 80px 128px;
  overflow: hidden;
  background: #1c1b1b;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.contact-cta__inner {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  width: 100%;
}

.contact-cta h2 {
  margin: 0;
  color: #e5e2e1;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(44px, 7vw, 115px);
  font-weight: 700;
  line-height: min(96px, 0.9em);
  letter-spacing: clamp(-1px, -0.25vw, -4.8px);
  text-align: center;
  text-transform: uppercase;
}

.contact-cta h2 span {
  margin-left: 0.35em;
  color: #ff5722;
}

.contact-cta a {
  position: relative;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 79px;
  padding: 24px 52px;
  border: 0.794px solid rgba(255, 255, 255, 0.2);
  background: #fff;
  color: #1c1b1b;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 23.81px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 2.381px;
  text-transform: uppercase;
}

.contact-cta__union,
.contact-cta__ellipse {
  position: absolute;
  pointer-events: none;
}

.contact-cta__union {
  left: 50%;
  bottom: -520px;
  width: 2633px;
  max-width: none;
  transform: translateX(-50%);
  opacity: 0.95;
}

.contact-cta__ellipse {
  top: 160px;
  right: -250px;
  width: 760px;
  max-width: none;
  transform: rotate(-27.52deg);
  opacity: 0.85;
}

@media (max-width: 1200px) {
  .contact-cta {
    padding: 96px 28px;
  }

  .contact-cta__inner {
    gap: 40px;
  }

  .contact-cta a {
    min-height: 64px;
    padding: 18px 38px;
    font-size: 18px;
    letter-spacing: 1.7px;
  }

  .contact-cta__ellipse {
    right: -330px;
    width: 620px;
  }
}

@media (max-width: 820px) {
  .contact-cta {
    padding: 72px 14px;
  }

  .contact-cta h2 {
    line-height: 1.02;
  }

  .contact-cta h2 span {
    margin-left: 0;
    display: inline-block;
  }

  .contact-cta a {
    width: 100%;
    max-width: 320px;
    min-height: 56px;
    font-size: 14px;
    letter-spacing: 1.4px;
  }

  .contact-cta__union {
    bottom: -460px;
    width: 1800px;
  }

  .contact-cta__ellipse {
    top: 210px;
    right: -280px;
    width: 500px;
  }
}
</style>
