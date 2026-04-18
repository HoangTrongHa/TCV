<script setup lang="ts">
import type { Swiper as SwiperInstance } from 'swiper/types'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

const props = defineProps<{
  videos: string[]
  poster: string
  leftArrow: string
  rightArrow: string
}>()

const mediaRef = ref<HTMLElement | null>(null)
const swiperRef = ref<SwiperInstance | null>(null)
const videoRefs = ref<Array<HTMLVideoElement | null>>([])
const inView = ref(false)
const activeIndex = ref(0)
const audioAllowed = ref(false)
let mediaObserver: IntersectionObserver | null = null
let unlockAudioHandler: (() => void) | null = null

const setVideoRef = (el: unknown, index: number) => {
  videoRefs.value[index] = el as HTMLVideoElement | null
  void syncVideoState()
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
    void syncVideoState()
  }

  window.addEventListener('pointerdown', unlockAudioHandler, { once: true })
  window.addEventListener('touchstart', unlockAudioHandler, { once: true })
  window.addEventListener('keydown', unlockAudioHandler, { once: true })
}

const syncVideoState = async () => {
  const syncTasks = videoRefs.value.map(async (video, index) => {
    if (!video)
      return

    const shouldPlay = inView.value && index === activeIndex.value
    if (!shouldPlay) {
      video.muted = true
      video.pause()
      return
    }

    if (video.ended || (Number.isFinite(video.duration) && video.duration > 0 && video.currentTime >= video.duration - 0.05))
      video.currentTime = 0

    video.volume = 1
    video.muted = !audioAllowed.value

    try {
      await video.play()
    } catch {
      video.muted = true
      try {
        await video.play()
        registerUnlockAudioHandler()
      } catch {
        // Ignore when browser keeps blocking media playback.
      }
    }
  })

  await Promise.all(syncTasks)
}

const onSlideChange = (swiper: SwiperInstance) => {
  activeIndex.value = swiper.realIndex
  void syncVideoState()
}

const onSwiperInit = (swiper: SwiperInstance) => {
  swiperRef.value = swiper
  activeIndex.value = swiper.realIndex
  void syncVideoState()
}

const onAudioIntent = () => {
  if (audioAllowed.value)
    return

  audioAllowed.value = true
  clearUnlockAudioHandler()
  void syncVideoState()
}

const onGoToSlide = (index: number) => {
  onAudioIntent()
  swiperRef.value?.slideToLoop(index)
}

const onPrev = () => {
  onAudioIntent()
  swiperRef.value?.slidePrev()
}

const onNext = () => {
  onAudioIntent()
  swiperRef.value?.slideNext()
}

const onVideoEnded = (index: number) => {
  if (index !== activeIndex.value)
    return

  swiperRef.value?.slideNext()
}

watch([inView, activeIndex], () => {
  void syncVideoState()
})

onMounted(() => {
  const media = mediaRef.value
  if (!media)
    return

  if (typeof IntersectionObserver === 'undefined') {
    inView.value = true
    void syncVideoState()
    return
  }

  mediaObserver = new IntersectionObserver((entries) => {
    const entry = entries[0]
    if (!entry)
      return

    inView.value = entry.isIntersecting
    void syncVideoState()
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
  <div class="service-product-media">
    <div
      ref="mediaRef"
      class="service-product-media-stage"
      @pointerdown="onAudioIntent"
      @touchstart.passive="onAudioIntent"
    >
      <ClientOnly>
        <Swiper
          class="service-product-swiper"
          :slides-per-view="1"
          :space-between="0"
          :loop="true"
          :grab-cursor="true"
          @swiper="onSwiperInit"
          @slideChange="onSlideChange"
        >
          <SwiperSlide
            v-for="(videoSrc, index) in props.videos"
            :key="videoSrc"
            class="service-product-slide"
          >
            <video
              :ref="(el) => setVideoRef(el, index)"
              class="service-product-video"
              :src="videoSrc"
              :poster="props.poster"
              playsinline
              muted
              preload="none"
              @ended="onVideoEnded(index)"
            />
          </SwiperSlide>
        </Swiper>
        <template #fallback>
          <img class="service-product-video" :src="props.poster" alt="Product review visual" loading="lazy" decoding="async">
        </template>
      </ClientOnly>
    </div>

    <div class="service-product-controls">
      <div class="service-product-dots">
        <button
          v-for="(_, index) in props.videos"
          :key="`service-product-dot-${index}`"
          type="button"
          class="service-product-dot-button"
          :class="{ active: activeIndex === index }"
          :aria-label="`Go to product slide ${index + 1}`"
          @click="onGoToSlide(index)"
        >
          <span />
        </button>
      </div>

      <div class="service-product-arrows">
        <button type="button" aria-label="Previous product video" @click="onPrev">
          <img :src="props.leftArrow" alt="" loading="lazy" decoding="async">
        </button>
        <button type="button" aria-label="Next product video" @click="onNext">
          <img :src="props.rightArrow" alt="" loading="lazy" decoding="async">
        </button>
      </div>
    </div>
  </div>
</template>
