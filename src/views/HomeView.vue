<template>
  <Header />

  <main class="principal" style="background-color: var(--darkblue);">

    <MenuInfos />

    <section class="principal__conteudo">
      <div class="conteudo">
        <Sobre id="sobre" />

        <Habilidades id="stacks" />

        <Projetos id="projetos" />
      </div>
    </section>
  </main>

  <BotaoFixadoInferiorDaPagina />
</template>

<script setup lang="ts">
import BotaoFixadoInferiorDaPagina from '@/components/BotaoFixadoInferiorDaPagina.vue';
import Header from '@/components/Header.vue';
import Sobre from './Sobre.vue';
import Habilidades from './Habilidades.vue';
import Projetos from './Projetos.vue';
import MenuInfos from '@/components/MenuInfos.vue';

</script>

<style scoped>
.principal {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.conteudo {
  width: 95%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: -3rem auto 0 auto;
  background-color: var(--black);
  border-radius: 1rem;
  padding: 0 1.5rem;
}

@media screen and (min-width: 768px) {
  .principal {
    flex-direction: row;
  }

  .principal__conteudo {
    width: 70%;
  }

  .conteudo {
    margin-top: 7rem;
    width: 90%;
    padding: 0 2rem;
  }
}
</style>