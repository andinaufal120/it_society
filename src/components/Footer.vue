<script setup>
import socials from "@/assets/data/socials.js";
</script>

<template>
  <div class="bg-space-indigo flex flex-col gap-4 p-8 text-lg text-white">
    <div class="py-10">
      <img src="@/assets/specialties_footer.svg" alt="" width="550" />
    </div>

    <div
      class="grid grid-cols-2 gap-4 border-b border-white/40 pb-12 md:grid-cols-4"
    >
      <div class="col-span-2 flex flex-col gap-4 pb-4 md:gap-20 md:pb-0">
        <div class="flex flex-col gap-2">
          <a href="/"
            ><img
              class="min-h-[46px] min-w-[161px]"
              src="@/assets/itsociety_wordmark_white.svg"
              alt="Wordmark"
              width="161"
              height="46"
            />
          </a>
          <p>Your gateway to unlocked potentials.</p>
        </div>
        <div>
          <ul class="flex flex-row gap-8">
            <li v-for="social in socials" :key="social.title" class="list-none">
              <a
                class="hover:opacity-80"
                :href="social.link"
                target="_blank"
                rel="noopener noreferrer"
                ><img
                  :src="social.thumbnail"
                  :alt="social.thumbnailAlt"
                  :title="social.title"
                  width="25"
              /></a>
            </li>
          </ul>
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <h3>IT Society</h3>
        <ul>
          <li><a href="/about">About</a></li>
          <li><a href="/blog">Blog</a></li>
        </ul>
      </div>
      <div class="flex flex-col gap-2">
        <h3>Learn</h3>
        <ul>
          <li><a href="#">IT Network System Administration</a></li>
          <li><a href="#">Cyber security</a></li>
          <li><a href="#">Cloud computing</a></li>
          <li><a href="#">Cabling</a></li>
        </ul>
      </div>
    </div>

    <div class="flex flex-col gap-8 pt-4 md:flex-row md:items-center">
      <a href="https://yamaym.me" target="_blank" rel="noopener noreferrer">
        <span class="font-jetbrains-mono text-2xl">yamaym.me</span>
      </a>
      <ul class="flex flex-col gap-8 md:flex-row">
        <li>
          <a
            class="flex flex-row gap-0.5"
            href="https://github.com/andinaufal120/it_society"
            target="_blank"
            rel="noopener noreferrer"
            >Website Source
            <img
              src="@/assets/open-in-new-tab.svg"
              alt="Open in new tab"
              width="15"
            />
          </a>
        </li>
        <li>
          <a
            class="flex flex-row gap-0.5"
            href="https://www.figma.com/design/9gnuO126dIdV38oGOFbOSe/IT-Society-SPA?node-id=0-1&t=M3ECKC0CixtYDPKy-1"
            target="_blank"
            rel="noopener noreferrer"
            >Website Figma Design
            <img
              src="@/assets/open-in-new-tab.svg"
              alt="Open in new tab"
              width="15"
            />
          </a>
        </li>
        <li>
          <a
            class="flex flex-row gap-0.5"
            href="https://github.com/andinaufal120"
            target="_blank"
            rel="noopener noreferrer"
            >Dev's GitHub
            <img
              src="@/assets/open-in-new-tab.svg"
              alt="Open in new tab"
              width="15"
            />
          </a>
        </li>
      </ul>
    </div>

    <div>
      <p>Made by a Tortured Soul.</p>
      <p>2025</p>
    </div>
  </div>
</template>
