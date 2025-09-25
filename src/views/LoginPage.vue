<!-- src/views/LoginPage.vue -->
<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { EyeIcon, EyeSlashIcon, EnvelopeIcon } from '@heroicons/vue/24/outline'
import logo from '../assets/logo.png'
import rocket from '../assets/rocket.png'

const router = useRouter()

const email = ref('')
const password = ref('')
const rememberMe = ref(false)
const showPassword = ref(false)  // toggle password visibility
const errorMessage = ref('')     // inline error message

// Live email validation
const isEmailValid = computed(() => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email.value)
})

const handleLogin = () => {
  errorMessage.value = ''

  // 1) validate email format
  if (!isEmailValid.value) {
    errorMessage.value = 'Please enter a valid email address.'
    return
  }

  // 2) demo credentials check (front-end only)
  if (email.value === 'example123@gmail.com' && password.value === 'xyz') {
    // optional: save remembered email
    if (rememberMe.value) {
      localStorage.setItem('rememberedEmail', email.value)
    }
    // redirect to /home
    // router.push({ name: 'Dashboard' })
    router.push('/dashboard')

  } else {
    errorMessage.value = 'Email or password incorrect.'
  }
}
</script>

<template>
  <div class="h-screen flex">
    <!-- Left Section -->
    <div class="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 bg-white">
      <!-- Logo -->
      <div class="flex justify-center items-center mb-3">
        <img :src="logo" alt="SeedProd Logo" class="w-8 mr-2" />
        <span class="text-2xl text-gray-800">
          <span class="font-bold">Seed</span><span class="font-normal">Prod</span>
        </span>
      </div>

      <!-- Title -->
      <h2 class="flex justify-center items-center text-xl font-semibold mb-4 text-gray-700">Login</h2>
      <p class="text-sm text-gray-500 mb-6">
        Don’t have an account?
        <a href="#" class="text-red-500 hover:underline">Get SeedProd Now</a>
      </p>

      <!-- Form -->
      <form @submit.prevent="handleLogin" class="space-y-4">
        <!-- Email -->
        <div>
          <label class="block text-gray-700 mb-1">Email Address</label>
          <div class="relative">
            <input
              type="email"
              v-model="email"
              required
              class="w-full border border-gray-300 rounded-md px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <!-- Mail Icon -->
            <EnvelopeIcon class="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <p v-if="email && !isEmailValid" class="text-red-500 text-sm mt-1">
            Please enter a valid email address.
          </p>
        </div>

        <!-- Password -->
        <div>
          <label class="block text-gray-700 mb-1">Password</label>
          <div class="relative">
            <input
              :type="showPassword ? 'text' : 'password'"
              v-model="password"
              required
              class="w-full border border-gray-300 rounded-md px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <!-- Eye Toggle Icon -->
            <button
              type="button"
              @click="showPassword = !showPassword"
              class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            >
              <EyeIcon v-if="!showPassword" class="w-5 h-5" />
              <EyeSlashIcon v-else class="w-5 h-5" />
            </button>
          </div>
        </div>

        <!-- Remember Me -->
        <div class="flex items-center">
          <input
            id="remember"
            type="checkbox"
            v-model="rememberMe"
            class="h-4 w-4 text-orange-500 border-gray-300 rounded"
          />
          <label for="remember" class="ml-2 text-sm text-gray-600">Remember Me</label>
        </div>

        <!-- Inline error -->
        <p v-if="errorMessage" class="text-red-500 text-sm mt-1">{{ errorMessage }}</p>

        <!-- Login Button -->
        <button
          type="submit"
          class="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition"
        >
          Log In
        </button>

        <!-- Forgot Password -->
        <div class="text-center mt-2">
          <a href="#" class="text-sm text-orange-500 hover:underline">Forgot Your Password?</a>
        </div>
      </form>

      <!-- Footer -->
      <p class="text-xs text-gray-400 mt-8 flex justify-center">
        Copyright © 2019 SeedProd, LLC. SeedProd™ is a trademark of SeedProd, LLC.
      </p>
      <p class="flex justify-center">
        <a href="#" class="text-orange-500">Terms of Service</a> |
        <a href="#" class="text-orange-500">Privacy Policy</a>
      </p>
    </div>

    <!-- Right Section (Illustration) -->
    <div class="hidden md:flex w-3/4 items-center justify-center">
      <img :src="rocket" alt="Rocket Illustration" class="w-full h-full object-cover" />
    </div>
  </div>
</template>

<style scoped>
/* keep empty or add small tweaks */
</style>
