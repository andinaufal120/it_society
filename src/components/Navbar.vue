<script setup></script>

<template>
  <nav
    class="flex flex-row items-center justify-between bg-[#FFCF99] px-10 py-4"
  >
    <div>
      <a href="/"
        ><img
          cls
          src="@/assets/itsociety_wordmark.svg"
          alt="Wordmark"
          width="161"
          height="46"
      /></a>
    </div>
    <div class="flex flex-row items-center gap-8">
      <div>
        <ul class="flex flex-row gap-6 font-medium text-black">
          <li><a class="navbar-link" href="/">Home</a></li>
          <li><a class="navbar-link" href="/courses">Courses</a></li>
          <li><a class="navbar-link" href="/blogs">Blogs</a></li>
          <li><a class="navbar-link" href="/about">About</a></li>
        </ul>
      </div>
      <div>
        <button
          class="transform rounded-lg bg-black px-4 py-2 font-bold text-white transition hover:bg-white hover:text-black"
        >
          Join Now
        </button>
      </div>
    </div>
  </nav>
</template>
