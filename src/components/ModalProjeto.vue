<template>
  <TransitionRoot as="template" :show="props.modalAberto">
    <Dialog as="div" class="relative z-10" @close="fecharModal">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
        leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 h-screen z-10 w-screen overflow-y-auto flex flex-col items-center justify-center" style="height: calc(100vh - 54px);">
        <div class="p-4 sm:p-0 md:min-h-full md:flex md:flex-col md:items-center md:justify-center">
          <TransitionChild as="template" leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <DialogPanel
              class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div class="flex flex-col items-start">
                  <img :src="`/projetos/Imagem${props.projeto.id}.png`" alt="">
                  <div class="m-3 text-center sm:m-4 sm:text-left">
                    <DialogTitle as="h3" class="text-base font-semibold leading-6 text-gray-900">{{ props.projeto.nome
                      }}</DialogTitle>
                    <div class="mt-2">
                      <p class="text-sm text-gray-500">{{ props.projeto.descricao }}</p>
                    </div>
                    <div class="mt-2">
                      <p class="text-sm text-gray-500"><span style="font-weight: bold;">Stacks: </span>{{ props.projeto.linguagens }}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex justify-between bg-gray-50 px-4 py-3 sm:flex sm:px-6">
                <div class="flex gap-2">

                  <a :href="props.projeto.repositorio" target='_blank'
                    class="inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">
                    <i class="fa-brands fa-github socialSvg" style="font-size: 17px;"></i>
                  </a>
                  <a :href="props.projeto.deploy" target='_blank'
                    class="inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" v-if="props.projeto.deploy !== ''">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="w-5 h-5">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>

                  </a>
                </div>
                <button type="button"
                  class="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  @click="fecharModal" ref="cancelButtonRef">Voltar</button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { ExclamationTriangleIcon } from '@heroicons/vue/24/outline'
import type IProjeto from '@/interfaces/IProjeto';

const props = defineProps<{
  modalAberto: boolean,
  projeto: IProjeto
}>()

const emit = defineEmits(['update:modalAberto'])

function fecharModal() {
  emit('update:modalAberto', false);
}
</script>