<script setup lang="ts">
import type { Swiper as SwiperInstance } from 'swiper/types'
import { EffectCreative } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/effect-creative'

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

const { t } = useI18n()
const localeHead = useLocaleHead({ addSeoAttributes: true })

const serviceSection = computed(() => ({
  title: t('servicesV2.title'),
  accent: t('servicesV2.accent'),
  description: t('servicesV2.description'),
  video: 'https://pub-443004ab6e0841e5afb8c165e0f39102.r2.dev/tvc_web.mp4',
  arrows: {
    left: '/figma/services/arrow-left.svg',
    right: '/figma/services/arrow-right.svg',
  },
  deliverables: [
    {
      label: t('servicesV2.deliverables.one.label'),
      value: t('servicesV2.deliverables.one.value'),
      detail: t('servicesV2.deliverables.one.detail'),
    },
    {
      label: t('servicesV2.deliverables.two.label'),
      value: t('servicesV2.deliverables.two.value'),
      tag: t('servicesV2.deliverables.two.tag'),
    },
  ],
}))

const serviceFocusVideos = [
  'https://pub-443004ab6e0841e5afb8c165e0f39102.r2.dev/recap%20qd%20bd.mp4',
  'https://pub-443004ab6e0841e5afb8c165e0f39102.r2.dev/recap_web.mp4',
  'https://pub-443004ab6e0841e5afb8c165e0f39102.r2.dev/sinh%20ho%E1%BA%A1t%20dop%20team.mp4',
]
const serviceEventVideoUrl = 'https://pub-443004ab6e0841e5afb8c165e0f39102.r2.dev/recap%20booth.mp4'
const serviceProductVideos = [
  'https://pub-443004ab6e0841e5afb8c165e0f39102.r2.dev/WIKA%20QD%20AIR%20(TV).mp4',
  'https://pub-443004ab6e0841e5afb8c165e0f39102.r2.dev/WIKA%20VIKTOR%20QD%20(TV).mp4',
  'https://pub-443004ab6e0841e5afb8c165e0f39102.r2.dev/sportbase%20depa.mp4',
  'https://pub-443004ab6e0841e5afb8c165e0f39102.r2.dev/sinh%20ho%E1%BA%A1t%20dop%20team.mp4',
]

const serviceFocus = computed(() => ({
  icon: '/figma/sections/focus-icon.svg',
  poster: '/figma/sections/focus-main.png',
  videos: serviceFocusVideos,
  titleLine1: t('serviceFocus.titleLine1'),
  titleLine2: t('serviceFocus.titleLine2'),
  description: t('serviceFocus.description'),
  bullets: [t('serviceFocus.bullets.one'), t('serviceFocus.bullets.two'), t('serviceFocus.bullets.three')],
}))

const serviceEvent = computed(() => ({
  icon: '/figma/sections/event-icon.svg',
  badge: t('serviceEvent.badge'),
  main: '/figma/sections/event-main.png',
  video: serviceEventVideoUrl,
  titleLine1: t('serviceEvent.titleLine1'),
  titleLine2: t('serviceEvent.titleLine2'),
  description: t('serviceEvent.description'),
  deliverables: [
    {
      label: t('serviceEvent.deliverables.one.label'),
      value: t('serviceEvent.deliverables.one.value'),
    },
    {
      label: t('serviceEvent.deliverables.two.label'),
      value: t('serviceEvent.deliverables.two.value'),
      tag: t('serviceEvent.deliverables.two.tag'),
    },
  ],
}))

const serviceProduct = computed(() => ({
  main: '/figma/sections/product-main.png',
  videos: serviceProductVideos,
  eyebrow: t('serviceProduct.eyebrow'),
  titleLine1: t('serviceProduct.titleLine1'),
  titleLine2: t('serviceProduct.titleLine2'),
  description: t('serviceProduct.description'),
  stats: [
    { value: '4K', label: t('serviceProduct.stats.resolution') },
    { value: 'Macro', label: t('serviceProduct.stats.detailing') },
    { value: 'Studio', label: t('serviceProduct.stats.environment') },
  ],
}))

const serviceVideoRef = ref<HTMLVideoElement | null>(null)
let serviceVideoObserver: IntersectionObserver | null = null
const serviceVideoInView = ref(false)
const serviceVideoHovered = ref(false)

const syncServiceVideoState = async () => {
  const video = serviceVideoRef.value
  if (!video)
    return

  if (!serviceVideoInView.value) {
    video.muted = true
    video.pause()
    return
  }

  video.muted = !serviceVideoHovered.value
  video.volume = 1

  try {
    await video.play()
  } catch {
    // Keep a muted fallback when browser blocks media playback.
    video.muted = true
  }
}

