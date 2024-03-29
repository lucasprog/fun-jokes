
<template>
  <div class="app-fun-joke">
    
    <router-view/>
    <nav>
      <router-link to="/" :class="{ 'app-fun-joke__router-link-active': $route.path === '/' }">I wanna laugh</router-link> |
      <router-link to="/about" :class="{ 'app-fun-joke__router-link-active': $route.path === '/about' }">To See Results</router-link>
    </nav>

  </div>
</template>
<style scoped lang="scss">
  .app-fun-joke{
    @apply flex flex-col justify-center items-center bg-slate-400 h-screen gap-4;

    &__router-link-active{
      @apply font-bold text-slate-900;
    }
  }
</style>
