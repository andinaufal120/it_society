<script setup>
import { ref } from "vue";
import Hero from "./components/Hero.vue";
import PageHeader from "./components/PageHeader.vue";
import Card from "./components/Card.vue";
import Navbar from "./components/Navbar.vue";
import CTA from "./components/CTA.vue";
import Form from "./components/RegisterForm.vue";
import Modal from "./components/Modal.vue";
import Footer from "./components/Footer.vue";
import specialties from "./assets/data/specialties.js";

const isModalOpen = ref(false);

const handleDeactivate = () => {
  console.log("Account deactivated");
  isModalOpen.value = false;
};
</script>

<template>
  <header>
    <Navbar />
  </header>

  <!-- <main class="bg-[#FFF8F0] font-['bodoni-moda']"> -->
  <main class="bg-[#FFF8F0] pt-16">
    <Hero />

    <PageHeader
      subHeading="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnam aliquam quaerat voluptatem."
    >
      <template #heading>
        Page <span class="text-[#C61212]">Header</span>,<br />
        component.
      </template>
    </PageHeader>

    <div
      class="grid grid-cols-1 gap-8 bg-[#111D4A] px-5 py-16 md:px-36 lg:px-72"
    >
      <div class="section-header">
        <h2 class="text-white">Our Specialties</h2>
        <p class="text-white">
          We offer a variety of services to help students grow in their tech
          journey.
        </p>
      </div>
      <div class="grid grid-cols-1 gap-8">
        <ul class="grid grid-cols-1 gap-8" role="list">
          <li
            v-for="content in specialties"
            :key="content.title"
            class="list-none"
          >
            <Card :content="content" />
          </li>
        </ul>
      </div>
    </div>

    <Form
      formTitle="Registration Form"
      formDescription="Please fill out the form below to join our community."
    />

    <div>
      <button
        class="rounded-md bg-gray-950/5 px-2.5 py-1.5 text-sm font-semibold text-gray-900 hover:bg-gray-950/10"
        @click="isModalOpen = true"
      >
        Open dialog
      </button>

      <Modal
        :is-open="isModalOpen"
        title="Deactivate account"
        icon="error"
        @close="isModalOpen = false"
      >
        <!-- Content slot -->
        <p class="text-sm text-gray-500">
          Are you sure you want to deactivate your account? All of your data
          will be permanently removed. This action cannot be undone.
        </p>

        <!-- Footer slot -->
        <template #footer>
          <button
            type="button"
            class="danger-modal-btn"
            @click="handleDeactivate"
          >
            Deactivate
          </button>
          <button
            type="button"
            class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
            @click="isModalOpen = false"
          >
            Cancel
          </button>
        </template>
      </Modal>
    </div>

    <CTA />
  </main>

  <footer>
    <Footer />
  </footer>
</template>

<style></style>
