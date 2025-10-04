<template>
  <section class="section-box mt-80">
    <div class="post-loop-grid">
      <div class="container">
        <!-- =============================
             Section Heading
        ============================== -->
        <div class="text-center">
          <h6 class="f-18 color-text-muted text-uppercase">Our company</h6>
          <h2 class="section-title mb-10 wow animate__animated animate__fadeInUp">
            Meet Our Team
          </h2>
          <p
            class="font-sm color-text-paragraph w-lg-50 mx-auto wow animate__animated animate__fadeInUp"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <!-- =============================
             Content Area
        ============================== -->
        <div>
          <div class="row mt-70">
            <!-- Loop members -->
            <div
              v-for="member in members"
              :key="member.id"
              class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-md-30"
            >
              <div class="card-grid-4 text-center hover-up">
                <!-- 👤 Profile Image -->
                <div class="image-top-feature">
                  <figure>
                    <img
                      :alt="member.full_name"
                      :src="member.profile_image_url || fallbackImage"
                      loading="lazy"
                    />
                  </figure>
                </div>

                <!-- Info -->
                <div class="card-grid-4-info">
                  <h5 class="mt-10">{{ member.full_name }}</h5>
                  <p class="font-xs color-text-paragraph-2 mt-5 mb-5">
                    {{ member.job_title }}
                  </p>
                  <span >{{ member.location || "—" }}</span>

                  <!--  Social Links -->
                  <div
                    v-if="hasSocialLinks(member)"
                    class="text-center mt-30 team_social_link"
                  >
                    <a
                      v-for="(link, key) in member.social_links"
                      :key="`${member.id}-${key}`"
                      :href="link"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="me-2"
                    >
                      <i :class="`fab fa-${key}`"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <!--  Empty State -->
            <div v-if="!pending && members.length === 0" class="col-12 text-center">
              Không có thành viên nào.
            </div>

            <!-- Loading State -->
            <div v-if="pending" class="col-12 text-center py-5">
              <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Đang tải...</span>
</div>
            </div>

            <!-- Error State -->
            <div v-if="error" class="col-12 text-center text-danger py-3">
              Lỗi khi tải dữ liệu: {{ error.message }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// ===================================================
// Imports
// ===================================================
import { computed } from "vue";
import { useAsyncData, useRuntimeConfig } from "#app";

// ===================================================
// Runtime Config & Constants
// ===================================================
const config = useRuntimeConfig();
const apiBase = config.public.apiBase;
const endpoint = `${apiBase}/v1/frontend/company-team-member`;
const fallbackImage = "/images/fallback-avatar.png";

// ===================================================
// Fetch Team Members (async)
// - useAsyncData: tích hợp caching & SSR của Nuxt
// ===================================================
const { data, pending, error } = await useAsyncData(
  "companyTeamMembers",
  async () => {
    try {
      return await $fetch(endpoint);
    } catch (err) {
      throw err;
    }
  }
);

// ===================================================
//  Data Normalization
// - Chuẩn hoá cấu trúc response từ API (tránh lỗi kiểu resource collection hoặc object)
// - Parse chuỗi JSON "social_links" thành object thực
// ===================================================
const members = computed(() => {
  if (!data.value) return [];

  // Trường hợp API trả nhiều dạng khác nhau
  const raw =
    Array.isArray(data.value?.data) ? data.value.data :
    Array.isArray(data.value) ? data.value :
    Array.isArray(data.value?.items) ? data.value.items :
    [];

  // Chuẩn hoá từng item
  return raw.map((item) => ({
    ...item,
    social_links:
      typeof item.social_links === "string"
        ? JSON.parse(item.social_links)
        : item.social_links || {},
  }));
});

// ===================================================
//  Utility Helpers
// ===================================================
function hasSocialLinks(item) {
  return item?.social_links && Object.keys(item.social_links).length > 0;
}
</script>

<style scoped>
/* ===================================================
   Styling (Scoped)
=================================================== */

/* Social links */
.team_social_link a {
  font-size: 16px;
  color: inherit;
  transition: color 0.2s ease;
}
.team_social_link a:hover {
  color: #007bff;
}

/* Location text */
.card-location {
  display: block;
  margin-top: 6px;
  color: #777;
}
</style>
