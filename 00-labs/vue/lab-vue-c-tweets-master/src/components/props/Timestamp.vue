<template>
   <span class="timestamp">{{userTweet.timestamp}}</span>
</template>

<script setup>
const userTweet = defineProps({
    timestamp: String,
})
</script>

<style>

</style>