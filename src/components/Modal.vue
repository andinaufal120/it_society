<!-- Modal.vue -->
<template>
  <Transition
    enter-active-class="ease-out duration-300"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="ease-in duration-200"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div v-if="isOpen" class="relative z-10" @click="close">
      <!-- Backdrop -->
      <div class="bg-space-indigo/50 fixed inset-0 transition-opacity"></div>

      <!-- Modal Container -->
      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <Transition
            enter-active-class="ease-out duration-300"
            enter-from-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to-class="opacity-100 translate-y-0 sm:scale-100"
            leave-active-class="ease-in duration-200"
            leave-from-class="opacity-100 translate-y-0 sm:scale-100"
            leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              v-if="isOpen"
              @click.stop
              class="bg-floral-white relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
            >
              <!-- Modal Content -->
              <div class="bg-floral-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                  <!-- Icon -->
                  <div
                    v-if="icon"
                    class="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full sm:mx-0 sm:size-10"
                    :class="iconBgClass"
                  >
                    <component
                      :is="iconSvg"
                      class="size-6"
                      :class="iconColorClass"
                    />
                  </div>

                  <!-- Title and Content -->
                  <div
                    class="mt-3 w-full text-center sm:mt-0 sm:text-left"
                    :class="{ 'sm:ml-4': icon }"
                  >
                    <h3
                      v-if="title"
                      class="font-inter text-space-indigo text-lg font-semibold"
                    >
                      {{ title }}
                    </h3>
                    <div class="mt-2">
                      <slot class="text-space-indigo/70 text-sm"></slot>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Footer Buttons -->
              <div
                v-if="$slots.footer"
                class="bg-space-indigo/5 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"
              >
                <slot name="footer"></slot>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { computed, watch, onMounted, onUnmounted, h } from "vue";

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  title: {
    type: String,
    default: "",
  },
  icon: {
    type: String,
    default: "", // 'warning', 'info', 'success', 'error'
    validator: (value) =>
      ["", "warning", "info", "success", "error"].includes(value),
  },
});

const emit = defineEmits(["close"]);

const close = () => {
  emit("close");
};

// Icon configurations
const iconConfig = {
  warning: {
    bg: "bg-yellow-100",
    color: "text-yellow-600",
    path: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z",
  },
  error: {
    bg: "bg-red-100",
    color: "text-red-600",
    path: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z",
  },
  info: {
    bg: "bg-blue-100",
    color: "text-blue-600",
    path: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  success: {
    bg: "bg-green-100",
    color: "text-green-600",
    path: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
};

const iconBgClass = computed(() => {
  return props.icon ? iconConfig[props.icon]?.bg : "";
});

const iconColorClass = computed(() => {
  return props.icon ? iconConfig[props.icon]?.color : "";
});

const iconSvg = computed(() => {
  if (!props.icon) return null;

  const config = iconConfig[props.icon];
  return h(
    "svg",
    {
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      "stroke-width": "2",
      "aria-hidden": "true",
    },
    [
      h("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: config.path,
      }),
    ],
  );
});

// Handle Escape key
const handleEscape = (e) => {
  if (e.key === "Escape" && props.isOpen) {
    close();
  }
};

onMounted(() => {
  document.addEventListener("keydown", handleEscape);
});

onUnmounted(() => {
  document.removeEventListener("keydown", handleEscape);
});

// Prevent body scroll when modal is open
watch(
  () => props.isOpen,
  (newVal) => {
    if (newVal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  },
);
</script>
