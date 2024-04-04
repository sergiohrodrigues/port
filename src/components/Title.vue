<template>
    <div class="container">
        <h2 class="container__titulo">
            <slot></slot>
        </h2>
        <div class="container_traco"></div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.container {
    display: flex;
    gap: 2rem;
    align-items: center;
}

.container__titulo {
    font-size: 2rem;
    color: var(--white);
    font-weight: bold;
}

.container_traco {
    height: 10px;
    width: 90px;
    background-color: var(--blue);
    border-radius: 1rem;
}

@media screen and (min-width: 768px){
    .container_traco{
        width: 200px;
    }
}
</style>