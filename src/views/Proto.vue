<!--
<template>
  <v-app id="inspire">
    <v-navigation-drawer
      fixed
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile >
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Contact</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-toolbar>
    <v-content>
     
      <v-container fluid fill-height class = "pa-0">
        <div v-bind:class = "{'side-list-wrapper':$vuetify.breakpoint.mdAndUp, 'full-side-list-wrapper':$vuetify.breakpoint.smAndDown}">
         
            <v-card flat class="blue-grey--text border-bottom" height = "100" v-for = "card in sideCards" :key = "card.name">
               <v-layout row align-content-center>
                <v-flex xs2>
                   <v-avatar
                    size="50px"
                    class="grey lighten-4 mt-4 ml-3"
                  >
                    <img :src="card.avatarUrl" alt="avatar">
                  </v-avatar>
                </v-flex>
                <v-flex xs10>
                  <v-card-title d-flex column>
                  <v-flex xs12> 
                    <div class="headline">{{card.name}}</div>
                  </v-flex>
                  <v-flex xs12>
                     <div>{{card.department}}</div>
                  </v-flex>
                </v-card-title>
                </v-flex>
               </v-layout>
            </v-card>
        </div>
        <div class = "card-detail-wrapper">
          hello
        </div>
      </v-container>
    </v-content>
  </v-app>
</template>
-->

<template>
   <v-app id="inspire" :dark = "!lightTheme">
   <v-navigation-drawer
      disable-resize-watcher
      disable-route-watcher
      fixed
      v-model="drawer"
      app
      class = "hidden-md-and-up"
    >
      <v-list dense>
        <v-list-tile >
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile >
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Contact</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar
      color="grey darken-4"
      flat
      dark
      app
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      fixed
      height = "48"
    >
   
        <v-toolbar-side-icon @click.stop="drawer = !drawer" class = "hidden-md-and-up"></v-toolbar-side-icon>
      <v-layout align-content-space-between row align-center class = "hidden-sm-and-down">
        <v-spacer></v-spacer>
        <v-flex>
          <span>EMS</span>
        </v-flex>

         <v-flex>
          <span>Performance</span>
        </v-flex>

         <v-flex>
          <span>Some Item</span>
        </v-flex>

         <v-flex>
          <span>Etc etc</span>
        </v-flex>

        <v-flex>
          <span>Other stuff etc</span>
        </v-flex>
       
      </v-layout>

     
    </v-toolbar>
   <v-content>
      <v-container fluid fill-height class = "pa-0">
        <div v-bind:class = "{'side-list-wrapper':$vuetify.breakpoint.mdAndUp, 'full-side-list-wrapper':$vuetify.breakpoint.smAndDown}">
         
            <v-card flat class="blue-grey--text border-bottom" height = "100" v-for = "card in allApplicantProfile" :key = "card.name">
               <v-layout row align-content-center>
                <v-flex xs2>
                   <v-avatar
                    size="50px"
                    class="grey lighten-4 mt-4 ml-3"
                  >
                    <img :src="card.avatarUrl" alt="avatar">
                  </v-avatar>
                </v-flex>
                <v-flex xs10>
                  <v-card-title d-flex column>
                  <v-flex xs12> 
                    <div class="headline">{{card.name}}</div>
                  </v-flex>
                  <v-flex xs12>
                     <div>{{card.department}}</div>
                  </v-flex>
                </v-card-title>
                </v-flex>
               </v-layout>
            </v-card>
        </div>
        <div class = "card-detail-wrapper" v-if = "$vuetify.breakpoint.mdAndUp">
          <v-layout row class = "sub-toolbar blue-grey--text text--darken-2">
            <v-flex xs1 class = "text-xs-center">
              Personal
            </v-flex>
            <v-flex xs1 class = "text-xs-center">
              Job
            </v-flex>
            <v-flex xs1 class = "text-xs-center">
              Other 
            </v-flex>
          </v-layout>
          <div>
             <v-avatar
                    size="180px"
                    class="grey lighten-4 mt-4 ml-3"
                  >
                    <img src = "https://picsum.photos/180/180/?image=1011" alt="avatar">
              </v-avatar>
          </div>
        </div>
      </v-container>
    </v-content>
    <v-dialog v-model="dialog" width="800px">
      <v-card>
        <v-card-title
          class="grey lighten-4 py-4 title"
        >
          Create contact
        </v-card-title>
        <v-container grid-list-sm class="pa-4">
          <v-layout row wrap>
            <v-flex xs12 align-center justify-space-between>
              <v-layout align-center>
                <v-avatar size="40px" class="mr-3">
                  <img
                    src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png"
                    alt=""
                  >
                </v-avatar>
                <v-text-field
                  placeholder="Name"
                ></v-text-field>
              </v-layout>
            </v-flex>
            <v-flex xs6>
              <v-text-field
                prepend-icon="business"
                placeholder="Company"
              ></v-text-field>
            </v-flex>
            <v-flex xs6>
              <v-text-field
                placeholder="Job title"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                prepend-icon="mail"
                placeholder="Email"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                type="tel"
                prepend-icon="phone"
                placeholder="(000) 000 - 0000"
                mask="phone"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                prepend-icon="notes"
                placeholder="Notes"
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
        <v-card-actions>
          <v-btn flat color="primary">More</v-btn>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="dialog = false">Cancel</v-btn>
          <v-btn flat @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  watch: {
    applicantProfileList() {
      console.log("watch");
    }
  },
  computed: {
    applicantProfileList: function() {
      console.log(this.$store.getters.applicantProfileList);
      return this.$store.getters.applicantProfileList;
    },
    ...mapGetters(["allApplicantProfile"])
  },
  created: function() {
    this.$store.dispatch("getFirebaseDatabase");
  },
  data: () => ({
    lightTheme: true,
    drawer: false,
    items: [{ icon: "contacts", text: "Employees" }],
    dialog: null,
    sideCards: [
      {
        name: "Hello",
        avatarUrl: "https://picsum.photos/100/100/?image=1011",
        department: "R&D"
      },
      {
        name: "Hello",
        avatarUrl: "https://picsum.photos/100/100/?image=1011",
        department: "R&D"
      },
      {
        name: "Hello",
        avatarUrl: "https://picsum.photos/100/100/?image=1011",
        department: "R&D"
      },
      {
        name: "Hello",
        avatarUrl: "https://picsum.photos/100/100/?image=1011",
        department: "R&D"
      },
      {
        name: "Hello",
        avatarUrl: "https://picsum.photos/100/100/?image=1011",
        department: "R&D"
      }
    ]
  })
};
</script>

<style lang="scss" scoped>
.side-list-wrapper,
.full-side-list-wrapper {
  height: 100%;
  max-height: calc(100% - 48px);
  transform: translateX(0px);
  display: block;
  left: 0;
  overflow-y: auto;
  overflow-x: hidden;
  position: fixed;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
}
.side-list-wrapper {
  width: 400px;
}
.full-side-list-wrapper {
  width: 100% !important;
}
.border-bottom {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.card-detail-wrapper {
  padding-left: 400px;
  max-height: calc(100% - 48px);
  display: block;
  width: 100%;
  height: 100%;
  position: fixed;
}
.sub-toolbar {
  // justify-content: center;
  justify-content: space-evenly;
  height: 40px !important;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
  // border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
