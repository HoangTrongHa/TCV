<script setup lang="ts">
const fullMatchAssets = {
  overlay: '/figma/full-match/overlay.jpg',
  icon: '/figma/full-match/icon.svg',
  camera: '/figma/full-match/camera.svg',
}
</script>

<template>
  <section class="full-match-v2" data-node-id="21:2046">
    <div class="full-match-v2__shell">
      <div class="full-match-v2__left">
        <div class="full-match-v2__top">
          <div class="full-match-v2__head">
            <span class="full-match-v2__badge">QUAY FULL TRAN DAU</span>
            <img :src="fullMatchAssets.icon" alt="">
          </div>

          <h2>
            GHI HINH
            <br>
            TOAN TRAN DAU
            <br>
            <span>(FULL MATCH)</span>
          </h2>

          <p>
            Ghi hinh toan canh tran dau the thao phuc vu luu tru, phan tich chuyen mon va truyen
            thong. Goc quay rong, on dinh, bao quat toan bo dien bien tren san.
          </p>
        </div>

        <div class="full-match-v2__meta">
          <img :src="fullMatchAssets.camera" alt="">
          <div class="full-match-v2__line" />
          <span>TECHNICAL RECORD</span>
        </div>
      </div>

      <div class="full-match-v2__right" aria-hidden="true">
        <img :src="fullMatchAssets.overlay" alt="">
        <div class="full-match-v2__overlay" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.full-match-v2 {
  background: #ff5722;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.full-match-v2__shell {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  width: min(1920px, 100%);
  margin: 0 auto;
  min-height: 1061px;
}

.full-match-v2__left {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 120px 120px 120px 240px;
  min-height: 1061px;
}

.full-match-v2__top {
  width: min(100%, 576px);
}

.full-match-v2__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 48px;
}

.full-match-v2__badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 28px;
  padding: 5px 13px;
  border: 1px solid #541200;
  color: #541200;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
}

.full-match-v2__head img {
  width: 30px;
  height: 30px;
}

.full-match-v2 h2 {
  margin: 0 0 32px;
  color: #541200;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 72px;
  font-weight: 700;
  line-height: 72px;
  letter-spacing: 0;
  text-transform: uppercase;
}

.full-match-v2 h2 span {
  color: rgba(84, 18, 0, 0.7);
}

.full-match-v2 p {
  margin: 0;
  color: rgba(84, 18, 0, 0.8);
  font-family: 'Inter', sans-serif;
  font-size: 20px;
  line-height: 28px;
}

.full-match-v2__meta {
  display: flex;
  align-items: center;
  gap: 24px;
}

.full-match-v2__meta img {
  width: 25px;
  height: 20px;
}

.full-match-v2__line {
  flex: 1;
  height: 1px;
  background: rgba(84, 18, 0, 0.2);
}

.full-match-v2__meta span {
  color: #541200;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 10px;
  line-height: 15px;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.full-match-v2__right {
  position: relative;
  min-height: 1061px;
  overflow: hidden;
}

.full-match-v2__right img {
  position: absolute;
  top: -2.4%;
  left: -48%;
  width: 162.5%;
  height: 105%;
  object-fit: cover;
}

.full-match-v2__overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.2);
}

@media (max-width: 1440px) {
  .full-match-v2__left {
    padding: 96px clamp(40px, 7vw, 100px);
  }

  .full-match-v2 h2 {
    font-size: clamp(56px, 5vw, 72px);
    line-height: 1;
  }
}

@media (max-width: 1024px) {
  .full-match-v2__shell {
    grid-template-columns: 1fr;
    min-height: 0;
  }

  .full-match-v2__left {
    min-height: 0;
    padding: 64px 28px;
    gap: 48px;
  }

  .full-match-v2__right {
    min-height: 520px;
  }

  .full-match-v2__right img {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}

@media (max-width: 820px) {
  .full-match-v2__left {
    padding: 56px 14px;
  }

  .full-match-v2__head {
    margin-bottom: 28px;
  }

  .full-match-v2 h2 {
    margin-bottom: 20px;
    font-size: clamp(38px, 10.5vw, 52px);
  }

  .full-match-v2 p {
    font-size: 16px;
    line-height: 24px;
  }

  .full-match-v2__meta {
    gap: 14px;
  }

  .full-match-v2__meta span {
    font-size: 9px;
    letter-spacing: 0.9px;
  }

  .full-match-v2__right {
    min-height: 360px;
  }
}
</style>
