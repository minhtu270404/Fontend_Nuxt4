<template>
  <section class="section-box mt-120">
    <div class="container">
      <div class="row">
        <MenuCandidates />
        <div class="col-lg-9 col-md-8 col-sm-12 col-12 mb-50">
          <div class="content-single">
            <h3 class="mt-0 mb-4 color-brand-1">Dashboard</h3>
            <div class="dashboard_overview">
              <div class="row">
                <div
                  v-for="(item, index) in stats"
                  :key="index"
                  class="col-lg-4 col-md-6 mb-3"
                >
                  <div :class="['dash_overview_item', item.bgClass]">
                    <h2>{{ item.count }} <span>{{ item.label }}</span></h2>
                    <span class="icon"><i :class="item.icon"></i></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup >
import MenuCandidates from "~/components/Jobs/Grid/Candidates/dashboard/MenuCandidates.vue";

const stats = [
  { count: 12, label: "Jobs Applied", bgClass: "bg-info-subtle", icon: "fas fa-briefcase" },
  { count: 5, label: "Jobs Saved", bgClass: "bg-warning-subtle", icon: "fas fa-bookmark" },
  { count: 3, label: "Interviews Scheduled", bgClass: "bg-success-subtle", icon: "fas fa-calendar-check" },
  { count: 120, label: "Profile Views", bgClass: "bg-secondary-subtle", icon: "fas fa-eye" },
];
</script>
