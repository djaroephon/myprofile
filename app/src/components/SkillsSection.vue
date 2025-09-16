<template>
  <section id="skills" class="py-20 bg-gray-900 relative overflow-hidden">
    <div class="absolute inset-0 z-0 opacity-10">
      <div class="absolute top-20 left-20 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl animate-float-1"></div>
      <div class="absolute bottom-20 right-20 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl animate-float-2"></div>
    </div>
    
    <div class="container mx-auto px-4 relative z-10">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-16 opacity-0" ref="titleElement">
        My <span class="text-accent">Skills</span>
      </h2>
      
      <div class="mb-12 flex justify-center opacity-0" ref="categoriesElement">
        <div class="flex flex-wrap gap-3 bg-gray-800 p-2 rounded-2xl shadow-lg">
          <button 
            v-for="(category, index) in skillCategories" 
            :key="index"
            @click="setActiveCategory(category.id)"
            class="px-5 py-3 rounded-xl transition-all duration-300 font-medium flex items-center group relative overflow-hidden"
            :class="activeCategory === category.id 
              ? 'bg-accent text-gray-900 shadow-lg shadow-accent/30' 
              : 'bg-gray-700 text-gray-100 hover:bg-gray-600'"
          >
            <span class="absolute inset-0 bg-gradient-to-r from-accent/20 to-teal-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <Icon :name="category.icon" class="mr-2 relative z-10" />
            <span class="relative z-10">{{ category.name }}</span>
          </button>
        </div>
      </div>
      
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6 opacity-0" ref="skillsElement">
        <div 
          v-for="(skill, index) in filteredSkills" 
          :key="skill.name"
          class="skill-item bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-4 md:p-5 flex flex-col items-center transition-all duration-500 cursor-pointer group relative overflow-hidden"
          :style="`transition-delay: ${index * 50}ms`"
          @mouseenter="skillHovered(skill)"
          @mouseleave="skillUnhovered"
        >
          <div class="absolute inset-0 bg-gradient-to-br from-accent/10 to-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div class="absolute inset-0 rounded-2xl bg-accent/5 group-hover:bg-accent/10 blur-md transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
          
          <div class="skill-icon mb-3 text-4xl relative z-10 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
            <img 
              v-if="skill.image" 
              :src="skill.image" 
              :alt="skill.name" 
              class="w-10 h-10 md:w-12 md:h-12 object-contain"
            />
            <Icon v-else-if="skill.icon" :name="skill.icon" class="text-accent" />
            <span v-else class="text-3xl font-bold text-accent">{{ skill.name.charAt(0) }}</span>
          </div>
          
          <p class="text-xs md:text-sm text-center font-medium relative z-10 group-hover:text-accent transition-colors duration-300">
            {{ skill.name }}
          </p>
          
          <div class="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-accent/40 transition-all duration-300"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'


const GenshinImpactIcon = '/images/icons/genhinIcon.png';
const HonkaiStarRailIcon = '/images/icons/hsrIcon.png';
const MobileLegendsIcon = '/images/icons/mlIcon.png';
const UmaMusumeIcon = '/images/icons/umaIcon.png';

const activeCategory = ref('web')

const skillCategories = [
  { id: 'web', name: 'Web Development', icon: 'mdi:code-braces' },
  { id: 'networking', name: 'Networking', icon: 'mdi:lan' },
  { id: 'games', name: 'Games', icon: 'mdi:gamepad-variant' },
]

const skills = {
  web: [
    { name: 'HTML', icon: 'mdi:language-html5' },
    { name: 'CSS', icon: 'mdi:language-css3' },
    { name: 'JavaScript', icon: 'mdi:language-javascript' },
    { name: 'PHP', icon: 'mdi:language-php' },
    { name: 'Python', icon: 'mdi:language-python' },
    { name: 'Tailwind', icon: 'mdi:tailwind' },
    { name: 'Bootstrap', icon: 'mdi:bootstrap' },
    { name: 'Laravel', icon: 'mdi:laravel' },
    { name: 'Vue', icon: 'mdi:vuejs' },
    { name: 'Nuxt', icon: 'mdi:nuxt' },
    { name: 'Node', icon: 'mdi:nodejs' },
  ],
  networking: [
    { name: 'Cisco', icon: 'mdi:router' },
    { name: 'Mikrotik', icon: 'mdi:router-wireless' },
    { name: 'Proxmox', icon: 'mdi:server' },
    { name: 'Debian', icon: 'mdi:ubuntu' },
    { name: 'Ubuntu', icon: 'mdi:ubuntu' },
    { name: 'Kali', icon: 'mdi:linux' },
  ],
  games: [
    { name: 'Genshin Impact', image: GenshinImpactIcon },
    { name: 'Honkai Star Rail', image: HonkaiStarRailIcon },
    { name: 'Mobile Legend', image: MobileLegendsIcon },
    { name: 'Uma Musume', image: UmaMusumeIcon },
  ]
}

const filteredSkills = computed(() => {
  return skills[activeCategory.value]
})

const setActiveCategory = (category) => {
  activeCategory.value = category
}

const skillHovered = (skill) => {
  console.log('Hovered:', skill.name)
}

const skillUnhovered = () => {
  console.log('Unhovered')
}

const titleElement = ref(null)
const categoriesElement = ref(null)
const skillsElement = ref(null)

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
      targets: titleElement.value,
      opacity: [0, 1],
      translateY: [30, 0],
      duration: 1000,
      easing: 'easeOutBack'
    })
    .add({
      targets: categoriesElement.value,
      opacity: [0, 1],
      translateY: [30, 0],
      duration: 800,
      easing: 'easeOutBack'
    })
    .add({
      targets: skillsElement.value,
      opacity: [0, 1],
      translateY: [30, 0],
      duration: 800,
      easing: 'easeOutBack'
    })
    .add({
      targets: skillsElement.value.querySelectorAll('.skill-item'),
      opacity: [0, 1],
      translateY: [20, 0],
      scale: [0.9, 1],
      delay: $anime.stagger(100),
      duration: 600,
      easing: 'easeOutBack'
    })
}
</script>

<style scoped>
.animate-float-1 {
  animation: float 15s ease-in-out infinite;
}

.animate-float-2 {
  animation: float 18s ease-in-out infinite reverse;
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

.skill-item {
  perspective: 1000px;
  transform-style: preserve-3d;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.skill-item:hover {
  transform: translateY(-5px) rotateX(5deg) rotateY(5deg) scale(1.05);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

@media (max-width: 640px) {
  .skill-item {
    padding: 0.75rem;
  }
  
  .skill-icon {
    margin-bottom: 0.5rem;
  }
}

@media (max-width: 768px) {
  .flex-wrap {
    overflow-x: auto;
    padding-bottom: 0.5rem;
    scrollbar-width: thin;
    scrollbar-color: #4a5568 #2d3748;
  }
  
  .flex-wrap::-webkit-scrollbar {
    height: 6px;
  }
  
  .flex-wrap::-webkit-scrollbar-track {
    background: #2d3748;
    border-radius: 3px;
  }
  
  .flex-wrap::-webkit-scrollbar-thumb {
    background: #4a5568;
    border-radius: 3px;
  }
  
  .flex-wrap::-webkit-scrollbar-thumb:hover {
    background: #718096;
  }
}
</style>