<template>
  <header class="cabecalho">

    <section class="bg-black flex items-center justify-between p-3 md:justify-around containerMenu" aria-label="Global">
      <div class="botaoMenu" @click="menuMobile = !menuMobile">
        <button v-if="!menuMobile" type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white">
          <span class="sr-only">Open main menu</span>
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>

        <button v-else type="button" class="-m-2.5 rounded-md p-2.5 text-white">
          <span class="sr-only">Close menu</span>
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <nav :class="abrirMenu" class="menuLateral">

        <a href="#sobre" class="menuLink text-base font-semibold leading-6 text-white md:text-base"
          @click="menuMobile = false">Sobre mim</a>
        <a href="#habilidades" class="menuLink text-base font-semibold leading-6 text-white md:text-base"
          @click="menuMobile = false">Stacks</a>
        <a href="#projetos" class="menuLink text-base font-semibold leading-6 text-white md:text-base"
          @click="menuMobile = false">Projetos</a>
        <a href="#contato" class="menuLink text-sm font-semibold leading-6 text-white md:text-base md:hidden"
          @click="menuMobile = false">Contato</a>

      </nav>
    </section>


  </header>
</template>

<script lang="ts">
export default {
  data() {
    return {
      menuMobile: false
    }
  },
  computed: {
    abrirMenu() {
      return this.menuMobile ? 'menuLateral-active' : 'menuLateral'
    },
    classBotaoMenuMobile() {
      return '-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 text-lg'
    },
    redesSociais() {
      return [
        { link: "https://www.linkedin.com/in/sergioh-rodrigues/", icon: "fa-brands fa-linkedin text-white text-3xl hover:text-blue-600", click: this.menuMobile = false },
        { link: "https://github.com/sergiohrodrigues", icon: "fa-brands fa-github text-white text-3xl hover:text-gray-600", click: this.menuMobile = false },
        {
          link: "https://api.whatsapp.com/send?phone=5543998343648&text=Olá Sergio, ", icon: "fa-brands fa-whatsapp text-white text-3xl hover:text-green-600", click: this.menuMobile = false,
        },
      ];
    },
  }
}
</script>

<style scoped>
.cabecalho {
  position: relative;
}

.containerMenu {
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
  width: 100vw;
  z-index: 10000;
}

.menuLateral {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  gap: 2rem;
  padding-right: 2rem;
  width: 70vw;
  background-color: darkgray;
  position: absolute;
  bottom: 54px;
  z-index: 9000;
  right: -600px;
  height: calc(48vh - 54px);
  transition: 0.5s;
  border-radius: 1rem 0 0 0;
}

.menuLateral-active {
  right: 0;
}

@media screen and (min-width: 768px) {

  .cabecalho {
    position: fixed;
  }

  .containerMenu {
    position: static;
    top: 0;
    width: auto;
    padding: 0;
  }

  .botaoMenu {
    display: none;
  }

  .menuLateral {
    width: 100vw;
    flex-direction: row;
    justify-content: end;
    position: static;
    height: auto;
    padding: 1rem 5rem;
    right: 0;
  }

  .menuLink {
    font-size: 1.3rem;
    color: #e1e1e1;
    font-weight: 800;
    cursor: pointer;
    position: relative;
    border: none;
    background: none;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 400ms;
    transition-property: color;
  }

  .menuLink:focus,
  .menuLink:hover {
    color: #fff;
  }

  .menuLink:focus:after,
  .menuLink:hover:after {
    width: 100%;
    left: 0%;
  }

  .menuLink:after {
    content: "";
    pointer-events: none;
    bottom: -2px;
    left: 50%;
    position: absolute;
    width: 0%;
    height: 2px;
    background-color: blue;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 400ms;
    transition-property: width, left;
  }
}
</style>