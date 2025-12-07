<script setup>
import PageHeader from "@/components/PageHeader.vue";
</script>

<template>
  <PageHeader subHeading="Let's get to know who we are.">
    <template #heading>
      About <span class="text-brick-ember">IT Society</span>
    </template>
  </PageHeader>

  <section class="section-wrapper bg-apricot-cream">
    <div class="flex flex-col gap-8">
      <div class="grid grid-cols-1 md:grid-cols-3">
        <h2>Our Mission</h2>
        <p class="col-span-2">
          At IT Society, our mission is to empower individuals with the skills
          and knowledge needed to excel in the ever-evolving field of
          information technology. We strive to create a supportive community
          where learners can connect, collaborate, and grow together.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3">
        <h2>Our Vision</h2>
        <p class="col-span-2">
          Our vision is to be a leading platform for IT education and
          professional development, recognized for our commitment to quality,
          innovation, and inclusivity. We aim to inspire a passion for
          technology and lifelong learning among our members.
        </p>
      </div>
    </div>
  </section>

  <section class="section-wrapper">
    <div class="flex flex-col gap-8">
      <div class="grid grid-cols-1 md:grid-cols-3">
        <h2>Our History</h2>
        <p class="col-span-2">
          Founded in 2023, IT Society began as a small group of tech enthusiasts
          passionate about sharing knowledge and fostering a community of
          learners. Over the years, we have grown into a vibrant platform
          offering a wide range of courses, resources, and events to support IT
          professionals at all stages of their careers.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3">
        <h2>Meet the Team</h2>
        <p class="col-span-2">
          Our team is composed of experienced IT mentors that provide the best
          learning experience for our members. We are united by our passion for
          technology and our commitment to helping others succeed in the IT
          industry.
        </p>
      </div>
    </div>
  </section>

  <section
    class="section-wrapper from-sage-green to-space-indigo bg-linear-to-t text-white"
  >
    <div class="flex flex-col gap-8">
      <div class="section-header text-white">
        <h2>How to reach us</h2>
        <p class="col-span-2">
          Anything you want to ask, our communication channels are always wide
          open!
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2">
        <div>
          <div class="section-header">
            <h3>Contact Informations</h3>
            <p>We're available at:</p>
          </div>
          <ul class="flex flex-col gap-4">
            <li>
              <strong>Email: </strong>
              <a href="mailto:info@itsociety.com">info@itsociety.com</a>
            </li>
            <li>
              <strong>Instagram: </strong>
              <a
                href="https://instagram.com/it_xsociety"
                target="_blank"
                rel="noopener noreferrer"
                >@it_xsociety</a
              >
            </li>
          </ul>
        </div>

        <div>
          <div class="section-header">
            <h3>Our headquarter</h3>
            <p>
              Laboratorium Teknik Komputer dan Jaringan SMK Negeri 3 Balikpapan
            </p>
          </div>
          <div class="flex shrink">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.884199908118!2d116.88297531072752!3d-1.2398552355722845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df1472fb113030f%3A0xb5d2e13015554b42!2sSMK%20Negeri%203%20Balikpapan!5e0!3m2!1sid!2sid!4v1765042107000!5m2!1sid!2sid"
              width="600"
              height="450"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
