<template>
  <Header />

  <main class="principal" :style="darkModeFundo">

    <MenuInfos />

    <section class="principal__conteudo">
      <div class="conteudo" :style="darkModeContainer">
        <About id="about" />

        <Stacks id="stacks" />

        <Projects id="projects" />
      </div>
    </section>
  </main>

  <ButtonToTop />
</template>

<script setup lang="ts">
import ButtonToTop from '@/components/ButtonToTop.vue';
import About from './About.vue';
import Stacks from './Stacks.vue';
import Projects from './Projects.vue';
import MenuInfos from '@/components/MenuInfos.vue';
import Header from '@/components/Header.vue';
import { usuarioStore } from '@/stores/store';
import { computed } from 'vue';

const darkMode = computed(() => usuarioStore().darkmode)

const darkModeFundo = computed(() => {
  return {
    backgroundColor: darkMode.value ? 'var(--darkblue)' : 'var(--blue)'
  }
})

const darkModeContainer = computed(() => {
  return {
    backgroundColor: darkMode.value ? 'var(--black)' : 'var(--gray)'
  }
})

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
  border-radius: 1rem;
  padding: 0 1.5rem 7rem 1.5rem;
}

@media screen and (min-width: 1024px) {
  .principal {
    flex-direction: row;
  }

  .principal__conteudo {
    width: 70%;
  }

  .conteudo {
    margin-top: 7rem;
    width: 90%;
    padding: 0 2rem 4rem 2rem;
  }
}
</style>computed,