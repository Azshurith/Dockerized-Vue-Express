<template>
    <div>
        <button @click="handleIncrement">{{ count }}</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const count = ref(1);
const handleIncrement = () => {
    count.value += 1;
};
</script>
