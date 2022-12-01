<template>
  <button class="myButton">
    <slot/>
  </button>
  <ol>
    <li><slot/></li>
    <li><slot/></li>
    <li><slot/></li>
  </ol>
</template>


<style>
.myButton{
    background-color: azure;
    color: blue;
    border: 1px blue;
}

</style>