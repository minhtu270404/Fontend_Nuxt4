<template>
  <section class="section-box mt-120" v-if="profile">
    <div class="post-loop-grid">
      <div class="container">
        <div class="text-center">
          <h6 class="f-18 color-text-mutted text-uppercase">
            {{ profile.headline }}
          </h6>
          <h2
            class="section-title mb-10 wow animate__animated animate__fadeInUp"
          >
            {{ profile.title }}
          </h2>
          <p
            class="font-sm color-text-paragraph wow animate__animated animate__fadeInUp w-lg-50 mx-auto"
          >
            {{ profile.summary }}
          </p>
        </div>

        <div class="row justify-content-between mt-70" v-if="mission">
          <div class="col-lg-6 col-md-12 col-sm-12">
            <h3 class="mt-15">{{ mission.headline }}</h3>
            <div class="mt-20">
              <p class="font-md color-text-paragraph mt-20">
                {{ profile.body }}
              </p>
              <p class="font-md color-text-paragraph mt-20">
                {{ mission.body }}
              </p>
              <p class="font-md color-text-paragraph mt-20">
                {{ mission.summary }}
              </p>
            </div>
            <div class="mt-30">
              <NuxtLink class="btn btn-default" :to="mission.cta_link">
                {{ mission.cta.label }}
              </NuxtLink>
            </div>
          </div>
          <div class="col-lg-5 col-md-12 col-sm-12">
            <img src="/assets/imgs/page/about/img-about2.png" alt="joxBox" />
          </div>
        </div>
      </div>
      <div v-if="pending">Đang tải...</div>
      <div v-else-if="error">Có lỗi xảy ra</div>
    </div>
  </section>
</template>

<script setup>
// ==== IMPORT ====
import { useAsyncData, useHead } from "#app";

// ==== CONFIG ====
// Lấy API base từ nuxt.config
const config_api = useRuntimeConfig().public.apiBase;

// ==== DATA FETCH CALL API ====
const {
  data: companyProfiles,
  pending,
  error,
} = await useAsyncData("companyProfiles", async () => {
  try {
    const res = await $fetch(`${config_api}/v1/frontend/company-profiles`);
    return res;
  } catch (err) {
    throw err;
  }
});
const profile = computed(() => companyProfiles.value?.data?.[0]);
const mission = computed(() =>
  companyProfiles.value?.data?.find((p) => p.section_key == "mission")
);

// ==== SEO ====
// Khi dữ liệu companyProfiles có thì update <head>
watchEffect(() => {
  const profile = companyProfiles.value?.data?.[0];
  if (profile) {
    useHead({
      title: profile.title ?? "About Our Company",
      meta: [
        { name: "description", content: profile.summary },
        { property: "og:title", content: profile.title },
        { property: "og:description", content: profile.summary },
        { property: "og:image", content: profile.featured_image_url },
      ],
      script: [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: profile.title ?? "Our Company",
            url: "https://example.com",
            logo: profile.featured_image_url ?? "",
            description: profile.summary ?? "",
          }),
        },
      ],
    });
  }
});
</script>
