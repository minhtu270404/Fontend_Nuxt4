<template>
  <div
    class="mobile-header-active mobile-header-wrapper-style perfect-scrollbar"
  >
    <div class="mobile-header-wrapper-inner">
      <div class="mobile-header-content-area">
        <div class="perfect-scroll">
          <div class="mobile-search mobile-header-border mb-30">
            <form action="#">
              <input type="text" placeholder="Search…" />
              <i class="fi-rr-search"></i>
            </form>
          </div>
          <div class="mobile-menu-wrap mobile-header-border">
            <!-- mobile menu start-->
            <nav>
              <ul class="mobile-menu font-heading">
                <li class="has-children">
                  <NuxtLink class="active" to="/">Home</NuxtLink>
                  <ul class="sub-menu">
                    <li><NuxtLink to="/">Home 1</NuxtLink></li>
                    <li><NuxtLink to="/">Home 2</NuxtLink></li>
                    <li><NuxtLink to="/">Home 3</NuxtLink></li>
                    <li><NuxtLink to="/">Home 4</NuxtLink></li>
                    <li><NuxtLink to="/">Home 5</NuxtLink></li>
                    <li><NuxtLink to="/">Home 6</NuxtLink></li>
                  </ul>
                </li>
                <li class="has-children">
                  <NuxtLink to="/jobs-grid">Find a Job</NuxtLink>
                  <ul class="sub-menu">
                    <li><NuxtLink to="/">Jobs Grid</NuxtLink></li>
                    <li><NuxtLink to="/">Jobs List</NuxtLink></li>
                    <li><NuxtLink to="/">Jobs Details</NuxtLink></li>
                    <li><NuxtLink to="/">Jobs Details 2</NuxtLink></li>
                  </ul>
                </li>
                <li class="has-children">
                  <NuxtLink to="/">Recruiters</NuxtLink>
                  <ul class="sub-menu">
                    <li><NuxtLink to="/">Recruiters</NuxtLink></li>
                    <li><NuxtLink to="/">Company Details</NuxtLink></li>
                  </ul>
                </li>
                <li class="has-children">
                  <NuxtLink to="/candidates-grid">Candidates</NuxtLink>
                  <ul class="sub-menu">
                    <li><NuxtLink to="/">Candidates Grid</NuxtLink></li>
                    <li><NuxtLink to="/">Candidate Details</NuxtLink></li>
                  </ul>
                </li>
                <li class="has-children">
                  <NuxtLink to="/blog-grid">Pages</NuxtLink>
                  <ul class="sub-menu">
                    <li><NuxtLink to="/">About Us</NuxtLink></li>
                    <li><NuxtLink to="/">Pricing Plan</NuxtLink></li>
                    <li><NuxtLink to="/">Contact Us</NuxtLink></li>
                    <li><NuxtLink to="/">Register</NuxtLink></li>
                    <li><NuxtLink to="/">Signin</NuxtLink></li>
                    <li><NuxtLink to="/">Reset Password</NuxtLink></li>
                    <li><NuxtLink to="/">Content Protected</NuxtLink></li>
                  </ul>
                </li>
                <li class="has-children">
                  <NuxtLink to="/blog-grid">Blog</NuxtLink>
                  <ul class="sub-menu">
                    <li><NuxtLink to="/">Blog Grid</NuxtLink></li>
                    <li><NuxtLink to="/">Blog Grid 2</NuxtLink></li>
                    <li><NuxtLink to="/">Blog Single</NuxtLink></li>
                  </ul>
                </li>
                <li>
                  <!-- External link giữ nguyên -->
                  <a
                    href="http://wp.alithemes.com/html/joblist/demos/dashboard"
                    target="_blank"
                  >
                    Dashboard
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div class="mobile-account">
            <h6 class="mb-10">Your Account</h6>
            <ul class="mobile-menu font-heading">
              <li>
                <NuxtLink to="/">Profile</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/">Work Preferences</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/">Account Settings</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/">Go Pro</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/">Sign Out</NuxtLink>
              </li>
            </ul>
          </div>
          <div class="site-copyright">
            Copyright 2022 &copy; joblist. <br />Designed by AliThemes.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts"></script>
