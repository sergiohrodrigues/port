<template>
    <button @click="scrollToTop"
        class="to-top fixed bottom-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-12 h-12 flex items-center justify-center animate-bounce"
        v-if="!estaNoInicio">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
            <path fill-rule="evenodd"
                d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z"
                clip-rule="evenodd" />
        </svg>
    </button>
</template>

<script lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';


export default {
    setup() {
        const estaNoInicio = ref(true);

        const scrollToTop = () => {
            // Lógica para rolar de volta ao topo
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        // Função para verificar a posição de rolagem
        const verificarPosicaoRolagem = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            estaNoInicio.value = scrollTop < 90;
        };

        // Adicione um ouvinte de evento de rolagem ao componente montado
        onMounted(() => {
            window.addEventListener('scroll', verificarPosicaoRolagem);
        });

        // Remova o ouvinte de evento de rolagem quando o componente for destruído
        onBeforeUnmount(() => {
            window.removeEventListener('scroll', verificarPosicaoRolagem);
        });

        return {
            scrollToTop,
            estaNoInicio
        }
    }
}
</script>

<style scoped>
.to-top {
    right: 1rem;
    bottom: 4rem;
}

@media screen and (min-width: 768px) {
    .to-top {
        bottom: 1rem;
    }
}
</style>