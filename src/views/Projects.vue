<template>
    <section class="projetos">

        <Title>
            Projetos
        </Title>

        <section class="projetos__cards">
            <CardProject v-for="projeto in projetos" :projeto="projeto" :key="projeto.nome" />
        </section>
    </section>
</template>

<script setup lang="ts">
import CardProject from '@/components/CardProject.vue';
import Title from '@/components/Title.vue';
import type IProjeto from '@/interfaces/IProjeto';

const projetos = [
    {
        id: 1,
        nome: "People noticias",
        deploy: "",
        descricao: "Esse é um projeto full-stack onde voce cadastra noticias, com nome, descrição, data, e você consegue editar os dados ou deletar se caso nao goste da noticia.",
        linguagens: "Fullstack Vuejs e Java",
        repositorio: "https://github.com/sergiohrodrigues/people-noticias"
    },
    {
        id: 2,
        nome: "SearchFlix",
        deploy: "https://search-flix.vercel.app/",
        descricao: "Esse é um projeto de filmes, que foi usado a API The movie Database, e nele voce consegue ver os filmes populares, adicionar filme em minha lista, remover, os dados ficam salvos no LocalStorage, da para ver os detalhes dos filme clicando nele, como, resumo, trailler, etc.",
        linguagens: "Reactjs, API The Movie Database",
        repositorio: "https://github.com/sergiohrodrigues/search-flix"
    }
] as IProjeto[]

// const projetos: Ref<IProjeto[]> = ref([]);


// fetch('https://api.github.com/users/sergiohrodrigues/repos')
//     .then(async resposta => resposta.json())
//     .then((resp: any[]) => {
//         resp.forEach(item => {
//             const proj: IProjeto = {
//                 nome: item.name,
//                 deploy: item.homepage,
//                 descricao: item.description,
//                 linguagens: item.language || 'N/A',
//                 repositorio: item.html_url
//             };
//             const removerEstes = ['portfolio', 'crud', 'Contador-de-vagas', 'sergiohrodrigues', 'cartao-credito', 'edificios-rodrigues', 'formulario', 'series-break', 'stripe-paym-gateway', 'teste-leadster']

//             const contemPalavraProibida = removerEstes.some(palavra => item.name.toUpperCase().includes(palavra.toUpperCase()));

//             if (!contemPalavraProibida) {
//                 projetos.value.push(proj);
//             }

//         });
//     })
//     .catch(err => {
//         projetos.value = []
//     })
</script>

<style scoped>
.projetos {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 1rem;
    padding-top: 2rem;
}

.projetos__cards {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    margin-top: 1rem;
}

@media screen and (min-width: 768px){
    .projetos{
        padding-top: 3rem;
    }
}
</style>