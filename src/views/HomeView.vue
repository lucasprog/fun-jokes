
<script setup lang="ts">
import { computed } from 'vue';
import { useJokes } from '@/store/jokes';

import EvaluateJoke from '@/components/EvaluateJoke.vue';

const joke = computed(() => useJokes().joke);

const getJoke = () => useJokes().getJokes();

getJoke();  

</script>
<template>
  <div class="c-home">
    <h1 class="c-home__title-page" v-if="joke">I wanna laugh</h1><br>
    <h2 class="c-home__joke" v-if="joke">{{ joke }}</h2><br>
    <button class="c-home__new-joke" @click="getJoke">Next Joke</button><br>
    <EvaluateJoke />
  </div>
</template>
<style scoped lang="scss">
  .c-home{
    @apply flex flex-col justify-center items-center gap-1;

    &__title-page{
      @apply text-xl text-slate-950 font-bold;
    }

    &__joke{
      @apply text-2xl text-white font-semibold text-center max-w-96 w-full;
    }

    &__new-joke{
      @apply bg-cyan-600 text-cyan-950 font-bold px-6 py-3 rounded hover:bg-cyan-500;
    }
  }
</style>
