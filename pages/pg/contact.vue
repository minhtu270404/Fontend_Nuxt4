<template>
    <ContactUs/>
    <ContactMap/>

</template>
<script setup >
definePageMeta({
  title: "Contact Us",
  breadcrumb: "Contact",
});
import ContactUs from "~/components/contact/ContactUs.vue";
import ContactMap from "~/components/contact/ContactMap.vue";
</script>
