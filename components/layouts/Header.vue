<script setup lang="ts">
import { ref, onMounted } from "vue";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

onMounted(() => {
  // Nếu cần thêm logic khác, như sticky scroll, thì xử lý tại đây
});
</script>

<template>
  <header class="header sticky-bar">
    <div class="container">
      <div class="main-header">
        <!-- Logo -->
        <div class="header-left">
          <div class="header-logo">
            <NuxtLink to="/" class="d-flex">
              <img alt="joblist" src="/assets/imgs/template/logo.png" />
            </NuxtLink>
          </div>
        </div>

        <div class="header-nav" :class="{ 'is-open': isMenuOpen }">
          <nav class="nav-main-menu">
            <ul class="main-menu">
              <li class="has-children">
                <NuxtLink to="/" class="active">Home</NuxtLink>
              </li>
              <li class="has-children">
                <NuxtLink to="/joblist">Find a Job</NuxtLink>
              </li>
              <li class="has-children">
                <NuxtLink to="/companies/companies-grid">Recruiters</NuxtLink>
              </li>
              <li class="has-children">
                <NuxtLink to="/candidates/candidates-grid">Candidates</NuxtLink>
              </li>
              <li class="has-children">
                <NuxtLink to="/">Pages</NuxtLink>
                <ul class="sub-menu">
                  <li><NuxtLink to="/pg/about">About Us</NuxtLink></li>
                  <li><NuxtLink to="/pg/pricing">Pricing Plan</NuxtLink></li>
                  <li><NuxtLink to="/pg/contact">Contact Us</NuxtLink></li>
                </ul>
              </li>
              <li class="has-children">
                <NuxtLink to="/blogs/blogs-list">Blog</NuxtLink>
              </li>
            </ul>
          </nav>

          <!-- Burger -->
          <div class="burger-icon burger-icon-white" @click="toggleMenu">
            <span class="burger-icon-top"></span>
            <span class="burger-icon-mid"></span>
            <span class="burger-icon-bottom"></span>
          </div>
        </div>

        <!-- Sign in -->
        <div class="header-right">
          <div class="block-signin">
            <NuxtLink
              to="/auth/signin"
              class="btn btn-default btn-shadow ml-40 hover-up"
            >
              Sign In
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
