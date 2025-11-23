<script setup>
    import SpecialtiesIcons from '@/assets/specialties_icons.svg';
</script>

<template>
    <div class="px-5 md:px-36 lg:px-72 py-24 items-center">
        <div class="grid grid-cols-1 gap-8">
            <!-- Specialties Icons -->
            <div>
                <img class="w-[182] h-[176]" :src="SpecialtiesIcons" alt="">
            </div>
            
            <!-- Hero Text -->
            <div class="grid grid-cols-1 gap-8">
                <h1 class="text-4xl font-bold text-black">
                    Driven by <span class="text-[#C61212]">curiosity</span>,<br>
                    connected by technology.
                </h1>
                <p>We help students develop beyond what is taught.</p>
            </div>
        </div>
    </div>
</template>
