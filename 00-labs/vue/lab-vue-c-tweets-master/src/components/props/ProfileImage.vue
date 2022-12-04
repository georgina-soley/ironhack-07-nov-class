<template>
   <!-- cuando es contenido bigotitos, cuando es atributo binding -->
   <img
      :src="userTweet.imagen"
      class="profile"
      alt="profile"
    />
</template>

<script setup>
const userTweet = defineProps({
  // es una string
  imagen:String,
})
</script>

<style>

</style>