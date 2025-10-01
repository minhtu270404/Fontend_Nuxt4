<template>
  <OurCompany />
  <OurTeam />
  <NewsBlog />
  <ClientReviews />
</template>

<script setup >
import OurCompany from "~/components/about/AboutOurCompany.vue";
import OurTeam from "~/components/about/AboutOurTeam.vue";
import ClientReviews from "~/components/home/WhatSayYouClient.vue";
import NewsBlog from "~/components/home/NewAndBlogs.vue";

definePageMeta({
  title: "About Us",
  breadcrumb: "About",
});
</script>
