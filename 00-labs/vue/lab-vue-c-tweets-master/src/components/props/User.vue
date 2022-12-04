<template>
   <span class="user">
          <span class="name">{{userTweet.user.name}}</span>
          <span class="handle">@{{userTweet.user.handle}}</span>
        </span>
</template>

<script setup>
// sempre es declara la constant d'on treyem les props
const userTweet = defineProps({
  // es un objecte perque esta dintre del objecte
  user:Object,
})
</script>

<style>

</style>