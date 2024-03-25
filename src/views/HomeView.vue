<template>
  <Header />

  <main class="principal" style="background-color: #e6ebf4;">
    <section class="container">

      <div class="infos">
        <div class="infos__container">

          <img src="../assets/perfil.png" alt="" class="infos__container-img">
          <h2 class="infos__container-nome">Sergio Rodrigues</h2>
          <h2>Desenvolvedor Front-end</h2>
          <div>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-github"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-whatsapp"></i>
          </div>
          <div>
            <i class="fa-solid fa-location-dot"></i>
          </div>
          <button>Baixar Curriculo</button>
        </div>
      </div>

    </section>

    <section class="conteudo">
      <Sobre style="height: 100vh;" id="sobre" />

      <Habilidades style="height: 100vh;" id="habilidades" />

      <Projetos id="projetos" />
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

</script>

<style scoped>
.principal {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem auto 0 auto;
}

.infos {
  width: 85%;
}

.infos__container {
  position: relative;
  background-color: darkgray;
  border: 1px solid lightgray;
  border-radius: 1rem;
  width: 100%;
  height: 70vh;
  margin: 0 auto;
  text-align: center
}

.infos__container-img {
  /* style="width: 50%; margin: 0 auto;" */
  width: 70%;
  max-width: 260px;
  position: absolute;
  top: -30rem;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}

.infos__container-nome {
  /* style="margin-top: 8rem; font-size: 2rem" */
  margin-top: 8rem;
  font-size: 2rem;
}

.conteudo {
  background-color: blue;
}

@media screen and (min-width: 768px) {
  .principal {
    flex-direction: row;
  }

  .container {
    width: 30%;
  }

  .infos {
    /* style="position: fixed; padding: 0 1rem;" */
    position: fixed;
    width: 30%;
  }

  .infos__container {
    height: 62vh;
    width: 90%;
  }

  .infos__container-img {
    top: -26rem;
  }

  .infos__container-nome {
    margin-top: 10rem;
  }

  .conteudo {
    width: 70%;
  }
}
</style>