<script setup>
import { ref, provide } from "vue";

const props = defineProps({
  tabs: {
    type: Array,
    required: true,
  },
  defaultTab: {
    type: Number,
    default: 0,
  },
});

const activeTab = ref(props.defaultTab);

const selectTab = (index) => {
  activeTab.value = index;
};

// Provide active tab to child TabPanel components
provide("activeTab", activeTab);
</script>

<template>
  <div>
    <!-- Tab Headers -->
    <div class="border-space-indigo/20 border-b">
      <nav class="-mb-px flex space-x-8" aria-label="Tabs">
        <button
          v-for="(tab, index) in tabs"
          :key="index"
          @click="selectTab(index)"
          :class="[
            'text-md border-b-2 px-1 py-4 whitespace-nowrap transition',
            activeTab === index
              ? 'border-space-indigo text-space-indigo font-semibold'
              : 'text-space-indigo/60 hover:border-space-indigo/30 hover:text-space-indigo border-transparent',
          ]"
        >
          {{ tab }}
        </button>
      </nav>
    </div>

    <!-- Tab Content -->
    <div class="mt-4">
      <slot></slot>
    </div>
  </div>
</template>
