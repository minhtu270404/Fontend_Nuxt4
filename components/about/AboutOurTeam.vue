<template>
  <section class="section-box mt-80">
    <div class="post-loop-grid">
      <div class="container">
        <!-- Heading -->
        <div class="text-center">
          <h6 class="f-18 color-text-muted text-uppercase">Our company</h6>
          <h2 class="section-title mb-10 wow animate__animated animate__fadeInUp">
            Meet Our Team
          </h2>
          <p class="font-sm color-text-paragraph w-lg-50 mx-auto wow animate__animated animate__fadeInUp">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <!-- State loading/error -->
        <div v-if="pending">Đang tải...</div>
        <div v-else-if="error">Có lỗi xảy ra</div>

        <div v-else>
          <div class="row mt-70">
            <div
              v-for="item in members"
              :key="item.id"
              class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-md-30"
            >
              <div class="card-grid-4 text-center hover-up">
                <!-- Profile image -->
                <div class="image-top-feature">
                  <figure>
                    <img
                      :alt="item.full_name"
                      :src="item.profile_image_url || fallbackImage"
                      loading="lazy"
                    />
                  </figure>
                </div>

                <!-- Info -->
                <div class="card-grid-4-info">
                  <h5 class="mt-10">{{ item.full_name }}</h5>
                  <p class="font-xs color-text-paragraph-2 mt-5 mb-5">
                    {{ item.job_title }}
                  </p>
                  <span class="card-location">{{ item.location || '—' }}</span>

                  <!-- Social links -->
                  <div
                    v-if="hasSocialLinks(item)"
                    class="text-center mt-30 team_social_link"
                  >
                    <a
                      v-for="(link, key) in item.social_links"
                      :key="`${item.id}-${key}`"
                      :href="link"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="me-2"
                    >
                      <i :class="`fab fa-${key}`" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Empty state -->
            <div v-if="members && members.length === 0" class="col-12 text-center">
              Không có thành viên nào.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { useAsyncData, useRuntimeConfig } from '#app';

// runtime config
const config = useRuntimeConfig();
const apiBase = config.public.apiBase || '';

// endpoint — theo resource/controller bạn đã tạo (plural)
const endpoint = `${apiBase}/v1/frontend/company-team-members`;

// fallback image (public folder)
const fallbackImage = '/images/fallback-avatar.png';

// fetch async
const { data, pending, error } = await useAsyncData(
  'companyTeamMembers',
  () => $fetch(endpoint).catch(err => {
    // rethrow so `error` is set by useAsyncData
    throw err;
  })
);

/*
  Normalization:
  - If API returns { data: [...] } -> use that
  - If API returns [...] -> use that
  - If API returns a Resource Collection with meta -> use root array
*/
const members = computed(() => {
  if (!data.value) return [];
  // case: { data: [...] }
  if (Array.isArray(data.value.data)) return data.value.data;
  // case: resource collection returns array
  if (Array.isArray(data.value)) return data.value;
  // fallback: maybe wrapped in `items` or similar
  if (Array.isArray(data.value.items)) return data.value.items;
  return [];
});

function hasSocialLinks(item) {
  return item && item.social_links && Object.keys(item.social_links).length > 0;
}
</script>

<style scoped>
/* optional small fixes */
.team_social_link a { font-size: 16px; color: inherit; }
.card-location { display:block; margin-top:6px; color: #777; }
</style>