const onServiceVideoHoverStart = () => {
  serviceVideoHovered.value = true
  void syncServiceVideoState()
}

const onServiceVideoHoverEnd = () => {
  serviceVideoHovered.value = false
  void syncServiceVideoState()
}

const serviceFocusMediaRef = ref<HTMLElement | null>(null)
const serviceFocusVideoRefs = ref<Array<HTMLVideoElement | null>>([])
const serviceFocusInView = ref(false)
const serviceFocusActiveIndex = ref(0)
const serviceFocusAudioAllowed = ref(false)
let serviceFocusObserver: IntersectionObserver | null = null
let serviceFocusUnlockAudioHandler: (() => void) | null = null
const serviceFocusSwiperModules = [EffectCreative]
const serviceFocusCreativeEffect = {
  limitProgress: 2,
  prev: {
    translate: ['-26%', '8%', -120] as [string, string, number],
    scale: 0.9,
    opacity: 0.82,
  },
  next: {
    translate: ['26%', '8%', -120] as [string, string, number],
    scale: 0.9,
    opacity: 0.82,
  },
}
const serviceFocusBreakpoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 0,
  },
  821: {
    slidesPerView: 1.1,
    spaceBetween: -140,
  },
}

const setServiceFocusVideoRef = (el: unknown, index: number) => {
  serviceFocusVideoRefs.value[index] = el as HTMLVideoElement | null
  syncServiceFocusVideoState()
}

const clearServiceFocusUnlockAudioHandler = () => {
  if (!serviceFocusUnlockAudioHandler)
    return

  window.removeEventListener('pointerdown', serviceFocusUnlockAudioHandler)
  window.removeEventListener('touchstart', serviceFocusUnlockAudioHandler)
  window.removeEventListener('keydown', serviceFocusUnlockAudioHandler)
  serviceFocusUnlockAudioHandler = null
}

const registerServiceFocusUnlockAudioHandler = () => {
  if (serviceFocusUnlockAudioHandler || typeof window === 'undefined')
    return

  serviceFocusUnlockAudioHandler = () => {
    serviceFocusAudioAllowed.value = true
    clearServiceFocusUnlockAudioHandler()
    syncServiceFocusVideoState()
  }

  window.addEventListener('pointerdown', serviceFocusUnlockAudioHandler, { once: true })
  window.addEventListener('touchstart', serviceFocusUnlockAudioHandler, { once: true })
  window.addEventListener('keydown', serviceFocusUnlockAudioHandler, { once: true })
}

const syncServiceFocusVideoState = () => {
  serviceFocusVideoRefs.value.forEach((video, index) => {
    if (!video)
      return

    const shouldPlay = serviceFocusInView.value && index === serviceFocusActiveIndex.value
    if (!shouldPlay) {
      video.muted = true
      video.pause()
      return
    }

    video.volume = 1
    video.muted = !serviceFocusAudioAllowed.value

    void video.play().catch(async () => {
      video.muted = true
      try {
        await video.play()
        registerServiceFocusUnlockAudioHandler()
      } catch {
        // Ignore when browser keeps blocking media playback.
      }
    })
  })
}

const onServiceFocusSlideChange = (swiper: SwiperInstance) => {
  serviceFocusActiveIndex.value = swiper.realIndex
  syncServiceFocusVideoState()
}

const onServiceFocusSwiperInit = (swiper: SwiperInstance) => {
  serviceFocusActiveIndex.value = swiper.realIndex
  syncServiceFocusVideoState()
}

const onServiceFocusAudioIntent = () => {
  if (serviceFocusAudioAllowed.value)
    return

  serviceFocusAudioAllowed.value = true
  clearServiceFocusUnlockAudioHandler()
  syncServiceFocusVideoState()
}

const serviceEventMediaRef = ref<HTMLElement | null>(null)
const serviceEventVideoRef = ref<HTMLVideoElement | null>(null)
const serviceEventInView = ref(false)
const serviceEventAudioAllowed = ref(false)
let serviceEventObserver: IntersectionObserver | null = null
let serviceEventUnlockAudioHandler: (() => void) | null = null

const clearServiceEventUnlockAudioHandler = () => {
  if (!serviceEventUnlockAudioHandler)
    return

  window.removeEventListener('pointerdown', serviceEventUnlockAudioHandler)
  window.removeEventListener('touchstart', serviceEventUnlockAudioHandler)
  window.removeEventListener('keydown', serviceEventUnlockAudioHandler)
  serviceEventUnlockAudioHandler = null
}

