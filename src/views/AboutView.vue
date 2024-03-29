<script setup>
  import { computed } from 'vue';
  import { useJokes } from '@/store/jokes';

  const jokes = useJokes().jokes  
  const report = useJokes().getReport();
  
  const titlePage = computed(() => {
    
    if( jokes.length === 0 ) return 'Anyone Jokes evaluated';

    return 'Results: ' + jokes.length + (
        jokes.length > 1? ' Jokes' : ' Joke'
      );
  });

  const reset = () => useJokes().clearJokes();

</script>
<template>
  <div class="c-about">
    <h1 class="c-about__title-page">{{ titlePage }}</h1><br>
    <ul class="c-about__list-reports">
      <li 
        class="c-about__report-item"
        v-for="_report in report"
        :key="_report"
      >
        {{ _report.label + ' - ' + _report.length }}
        <div 
          class="c-about__bar-chart"
        >
          <div :class="
            'c-about__bar-chart-percent-' + (_report.percent) + ' ' +
            'c-about__bar-chart-percent--color-' + (_report.type)
          "></div>
        </div>
      </li>
    </ul>
    <button class="c-about__reset-button" @click="reset">Reset</button>
  </div>
</template>
<style scoped lang="scss">
  .c-about{
    @apply flex flex-col justify-center items-center gap-4 w-full p-8;

    &__title-page{
      @apply text-xl text-slate-950 font-bold;
    }

    &__list-reports{
      @apply flex flex-col justify-center items-center gap-1 w-full max-w-96;
    }

    &__report-item{
      @apply w-full;
    }

    &__bar-chart{
      @apply flex flex-col justify-center gap-1 bg-slate-600 w-full rounded h-5;

      @for $i from 1 through 100 {
        &-percent-#{$i}{
          @apply w-[#{$i}%] h-5 bg-slate-950 rounded;
        }
      }
      
    }
    
    &__reset-button{
      @apply bg-orange-600 text-orange-950 font-bold px-6 py-1 rounded hover:bg-orange-500;
    }

  }
</style>
