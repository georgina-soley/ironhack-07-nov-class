<template>
   <p class="message">
        {{userTweet.message}}
      </p>
</template>

<script setup>
const userTweet = defineProps({
    message: String,
})

</script>

<style>

</style>