const registerServiceEventUnlockAudioHandler = () => {
  if (serviceEventUnlockAudioHandler || typeof window === 'undefined')
    return

  serviceEventUnlockAudioHandler = () => {
    serviceEventAudioAllowed.value = true
    clearServiceEventUnlockAudioHandler()
    void syncServiceEventVideoState()
  }

  window.addEventListener('pointerdown', serviceEventUnlockAudioHandler, { once: true })
  window.addEventListener('touchstart', serviceEventUnlockAudioHandler, { once: true })
  window.addEventListener('keydown', serviceEventUnlockAudioHandler, { once: true })
}

const syncServiceEventVideoState = async () => {
  const video = serviceEventVideoRef.value
  if (!video)
    return

  if (!serviceEventInView.value) {
    video.muted = true
    video.pause()
    return
  }

  video.volume = 1
  video.muted = !serviceEventAudioAllowed.value

  try {
    await video.play()
  } catch {
    video.muted = true
    try {
      await video.play()
      registerServiceEventUnlockAudioHandler()
    } catch {
      // Ignore when browser keeps blocking media playback.
    }
  }
}

const onServiceEventAudioIntent = () => {
  if (serviceEventAudioAllowed.value)
    return

  serviceEventAudioAllowed.value = true
  clearServiceEventUnlockAudioHandler()
  void syncServiceEventVideoState()
}

const serviceProductMediaRef = ref<HTMLElement | null>(null)
const serviceProductSwiperRef = ref<SwiperInstance | null>(null)
const serviceProductVideoRefs = ref<Array<HTMLVideoElement | null>>([])
const serviceProductInView = ref(false)
const serviceProductActiveIndex = ref(0)
const serviceProductAudioAllowed = ref(false)
let serviceProductObserver: IntersectionObserver | null = null
let serviceProductUnlockAudioHandler: (() => void) | null = null

const setServiceProductVideoRef = (el: unknown, index: number) => {
  serviceProductVideoRefs.value[index] = el as HTMLVideoElement | null
  void syncServiceProductVideoState()
}

const clearServiceProductUnlockAudioHandler = () => {
  if (!serviceProductUnlockAudioHandler)
    return

  window.removeEventListener('pointerdown', serviceProductUnlockAudioHandler)
  window.removeEventListener('touchstart', serviceProductUnlockAudioHandler)
  window.removeEventListener('keydown', serviceProductUnlockAudioHandler)
  serviceProductUnlockAudioHandler = null
}

const registerServiceProductUnlockAudioHandler = () => {
  if (serviceProductUnlockAudioHandler || typeof window === 'undefined')
    return

  serviceProductUnlockAudioHandler = () => {
    serviceProductAudioAllowed.value = true
    clearServiceProductUnlockAudioHandler()
    void syncServiceProductVideoState()
  }

  window.addEventListener('pointerdown', serviceProductUnlockAudioHandler, { once: true })
  window.addEventListener('touchstart', serviceProductUnlockAudioHandler, { once: true })
  window.addEventListener('keydown', serviceProductUnlockAudioHandler, { once: true })
}

const syncServiceProductVideoState = async () => {
  const syncTasks = serviceProductVideoRefs.value.map(async (video, index) => {
    if (!video)
      return

    const shouldPlay = serviceProductInView.value && index === serviceProductActiveIndex.value
    if (!shouldPlay) {
      video.muted = true
      video.pause()
      return
    }

    if (video.ended || (Number.isFinite(video.duration) && video.duration > 0 && video.currentTime >= video.duration - 0.05))
      video.currentTime = 0

    video.volume = 1
    video.muted = !serviceProductAudioAllowed.value

    try {
      await video.play()
    } catch {
      video.muted = true
      try {
        await video.play()
        registerServiceProductUnlockAudioHandler()
      } catch {
        // Ignore when browser keeps blocking media playback.
      }
    }
  })

  await Promise.all(syncTasks)
}

const onServiceProductSlideChange = (swiper: SwiperInstance) => {
  serviceProductActiveIndex.value = swiper.realIndex
  void syncServiceProductVideoState()
}

const onServiceProductSwiperInit = (swiper: SwiperInstance) => {
  serviceProductSwiperRef.value = swiper
  serviceProductActiveIndex.value = swiper.realIndex
  void syncServiceProductVideoState()
}

const onServiceProductAudioIntent = () => {
  if (serviceProductAudioAllowed.value)
    return

  serviceProductAudioAllowed.value = true
  clearServiceProductUnlockAudioHandler()
  void syncServiceProductVideoState()
}

