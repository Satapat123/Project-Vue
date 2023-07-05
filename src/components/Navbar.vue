<template>
  <nav>
    <!-- Desktop menu -->
    <div class="bg-gray-800">
      <div class="max-w-7xl mx-auto">
        <div class="flex justify-between">
          <!-- menu -->
          <div class="flex space-x-4">
            <!-- logo -->
            <a href="" class="flex items-center space-x-2 py-5 px-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-indigo-200"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              <router-link to="/home">
                <span class="text-2xl font-extrabold text-white">KKK</span>
              </router-link>
            </a>
            <!-- menu -->
            <div class="hidden md:flex items-center space-x-1 ">
              <router-link to="/about">
                <a class="py-5 px-2 text-indigo-200 hover:bg-blue-700">About</a>
              </router-link>
              <div>
    <div class="relative">
      <!-- Dropdown toggle button -->
      <button
        @click="show = !show"
        class="flex items-center p-2 text-indigo-200 bg-gray-800 rounded-md"
      >
        <span class="mr-4 hover:bg-blue-700">Contact</span>
        <svg
          class="w-5 h-5 text-indigo-100 dark:text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </button>

      <!-- Dropdown menu -->
      <div
        v-show="show"
        class="
          absolute
          right-0
          py-2
          mt-2
          bg-indigo-500
          rounded-md
          shadow-xl
          w-44
        "
      >
        <router-link
          to="/contactKin"
          class="
            block
            px-4
            py-2
            text-sm text-indigo-100
            hover:bg-indigo-400 hover:text-indigo-100
          "
        >
          Pakin
        </router-link>
        <router-link
          to="/contactPu"
          class="
            block
            px-4
            py-2
            text-sm text-indigo-100
            hover:bg-indigo-400 hover:text-indigo-100
          "
        >
          Pugun
        </router-link>
        <router-link
          to="/contactSu"
          class="
            block
            px-4
            py-2
            text-sm text-indigo-100
            hover:bg-indigo-400 hover:text-indigo-100
          "
        >
          Sumo
        </router-link>
      </div>
    </div>
  </div>
              <router-link to="/setting">
                <a class="py-5 px-2 text-indigo-200 hover:bg-blue-700">Setting</a>
              </router-link>
            </div>
          </div>
          <!-- login -->
          <div class="hidden md:flex items-center space-x-1">
            <router-link to="/singin">
              <a class="py-5 px-2 text-indigo-200 hover:bg-blue-700">Sing in</a>
            </router-link>
            <router-link to="/singup">
              <a class="py-5 px-2 text-indigo-200 hover:bg-blue-700">Sing up</a>
            </router-link>
          </div>
          <!-- button show mobile menu -->
          <div class="md:hidden flex items-center">
            <button @click="showMobileMenu = !showMobileMenu" class="py-5 px-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-indigo-200"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Mobile Menu -->
    <div class="md:hidden bg-indigo-600" v-show="showMobileMenu">
      <a
        href=""
        class="block py-2 px-4 hover:bg-indigo-700 hover:text-indigo-400 text-indigo-100"
        >Home</a
      >
      <a
        href=""
        class="block py-2 px-4 hover:bg-indigo-700 hover:text-indigo-400 text-indigo-100"
        >About</a
      >
      <a
        href=""
        class="block py-2 px-4 hover:bg-indigo-700 hover:text-indigo-400 text-indigo-100"
        >Setting</a
      >
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const showMobileMenu = ref(false);
const show = ref(false);
</script>

<style></style>
