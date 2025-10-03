<template>
    
    <section class="section-box why_choose mt-95 pt-90 mb-20" v-if="reason">
      <div class="container">
        <div class="text-center">
          <h2 class="section-title mb-10 wow animate__animated animate__fadeInUp">{{reason.section_subtitle}}</h2>
          
        </div>
        <div class="mt-70 mb-95">
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="box-step step-1">
                <h1 class="number-element">
                  <img src="/assets/imgs/template/icons/whu_choose_icon_1.png" alt="choose">
                </h1>
                <h4 class="mb-20">{{reason.item_title}} </h4>
                <p class="font-lg color-text-paragraph-2">{{reason.item_description}}</p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="box-step step-2">
                <h1 class="number-element">
                  <img src="/assets/imgs/template/icons/whu_choose_icon_2.png" alt="choose">
                </h1>
                <h4 class="mb-20">{{reason1.item_title}}</h4>
                <p class="font-lg color-text-paragraph-2">{{reason1.item_description}}</p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="box-step border-0">
                <h1 class="number-element">
                  <img src="/assets/imgs/template/icons/whu_choose_icon_3.png" alt="choose">
                </h1>
                <h4 class="mb-20">{{reason2.item_title}}</h4>
                <p class="font-lg color-text-paragraph-2">{{reason2.item_description}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
       <div v-if="pending">Đang tải...</div>
      <div v-else-if="error">Có lỗi xảy ra</div>
    </section>
</template>
<script setup>
import { useAsyncData, useHead } from "#app";

// ==== CONFIG ====
// Lấy API base từ nuxt.config
const config_api = useRuntimeConfig().public.apiBase;

const {
  data: whychooseus,
  pending,
  error,

} = await useAsyncData("whychooseus", async()=>{
  try{
    const res = await $fetch(`${config_api}/v1/frontend/why-choose-us`);
    return res;
  }
  catch(err){
    throw err;
  }
});
const reason = computed(() => whychooseus.value?.data?.[0]);
const reason1 = computed(() => whychooseus.value?.data?.[1]);
const reason2 = computed(() => whychooseus.value?.data?.[2]);

watchEffect(() => {
  const reason = whychooseus.value?.data?.[0];
  if (reason) {
    useHead({
      title: reason.title ?? "Why Choose Us",
      meta: [
        { name: "section_title", content: reason.section_title },
        { property: "og:description", content: reason.item_description },
      ],
      script: [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: reason.title ?? "Our Company",
            url: "https://example.com",
            description: reason.summary ?? "",
          }),
        },
      ],
    });
  }
});

</script>