<template>
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
    <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-10" />
      <DialogPanel
        class="fixed h-2/4 bottom-0 right-0 z-30 w-4/6 bg-slate-400 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10" style="border-radius: 1rem 0 0 0;">
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
                <a href="#about" class="text-xl font-bold leading-6 text-white"
                  @click="mobileMenuOpen = false">Sobre mim</a>
                <a href="#stacks" class="text-xl font-bold leading-6 text-white"
                  @click="mobileMenuOpen = false">Stacks</a>
                <a href="#projects" class="text-xl font-bold leading-6 text-white"
                  @click="mobileMenuOpen = false">Projetos</a>
              </div>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from '@headlessui/vue'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/vue/24/outline';

const mobileMenuOpen = ref(false)
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