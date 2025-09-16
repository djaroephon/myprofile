<template>
  <section id="contact" class="py-20 bg-gray-900 relative overflow-hidden">
    <div class="absolute inset-0 z-0 opacity-10">
      <div class="absolute top-20 left-20 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl animate-float-1"></div>
      <div class="absolute bottom-20 right-20 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl animate-float-2"></div>
    </div>
    
    <div class="container mx-auto px-4 relative z-10">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-16 opacity-0" ref="titleElement">
        Connect <span class="text-accent">With Me</span>
      </h2>
      
      <div class="flex flex-col md:flex-row gap-12">
        <div class="md:w-1/2 opacity-0" ref="infoElement">
          <p class="text-lg mb-8 leading-relaxed">
            Feel free to reach out to me for collaboration or just to say hello! I'm always open to discussing new projects and opportunities.
          </p>
          
          <div class="space-y-6">
            <div 
              v-for="(contact, index) in contacts" 
              :key="index"
              class="flex items-center bg-gray-800 p-4 rounded-xl hover:bg-gray-700 transition-all duration-300 group"
            >
              <div class="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mr-4 group-hover:bg-accent/30 transition-colors duration-300">
                <Icon :name="contact.icon" class="text-accent" size="24" />
              </div>
              <div>
                <h3 class="font-semibold">{{ contact.title }}</h3>
                <p class="text-gray-400">{{ contact.value }}</p>
              </div>
            </div>
          </div>
          
          <div class="mt-8">
            <h3 class="text-lg font-semibold mb-4">Follow me on</h3>
            <div class="flex space-x-4">
              <a 
                v-for="(social, index) in socialLinks" 
                :key="index" 
                :href="social.url" 
                target="_blank"
                class="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-accent transition-all duration-300 transform hover:scale-110 group"
              >
                <Icon :name="social.icon" size="24" class="group-hover:text-gray-900" />
              </a>
            </div>
          </div>
        </div>
        
        <div class="md:w-1/2 opacity-0" ref="formElement">
          <form @submit.prevent="submitForm" class="space-y-6 bg-gray-800 p-6 rounded-2xl">
            <div>
              <label for="name" class="block mb-2 text-sm font-medium">Your Name</label>
              <input 
                type="text" 
                id="name" 
                v-model="formData.name"
                class="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
                placeholder="Enter your name"
                required
              >
            </div>
            
            <div>
              <label for="email" class="block mb-2 text-sm font-medium">Your Email</label>
              <input 
                type="email" 
                id="email" 
                v-model="formData.email"
                class="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
                placeholder="Enter your email"
                required
              >
            </div>
            
            <div>
              <label for="message" class="block mb-2 text-sm font-medium">Your Message</label>
              <textarea 
                id="message" 
                rows="5"
                v-model="formData.message"
                class="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              class="w-full px-6 py-3 bg-gradient-to-r from-accent to-teal-400 text-gray-900 rounded-lg font-semibold hover:from-accent/90 hover:to-teal-400/90 transition-all duration-300 transform hover:scale-105 relative overflow-hidden group"
              :disabled="isSubmitting"
            >
              <span class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
              <span class="relative z-10 flex items-center justify-center">
                <Icon v-if="isSubmitting" name="mdi:loading" class="animate-spin mr-2" />
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const socialLinks = [
 { icon: 'mdi:instagram', url: 'https://www.instagram.com/djaroephon.1746/' },
  { icon: 'mdi:twitter', url: 'https://x.com/1746Djaroephon' },
  { icon: 'mdi:github', url: 'https://github.com/djaroephon' },
]

const contacts = [
  { 
    icon: 'mdi:email', 
    title: 'Email', 
    value: 'djohansyuhada@uui.ac.id' 
  },
  { 
    icon: 'mdi:map-marker', 
    title: 'Location', 
    value: 'Banda Aceh, Indonesia' 
  },
]

const formData = ref({
  name: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)

const titleElement = ref(null)
const infoElement = ref(null)
const formElement = ref(null)

const submitForm = () => {
  isSubmitting.value = true
  
  setTimeout(() => {
    console.log('Form submitted:', formData.value)
    
    alert('Message sent successfully! I\'ll get back to you soon.')
    
    formData.value = {
      name: '',
      email: '',
      message: ''
    }
    
    isSubmitting.value = false
  }, 2000)
}

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
      targets: formElement.value,
      opacity: [0, 1],
      translateY: [30, 0],
      duration: 800,
      easing: 'easeOutBack'
    })
    .add({
      targets: infoElement.value.querySelectorAll('.bg-gray-800'),
      opacity: [0, 1],
      translateX: [-20, 0],
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

@media (max-width: 768px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  #contact {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
  
  .flex-col {
    gap: 2rem;
  }
}

input:focus, textarea:focus {
  box-shadow: 0 0 0 3px rgba(100, 255, 218, 0.1);
}

textarea::-webkit-scrollbar {
  width: 6px;
}

textarea::-webkit-scrollbar-track {
  background: #2d3748;
  border-radius: 3px;
}

textarea::-webkit-scrollbar-thumb {
  background: #4a5568;
  border-radius: 3px;
}

textarea::-webkit-scrollbar-thumb:hover {
  background: #718096;
}
</style>