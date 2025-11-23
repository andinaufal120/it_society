<script setup>
import SpecialtiesIcons from "@/assets/specialties_icons.svg";
</script>

<template>
  <div class="items-center px-5 py-24 md:px-36 lg:px-72">
    <div class="grid grid-cols-1 gap-8">
      <!-- Specialties Icons -->
      <div>
        <img class="h-[176] w-[182]" :src="SpecialtiesIcons" alt="" />
      </div>

      <!-- Hero Text -->
      <div class="grid grid-cols-1 gap-8">
        <h1>
          Driven by <span class="text-[#C61212]">curiosity</span>,<br />
          connected by technology.
        </h1>
        <p>We help students develop beyond what is taught.</p>
      </div>
    </div>
  </div>
</template>