const onServiceProductGoToSlide = (index: number) => {
  onServiceProductAudioIntent()
  serviceProductSwiperRef.value?.slideToLoop(index)
}

const onServiceProductPrev = () => {
  onServiceProductAudioIntent()
  serviceProductSwiperRef.value?.slidePrev()
}

const onServiceProductNext = () => {
  onServiceProductAudioIntent()
  serviceProductSwiperRef.value?.slideNext()
}

const onServiceProductVideoEnded = (index: number) => {
  if (index !== serviceProductActiveIndex.value)
    return

  serviceProductSwiperRef.value?.slideNext()
}

watch([serviceFocusInView, serviceFocusActiveIndex], () => {
  syncServiceFocusVideoState()
})

watch([serviceProductInView, serviceProductActiveIndex], () => {
  void syncServiceProductVideoState()
})

onMounted(() => {
  const video = serviceVideoRef.value
  const focusMedia = serviceFocusMediaRef.value
  const eventMedia = serviceEventMediaRef.value
  const eventVideo = serviceEventVideoRef.value
  const productMedia = serviceProductMediaRef.value

  if (video) {
    video.muted = true
    video.volume = 1

    if (typeof IntersectionObserver === 'undefined') {
      serviceVideoInView.value = true
      void syncServiceVideoState()
    } else {
      serviceVideoObserver = new IntersectionObserver((entries) => {
        const entry = entries[0]
        if (!entry)
          return

        serviceVideoInView.value = entry.isIntersecting
        if (!entry.isIntersecting)
          serviceVideoHovered.value = false

        void syncServiceVideoState()
      }, { threshold: 0.2 })

      serviceVideoObserver.observe(video)
    }
  }

  if (focusMedia) {
    if (typeof IntersectionObserver === 'undefined') {
      serviceFocusInView.value = true
      syncServiceFocusVideoState()
    } else {
      serviceFocusObserver = new IntersectionObserver((entries) => {
        const entry = entries[0]
        if (!entry)
          return

        serviceFocusInView.value = entry.isIntersecting
        syncServiceFocusVideoState()
      }, { threshold: 0.35 })

      serviceFocusObserver.observe(focusMedia)
    }
  }

  if (eventVideo)
    eventVideo.volume = 1

  if (eventMedia) {
    if (typeof IntersectionObserver === 'undefined') {
      serviceEventInView.value = true
      void syncServiceEventVideoState()
    } else {
      serviceEventObserver = new IntersectionObserver((entries) => {
        const entry = entries[0]
        if (!entry)
          return

        serviceEventInView.value = entry.isIntersecting
        void syncServiceEventVideoState()
      }, { threshold: 0.35 })

      serviceEventObserver.observe(eventMedia)
    }
  }

  if (productMedia) {
    if (typeof IntersectionObserver === 'undefined') {
      serviceProductInView.value = true
      void syncServiceProductVideoState()
    } else {
      serviceProductObserver = new IntersectionObserver((entries) => {
        const entry = entries[0]
        if (!entry)
          return

        serviceProductInView.value = entry.isIntersecting
        void syncServiceProductVideoState()
      }, { threshold: 0.35 })

      serviceProductObserver.observe(productMedia)
    }
  }
})

onBeforeUnmount(() => {
  const video = serviceVideoRef.value
  if (video)
    video.pause()

  if (serviceVideoObserver && video)
    serviceVideoObserver.unobserve(video)

  serviceVideoObserver?.disconnect()
  serviceVideoObserver = null

  if (serviceFocusObserver && serviceFocusMediaRef.value)
    serviceFocusObserver.unobserve(serviceFocusMediaRef.value)

  serviceFocusObserver?.disconnect()
  serviceFocusObserver = null

  clearServiceFocusUnlockAudioHandler()

  serviceFocusVideoRefs.value.forEach((focusVideo) => {
    focusVideo?.pause()
  })

  if (serviceEventObserver && serviceEventMediaRef.value)
    serviceEventObserver.unobserve(serviceEventMediaRef.value)

  serviceEventObserver?.disconnect()
  serviceEventObserver = null
  clearServiceEventUnlockAudioHandler()
  serviceEventVideoRef.value?.pause()

  if (serviceProductObserver && serviceProductMediaRef.value)
    serviceProductObserver.unobserve(serviceProductMediaRef.value)

  serviceProductObserver?.disconnect()
  serviceProductObserver = null
  clearServiceProductUnlockAudioHandler()
  serviceProductVideoRefs.value.forEach((productVideo) => {
    productVideo?.pause()
  })
})

