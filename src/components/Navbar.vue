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
                        <div class="hidden md:flex items-center space-x-1">
                            <router-link to="/about">
                                <a class="py-5 px-2 text-indigo-200">About</a>
                            </router-link>
                            <router-link to="/contact">
                                <a class="py-5 px-2 text-indigo-200">Contact</a>
                            </router-link>
                            <router-link to="/setting">
                                <a class="py-5 px-2 text-indigo-200">Setting</a>
                            </router-link>
                        </div>
                    </div>
                    <!-- login -->
                    <div class=" hidden md:flex items-center space-x-1">
                        <router-link to="/singin">
                                <a class="py-5 px-2 text-indigo-200">Sing in</a>
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
            <a href="" class="block py-2 px-4 hover:bg-indigo-700 hover:text-indigo-400 text-indigo-100 ">Home</a>
            <a href="" class="block py-2 px-4 hover:bg-indigo-700 hover:text-indigo-400 text-indigo-100 ">About</a>
            <a href="" class="block py-2 px-4 hover:bg-indigo-700 hover:text-indigo-400 text-indigo-100 ">Setting</a>
        </div>
    </nav>
</template>

<script setup>
import {ref} from 'vue';

const showMobileMenu = ref(false);
</script>

<style>

</style>