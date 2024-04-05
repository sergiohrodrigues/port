<template>
    <div class="sobre">

        <Title>
            Sobre mim
        </Title>

        <p class="sobre__texto" :style="{ color: darkMode ? 'var(--gray)' : 'var(--black)' }">
            Olá, atualmente atuo como desenvolvedor Front-end, tenho habilidades de criar sistemas web incríveis,
            responsivos, onde o usuário consegue acessar tanto do celular, tablet ou computador, uso os
            frameworks Reactjs e
            Vuejs juntamente com Typescript, e uso frameworks CSS como
            Tailwind CSS, Bootstrap, entre outros, para melhorar a experiência do usuário.<br>
            Uso também o Git para controlar o versionamento dos meus projetos. <br><br>
            Estou sempre adquirindo conhecimento, atravez de cursos, podcasts, artigos, livros, etc. Quero me tornar
            um especialista em
            Front-end e futuramente um Full-stack Developer.
        </p>
    </div>
</template>

<script setup lang="ts">
import Title from '@/components/Title.vue';
import { usuarioStore } from '@/stores/store';
import { computed } from 'vue';

const darkMode = computed(() => usuarioStore().darkmode)

</script>

<style scoped>
.sobre {
    padding-top: 2rem;
}

.sobre__imagem {
    width: 300px;
    height: 300px;
}

.sobre__texto {
    font-size: 1.2rem;
    text-align: justify;
}

@media screen and (min-width: 768px) {
    .sobre {
        flex-direction: row;
        padding-top: 3rem;
    }

    .sobre__texto {
        text-align: initial;
    }
}
</style>import type { computed } from 'vue';
