<template>
  <TransitionRoot as="template" :show="mobileMenuOpen">
    <Dialog as="div" class="relative z-10" @click="fecharMenu">
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
              <DialogPanel class="pointer-events-auto relative w-screen max-w-md" style="height: calc(100vh - 65px);">
                <div class="absolute bottom-0 right-0 w-10/12 flex h-3/6 flex-col overflow-y-scroll bg-white py-6 shadow-xl" style="border-radius: 1rem 0 0 0;">
                  <div class="flex flex-col justify-center items-end gap-8 mt-6 flex-1 px-4 sm:px-6">
                    <a href="#about" class="menuLink text-xl font-bold leading-6 text-black" @click="fecharMenu">Sobre mim</a>
                    <a href="#stacks" class="menuLink text-xl font-bold leading-6 text-black" @click="fecharMenu">Stacks</a>
                    <a href="#projects" class="menuLink text-xl font-bold leading-6 text-black" @click="fecharMenu">Projetos</a>
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
      class="fixed bottom-0 w-screen flex items-center justify-center p-4 lg:px-8 bg-slate-500 z-50 md:top-0 md:h-12 md:bg-black"
      style="border-bottom: 1px solid white;" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
        </a>
      </div>
      <div class="flex md:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          @click="mobileMenuOpen = !mobileMenuOpen">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-8 w-8" aria-hidden="true" v-if="!mobileMenuOpen" />
          <XMarkIcon class="h-8 w-8" aria-hidden="true" v-else />
        </button>
      </div>
      <PopoverGroup class="hidden md:flex md:gap-x-12">
        <a href="#about" class="menuLink text-xl font-bold leading-6 text-white">Sobre mim</a>
        <a href="#stacks" class="menuLink text-xl font-bold leading-6 text-white">Stacks</a>
        <a href="#projects" class="menuLink text-xl font-bold leading-6 text-white">Projetos</a>
      </PopoverGroup>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  Dialog,
  DialogPanel,
  PopoverGroup, DialogTitle, TransitionChild, TransitionRoot
} from '@headlessui/vue'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/vue/24/outline';

const mobileMenuOpen = ref(false)

function abrirMenu() {
  mobileMenuOpen.value = true
}

function fecharMenu() {
  mobileMenuOpen.value = false
}
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