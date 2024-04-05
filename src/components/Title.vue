<template>
    <div class="container">
        <h2 class="container__titulo" :style="{ color: darkMode ? 'var(--white)' : 'var(--black)' }">
            <slot></slot>
        </h2>
        <div class="container_traco" :style="{ backgroundColor: darkMode ? 'var(--blue)' : 'var(--darkblue)' }"></div>
    </div>
</template>

<script setup lang="ts">
import { usuarioStore } from '@/stores/store';
import { computed } from 'vue';

const darkMode = computed(() => usuarioStore().darkmode)
</script>

<style scoped>
.container {
    display: flex;
    gap: 2rem;
    align-items: center;
}

.container__titulo {
    font-size: 2rem;
    color: var(--white);
    font-weight: bold;
}

.container_traco {
    height: 10px;
    width: 90px;
    border-radius: 1rem;
}

@media screen and (min-width: 768px) {
    .container_traco {
        width: 200px;
    }
}
</style>