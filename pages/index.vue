<template>
  <div class="bg-homepage1"></div>
  <HeroBanner />
  <PopularJobCategory />
  <FeaturedJobs />
  <WhyChooseUs />
  <MillionsOfJob />
  <CounterSection />
  <TopRecruiters />
  <PricingPlan />
  <JobByLocation />
  <WhatSayYouClient />
  <NewAndBlogs />
</template>
<script setup >
import { useHead } from "nuxt/app";
import HeroBanner from "~/components/home/HeroBanner.vue";
import PopularJobCategory from "~/components/home/PopularJobCategory.vue";
import FeaturedJobs from "~/components/home/FeaturedJobs.vue";
import WhyChooseUs from "~/components/home/WhyChooseUs.vue";
import MillionsOfJob from "~/components/home/MillionsOfJob.vue";
import CounterSection from "~/components/home/CounterSection.vue";
import TopRecruiters from "~/components/home/TopRecruiters.vue";
import PricingPlan from "~/components/home/PricingPlan.vue";
import JobByLocation from "~/components/home/JobByLocation.vue";
import WhatSayYouClient from "~/components/home/WhatSayYouClient.vue";
import NewAndBlogs from "~/components/home/NewAndBlogs.vue";

useHead({
  title: "Home - Job Seeker",
  meta: [{ name: "description", content: "Home Page Description" }],
});
</script>
