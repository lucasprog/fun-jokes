<script setup lang="ts">
  import { useJokes } from '@/store/jokes';

  const { typeOfNotes } = useJokes();

  const grade = (note: string) => {
    const joke = useJokes().joke;
    useJokes().setJoke({joke, note});
    useJokes().getJokes();
  }
</script>
<template> 
  <div class="c-evaluate">
    <template 
      v-for="_type of typeOfNotes"
      :key="_type">
      <button 
        class="c-evaluate__button" 
        @click="grade(_type.type)">
        {{ _type.label }}
      </button>
    </template>
  </div>
</template>
<style scoped lang="scss">
  .c-evaluate {
    @apply flex gap-1 justify-center items-center;

    &__button{
      @apply bg-slate-600 text-white px-3 py-1 rounded rotate-90 w-16 h-16 hover:bg-slate-500;
    }
  }
</style>
