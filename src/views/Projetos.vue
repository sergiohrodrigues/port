<template>
    <section class="projetos">
        <h2 class="projetos__title">Projetos</h2>
        <section class="projetos__cards">
            <CardProjeto v-for="projeto in projetos" :projeto="projeto" :key="projeto.nome" />
        </section>
    </section>
</template>

<script setup lang="ts">
import CardProjeto from '@/components/CardProjeto.vue';
import type IProjeto from '@/interfaces/IProjeto'
import { ref, type Ref } from 'vue';

const projetos: Ref<IProjeto[]> = ref([]);

fetch('https://api.github.com/users/sergiohrodrigues/repos')
    .then(async resposta => resposta.json())
    .then((resp: any[]) => {
        resp.forEach(item => {
            const proj: IProjeto = {
                nome: item.name,
                deploy: item.homepage,
                descricao: item.description,
                linguagens: item.language || 'N/A',
                repositorio: item.html_url
            };
            projetos.value.push(proj);
        });
    })
    .catch(err => {
        projetos.value = []
    })
</script>

<style scoped>
.projetos {
    /* style="display: flex; flex-wrap: wrap; gap: 1rem;" */
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 1rem;
    padding-top: 4rem;
}

.projetos__title {
    font-size: 2rem;
    color: var(--white);
    font-weight: bold;
}

.projetos__cards {
    /* style="display: flex; flex-wrap: wrap; gap: 2rem; margin-top: 1rem;" */
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    margin-top: 1rem;
}
</style>