<template>
  <div class="tweet">

    <ProfileImage :imagen="userTweet.tweet.user.image"/>

    <div class="body">
      <div class="top">
        <User :user="userTweet.tweet.user" />
        <Timestamp :timestamp="userTweet.tweet.timestamp" />

       
      </div>
      <Message :message="userTweet.tweet.message" />
     
      <Actions />
      
    </div>

    <i class="fas fa-ellipsis-h"></i>
  </div>
</template>

<script setup>
import ProfileImage from './props/ProfileImage.vue'
import User from './props/User.vue'
import Timestamp from './props/Timestamp.vue'
import Message from './props/Message.vue'
import Actions from './props/Actions.vue'

const userTweet = defineProps({
  // este tweet es el mismo que hemos "cerado/nombrado" en App
  tweet:Object,
})

</script>

<style scoped>
a {
  color: #42b983;
}
</style>
