<script setup lang="ts">
import type { Swiper as SwiperInstance } from 'swiper/types'
import { EffectCreative } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/effect-creative'

const props = defineProps<{
  videos: string[]
  poster: string
}>()

const mediaRef = ref<HTMLElement | null>(null)
const videoRefs = ref<Array<HTMLVideoElement | null>>([])
const inView = ref(false)
const activeIndex = ref(0)
const audioAllowed = ref(false)
let mediaObserver: IntersectionObserver | null = null
let unlockAudioHandler: (() => void) | null = null

const swiperModules = [EffectCreative]
const creativeEffect = {
  limitProgress: 2,
  prev: {
    // Figma node 19:1631 far layer: smaller and further, both layers offset to the right.
    translate: ['62%', '18.5%', -280] as [string, string, number],
    rotate: [0, 0, 0] as [number, number, number],
    scale: 0.627,
    opacity: 0.58,
  },
  next: {
    // Figma node 19:1631 near layer: medium size and closer than far layer.
    translate: ['36.3%', '11.8%', -160] as [string, string, number],
    rotate: [0, 0, 0] as [number, number, number],
    scale: 0.761,
    opacity: 0.74,
  },
}
const breakpoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 0,
  },
  821: {
    slidesPerView: 1,
    spaceBetween: 0,
  },
  1280: {
    slidesPerView: 1,
    spaceBetween: 0,
  },
}

const setVideoRef = (el: unknown, index: number) => {
  videoRefs.value[index] = el as HTMLVideoElement | null
  syncVideoState()
}

const clearUnlockAudioHandler = () => {
  if (!unlockAudioHandler)
    return

  window.removeEventListener('pointerdown', unlockAudioHandler)
  window.removeEventListener('touchstart', unlockAudioHandler)
  window.removeEventListener('keydown', unlockAudioHandler)
  unlockAudioHandler = null
}

const registerUnlockAudioHandler = () => {
  if (unlockAudioHandler || typeof window === 'undefined')
    return

  unlockAudioHandler = () => {
    audioAllowed.value = true
    clearUnlockAudioHandler()
    syncVideoState()
  }

  window.addEventListener('pointerdown', unlockAudioHandler, { once: true })
  window.addEventListener('touchstart', unlockAudioHandler, { once: true })
  window.addEventListener('keydown', unlockAudioHandler, { once: true })
}

const syncVideoState = () => {
  videoRefs.value.forEach((video, index) => {
    if (!video)
      return

    const shouldPlay = inView.value && index === activeIndex.value
    if (!shouldPlay) {
      video.muted = true
      video.pause()
      return
    }

    video.volume = 1
    video.muted = !audioAllowed.value

    void video.play().catch(async () => {
      video.muted = true
      try {
        await video.play()
        registerUnlockAudioHandler()
      } catch {
        // Ignore when browser keeps blocking media playback.
      }
    })
  })
}

const onSlideChange = (swiper: SwiperInstance) => {
  activeIndex.value = swiper.realIndex
  syncVideoState()
}

const onSwiperInit = (swiper: SwiperInstance) => {
  activeIndex.value = swiper.realIndex
  syncVideoState()
}

const onAudioIntent = () => {
  if (audioAllowed.value)
    return

  audioAllowed.value = true
  clearUnlockAudioHandler()
  syncVideoState()
}

watch([inView, activeIndex], () => {
  syncVideoState()
})

onMounted(() => {
  const media = mediaRef.value
  if (!media)
    return

  if (typeof IntersectionObserver === 'undefined') {
    inView.value = true
    syncVideoState()
    return
  }

  mediaObserver = new IntersectionObserver((entries) => {
    const entry = entries[0]
    if (!entry)
      return

    inView.value = entry.isIntersecting
    syncVideoState()
  }, { threshold: 0.35 })

  mediaObserver.observe(media)
})

onBeforeUnmount(() => {
  if (mediaObserver && mediaRef.value)
    mediaObserver.unobserve(mediaRef.value)

  mediaObserver?.disconnect()
  mediaObserver = null

  clearUnlockAudioHandler()

  videoRefs.value.forEach((video) => {
    video?.pause()
  })
})
</script>

<template>
  <div
    ref="mediaRef"
    class="service-focus-media"
    @pointerdown="onAudioIntent"
    @touchstart.passive="onAudioIntent"
  >
    <ClientOnly>
      <Swiper
        class="service-focus-swiper"
        :modules="swiperModules"
        effect="creative"
        :creative-effect="creativeEffect"
        :breakpoints="breakpoints"
        :loop="true"
        :slide-to-clicked-slide="true"
        :centered-slides="false"
        :grab-cursor="true"
        @swiper="onSwiperInit"
        @slideChange="onSlideChange"
      >
        <SwiperSlide
          v-for="(videoSrc, index) in props.videos"
          :key="videoSrc"
          class="service-focus-slide"
        >
          <div class="service-focus-card">
            <video
              :ref="(el) => setVideoRef(el, index)"
              class="service-focus-video"
              :src="videoSrc"
              playsinline
              loop
              muted
              preload="none"
            />
          </div>
        </SwiperSlide>
      </Swiper>
      <template #fallback>
        <div class="service-focus-card">
          <img class="service-focus-video" :src="props.poster" alt="Focus cam visual" loading="lazy" decoding="async">
        </div>
      </template>
    </ClientOnly>
  </div>
</template>
