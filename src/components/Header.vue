<template>
  <TransitionRoot as="template" :show="mobileMenuOpen" class="md:hidden">
    <Dialog as="div" class="relative z-10" @click="mobileMenuOpen = false">
      <TransitionChild as="template" enter="ease-in-out duration-500" enter-from="opacity-0" enter-to="opacity-100"
        leave="ease-in-out duration-500" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <TransitionChild as="template" enter="transform transition ease-in-out duration-500 sm:duration-700"
              enter-from="translate-x-full" enter-to="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700" leave-from="translate-x-0"
              leave-to="translate-x-full">
              <DialogPanel class="pointer-events-auto relative w-screen max-w-md">
                <TransitionChild as="template" enter="ease-in-out duration-500" enter-from="opacity-0"
                  enter-to="opacity-100" leave="ease-in-out duration-500" leave-from="opacity-100" leave-to="opacity-0">
                  <div class="absolute w-screen bottom-0 -ml-8 flex justify-center pr-2 p-4 sm:-ml-10 sm:pr-4 z-30">
                    <button type="button"
                      class="mr-5 relative rounded-md hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                      @click="mobileMenuOpen = false" :style="darkModeTexto">
                      <span class="absolute -inset-2.5" />
                      <span class="sr-only">Close panel</span>
                      <XMarkIcon class="h-8 w-8" aria-hidden="true" />
                    </button>
                  </div>
                </TransitionChild>
                <div class="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl"
                  :style="darkModeContainer">
                  <div class="px-4 sm:px-6">
                    <DialogTitle class="text-base font-semibold leading-6" :style="darkModeTexto">Menu</DialogTitle>
                  </div>
                  <div class="flex flex-col justify-center items-center gap-8 relative flex-1 px-4 sm:px-6">
                    <a href="#about" class="menuLink text-xl font-bold leading-6" :style="darkModeTexto"
                      @click="mobileMenuOpen = false">Sobre mim</a>
                    <a href="#stacks" class="menuLink text-xl font-bold leading-6" :style="darkModeTexto"
                      @click="mobileMenuOpen = false">Stacks</a>
                    <a href="#projects" class="menuLink text-xl font-bold leading-6" :style="darkModeTexto"
                      @click="mobileMenuOpen = false">Projetos</a>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
  <header class="">
    <nav
      class="fixed bottom-0 w-screen flex items-center justify-center p-4 lg:px-8 bg-slate-500 z-10 md:top-0 md:h-12 md:bg-black"
      style="border-bottom: 1px solid white;" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
        </a>
      </div>
      <div class="flex md:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-8 w-8" aria-hidden="true" />
        </button>
      </div>
      <PopoverGroup class="hidden md:flex md:gap-x-12">
        <a href="#about" class="menuLink text-xl font-bold leading-6 text-white">Sobre mim</a>
        <a href="#stacks" class="menuLink text-xl font-bold leading-6 text-white">Stacks</a>
        <a href="#projects" class="menuLink text-xl font-bold leading-6 text-white">Projetos</a>
      </PopoverGroup>
    </nav>
    <!-- <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-10" />
      <DialogPanel
        class="fixed h-2/4 bottom-0 right-0 z-30 w-4/6 bg-slate-400 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        style="border-radius: 1rem 0 0 0;">
        <div class="fixed bottom-0 right-0 w-screen p-4 flex items-center justify-center bg-slate-500">
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-8 w-8" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 h-full flex flex-col justify-end items-end">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <div style="display: flex; flex-direction: column; gap: 2rem; padding: 10rem 2rem;">
                <a href="#about" class="text-xl font-bold leading-6 text-white" @click="mobileMenuOpen = false">Sobre
                  mim</a>
                <a href="#stacks" class="text-xl font-bold leading-6 text-white"
                  @click="mobileMenuOpen = false">Stacks</a>
                <a href="#projects" class="text-xl font-bold leading-6 text-white"
                  @click="mobileMenuOpen = false">Projetos</a>
              </div>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog> -->
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  Dialog,
  DialogPanel,
  PopoverGroup, DialogTitle, TransitionChild, TransitionRoot
} from '@headlessui/vue'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/vue/24/outline';
import type DarkMode from './DarkMode.vue';
import { usuarioStore } from '@/stores/store';
const darkMode = computed(() => usuarioStore().darkmode)


const mobileMenuOpen = ref(false)

const darkModeContainer = computed(() => {
  return {
    backgroundColor: darkMode.value ? 'var(--black)' : 'var(--white)'
  }
})

const darkModeTexto = computed(() => {
  return {
    color: darkMode.value ? 'var(--white)' : 'var(--black)'
  }
})

</script>

<style scode>
@media screen and (min-width: 768px) {
  .menuLink {
    font-size: 1.3rem;
    color: #e1e1e1;
    font-weight: 800;
    cursor: pointer;
    position: relative;
    border: none;
    background: none;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 400ms;
    transition-property: color;
  }

  .menuLink:focus,
  .menuLink:hover {
    color: #fff;
  }

  .menuLink:focus:after,
  .menuLink:hover:after {
    width: 100%;
    left: 0%;
  }

  .menuLink:after {
    content: "";
    pointer-events: none;
    bottom: -2px;
    left: 50%;
    position: absolute;
    width: 0%;
    height: 2px;
    background-color: var(--blue);
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 400ms;
    transition-property: width, left;
  }
}
</style>