<template>
  <footer class="app-footer" data-node-id="21:2015">
    <div class="app-footer__grid">
      <div class="app-footer__col app-footer__col--brand">
        <h3>Production Agency</h3>
        <p>HIGH-END MEDIA PRODUCTION AGENCY</p>
      </div>

      <div class="app-footer__col">
        <h4>SOCIAL</h4>
        <a href="#">Instagram</a>
        <a href="#">Vimeo</a>
        <a href="#">LinkedIn</a>
      </div>

      <div class="app-footer__col">
        <h4>CONTACT</h4>
        <a href="mailto:hello@kinetic.blueprint">HELLO@KINETIC.BLUEPRINT</a>
        <a href="tel:+84000000000">+84 000 000 000</a>
      </div>

      <div class="app-footer__col app-footer__col--legal">
        <p class="app-footer__rights">&copy;2024 KINETIC BLUEPRINT. ALL RIGHTS RESERVED.</p>
        <a href="#">Privacy Policy</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  background: #1c1b1b;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.app-footer__grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 32px;
  width: min(1920px, 100%);
  margin: 0 auto;
  padding: 49px 240px 48px;
}

.app-footer__col {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
}

.app-footer__col h3 {
  margin: 0 0 8px;
  color: #fff;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: -1.2px;
}

.app-footer__col h4 {
  margin: 0 0 8px;
  color: #fff;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
}

.app-footer__col p,
.app-footer__col a {
  margin: 0;
  color: rgba(255, 255, 255, 0.4);
  font-family: 'Space Grotesk', sans-serif;
  font-size: 10px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 1px;
  text-decoration: none;
}

.app-footer__col--brand p {
  text-transform: uppercase;
}

.app-footer__col--legal {
  align-items: flex-end;
  justify-content: space-between;
  text-align: right;
}

.app-footer__rights {
  width: 100%;
}

@media (max-width: 1600px) {
  .app-footer__grid {
    padding-inline: clamp(40px, 7vw, 140px);
  }
}

@media (max-width: 1024px) {
  .app-footer__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    padding: 40px 28px;
  }

  .app-footer__col--legal {
    align-items: flex-start;
    text-align: left;
    gap: 8px;
  }
}

@media (max-width: 820px) {
  .app-footer__grid {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 32px 14px;
  }

  .app-footer__col,
  .app-footer__col--legal {
    align-items: flex-start;
    text-align: left;
  }
}
</style>
