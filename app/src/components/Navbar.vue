<template>
  <nav 
    class="fixed top-0 w-full z-50 transition-all duration-500"
    :class="isScrolled ? 'bg-gray-800/90 backdrop-blur-sm py-2' : 'py-4'"
    ref="nav"
  >
    <div class="container mx-auto px-4 flex justify-between items-center">
      <div class="logo text-xl font-bold">
        <img src="../assets/images/logo.png" alt="Logo" class="inline w-20 h-18 mr-2"/>
      </div>
      
      <div class="hidden md:flex space-x-8">
        <a 
          v-for="(item, index) in navItems" 
          :key="index" 
          :href="item.href"
          class="relative group hover:text-accent transition-colors duration-300 py-2"
          @click.prevent="scrollToSection(item.href)"
        >
          {{ item.name }}
          <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
        </a>
      </div>
      
      <div class="md:hidden w-6"></div>
    </div>
  </nav>
  
  <div class="fixed bottom-0 left-0 right-0 bg-gray-800/90 backdrop-blur-sm z-40 md:hidden border-t border-gray-700">
    <div class="container mx-auto px-4 py-2 flex justify-around">
      <a 
        v-for="(item, index) in navItems" 
        :key="index" 
        :href="item.href"
        class="flex flex-col items-center text-xs transition-all duration-300 group"
        @click.prevent="scrollToSection(item.href)"
        :class="{ 'text-accent': activeSection === item.href }"
      >
        <div class="w-10 h-10 rounded-full flex items-center justify-center mb-1 transition-all duration-300 group-hover:bg-accent/20">
          <Icon :name="item.icon" size="20" />
        </div>
        <span class="group-hover:text-accent transition-colors duration-300">{{ item.name }}</span>
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const activeSection = ref('#home')
const navItems = [
  { name: 'Home', href: '#home', icon: 'mdi:home' },
  { name: 'About', href: '#about', icon: 'mdi:account' },
  { name: 'Skills', href: '#skills', icon: 'mdi:code-tags' },
  { name: 'Projects', href: '#projects', icon: 'mdi:folder' },
  { name: 'Contact', href: '#contact', icon: 'mdi:email' },
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
  
  const sections = navItems.map(item => item.href.substring(1))
  const scrollPosition = window.scrollY + 100
  
  for (const section of sections) {
    const element = document.getElementById(section)
    if (element && 
        element.offsetTop <= scrollPosition && 
        (element.offsetTop + element.offsetHeight) > scrollPosition) {
      activeSection.value = `#${section}`
      break
    }
  }
}

const scrollToSection = (sectionId) => {
  const section = document.querySelector(sectionId)
  if (section) {
    activeSection.value = sectionId
    
    const headerOffset = 80
    const elementPosition = section.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}

@supports not (scroll-behavior: smooth) {
  .smooth-scroll {
    scroll-behavior: smooth;
  }
}
</style>