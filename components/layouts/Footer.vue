<template>
  <footer class="footer pt-165">
    <div class="container">
      <div class="row justify-content-between">
        <div class="footer-col-1 col-md-3 col-sm-12">
          <NuxtLink class="footer_logo" to="/">
            <img alt="joblist" src="/assets/imgs/template/logo_2.png" />
          </NuxtLink>
          <div class="mt-20 mb-20 font-xs color-text-paragraph-2">
            joblist is the heart of the design community and the best resource
            to discover and connect with designers and jobs worldwide.
          </div>
          <div class="footer-social">
            <NuxtLink class="icon-socials icon-facebook" to="/"
              ><i class="fab fa-facebook-f"></i
            ></NuxtLink>
            <NuxtLink class="icon-socials icon-twitter" to="/"
              ><i class="fab fa-twitter"></i
            ></NuxtLink>
            <NuxtLink class="icon-socials icon-linkedin" to="/"
              ><i class="fab fa-linkedin-in"></i
            ></NuxtLink>
          </div>
        </div>
        <div class="footer-col-2 col-md-2 col-xs-6">
          <h6 class="mb-20">Resources</h6>
          <ul class="menu-footer">
            <li><NuxtLink to="/">About us</NuxtLink></li>
            <li><NuxtLink to="/">Our Team</NuxtLink></li>
            <li><NuxtLink to="/">Products</NuxtLink></li>
            <li><NuxtLink to="/">Contact</NuxtLink></li>
          </ul>
        </div>
        <div class="footer-col-3 col-md-2 col-xs-6">
          <h6 class="mb-20">Community</h6>
          <ul class="menu-footer">
            <li><NuxtLink to="/">Feature</NuxtLink></li>
            <li><NuxtLink to="/">Pricing</NuxtLink></li>
            <li><NuxtLink to="/">Credit</NuxtLink></li>
            <li><NuxtLink to="/">FAQ</NuxtLink></li>
          </ul>
        </div>
        <div class="footer-col-4 col-md-2 col-xs-6">
          <h6 class="mb-20">Quick links</h6>
          <ul class="menu-footer">
            <li><NuxtLink to="/">iOS</NuxtLink></li>
            <li><NuxtLink to="/">Android</NuxtLink></li>
            <li><NuxtLink to="/">Microsoft</NuxtLink></li>
            <li><NuxtLink to="/">Desktop</NuxtLink></li>
          </ul>
        </div>
        <div class="footer-col-5 col-md-2 col-xs-6">
          <h6 class="mb-20">More</h6>
          <ul class="menu-footer">
            <li><NuxtLink to="/">Privacy</NuxtLink></li>
            <li><NuxtLink to="/">Help</NuxtLink></li>
            <li><NuxtLink to="/">Terms</NuxtLink></li>
            <li><NuxtLink to="/">FAQ</NuxtLink></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom mt-50">
        <div class="row">
          <div class="col-md-6">
            <span class="font-xs color-text-paragraph"
              >Copyright &copy; 2023. JOBLIST all right reserved</span
            >
          </div>
          <div class="col-md-6 text-md-end text-start">
            <div class="footer-social">
              <NuxtLink class="font-xs color-text-paragraph" to="/"
                >Privacy Policy</NuxtLink
              ><NuxtLink class="font-xs color-text-paragraph mr-30 ml-30" to="/"
                >Terms &amp; Conditions</NuxtLink
              ><NuxtLink class="font-xs color-text-paragraph" to="/"
                >Security</NuxtLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>
