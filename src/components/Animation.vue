<template>
    <div class="computer-guy-container">
        <div class="computer-guy">
            <div class="monitor">
                <!-- Conteúdo do monitor (pode adicionar mais elementos aqui) -->
            </div>
            <div class="character"></div>
        </div>
    </div>
</template>
  
<style scoped>
.computer-guy-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.computer-guy {
    position: relative;
    width: 200px;
    height: 200px;
}

.monitor {
    background-color: #333;
    width: 80%;
    height: 60%;
    margin: 0 auto;
    border-radius: 10px;
    position: absolute;
    top: 10%;
}

.character {
    background-color: #3498db;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    animation: bounce 1s infinite alternate;
}

@keyframes bounce {
    0% {
        transform: translateX(-50%) translateY(0);
    }

    100% {
        transform: translateX(-50%) translateY(-20px);
    }
}
</style>
  