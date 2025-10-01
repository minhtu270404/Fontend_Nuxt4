import { ref, onMounted, nextTick, watch } from 'vue';
import { useRoute } from 'vue-router';
import type SwiperType from 'swiper';

export function useSwiperClient(selector = '.swiper-container', options: Partial<SwiperType.Options> = {}) {
  const swiperInstance = ref<SwiperType | null>(null);
  const route = useRoute();

  const defaultOptions: SwiperType.Options = {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: { slidesPerView: 1 },
      640: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      1024: { slidesPerView: 4 },
      1280: { slidesPerView: 5 },
    },
  };

  const initSwiper = async () => {
    await nextTick();
    const { default: Swiper } = await import('swiper');
    const { Navigation } =  await import('swiper/modules');
    await import('swiper/css');
    await import('swiper/css/navigation');

    swiperInstance.value?.destroy(true, true);
    swiperInstance.value = new Swiper(selector, {
      modules: [Navigation],
      ...defaultOptions,
      ...options,
    });
  };
  onMounted(initSwiper);
  watch(()=>route.fullPath, initSwiper);
  return {swiperInstance};
}