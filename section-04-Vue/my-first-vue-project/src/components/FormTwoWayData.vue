<template>
    <!-- Montamos un formulario para ir al primavera sound. 
       · Vamos a incluirle un input type text para vuestro nombre 
       · un input type email para el email. 
       · Vamos incorporar un select que nos permita escoger entre   cinco artistas para ver en el festival. 
       · Después hacemos inputs separados que reciban propiedades booleanicas y que respondan a estas preguntas:
            - Consumes alcohol o drogas? (si/no)
            - Vas a venir vestid@ de negro? (si/no)
            - Tienes más de 21 años? (si/no)
            - Vienes con un grupo de más de 2 personas? (si/no)
        input textarea para sugerencias de mejora del festival.
        Cuando se envíe el formulario imprimiremos la info que se ha mandado con una alerta en el browser. -->

<div>
    <h1>Primavera Sound Form </h1>
  <h3>Hey! We want to know a little how are you planing to feel the experience. Let's start :D!!</h3> <br>
  <!-- el .prevent es para.... -->
  <form @submit.prevent="submitForm">
    <div id="userName">
        <label for="name">Enter your name here</label>
        <input type="text" autocomplete="off" id="name" v-model.trim.lazy="formFest.formName">
    </div>
    <div id="userMail">
        <label for="email"> Your email</label>
        <input type="email" id="email" v-model.trim.lazy="formFest.formEmail">
    </div>
    <div id="chooseartists">
        <label for="artists">Choose who you want to see</label>
        <select name="artists" id="artists" v-model="formFest.artists">
        <option value="PetShopBoys">Pet Shop Boys</option>
        <option value="KendrickLamar">Kendrick Lamar</option>
        <option value="Depeche Mode">Depeche Mode</option>
        <option value="Blur">Blur</option>
        <option value="Rosalía">Rosalía</option>
        <option value="JohnTalabot">John Talabot</option>
        </select>
    </div>
    <div id="consum">
        <label>Are you going to consume alcohol or other drugs?</label>
        <div class="checkboxes">
            <input type="radio" id="consum-yes" value="true" name="consum" v-model="formFest.consum">
            <label for="consume-yes"> Yes</label>
        </div>
        <div class="checkboxes">
            <input type="radio" id="consum-no" value="false" name="consum" v-model="formFest.consum">
            <label for="consume-no"> No</label>
        </div>
    </div>
    <div id="darkClothes">
        <label>Are you going to come dressed all black?</label>
        <div class="checkboxes">
            <input type="radio" id="darkClothes-yes" value="true" name="clothes" v-model="formFest.clothes">
            <label for="darkClothes-yes"> Yes, my nickname is the Berliner.</label>
        </div>
        <div class="checkboxes">
            <input type="radio" id="darkClothes-no" value="false" name="clothes" v-model="formFest.clothes">
            <label for="darkClothes-no"> No, I'm pretty much  a unicorn.</label>
        </div>
    </div>
    <div id="years">
        <label>Are you 21 or more?</label>
        <div class="checkboxes">
            <input type="radio" id="years-yes" value="true" name="years" v-model="formFest.age">
            <label for="years-yes"> Yes!!!</label>
        </div>
        <div class="checkboxes">
            <input type="radio" id="years-no" value="false" name="years" v-model="formFest.age">
            <label for="years-no"> No, not yet.</label>
        </div>
    </div>
    <div id="people">
        <label>Are you comming in a crew? (You're going to be more than 2)</label>
        <div class="checkboxes">
            <input type="radio" id="people-crew-yes" value="true" name="crew" v-model="formFest.crew">
            <label for="people-crew-yes"> Yes, the more the better.</label>
        </div>
        <div class="checkboxes">
            <input type="radio" id="people-crew-no" value="false" name="crew" v-model="formFest.crew">
            <label for="people-crew-no"> No, we only need each other to enjoy.</label>
        </div>
    </div>
    <div id="message">
        <label for="message">Send us a message to improve the great experience:</label>  
        <textarea name="message" id="message" cols="30" rows="10" v-model.trim.lazy="formFest.message" placeholder="Type here what would you like to see in that Festival"></textarea>
    </div>
    <input type="submit" value="There it goes" />
  </form>
</div>

</template>

<script setup>
import { ref, reactive } from "vue";
// Esta es la info que pedimos, colocado dentro de un objeto ( así cada persona que contesta qieda agrupado en un objeto)
const formFest = reactive({
    formName: "",
    formEmail: "",
    artists: [],
    consum: true,
    clothes: true,
    age: true,
    crew: true,
    message: "",
});
function submitForm() {
//   console.log("Form Values", formFest);
    alert(`

    !!YEAH!!
        We control you... just kidding! Enjoy yourself!
        Name: ${formFest.formName}
        Email: ${formFest.formEmail}
        Artists: ${formFest.artists}
        Consum substancies: ${formFest.consum}
        Dark Clothes: ${formFest.clothes}
        More than 21: ${formFest.age}
        More than 2: ${formFest.crew}
        Message: ${formFest.message}
        `);
}

</script>

<style>

</style>