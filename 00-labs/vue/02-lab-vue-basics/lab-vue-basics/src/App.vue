<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import IterationOne from './components/IterationOne.vue'
import IterationTwo from './components/IterationTwo.vue'
import IterationThree from './components/IterationThree.vue'
import IterationFourBonus from './components/IterationFourBonus.vue'
</script>

<template>
  <header>
   <!-- <div>
      <HelloWorld msg="Yeyyyy!" />
    </div> -->
  </header>

  <main>
    <IterationOne /><br>
    <IterationTwo /><br>
    <IterationThree /><br>
    <IterationFourBonus /><br>

  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
  
}
</style>
