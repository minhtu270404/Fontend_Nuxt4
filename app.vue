<template>
  <Preloader />
  <Header />

  <MobileHeader />
  <MobileMenu />

  <section v-if="route.name !== 'index'" class="section-box mt-75">
    <div class="breacrumb-cover">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-12">
            <h2 class="mb-20">{{ pageTitle }}</h2>
            <ul class="breadcrumbs">
              <li>
                <NuxtLink to="/" class="home-icon">Home</NuxtLink>
              </li>
              <li>{{ breadcrumbLabel }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <main class="main">
    <NuxtPage />
  </main>

  <NewLetters />
  <Footer />
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

import Header from "~/components/layouts/Header.vue";
import Preloader from "~/components/layouts/Preloader.vue";
import MobileMenu from "~/components/layouts/MobileMenu.vue";
import NewLetters from "~/components/layouts/NewsLetter.vue";
import Footer from "~/components/layouts/Footer.vue";
import MobileHeader from "~/components/layouts/MobileHeader.vue";

const route = useRoute();
const pageTitle = computed(() => route.meta?.title ?? "Jobs");
const breadcrumbLabel = computed(() => route.meta?.breadcrumb ?? "List");
</script>
