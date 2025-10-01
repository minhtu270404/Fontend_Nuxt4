<template>
    <section class="section-box mt-80">
  <div class="container">
    <div class="text-center">
      <h2 class="section-title mb-10 wow animate__animated animate__fadeInUp">Jobs by Location</h2>
      <p class="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">
        Find your favourite jobs and get the benefits of yourself
      </p>
    </div>
  </div>
  <div class="container">
    <div class="row mt-50">

      <div class="col-xl-3 col-lg-3 col-md-5 col-sm-12 col-12">
        <div class="card-image-top hover-up">
          <NuxtLink to="/jobs-grid">
            <div class="image" style="background-image: url(assets/imgs/page/homepage1/location1.png);">
              <span class="lbl-hot">Hot</span>
            </div>
          </NuxtLink>
          <div class="informations">
            <NuxtLink to="/jobs-grid">
              <h5>Paris, France</h5>
            </NuxtLink>
            <div class="row">
              <div class="col-lg-6 col-6"><span class="text-14 color-text-paragraph-2">5 Vacancy</span></div>
              <div class="col-lg-6 col-6 text-end"><span class="color-text-paragraph-2 text-14">120 companies</span></div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xl-3 col-lg-3 col-md-5 col-sm-12 col-12">
        <div class="card-image-top hover-up">
          <NuxtLink to="/jobs-grid">
            <div class="image" style="background-image: url(assets/imgs/page/homepage1/location2.png);">
              <span class="lbl-hot">Trending</span>
            </div>
          </NuxtLink>
          <div class="informations">
            <NuxtLink to="/jobs-grid">
              <h5>London, England</h5>
            </NuxtLink>
            <div class="row">
              <div class="col-lg-6 col-6"><span class="text-14 color-text-paragraph-2">7 Vacancy</span></div>
              <div class="col-lg-6 col-6 text-end"><span class="color-text-paragraph-2 text-14">68 companies</span></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Lặp lại các block bên dưới với NuxtLink -->
      <div class="col-xl-3 col-lg-3 col-md-5 col-sm-12 col-12">
        <div class="card-image-top hover-up">
          <NuxtLink to="/jobs-grid">
            <div class="image" style="background-image: url(assets/imgs/page/homepage1/location3.png);">
              <span class="lbl-hot">Hot</span>
            </div>
          </NuxtLink>
          <div class="informations">
            <NuxtLink to="/jobs-grid">
              <h5>New York, USA</h5>
            </NuxtLink>
            <div class="row">
              <div class="col-lg-6 col-6"><span class="text-14 color-text-paragraph-2">9 Vacancy</span></div>
              <div class="col-lg-6 col-6 text-end"><span class="color-text-paragraph-2 text-14">80 companies</span></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Copy tiếp cho Amsterdam, Copenhagen, Berlin, Paris, London... -->
      <!-- Chỉ cần thay <a href="jobs-grid.html"> thành <NuxtLink to="/jobs-grid"> -->
      
    </div>
  </div>
</section>

</template>
<script setup>

</script>