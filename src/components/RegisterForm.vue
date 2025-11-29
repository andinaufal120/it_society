<script setup>
defineProps({
  formTitle: {
    type: String,
    default: "Form Title",
  },
  formDescription: {
    type: String,
    default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
  },
});
</script>

<template>
  <form action="#">
    <div class="section-wrapper bg-space-indigo">
      <!-- Section header -->
      <div class="section-header text-white">
        <h2 class="text-white">{{ formTitle }}</h2>
        <p class="text-white">{{ formDescription }}</p>
      </div>

      <!-- Form content -->
      <div class="flex flex-col gap-8">
        <div>
          <div class="md:grid md:grid-cols-3 md:gap-4">
            <div class="flex flex-col gap-2 md:col-span-2">
              <label for="first-name">First name:</label>
              <div class="input-wrapper">
                <input
                  type="text"
                  id="first-name"
                  name="first-name"
                  placeholder="John"
                  required
                  class="peer"
                />
              </div>
              <p class="input-invalid-err">Please provide your first name.</p>
            </div>
            <div class="flex flex-col gap-2">
              <label for="last-name" class="flex flex-row justify-between"
                >Last name:
                <span class="font-normal text-gray-500">Optional</span>
              </label>
              <div class="input-wrapper">
                <input
                  type="text"
                  id="last-name"
                  name="last-name"
                  placeholder="Doe"
                  class="peer"
                />
              </div>
              <p class="input-invalid-err">
                Please provide a valid last name.
              </p>
            </div>
          </div>

          <div class="flex flex-col gap-2">
            <label for="email">Email:</label>
            <div class="input-wrapper">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="johndoe@example.com"
                required
                class="peer"
              />
            </div>
            <p class="input-invalid-err">
              Please provide a valid email address.
            </p>
          </div>

          <div class="flex flex-col gap-2">
            <label for="whatsapp-number">WhatsApp number:</label>
            <div class="input-wrapper">
              <span class="shrink-0 border-r border-gray-300 p-2.5 text-black"
                >+62</span
              >
              <input
                type="tel"
                id="whatsapp-number"
                name="whatsapp-number"
                placeholder="8xxxxxxxxxx"
                class="peer"
                required
              />
            </div>
            <p class="input-invalid-err">
              Please provide a valid WhatsApp number.
            </p>
          </div>

          <div class="flex flex-col gap-2">
            <label for="discord-usn">Discord username:</label>
            <div class="input-wrapper">
              <input type="text" id="discord-usn" name="discord-usn" placeholder="john25" required class="peer" />
            </div>
            <p class="input-invalid-err">
              Please provide a valid Discord username.
            </p>
          </div>
        </div>

        <div class="flex flex-col">
          <button
            class="w-48 flex-initial transform self-center rounded-lg bg-black px-4 py-2 font-bold text-white transition hover:cursor-pointer hover:bg-white hover:text-black hover:shadow-lg hover:shadow-black/5"
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </form>
</template>