useHead(() => ({
  title: t('seo.title'),
  htmlAttrs: localeHead.value?.htmlAttrs,
  meta: [...(localeHead.value?.meta ?? [])],
  link: [
    ...(localeHead.value?.link ?? []),
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Epilogue:wght@400;700;800;900&family=Inter:wght@300;400;600;700;800&family=Space+Grotesk:wght@400;700&display=swap',
    },
  ],
}))
</script>

<template>
  <div class="page">
    <NuxtRouteAnnouncer />
    <AppHeader />

    <main>
      <HeroSection />

      <section id="about" class="clients" data-node-id="8:1099">
        <div class="clients-shell">
          <div class="clients-head">
            <h2 class="clients-title">{{ t('clients.title') }}</h2>
            <p class="clients-note">
              {{ t('clients.noteLine1') }}
              <br>
              {{ t('clients.noteLine2') }}
            </p>
          </div>
          <div class="clients-logos">
            <article v-for="logo in clientLogoMasks" :key="logo.id" class="clients-logo-card">
              <div class="clients-logo-mask" :style="getClientLogoStyle(logo)" />
            </article>
          </div>
        </div>
      </section>

      <section id="services" class="services section services-v2" data-node-id="8:1106">
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

        <div
          class="services-v2-visual"
          @mouseenter="onServiceVideoHoverStart"
          @mouseleave="onServiceVideoHoverEnd"
          @touchstart.passive="onServiceVideoHoverStart"
        >
          <video
            ref="serviceVideoRef"
            class="services-v2-media"
            :src="serviceSection.video"
            poster="/figma/services/service-hero.png"
            muted
            playsinline
            loop
            preload="metadata"
          />
        </div>
      </section>

      <section id="portfolio" class="service-focus" data-node-id="19:1631">
        <div
          ref="serviceFocusMediaRef"
          class="service-focus-media"
          @pointerdown="onServiceFocusAudioIntent"
          @touchstart.passive="onServiceFocusAudioIntent"
        >
          <ClientOnly>
            <Swiper
              class="service-focus-swiper"
              :modules="serviceFocusSwiperModules"
              effect="creative"
              :creative-effect="serviceFocusCreativeEffect"
              :breakpoints="serviceFocusBreakpoints"
              :centered-slides="true"
              :grab-cursor="true"
              @swiper="onServiceFocusSwiperInit"
              @slideChange="onServiceFocusSlideChange"
            >
              <SwiperSlide
                v-for="(videoSrc, index) in serviceFocus.videos"
                :key="videoSrc"
                class="service-focus-slide"
              >
                <video
                  :ref="(el) => setServiceFocusVideoRef(el, index)"
                  class="service-focus-video"
                  :src="videoSrc"
                  playsinline
                  loop
                  muted
                  preload="metadata"
                />
              </SwiperSlide>
            </Swiper>
            <template #fallback>
              <img class="service-focus-video" :src="serviceFocus.poster" alt="Focus cam visual">
            </template>
          </ClientOnly>
        </div>

        <div class="service-focus-content">
          <div class="service-focus-icon">
            <img :src="serviceFocus.icon" alt="">
          </div>
          <h2>
            {{ serviceFocus.titleLine1 }}
            <br>
            {{ serviceFocus.titleLine2 }}
          </h2>
          <p>{{ serviceFocus.description }}</p>
          <div class="service-focus-bullets">
            <div v-for="item in serviceFocus.bullets" :key="item" class="service-focus-bullet">
              <span />
              <p>{{ item }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="service-event" data-node-id="21:2159">
        <div class="service-event-content">
          <div class="service-event-head">
            <img :src="serviceEvent.icon" alt="">
            <p>{{ serviceEvent.badge }}</p>
          </div>

          <h2>
            {{ serviceEvent.titleLine1 }}
            <br>
            {{ serviceEvent.titleLine2 }}
          </h2>
          <p class="service-event-description">{{ serviceEvent.description }}</p>

          <div class="service-event-deliverables">
            <div class="service-event-deliverable">
              <p class="service-event-deliverable-label">{{ serviceEvent.deliverables[0].label }}</p>
              <p class="service-event-deliverable-value">{{ serviceEvent.deliverables[0].value }}</p>
            </div>

            <div class="service-event-deliverable">
              <p class="service-event-deliverable-label">{{ serviceEvent.deliverables[1].label }}</p>
              <div class="service-event-deliverable-line">
                <p class="service-event-deliverable-value">{{ serviceEvent.deliverables[1].value }}</p>
                <p class="service-event-deliverable-tag">{{ serviceEvent.deliverables[1].tag }}</p>
              </div>
            </div>
          </div>
        </div>

        <div
          ref="serviceEventMediaRef"
          class="service-event-media"
          @pointerdown="onServiceEventAudioIntent"
          @touchstart.passive="onServiceEventAudioIntent"
        >
          <video
            ref="serviceEventVideoRef"
            class="service-event-video"
            :src="serviceEvent.video"
            :poster="serviceEvent.main"
            playsinline
            loop
            muted
            preload="metadata"
          />
        </div>
      </section>

      <section class="service-product" data-node-id="21:2080">
        <div class="service-product-media">
          <div
            ref="serviceProductMediaRef"
            class="service-product-media-stage"
            @pointerdown="onServiceProductAudioIntent"
            @touchstart.passive="onServiceProductAudioIntent"
          >
            <ClientOnly>
              <Swiper
                class="service-product-swiper"
                :slides-per-view="1"
                :space-between="0"
                :loop="true"
                :grab-cursor="true"
                @swiper="onServiceProductSwiperInit"
                @slideChange="onServiceProductSlideChange"
              >
                <SwiperSlide
                  v-for="(videoSrc, index) in serviceProduct.videos"
                  :key="videoSrc"
                  class="service-product-slide"
                >
                  <video
                    :ref="(el) => setServiceProductVideoRef(el, index)"
                    class="service-product-video"
                    :src="videoSrc"
                    :poster="serviceProduct.main"
                    playsinline
                    muted
                    preload="metadata"
                    @ended="onServiceProductVideoEnded(index)"
                  />
                </SwiperSlide>
              </Swiper>
              <template #fallback>
                <img class="service-product-video" :src="serviceProduct.main" alt="Product review visual">
              </template>
            </ClientOnly>
          </div>

          <div class="service-product-controls">
            <div class="service-product-dots">
              <button
                v-for="(_, index) in serviceProduct.videos"
                :key="`service-product-dot-${index}`"
                type="button"
                class="service-product-dot-button"
                :class="{ active: serviceProductActiveIndex === index }"
                :aria-label="`Go to product slide ${index + 1}`"
                @click="onServiceProductGoToSlide(index)"
              >
                <span />
              </button>
            </div>

            <div class="service-product-arrows">
              <button type="button" aria-label="Previous product video" @click="onServiceProductPrev">
                <img :src="serviceSection.arrows.left" alt="">
              </button>
              <button type="button" aria-label="Next product video" @click="onServiceProductNext">
                <img :src="serviceSection.arrows.right" alt="">
              </button>
            </div>
          </div>
        </div>

        <div class="service-product-content">
          <p class="service-product-eyebrow">{{ serviceProduct.eyebrow }}</p>
          <h2>
            {{ serviceProduct.titleLine1 }}
            <br>
            {{ serviceProduct.titleLine2 }}
          </h2>
          <p class="service-product-description">{{ serviceProduct.description }}</p>
          <div class="service-product-stats">
            <div v-for="item in serviceProduct.stats" :key="item.label" class="service-product-stat">
              <strong>{{ item.value }}</strong>
              <small>{{ item.label }}</small>
            </div>
          </div>
        </div>
      </section>

      <FullMatchSection />
      <ContactSection />
    </main>

    <AppFooter />
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
  --desktop-max: 1440px;
  --desktop-gutter: clamp(20px, 5vw, 72px);
  --desktop-section-gap: clamp(48px, 6vw, 96px);
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
  scroll-behavior: smooth;
  scroll-padding-top: 88px;
}

