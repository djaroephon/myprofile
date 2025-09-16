<template>
  <div class="fixed inset-0 bg-black z-50 flex items-center justify-center">
    <div ref="animationContainer" class="text-center">
      <div class="w-32 h-32 mx-auto mb-6">
        <div class="w-full h-full bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
            <img src="../assets/images/logo.png" alt="Logo">
        </div>
      </div>
      <h1 class="text-4xl md:text-6xl font-bold text-white mb-2">Djaroephon Djohan Syuhada</h1>
      <p class="text-xl md:text-2xl text-gray-300">Web Developer</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const emit = defineEmits(['complete'])
const animationContainer = ref(null)

onMounted(() => {
  if (process.client) {
    import('animejs').then(anime => {
      anime.default({
        targets: animationContainer.value,
        scale: [0.8, 1],
        opacity: [0, 1],
        duration: 1500,
        easing: 'easeOutQuart',
        complete: () => {
          setTimeout(() => {
            anime.default({
              targets: animationContainer.value,
              opacity: 0,
              scale: 1.2,
              duration: 1000,
              easing: 'easeInOutQuart',
              complete: () => emit('complete')
            })
          }, 1500)
        }
      })
    })
  } else {
    setTimeout(() => emit('complete'), 3000)
  }
})
</script>