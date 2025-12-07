<script setup>
import PageHeader from "@/components/PageHeader.vue";
import RegisterForm from "@/components/RegisterForm.vue";
</script>

<template>
  <PageHeader
    subHeading="Fill out the registration form below to start the registration form. Our admins will process and will reach out to you whenever it's ready."
  >
    <template #heading>
      Be part of our<br /><span class="text-brick-ember">IT Society</span>
    </template>
  </PageHeader>

  <RegisterForm
    formTitle="Membership Registration Form"
    formDescription="Join IT Society today and unlock your potential in the world of technology! Fill out the form below to become a member and embark on an exciting journey of learning, networking, and growth."
  />
</template>
