<template>
  <footer class="bg-gradient-to-b from-gray-800 to-gray-900 py-12 relative overflow-hidden">
    <div class="absolute inset-0 z-0 opacity-10">
      <div class="absolute bottom-10 left-10 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl"></div>
      <div class="absolute top-10 right-10 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl"></div>
    </div>
    
    <div class="container mx-auto px-4 relative z-10">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="mb-6 md:mb-0 text-center md:text-left">
          <div class="text-2xl font-bold mb-2 opacity-0" ref="logoElement">
            <span class="text-accent">D</span>jaroephon
          </div>
          <p class="text-gray-400 text-sm opacity-0" ref="copyrightElement">
            &copy; {{ new Date().getFullYear() }} Djaroephon Djohan Syuhada. All rights reserved.
          </p>
        </div>
        
        <div class="flex space-x-4 mb-6 md:mb-0 opacity-0" ref="socialElement">
          <a 
            v-for="(social, index) in socialLinks" 
            :key="index" 
            :href="social.url" 
            target="_blank"
            class="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center hover:bg-accent transition-all duration-300 transform hover:scale-110 group relative overflow-hidden"
          >
            <span class="absolute inset-0 bg-gradient-to-r from-accent/20 to-teal-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <Icon :name="social.icon" size="20" class="group-hover:text-gray-900" />
          </a>
        </div>
        
        
      </div>
      
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const socialLinks = [
  { icon: 'mdi:instagram', url: 'https://www.instagram.com/djaroephon.1746/' },
  { icon: 'mdi:twitter', url: 'https://x.com/1746Djaroephon' },
  { icon: 'mdi:github', url: 'https://github.com/djaroephon' },
]

const logoElement = ref(null)
const copyrightElement = ref(null)
const socialElement = ref(null)
const emailElement = ref(null)
const additionalElement = ref(null)

onMounted(() => {
  setTimeout(initAnimations, 300)
})

const initAnimations = () => {
  const { $anime } = useNuxtApp()
  
  if (!$anime) {
    console.error('anime.js is not available')
    return
  }
  
  const tl = $anime.timeline({
    easing: 'easeOutExpo',
    duration: 800
  })
  
  tl
    .add({
      targets: logoElement.value,
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 800,
      easing: 'easeOutBack'
    })
    .add({
      targets: copyrightElement.value,
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 800,
      easing: 'easeOutBack'
    })
    .add({
      targets: socialElement.value,
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 800,
      easing: 'easeOutBack'
    })
    .add({
      targets: socialElement.value.querySelectorAll('a'),
      opacity: [0, 1],
      translateY: [10, 0],
      scale: [0.8, 1],
      delay: $anime.stagger(100),
      duration: 600,
      easing: 'easeOutBack'
    })
    .add({
      targets: emailElement.value,
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 800,
      easing: 'easeOutBack'
    })
    .add({
      targets: additionalElement.value,
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 800,
      easing: 'easeOutBack'
    })
}
</script>

<style scoped>
footer {
  background: linear-gradient(135deg, #2d3748 0%, #1a202c 100%);
}
</style>