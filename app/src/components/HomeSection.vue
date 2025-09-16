<template>
  <section id="home" class="min-h-screen flex items-center pt-16 pb-20 md:py-0 relative overflow-hidden">
    <div class="absolute inset-0 z-0 overflow-hidden">
      <div class="absolute top-10 left-10 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-10 animate-float-1"></div>
      <div class="absolute top-1/3 right-20 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl opacity-10 animate-float-2"></div>
      <div class="absolute bottom-20 left-1/4 w-72 h-72 bg-indigo-500 rounded-full filter blur-3xl opacity-10 animate-float-3"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-400 rounded-full filter blur-3xl opacity-10 animate-float-4"></div>
    </div>
    
    <div class="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
      <div class="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
        <p class="text-lg text-accent mb-2 opacity-0" ref="hiElement">Hi, I'm</p>
        <h1 class="text-4xl md:text-6xl font-bold mb-4 opacity-0" ref="nameElement">
          Djaroephon Djohan Syuhada
        </h1>
        <h2 class="text-xl md:text-2xl text-gray-400 mb-6 opacity-0" ref="titleElement">
          <span ref="rotatingText">Web Developer</span>
          <span class="animate-pulse">|</span>
        </h2>
        
        <div class="flex justify-center md:justify-start space-x-4 mb-8 opacity-0" ref="socialElement">
          <a 
            v-for="(social, index) in socialLinks" 
            :key="index" 
            :href="social.url" 
            target="_blank"
            class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-accent transition-all duration-300 transform hover:scale-110"
          >
            <Icon :name="social.icon" size="20" />
          </a>
        </div>
        
        <button 
          class="group px-8 py-4 bg-gradient-to-r from-accent via-teal-400 to-cyan-400 text-gray-900 rounded-xl font-bold hover:from-accent/90 hover:via-teal-400/90 hover:to-cyan-400/90 transition-all duration-500 transform hover:scale-105 opacity-0 shadow-2xl hover:shadow-accent/40 relative overflow-hidden"
          ref="cvButtonElement"
          @click="downloadCV"
        >
          <span class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
          <div class="flex items-center space-x-3 relative z-10">
            <svg class="w-5 h-5 transform group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
            <span>Download CV</span>
          </div>
        </button>
      </div>
      
      <div class="md:w-1/2 flex justify-center opacity-0" ref="profileElement">
        <div 
          class="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden relative cursor-pointer profile-3d-container"
          ref="profileContainer"
          @mousemove="handleMouseMove"
          @mouseleave="resetProfilePosition"
          @click="flipProfile"
        >
          <img 
            :src="profileImage" 
            alt="Profile Picture" 
            class="w-full h-full rounded-full object-cover relative z-10 transition-transform duration-700"
            :class="{ 'rotate-y-180': isFlipped }"
            ref="profileImageElement"
          />
          
          <div class="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center p-6 text-center rotate-y-180 backface-hidden transition-transform duration-700" :class="{ 'rotate-y-0': isFlipped }">
            <div>
              <h3 class="text-xl font-bold text-accent mb-2">Djaroephon</h3>
              <p class="text-gray-300 text-sm">Web Developer & Designer</p>
              <div class="mt-4 flex justify-center space-x-3">
                <a 
                  v-for="(social, index) in socialLinks" 
                  :key="index" 
                  :href="social.url" 
                  target="_blank"
                  class="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-accent transition-all duration-300"
                >
                  <Icon :name="social.icon" size="16" />
                </a>
              </div>
            </div>
          </div>
          
          <div class="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-accent via-teal-400 to-cyan-400 opacity-70 animate-spin-slow z-0"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

import profileImage from '../assets/images/myProfile.png'

const socialLinks = [
  { icon: 'mdi:instagram', url: 'https://www.instagram.com/djaroephon.1746/' },
  { icon: 'mdi:twitter', url: 'https://x.com/1746Djaroephon' },
  { icon: 'mdi:github', url: 'https://github.com/djaroephon' },
]

const textOptions = ['Web Developer']
let currentTextIndex = 0
let textRotationInterval = null

const hiElement = ref(null)
const nameElement = ref(null)
const titleElement = ref(null)
const rotatingText = ref(null)
const socialElement = ref(null)
const cvButtonElement = ref(null)
const profileElement = ref(null)
const profileContainer = ref(null)
const profileImageElement = ref(null)
const isFlipped = ref(false)

let mouseX = 0
let mouseY = 0

const downloadCV = () => {
  const button = cvButtonElement.value
  const originalText = button.innerHTML
  
  button.innerHTML = `
    <div class="flex items-center space-x-3 relative z-10">
      <svg class="w-5 h-5 animate-spin" fill="currentColor" viewBox="0 0 20 20">
        <path d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"/>
      </svg>
      <span>Downloading...</span>
    </div>
  `
  
  setTimeout(() => {
    button.innerHTML = originalText
    alert('Blom ada CV bg(blom buat hehe)')
  }, 2000)
}

