<template>
    <div class="sobre">

        <Title>
            Sobre mim
        </Title>

        <p class="sobre__texto">
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

<script lang="ts">
import Title from '@/components/Title.vue';

export default {
    components: { Title }
}
</script>

<style scoped>
.sobre{
    padding-top: 2rem;
}
.sobre__imagem {
    width: 300px;
    height: 300px;
}

.sobre__texto {
    font-size: 1.2rem;
    text-align: justify;
    color: var(--gray);
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
</style>
