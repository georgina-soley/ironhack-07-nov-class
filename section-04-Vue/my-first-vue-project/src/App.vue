<script setup>
import HelloWorld from './components/HelloWorld.vue'
// import MyFirstComponentVue from './vueBasics/MyFirstComponent.vue';
// import ActivityConditionalsVue from './components/ActivityConditionals.vue';
import IteritingElementsVue from './components/IteritingElements.vue';
import SlotsPractice from './components/SlotsPractice.vue'
import Props from './components/props.vue'
import ComputedProperties from './components/ComputedProperties.vue';
import FormTwoWayData from './components/FormTwoWayData.vue';
// import WatcherActivity from './components/whatchers/WatcherActivity.vue';
import Events from './components/events/ParentComponent.vue'
</script>

<template>
<div>
  <header>
   
   <div class="wrapper">
     <HelloWorld msg="New activity" />
   </div>
 </header>

 <main>
   <!-- <MyFirstComponentVue/>
   <ActivityConditionalsVue /> -->
   <!-- <IteritingElementsVue />
   <SlotsPractice/>
   <br>
   <Props 
   name="Georgy"
   age="30"
   birthPlace="Sabadell"
   currentLocation="Barcelona"
   /> -->
   <!-- <ComputedProperties /> -->
   <!-- <FormTwoWayData /> -->
   <!-- watcher no ha salido bien hay que mirar que pasa  -->
   <!-- <WatcherActivity /> -->
<Events />
 </main>
</div>
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
