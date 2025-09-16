<template>
  <section id="projects" class="py-20 bg-gray-800 relative overflow-hidden">
    <div class="absolute inset-0 z-0 opacity-10">
      <div class="absolute top-20 left-20 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl animate-float-1"></div>
      <div class="absolute bottom-20 right-20 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl animate-float-2"></div>
    </div>
    
    <div class="container mx-auto px-4 relative z-10">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-16 opacity-0" ref="titleElement">
        My <span class="text-accent">Projects</span> & <span class="text-accent">Certifications</span>
      </h2>
      
      <div class="flex justify-center mb-12 opacity-0" ref="filterElement">
        <div class="flex flex-wrap justify-center gap-2 bg-gray-700 p-1 rounded-2xl shadow-lg">
          <button 
            v-for="filter in filters" 
            :key="filter"
            @click="activeFilter = filter"
            class="px-5 py-3 rounded-xl transition-all duration-300 font-medium flex items-center group relative overflow-hidden"
            :class="activeFilter === filter 
              ? 'bg-accent text-gray-900 shadow-lg shadow-accent/30' 
              : 'bg-gray-800 text-gray-100 hover:bg-gray-600'"
          >
            <span class="absolute inset-0 bg-gradient-to-r from-accent/20 to-teal-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span class="relative z-10">{{ filter }}</span>
          </button>
        </div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 opacity-0" ref="gridElement">
        <div 
          v-for="item in filteredItems" 
          :key="item.id"
          class="bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer group relative h-full flex flex-col"
        >
          <div class="h-56 bg-gray-800 overflow-hidden relative flex items-center justify-center p-4">
            <img 
              :src="item.image" 
              :alt="item.title" 
              class="max-h-44 w-auto object-contain transition-transform duration-700 group-hover:scale-105"
              :class="item.type === 'Certifications' ? 'certificate-image' : 'project-image'"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
            <div class="absolute bottom-3 left-4">
              <span class="text-xs font-semibold px-3 py-1 rounded-full" 
                    :class="item.type === 'Certifications' ? 'bg-green-500/20 text-green-400' : 'bg-accent/20 text-accent'">
                {{ item.type }}
              </span>
            </div>
          </div>
          
          <div class="p-6 flex flex-col flex-grow">
            <h3 class="text-xl font-semibold mb-2 group-hover:text-accent transition-colors duration-300">
              {{ item.title }}
            </h3>
            <p class="text-gray-400 mb-4 flex-grow">{{ item.description }}</p>
            
            <div class="flex flex-wrap gap-2 mt-auto">
              <span 
                v-for="(tag, index) in item.tags" 
                :key="index"
                class="px-3 py-1 bg-gray-700 text-xs rounded-full transition-colors duration-300 group-hover:bg-gray-600"
              >
                {{ tag }}
              </span>
            </div>
          </div>
          
          <div class="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-accent/30 transition-all duration-300"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
const activeFilter = ref('All')

const filters = ['All', 'Projects', 'Certifications']

const items = [
  {
    id: 1,
    title: 'Spotify Clone',
    description: 'A Spotify clone built with Vue.js and tailwind CSS',
    type: 'Projects',
    image: '/images/projects/spotifyClone.png',
    tags: ['Vue', 'Tailwind', 'Web Development']
  },
  {
    id: 2,
    title: 'LKS Nasional 2023 Web Technologies',
    description: 'LKS Nasional 2023 Web Technologies Competition Finalist',
    type: 'Certifications',
    image: '/images/certificates/lksn.png',
    tags: ['LKS Nasional 2023', 'Web Technologies', 'Competition']
  },
  {
    id: 3,
    title: 'Cisco Certified Network Basic',
    description: 'Cisco Networking Basics Certification',
    type: 'Certifications',
    image: '/images/certificates/cisco.png',
    tags: ['Cisco', 'Networking', 'Certification']
  },
  {
    id: 4,
    title: 'AlQuranKu Digital',
    description: 'A digital platform for Reading Quranic ',
    type: 'Projects',
    image: '/images/projects/quran.png',
    tags: ['Vue', 'Axios', 'Web Development']
  },
  {
    id: 5,
    title: 'Certified Ipv6 Basic Network',
    description: 'IDNIC Ipv6 Basic Network Certification',
    type: 'Certifications',
    image: '/images/certificates/apji.png',
    tags: ['Ipv6', 'Networking', 'Certification']
  },
  {
    id: 6,
    title: 'PyDownloader',
    description: 'Youtube Video Downloader using Python',
    type: 'Projects',
    image: '/images/projects/PyDownloader.png',
    tags: ['Python', 'YouTube', 'Web Development']
  },
  {
    id: 7,
    title: 'Certified CodeCamp Web Design',
    description: 'CodeCamp Web Design Certification',
    type: 'Certifications',
    image: codeCamp,
    tags: ['Web Design','Code Camp', 'Certification']
  },
  {
    id: 8,
    title: 'MyAnime',
    description: 'Fun Web For Anime Things',
    type: 'Projects',
    image: '/images/projects/Anime.png',
    tags: ['Vue', 'Tailwind', 'Web Development']
  },
  {
    id: 9,
    title: 'Inventaris Barang',
    description: 'A simple inventory management system built with Laravel and Vue.js',
    type: 'Projects',
    image: '/images/projects/Inventaris.png',
    tags: ['Vue', 'Laravel', 'Web Development']
  },
  {
    id: 10,
    title: 'Menu Kuliah',
    description: 'A web for See schedule Subjects in UUI',
    type: 'Projects',
    image: '/images/projects/menuKuliah.png',
    tags: ['Vue', 'Tailwind', 'Web Development']
  },
  {
    id: 11,
    title: 'Pelayanan TIK',
    description: 'Web for give service IT in For SKPA',
    type: 'Projects',
    image: '/images/projects/pelayanan.png',
    tags: ['Laravel', 'Mysql', 'Web Development']
  },
  {
    id: 12,
    title: 'Pilkasis',
    description: 'A web application for managing student council elections built with Vue.js and Laravel',
    type: 'Projects',
    image: '/images/projects/pilkasis.png',
    tags: ['Vue', 'Laravel', 'Fullstack', 'Web Development']
  }
]

const filteredItems = computed(() => {
  if (activeFilter.value === 'All') return items
  return items.filter(item => item.type === activeFilter.value)
})

const titleElement = ref(null)
const filterElement = ref(null)
const gridElement = ref(null)

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
      targets: filterElement.value,
      opacity: [0, 1],
      translateY: [30, 0],
      duration: 800,
      easing: 'easeOutBack'
    })
    .add({
      targets: gridElement.value,
      opacity: [0, 1],
      translateY: [30, 0],
      duration: 800,
      easing: 'easeOutBack'
    })
    .add({
      targets: gridElement.value.querySelectorAll('.group'),
      opacity: [0, 1],
      translateY: [20, 0],
      scale: [0.95, 1],
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

.group {
  perspective: 1000px;
  transform-style: preserve-3d;
}

.group:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.certificate-image {
  max-height: 11rem;
  width: auto;
}

.project-image {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

@media (max-width: 640px) {
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
  
  .certificate-image {
    max-height: 9rem;
  }
}

@media (min-width: 768px) {
  .certificate-image {
    max-height: 12rem;
  }
}

@media (min-width: 1024px) {
  .certificate-image {
    max-height: 13rem;
  }
}
</style>
