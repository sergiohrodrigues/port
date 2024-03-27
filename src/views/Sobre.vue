<template>
    <div class="sobre">
        <div>
            <h2 class="sobre__titulo">Sobre mim</h2>
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
    </div>
</template>

<script lang="ts">
import Animation from '@/components/Animation.vue';

export default {
    components: { Animation }
}
</script>

<style scoped>
.sobre {}

.sobre__imagem {
    width: 300px;
    height: 300px;
}

.sobre__titulo {
    color: var(--white);
    font-weight: 700;
    font-size: 2rem;
    margin: 1rem 0;
}

.sobre__texto {
    font-size: 1.2rem;
    text-align: justify;
    color: var(--gray);
}

@media screen and (min-width: 768px) {
    .sobre {
        flex-direction: row;
        padding-top: 2.5rem;
    }

    .sobre__titulo {
        text-align: left;
    }

    .sobre__texto {
        text-align: initial;
    }
}
</style>
