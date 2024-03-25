<template>
    <div class="sobre">
        <div>
            <h2 style="color: #fff; font-size: 4rem; text-align: left; margin-bottom: 3rem;">Sobre Mim</h2>
            <h3 class="sobre__texto">
                <!-- Olá, atualmente atuo como desenvolvedor Front-end, e minha habilidade no momento é criação de
                sistemas web, responsivos, onde uso os frameworks Reactjs e
                Vuejs juntamente com Typescript, e uso frameworks CSS como
                Tailwind, Bootstrap, entre outros, para melhorar a experiência do usuário<br><br>

                Uso também o Git para controlar o versionamento dos meus projetos. <br>

                Já tenho noção de Back-end e Banco de dados, já fiz um freelance full-stack para uma farmácia onde usei
                Reactjs, Nodejs com Express e Mongodb. <br>
                E estou sempre adquirindo conhecimento, atravez de cursos, podcasts, pois quero e vou crescer muito
                ainda
                nessa área. -->
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
            </h3>
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
.sobre {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    text-align: center;
}

.sobre__imagem {
    width: 300px;
    height: 300px;
}

.sobre__texto {
    font-size: 1.5rem;
    color: #fff;
    padding: 0 1rem;
}

@media screen and (min-width: 768px) {
    .sobre {
        flex-direction: row;
        padding: 0 2rem;
    }
}
</style>