const flipProfile = () => {
  isFlipped.value = !isFlipped.value
}

const handleMouseMove = (event) => {
  if (!profileContainer.value || isFlipped.value) return
  
  const rect = profileContainer.value.getBoundingClientRect()
  const centerX = rect.left + rect.width / 2
  const centerY = rect.top + rect.height / 2
  
  mouseX = (event.clientX - centerX) / rect.width * 2
  mouseY = (event.clientY - centerY) / rect.height * 2
  
  profileContainer.value.style.transform = `
    perspective(1000px) 
    rotateX(${-mouseY * 5}deg) 
    rotateY(${mouseX * 5}deg)
    translateZ(10px)
  `
}

const resetProfilePosition = () => {
  if (profileContainer.value && !isFlipped.value) {
    profileContainer.value.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)'
  }
}

const startTextRotation = () => {
  textRotationInterval = setInterval(() => {
    if (!rotatingText.value) return
    
    rotatingText.value.style.opacity = '0'
    rotatingText.value.style.transform = 'translateY(-20px)'
    
    setTimeout(() => {
      currentTextIndex = (currentTextIndex + 1) % textOptions.length
      const newText = textOptions[currentTextIndex]
      
      rotatingText.value.textContent = ''
      rotatingText.value.style.opacity = '1'
      rotatingText.value.style.transform = 'translateY(0px)'
      
      let charIndex = 0
      const typingSpeed = 80 //mili
      
      const typeWriter = () => {
        if (charIndex < newText.length) {
          rotatingText.value.textContent += newText.charAt(charIndex)
          charIndex++
          setTimeout(typeWriter, typingSpeed)
        }
      }
      
      setTimeout(typeWriter, 200)
      
    }, 300)
  }, 3000)
}

onMounted(() => {
  startTextRotation()
  
  setTimeout(initAnimations, 500)
})

onUnmounted(() => {
  if (textRotationInterval) {
    clearInterval(textRotationInterval)
  }
})

const initAnimations = () => {
  const { $anime } = useNuxtApp()
  
  if (!$anime) {
    console.error('anime.js is not available')
    return
  }
  
  if (rotatingText.value) {
    rotatingText.value.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
  }
  
  const nameText = nameElement.value.textContent
  nameElement.value.textContent = ''
  
  const tl = $anime.timeline({
    easing: 'easeOutQuint',
    duration: 1000
  })
  
  tl
    .add({
      targets: hiElement.value,
      opacity: [0, 1],
      translateY: [30, 0],
      duration: 800,
      easing: 'easeOutBack'
    })
    .add({
      targets: nameElement.value,
      begin: function() {
        let nameChars = nameText.split('')
        nameElement.value.textContent = ''
        
        $anime({
          targets: nameElement.value,
          update: function(anim) {
            const progress = Math.floor(anim.progress / 100 * nameChars.length)
            nameElement.value.textContent = nameChars.slice(0, progress).join('')
          },
          duration: 2000,
          easing: 'easeInOutQuad'
        })
      },
      opacity: [0, 1],
      translateY: [30, 0],
      duration: 1200,
      easing: 'easeOutBack',
      delay: 200
    })
    .add({
      targets: titleElement.value,
      opacity: [0, 1],
      translateY: [30, 0],
      duration: 800,
      easing: 'easeOutBack'
    })
    .add({
      targets: socialElement.value,
      opacity: [0, 1],
      translateY: [30, 0],
      duration: 800,
      easing: 'easeOutBack'
    })
    .add({
      targets: socialElement.value.children,
      opacity: [0, 1],
      translateY: [20, 0],
      scale: [0.8, 1],
      delay: $anime.stagger(150),
      duration: 600,
      easing: 'easeOutBack'
    })
    .add({
      targets: cvButtonElement.value,
      opacity: [0, 1],
      translateY: [30, 0],
      scale: [0.9, 1],
      duration: 800,
      easing: 'easeOutBack'
    })
    .add({
      targets: profileElement.value,
      opacity: [0, 1],
      translateX: [100, 0],
      scale: [0.9, 1],
      duration: 1200,
      easing: 'easeOutBack'
    })
}
</script>

<style scoped>

#home {
  background: linear-gradient(to bottom, #1a202c, #2d3748);
}

.profile-3d-container {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform-style: preserve-3d;
  position: relative;
}

.rotate-y-180 {
  transform: rotateY(180deg);
}

.rotate-y-0 {
  transform: rotateY(0deg);
}

.backface-hidden {
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.animate-float-1 {
  animation: float 15s ease-in-out infinite;
}

.animate-float-2 {
  animation: float 18s ease-in-out infinite reverse;
}

.animate-float-3 {
  animation: float 12s ease-in-out infinite 2s;
}

.animate-float-4 {
  animation: float 20s ease-in-out infinite reverse 1s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  33% {
    transform: translateY(-20px) rotate(5deg);
  }
  66% {
    transform: translateY(10px) rotate(-3deg);
  }
}

.animate-spin-slow {
  animation: spin 8s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>