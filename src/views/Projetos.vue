<template>
    <section style="display: flex; flex-wrap: wrap; gap: 1rem;">
        <h2 style="font-size: 2rem;">Projetos</h2><br>
        <CardProjeto v-for="projeto in projetos" :projeto="projeto" :key="projeto.nome" />
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