<template>
    <div class="card" @click="abrirModal">
        <img class="card__imagem" :src="`/projetos/Imagem${projeto.id}.png`"
            :alt="`Imagem do projeto ${props.projeto.nome}`">
        <div class="card__content" :style="darkModeFundo">
            <p class="card__title">{{ props.projeto.nome }}</p>
            <span class="card__stacks">{{ props.projeto.linguagens }}</span>
            <div class="card__button">
                <button type="button"
                    class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Mais
                    detalhes</button>
            </div>
        </div>
        <div>
        </div>
    </div>

    <ModalProjeto v-model:modalAberto="modalAberto" :projeto="props.projeto" />
</template>

<script setup lang="ts">
import type IProjeto from '@/interfaces/IProjeto';
import { defineProps, ref } from 'vue';
import ModalProjeto from './ModalProjeto.vue';
import { usuarioStore } from '@/stores/store';
import { computed } from 'vue';
const props = defineProps<{
    projeto: IProjeto
}>()

const modalAberto = ref(false);

function abrirModal() {
    modalAberto.value = true
}

const darkMode = computed(() => usuarioStore().darkmode)

const darkModeFundo = computed(() => {
    return {
        backgroundColor: darkMode.value ? 'var(--gray)' : 'var(--blue)'
    }
})

</script>

<style scoped>
.card {
    position: relative;
    max-width: 300px;
    height: 200px;
}

.card__imagem {
    width: 90%;
    margin: 0 auto;
}

.card__button {
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    margin: 0 auto;
    width: 150px;
}

.card__title {
    display: none;
}

.card__stacks {
    display: none;
}

@media screen and (min-width: 1024px) {
    .card {
        position: relative;
        width: 100%;
        background-color: #f2f2f2;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        perspective: 1000px;
        transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .card__imagem {
        width: 100%;
    }

    .card svg {
        width: 48px;
        fill: #333;
        transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .card__content {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding: 20px;
        box-sizing: border-box;
        transform: rotateX(-90deg);
        transform-origin: bottom;
        transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .card__title {
        display: block;
        margin: 0;
        font-size: 24px;
        color: #333;
        font-weight: 700;
    }

    .card__stacks {
        display: block;
    }

    .card__button {
        position: static;
        margin: 3rem auto;
    }

    .card:hover svg {
        scale: 0;
    }

    .card__description {
        margin: 10px 0 0;
        font-size: 14px;
        color: #777;
        line-height: 1.4;
    }

    .card:hover {
        transform: scale(1.05);
        box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
    }

    .card:hover .card__content {
        transform: rotateX(0deg);
    }

    .card:hover {
        cursor: pointer;
    }
}
</style>