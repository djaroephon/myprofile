<template>
  <section id="about" class="py-20 bg-gray-800 relative overflow-hidden">
    <div class="absolute inset-0 z-0 opacity-10">
      <div class="absolute top-20 left-20 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl animate-float-1"></div>
      <div class="absolute bottom-20 right-20 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl animate-float-2"></div>
    </div>
    
    <div class="container mx-auto px-4 relative z-10">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-16 opacity-0" ref="titleElement">
        About <span class="text-accent">Me</span>
      </h2>
      
      <div class="flex flex-col md:flex-row gap-12">
        <div class="md:w-1/2 opacity-0" ref="infoElement">
          <p class="text-lg mb-6 leading-relaxed">
            I'm a passionate web developer with expertise in modern web technologies. 
            I enjoy creating interactive and responsive web applications that provide 
            great user experiences.
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div class="flex items-center bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition-colors duration-300">
              <div class="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mr-3">
                <Icon name="mdi:map-marker" class="text-accent" size="20" />
              </div>
              <div>
                <p class="text-sm text-gray-400">Location</p>
                <p>Indonesia</p>
              </div>
            </div>
            
            <div class="flex items-center bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition-colors duration-300">
              <div class="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mr-3">
                <Icon name="mdi:email" class="text-accent" size="20" />
              </div>
              <div>
                <p class="text-sm text-gray-400">Email</p>
                <p>djohansyuhada@uui.ac.id</p>
              </div>
            </div>
            
            <div class="flex items-center bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition-colors duration-300">
              <div class="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mr-3">
                <Icon name="mdi:calendar" class="text-accent" size="20" />
              </div>
              <div>
                <p class="text-sm text-gray-400">Born</p>
                <p>2006</p>
              </div>
            </div>
            
            <div class="flex items-center bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition-colors duration-300">
              <div class="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mr-3">
                <Icon name="mdi:school" class="text-accent" size="20" />
              </div>
              <div>
                <p class="text-sm text-gray-400">Education</p>
                <p>Student Informatics UUI</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="md:w-1/2 opacity-0" ref="interestsElement">
          <h3 class="text-xl font-semibold mb-6">My Interests</h3>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div 
              v-for="(interest, index) in interests" 
              :key="index"
              class="bg-gray-700 p-6 rounded-xl hover:bg-gray-600 transition-all duration-300 transform hover:-translate-y-2 group relative overflow-hidden"
            >
              <div class="absolute inset-0 bg-gradient-to-br from-accent/10 to-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div class="flex flex-col items-center text-center relative z-10">
                <div class="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors duration-300">
                  <Icon :name="interest.icon" class="text-accent text-2xl" />
                </div>
                <h4 class="font-semibold mb-2">{{ interest.name }}</h4>
                <p class="text-sm text-gray-400">{{ interest.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const interests = [
  { 
    name: 'Anime', 
    icon: 'mdi:animation', 
    description: 'Enjoying various anime series and movies' 
  },
  { 
    name: 'Music', 
    icon: 'mdi:music', 
    description: 'Listening to and creating music across genres' 
  },
  {
    name: 'Programming', 
    icon: 'mdi:code-tags',
    description: 'Building web applications and exploring new technologies'
  },
  {
    name: 'Networking',
    icon: 'mdi:lan',
    description: 'Love to learn about computer networks and systems'
  }
]

const titleElement = ref(null)
const infoElement = ref(null)
const interestsElement = ref(null)

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
      targets: infoElement.value,
      opacity: [0, 1],
      translateY: [30, 0],
      duration: 800,
      easing: 'easeOutBack'
    })
    .add({
      targets: interestsElement.value,
      opacity: [0, 1],
      translateY: [30, 0],
      duration: 800,
      easing: 'easeOutBack'
    })
    .add({
      targets: interestsElement.value.querySelectorAll('.bg-gray-700'),
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
</style>