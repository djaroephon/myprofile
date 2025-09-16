<template>
   <!-- <OpeningAnimation v-if="showOpening" @complete="showOpening = false" /> -->
   <div class="min-h-screen bg-gray-900 text-gray-100">
    <Navbar />
    <main>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

import OpeningAnimation from '@/src/components/OpeningAnimation.vue'
import Navbar from '@/src/components/Navbar.vue'
import Home from '@/src/components/HomeSection.vue'
import About from '@/src/components/AboutSection.vue'
import Skills from '@/src/components/SkillsSection.vue'
import Projects from '@/src/components/ProjectsSection.vue'
import Contact from '@/src/components/ContactSection.vue'
import Footer from '@/src/components/Footer.vue'

const showOpening = ref(true)
const showNavbar = ref(false)

const handleScroll = () => {
  showNavbar.value = window.scrollY > 100
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>