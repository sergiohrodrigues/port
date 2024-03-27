<template>
    <section class="principal__sobre">

        <div class="infos">
            <div class="infos__container">

                <img src="../assets/perfil.png" alt="" class="infos__container-img">

                <h2 class="infos__container-nome">Sergio Rodrigues</h2>

                <h2 class="infos__container-dev">Front-end Developer</h2>

                <RedesSociais />

                <button class="button">
                    <span class="button_lg">
                        <span class="button_sl"></span>
                        <span class="button_text">Baixar Curriculo</span>
                    </span>
                </button>
            </div>
        </div>

    </section>
</template>

<script setup lang="ts">
import RedesSociais from '@/components/RedesSociais.vue';

</script>

<style scoped>
.principal__sobre {
    width: 100%;
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
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: space-evenly;
    background-color: var(--black);
    border-radius: 1rem;
    width: 100%;
    min-width: 330px;
    height: 58vh;
    margin: 0 auto;
    text-align: center;
    color: var(--white);
}

.infos__container-img {
    /* style="width: 50%; margin: 0 auto;" */
    width: 70%;
    max-width: 200px;
    position: absolute;
    top: -100px;
    left: 0;
    right: 0;
    margin: auto;
}

.infos__container-nome {
    /* style="margin-top: 8rem; font-size: 2rem" */
    margin-top: 8rem;
    font-size: 2rem;
    font-weight: bold;
}

.infos__container-dev {
    font-size: 1.2rem;
    font-weight: 500;
}

.infos__container-redes {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    margin: 1rem 0;
    font-size: 1.7rem;
}

.button {
    width: 205px;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    border: none;
    background: none;
    color: #0f1923;
    cursor: pointer;
    position: relative;
    padding: 8px;
    margin: 0 auto 20px auto;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 14px;
    transition: all .15s ease;
}

.button::before,
.button::after {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    left: 0;
    height: calc(50% - 5px);
    border: 1px solid #7D8082;
    transition: all .15s ease;
}

.button::before {
    top: 0;
    border-bottom-width: 0;
}

.button::after {
    bottom: 0;
    border-top-width: 0;
}

.button:active,
.button:focus {
    outline: none;
}

.button:active::before,
.button:active::after {
    right: 3px;
    left: 3px;
}

.button:active::before {
    top: 3px;
}

.button:active::after {
    bottom: 3px;
}

.button_lg {
    position: relative;
    display: block;
    padding: 10px 20px;
    color: #fff;
    background-color: #0f1923;
    overflow: hidden;
    box-shadow: inset 0px 0px 0px 1px transparent;
}

.button_lg::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 2px;
    background-color: #0f1923;
}

.button_lg::after {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
    width: 4px;
    height: 4px;
    background-color: #0f1923;
    transition: all .2s ease;
}

.button_sl {
    display: block;
    position: absolute;
    top: 0;
    bottom: -1px;
    left: -8px;
    width: 0;
    background-color: #ff4655;
    transform: skew(-15deg);
    transition: all .2s ease;
}

.button_text {
    position: relative;
}

.button:hover {
    color: #0f1923;
}

.button:hover .button_sl {
    width: calc(100% + 15px);
}

.button:hover .button_lg::after {
    background-color: #fff;
}

@media screen and (min-width: 768px) {
    .principal__sobre {
        width: 30%;
    }

    .infos {
        /* style="position: fixed; padding: 0 1rem;" */
        position: fixed;
        width: 30%;
    }

    .infos__container {
        gap: 0.5rem;
        height: 62vh;
        width: 90%;
    }

    .infos__container-nome {
        margin-top: 7rem;
    }
}
</style>