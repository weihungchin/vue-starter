<template>
  <!-- <div class="home">
    <img src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->
  <v-container fluid>
    <v-layout row>
      <v-flex xs4>
        <v-card dark tile flat color="error">
          <v-card-text>#1</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs8>
        <v-card dark tile flat color="red darken-4">
          <v-card-text>#2</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>

</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
