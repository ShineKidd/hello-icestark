<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';

onMounted(() =>
console.log('mounted')
)
onUnmounted(() => 
console.log('unmounted')
)
</script>
<template>
  <div class="home">
    Not Found123
  </div>
</template>
