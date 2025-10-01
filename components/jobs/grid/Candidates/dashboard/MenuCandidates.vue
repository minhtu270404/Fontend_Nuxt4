<template>
  <div class="col-lg-3 col-md-4 col-sm-12">
    <div class="box-nav-tabs nav-tavs-profile mb-5">
      <ul class="nav" role="tablist">
        <li v-for="item in links" :key="item.title">
          <NuxtLink
            :to="item.link"
            class="btn btn-border mb-20"
            :class="{ active: item.active }"
          >
            {{ item.title }}
          </NuxtLink>
        </li>
      </ul>
      <div class="mt-20">
        <NuxtLink class="link-red" to="#">Delete Account</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Link {
  title: string;
  link: string;
  active?: boolean;
}

const links: Link[] = [
  { title: "My Profile", link: "/candidates/dashboard/profile" },
  { title: "My Jobs", link: "/candidates/dashboard/job-applied" },
  { title: "Saved Jobs", link: "/candidates/dashboard/job-saved" },
  { title: "Dashboard", link: "/candidates/dashboard/candidate", active: true },
  { title: "Logout", link: "/" },
];
</script>