section[id] {
  scroll-margin-top: 88px;
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
  width: min(var(--desktop-max), 100%);
  margin: 0 auto;
  padding-inline: var(--desktop-gutter);
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
  width: min(var(--desktop-max), 100%);
  margin: 0 auto;
  padding: 80px var(--desktop-gutter);
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

.services-v2-media {
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

.service-focus,
.service-event,
.service-product {
  width: min(var(--desktop-max), 100%);
  margin: 0 auto;
  padding-inline: var(--desktop-gutter);
}

.service-focus {
  display: flex;
  align-items: flex-start;
  gap: var(--desktop-section-gap);
  padding-top: 80px;
  padding-bottom: 80px;
}

.service-focus-media {
  position: relative;
  width: 520px;
  height: 927px;
  flex-shrink: 0;
  overflow: visible;
  perspective: 1200px;
}

.service-focus-swiper,
.service-focus-slide,
.service-focus-video {
  width: 100%;
  height: 100%;
}

.service-focus-swiper {
  overflow: visible;
}

.service-focus-slide {
  border-radius: 4px;
  overflow: hidden;
  transform-origin: center bottom;
  transition: transform 320ms ease, opacity 320ms ease, filter 320ms ease;
}

.service-focus-slide:not(.swiper-slide-active) {
  filter: saturate(0.78) brightness(0.84);
}

.service-focus-video {
  object-fit: cover;
  display: block;
  background: #0f0f0f;
}

.service-focus-content {
  flex: 1;
  min-width: 0;
  max-width: 640px;
  min-height: 927px;
  padding: 68px 96px 96px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.service-focus-icon img {
  width: 42px;
  height: 41px;
  display: block;
}

.service-focus-content h2 {
  margin: 48px 0 32px;
  color: #e5e2e1;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 72px;
  font-weight: 700;
  line-height: 72px;
  letter-spacing: 0;
  text-transform: uppercase;
}

.service-focus-content > p {
  margin: 0;
  color: rgba(255, 255, 255, 0.6);
  font-family: 'Inter', sans-serif;
  font-size: 20px;
  line-height: 28px;
}

.service-focus-bullets {
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.service-focus-bullet {
  display: flex;
  align-items: center;
  gap: 12px;
  height: 34px;
  padding: 8px 0 9px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.service-focus-bullet span {
  width: 8px;
  height: 8px;
  background: #ff5722;
  flex-shrink: 0;
}

.service-focus-bullet p {
  margin: 0;
  color: rgba(255, 255, 255, 0.6);
  font-family: 'Space Grotesk', sans-serif;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
}

.service-event {
  display: flex;
  align-items: flex-start;
  gap: var(--desktop-section-gap);
  padding-top: 80px;
  padding-bottom: 80px;
}

.service-event-content {
  flex: 1;
  min-width: 0;
  max-width: 585px;
  padding-block: 96px;
}

.service-event-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-bottom: 48px;
}

.service-event-head img {
  width: 32.325px;
  height: 30.75px;
  display: block;
}

.service-event-head p {
  margin: 0;
  padding: 5px 13px;
  border: 1px solid #ff5722;
  background: rgba(255, 87, 34, 0.1);
  color: #ff5722;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 10px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.service-event-content h2 {
  margin: 0;
  padding-bottom: 32px;
  color: #e5e2e1;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 72px;
  font-weight: 700;
  line-height: 72px;
  letter-spacing: 0;
  text-transform: uppercase;
}

.service-event-description {
  margin: 0;
  max-width: 576px;
  padding-bottom: 48px;
  color: rgba(255, 255, 255, 0.6);
  font-family: 'Inter', sans-serif;
  font-size: 20px;
  line-height: 28px;
}

.service-event-deliverables {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.service-event-deliverable {
  display: grid;
  grid-template-columns: 164px minmax(0, 1fr);
  align-items: center;
  gap: 32px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 17px;
}

.service-event-deliverable-label {
  margin: 0;
  color: rgba(255, 255, 255, 0.6);
  font-family: 'Space Grotesk', sans-serif;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 4.2px;
  text-transform: uppercase;
}

.service-event-deliverable-value {
  margin: 0;
  color: #fff;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
}

.service-event-deliverable-line {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.service-event-deliverable-tag {
  margin: 0;
  padding: 4px 8px;
  background: #ff5722;
  color: #fff;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 10px;
  font-weight: 700;
  line-height: 15px;
  text-transform: uppercase;
}

.service-event-media {
  width: 522px;
  height: 930px;
  flex-shrink: 0;
}

.service-event-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  background: #0f0f0f;
}

.service-product {
  display: flex;
  align-items: flex-start;
  gap: var(--desktop-section-gap);
  padding-top: 80px;
  padding-bottom: 160px;
}

.service-product-media {
  width: 520px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.service-product-media-stage {
  width: 100%;
  height: 927px;
  overflow: hidden;
}

.service-product-swiper,
.service-product-slide,
.service-product-video {
  width: 100%;
  height: 100%;
}

.service-product-video {
  object-fit: cover;
  display: block;
  background: #0f0f0f;
}

.service-product-controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.service-product-dots {
  flex: 1;
  display: flex;
  gap: 8px;
}

.service-product-dot-button {
  flex: 1 0 0;
  border: 0;
  padding: 0;
  background: transparent;
}

.service-product-dot-button span {
  display: block;
  width: 100%;
  height: 4px;
  border-radius: 13px;
  background: rgba(255, 255, 255, 0.28);
  transition: background-color 220ms ease;
}

.service-product-dot-button.active span {
  background: #fff;
}

.service-product-arrows {
  display: flex;
  align-items: center;
  gap: 12px;
}

.service-product-arrows button {
  width: 40px;
  height: 40px;
  border-radius: 24px;
  border: 0.8px solid #fff;
  background: rgba(255, 255, 255, 0.16);
  display: grid;
  place-items: center;
  padding: 0;
}

.service-product-arrows img {
  width: 6.8px;
  height: 12.4px;
}

.service-product-content {
  flex: 1;
  min-width: 0;
  max-width: 640px;
  min-height: 623px;
  padding: 96px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.service-product-eyebrow {
  margin: 0;
  color: #ff5722;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 5.6px;
  text-transform: uppercase;
}

.service-product-content h2 {
  margin: 24px 0 32px;
  color: #e5e2e1;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 72px;
  font-weight: 700;
  line-height: 72px;
  letter-spacing: 0;
  text-transform: uppercase;
}

.service-product-description {
  margin: 0 0 48px;
  color: rgba(255, 255, 255, 0.6);
  font-family: 'Inter', sans-serif;
  font-size: 20px;
  line-height: 28px;
}

.service-product-stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 32px;
}

.service-product-stat strong {
  display: block;
  color: #fff;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
}

.service-product-stat small {
  display: block;
  color: rgba(255, 255, 255, 0.4);
  font-family: 'Space Grotesk', sans-serif;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 1px;
  text-transform: uppercase;
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
  .service-focus,
  .service-event,
  .service-product {
    padding-inline: 28px;
    gap: 24px;
    flex-direction: column;
  }

  .service-focus {
    padding-top: 64px;
    padding-bottom: 64px;
  }

  .service-event {
    padding-top: 64px;
    padding-bottom: 64px;
  }

  .service-product {
    padding-top: 64px;
    padding-bottom: 96px;
  }

  .service-focus-media,
  .service-event-media {
    width: min(100%, 640px);
    height: auto;
    aspect-ratio: 520 / 927;
    overflow: hidden;
  }

  .service-product-media {
    width: min(100%, 640px);
  }

  .service-product-media-stage {
    width: 100%;
    height: auto;
    aspect-ratio: 520 / 927;
  }

  .service-product-controls {
    gap: 14px;
  }

  .service-product-arrows button {
    width: 36px;
    height: 36px;
  }

  .service-focus-content,
  .service-event-content,
  .service-product-content {
    width: 100%;
    min-height: 0;
    padding: 0;
  }

  .service-event-head {
    padding-bottom: 28px;
  }

  .service-event-content h2,
  .service-product-content h2,
  .service-focus-content h2 {
    font-size: clamp(44px, 8vw, 58px);
    line-height: 1.04;
  }

  .service-event-description,
  .service-product-description,
  .service-focus-content > p {
    font-size: 18px;
    line-height: 27px;
  }

  .service-event-deliverable {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .service-product-stats {
    gap: 20px;
  }

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

  .service-focus,
  .service-event,
  .service-product {
    padding-inline: 14px;
  }

  .service-focus {
    padding-top: 56px;
    padding-bottom: 56px;
  }

  .service-event {
    padding-top: 56px;
    padding-bottom: 56px;
  }

  .service-product {
    padding-top: 56px;
    padding-bottom: 72px;
  }

  .service-focus-content h2,
  .service-event-content h2,
  .service-product-content h2 {
    font-size: clamp(36px, 11vw, 48px);
  }

  .service-focus-content > p,
  .service-event-description,
  .service-product-description {
    font-size: 16px;
    line-height: 24px;
  }

  .service-focus-bullets {
    margin-top: 24px;
  }

  .service-event-deliverable-line {
    flex-direction: column;
    align-items: flex-start;
  }

  .service-product-stats {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .service-product-controls {
    gap: 12px;
  }

  .service-product-arrows button {
    width: 34px;
    height: 34px;
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
  .service-focus,
  .service-event,
  .service-product {
    padding-inline: 14px;
  }

  .service-focus {
    padding-top: 48px;
    padding-bottom: 48px;
  }

  .service-event {
    padding-top: 48px;
    padding-bottom: 48px;
  }

  .service-product {
    padding-top: 48px;
    padding-bottom: 64px;
  }

  .service-focus-content h2,
  .service-event-content h2,
  .service-product-content h2 {
    font-size: clamp(32px, 12vw, 40px);
    margin-bottom: 20px;
  }

  .service-focus-content > p,
  .service-event-description,
  .service-product-description {
    font-size: 14px;
    line-height: 22px;
  }

  .service-event-head p,
  .service-event-deliverable-label,
  .service-focus-bullet p,
  .service-product-eyebrow {
    font-size: 11px;
    line-height: 16px;
    letter-spacing: 2px;
  }

  .service-event-deliverable-value,
  .service-product-stat strong {
    font-size: 16px;
    line-height: 24px;
  }

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
