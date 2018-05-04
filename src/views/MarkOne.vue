
<template>
<v-app>
 <v-layout>
     <v-navigation-drawer stateless :mini-variant.sync="mini" v-model="drawer" class = "grey lighten-4">
    <v-toolbar flat class="transparent">
      <v-list class="pa-0">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg" >
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>John Leider</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn icon @click.native.stop="mini = !mini">
              <v-icon>arrow_drop_down</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <v-list class="pt-0" dense>
      <v-divider></v-divider>
      <v-list-tile v-for="item in items" :key="item.title">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
    <!-- <v-toolbar  height = "56" flat style = "border-bottom:1px solid lightgray">
            <v-toolbar-title>Employees</v-toolbar-title>    
            <v-btn icon>
                <v-icon>
                    add_box
                </v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>
                    filter_list
                </v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>search</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            
            <v-btn icon>
                <v-icon>
                notifications_none
                </v-icon>
            </v-btn>
    </v-toolbar>
    <div style = "clear:both"></div> -->

   <div @click = "toggleSideBar" style = "height:100%; width:100%">
       <nav style = "border-bottom:1px solid lightgray; height:56px; background-color:white">
          <v-layout row>
               <v-btn icon class = "pt-1" :ripple = "false">
                <v-icon>
                    add_box
                </v-icon>
            </v-btn>
            <v-btn icon class = "pt-1" :ripple = "false">
                <v-icon>
                    filter_list
                </v-icon>
            </v-btn>
            <v-btn icon class = "pt-1" :ripple = "false">
                <v-icon>search</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            
            <v-btn icon class = "pt-1" :ripple = "false">
                <v-icon>
                notifications_none
                </v-icon>
            </v-btn>
          </v-layout>
       </nav>

       <v-layout row class = "main-container">
         
           </v-flex xs3>
                    <div style = "display:inline-block; vertical-align:top" class = "side-list-wrapper" v-bind:class = "{'full-side-list-wrapper':$vuetify.breakpoint.smAndDown}">
                    <v-card flat class="blue-grey--text border-bottom" height = "100" v-for = "card in allApplicantProfile" :key = "card.name" style = "cursor:pointer" :class = "{'blue--br-highlight':card.selected}">
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
                                <div class="side-card-name">{{card.name}}</div>
                            </v-flex>
                            <v-flex xs12>
                                <v-icon size = "20" class = "mr-1 grey--text" style = "width:20px; vertical-align:middle">person_identity</v-icon>    
                                <span style = "vertical-align:middle">{{card.position}}</span>
                            </v-flex>
                            <v-flex xs12>
                                <v-icon size = "20" class = "mr-1 grey--text" style = "width:20px; vertical-align:middle">work</v-icon>    
                                <span style = "vertical-align:middle">{{card.department}}</span>
                            </v-flex>
                            </v-card-title>
                            </v-flex>
                        </v-layout>
                        </v-card>
                </div>
           </v-flex>
            <v-flex xs9>
                <div class = "pt-4 pb-2 light-blue--bg">
                    <v-layout row align-content-center>
                        <v-flex xs4 class = "pl-5">
                            <v-avatar
                                size="180px"
                                class="grey lighten-4 mt-4 ml-3"
                                >
                                <img src = "https://picsum.photos/180/180/?image=1011" alt="avatar">
                            </v-avatar>
                        </v-flex>
                        <v-flex xs6 class = "pt-5">
                            <div class = "headline">Hello</div>
                            <div class = "py-2">
                                <v-icon size = "20" class = "mr-1 grey--text" style = "width:20px; vertical-align:middle">phone</v-icon>    
                            <span style = "vertical-align:middle">ext 001/0123456789</span>
                            </div>
                            <div class = "py-2">
                                <v-icon size = "20" class = "mr-1 grey--text" style = "width:20px; vertical-align:middle">email</v-icon>    
                            <span style = "vertical-align:middle">lazy_to@name.com</span>
                            </div>
                        </v-flex>
                        <v-flex xs2 class = "pt-5">
                            <v-btn outline color = "grey"fab  style = "background-color:white !important">
                                <v-icon light class = "pt-3">mode_edit</v-icon>
                            </v-btn>
                             <v-btn outline color = "grey"fab style = "background-color:white !important">
                                <v-icon light class = "pt-3">delete</v-icon>
                            </v-btn>
                        </v-flex>
                    </v-layout>

                    <v-layout row class = "mt-4 pl-5">
                        <v-btn :ripple = "false" round outline color="blue" dark style = "background-color:white !important">Personal</v-btn>
                        <v-btn :ripple = "false" flat color = "grey darken-1">Job</v-btn>
                        <v-btn :ripple = "false" flat color = "grey darken-1">Qualifications</v-btn>
                    </v-layout>
                </div>

                 <div style = "display:flex">
                     <v-flex xs6 style = "border-right:1px solid rgba(0,0,0,0.1)">
                        <div>
                            <div class = "grey--text darken-2 mt-3 pl-4">PERSONAL DETAILS</div>
                            <v-layout row class = "pt-2 pb-1">
                                <v-flex xs 5 style = "text-align:right;" class = "grey--text darken-1">Employee ID:</v-flex>
                                <v-spacer style = "max-width:20px"></v-spacer>
                                <v-flex xs6 style = "text-align:left">013</v-flex>
                            </v-layout>

                               <v-layout row class = "pt-2 pb-1">
                                <v-flex xs 5 style = "text-align:right;" class = "grey--text darken-1">Employee ID:</v-flex>
                                <v-spacer style = "max-width:20px"></v-spacer>
                                <v-flex xs6 style = "text-align:left">013</v-flex>
                            </v-layout>

                               <v-layout row class = "pt-2 pb-1">
                                <v-flex xs 5 style = "text-align:right;" class = "grey--text darken-1">Employee ID:</v-flex>
                                <v-spacer style = "max-width:20px"></v-spacer>
                                <v-flex xs6 style = "text-align:left">013</v-flex>
                            </v-layout>

                               <v-layout row class = "pt-2 pb-1">
                                <v-flex xs 5 style = "text-align:right;" class = "grey--text darken-1">Employee ID:</v-flex>
                                <v-spacer style = "max-width:20px"></v-spacer>
                                <v-flex xs6 style = "text-align:left">013</v-flex>
                            </v-layout>

                               <v-layout row class = "pt-2 pb-1">
                                <v-flex xs 5 style = "text-align:right;" class = "grey--text darken-1">Employee ID:</v-flex>
                                <v-spacer style = "max-width:20px"></v-spacer>
                                <v-flex xs6 style = "text-align:left">013</v-flex>
                            </v-layout>
                            
                        </div>

                         <div>
                            <div class = "grey--text darken-2 mt-3 pl-4">CONTACT DETAILS</div>
                            <v-layout row class = "pt-2 pb-1">
                                <v-flex xs 5 style = "text-align:right;" class = "grey--text darken-1">Employee ID:</v-flex>
                                <v-spacer style = "max-width:20px"></v-spacer>
                                <v-flex xs6 style = "text-align:left">013</v-flex>
                            </v-layout>

                               <v-layout row class = "pt-2 pb-1">
                                <v-flex xs 5 style = "text-align:right;" class = "grey--text darken-1">Employee ID:</v-flex>
                                <v-spacer style = "max-width:20px"></v-spacer>
                                <v-flex xs6 style = "text-align:left">013</v-flex>
                            </v-layout>

                               <v-layout row class = "pt-2 pb-1">
                                <v-flex xs 5 style = "text-align:right;" class = "grey--text darken-1">Employee ID:</v-flex>
                                <v-spacer style = "max-width:20px"></v-spacer>
                                <v-flex xs6 style = "text-align:left">013</v-flex>
                            </v-layout>

                               <v-layout row class = "pt-2 pb-1">
                                <v-flex xs 5 style = "text-align:right;" class = "grey--text darken-1">Employee ID:</v-flex>
                                <v-spacer style = "max-width:20px"></v-spacer>
                                <v-flex xs6 style = "text-align:left">013</v-flex>
                            </v-layout>

                               <v-layout row class = "pt-2 pb-1">
                                <v-flex xs 5 style = "text-align:right;" class = "grey--text darken-1">Employee ID:</v-flex>
                                <v-spacer style = "max-width:20px"></v-spacer>
                                <v-flex xs6 style = "text-align:left">013</v-flex>
                            </v-layout>
                            
                        </div>
                    </v-flex>

                    <v-flex xs6>
                         <div class = "pb-4">
                            <div class = "grey--text darken-2 mt-3 pl-4">DEPENDENTS</div>
                            <v-layout row class = "pt-2 pb-1">
                                <v-flex xs 5 style = "text-align:right;" class = "grey--text darken-1">Employee ID:</v-flex>
                                <v-spacer style = "max-width:20px"></v-spacer>
                                <v-flex xs6 style = "text-align:left">013</v-flex>
                            </v-layout>

                               <v-layout row class = "pt-2 pb-1">
                                <v-flex xs 5 style = "text-align:right;" class = "grey--text darken-1">Employee ID:</v-flex>
                                <v-spacer style = "max-width:20px"></v-spacer>
                                <v-flex xs6 style = "text-align:left">013</v-flex>
                            </v-layout>

                               <v-layout row class = "pt-2 pb-1">
                                <v-flex xs 5 style = "text-align:right;" class = "grey--text darken-1">Employee ID:</v-flex>
                                <v-spacer style = "max-width:20px"></v-spacer>
                                <v-flex xs6 style = "text-align:left">013</v-flex>
                            </v-layout>
                            
                        </div>

                          <div style = "border-top:1px solid rgba(0,0,0,0.1)">
                            <div class = "grey--text darken-2 mt-3 pl-4">IMMIGRANTS</div>
                            <v-layout row class = "pt-2 pb-1">
                                <v-flex xs 5 style = "text-align:right;" class = "grey--text darken-1">Employee ID:</v-flex>
                                <v-spacer style = "max-width:20px"></v-spacer>
                                <v-flex xs6 style = "text-align:left">013</v-flex>
                            </v-layout>

                               <v-layout row class = "pt-2 pb-1">
                                <v-flex xs 5 style = "text-align:right;" class = "grey--text darken-1">Employee ID:</v-flex>
                                <v-spacer style = "max-width:20px"></v-spacer>
                                <v-flex xs6 style = "text-align:left">013</v-flex>
                            </v-layout>

                               <v-layout row class = "pt-2 pb-1">
                                <v-flex xs 5 style = "text-align:right;" class = "grey--text darken-1">Employee ID:</v-flex>
                                <v-spacer style = "max-width:20px"></v-spacer>
                                <v-flex xs6 style = "text-align:left">013</v-flex>
                            </v-layout>

                              <v-layout row class = "pt-2 pb-1">
                                <v-flex xs 5 style = "text-align:right;" class = "grey--text darken-1">Employee ID:</v-flex>
                                <v-spacer style = "max-width:20px"></v-spacer>
                                <v-flex xs6 style = "text-align:left">013</v-flex>
                            </v-layout>

                               <v-layout row class = "pt-2 pb-1">
                                <v-flex xs 5 style = "text-align:right;" class = "grey--text darken-1">Employee ID:</v-flex>
                                <v-spacer style = "max-width:20px"></v-spacer>
                                <v-flex xs6 style = "text-align:left">013</v-flex>
                            </v-layout>

                               <v-layout row class = "pt-2 pb-1">
                                <v-flex xs 5 style = "text-align:right;" class = "grey--text darken-1">Employee ID:</v-flex>
                                <v-spacer style = "max-width:20px"></v-spacer>
                                <v-flex xs6 style = "text-align:left">013</v-flex>
                            </v-layout>
                            
                        </div>
                    </v-flex>
                 </div>
                
           </v-flex> 

       </v-layout>

    
   </div>
 </v-layout>
 
  
</v-app>
  
</template>




<script>
export default {
  methods: {
    toggleSideBar: function() {
      this.mini = this.mini ? this.mini : !this.mini;
    }
  },
  data() {
    return {
      drawer: true,
      items: [
        { title: "Home", icon: "dashboard" },
        { title: "About", icon: "question_answer" }
      ],
      mini: true,
      right: null,
      admins: [["Management", "people_outline"], ["Settings", "settings"]],
      allApplicantProfile: [
        {
          name: "Hello",
          avatarUrl: "https://picsum.photos/100/100/?image=1011",
          department: "R&D",
          position: "UI/UX",
          selected: true,
        },
        {
          name: "Hola",
          avatarUrl: "https://picsum.photos/100/100/?image=1011",
          department: "R&D",
          position: "UI/UX",
          selected: false,
        },
        {
          name: "Halo",
          avatarUrl: "https://picsum.photos/100/100/?image=1011",
          department: "R&D",
          position: "UI/UX",
          selected: false,
        },
        {
          name: "Hi",
          avatarUrl: "https://picsum.photos/100/100/?image=1011",
          department: "R&D",
          position: "UI/UX",
          selected: false,
        },
        {
          name: "Hey",
          avatarUrl: "https://picsum.photos/100/100/?image=1011",
          department: "R&D",
          position: "UI/UX",
          selected: false,
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.main-container{
    overflow-y:auto;
    max-height:calc(100% - 56px);
}
.layout {
  height: 100%;
}

nav.toolbar {
  height: 56px;
}

.side-list-wrapper,
.full-side-list-wrapper {
//   height: 100%;
//   max-height: calc(100% - 56px);
  transform: translateX(0px);
  display: block;
  left: 0;
  overflow-y: auto;
  overflow-x: hidden;
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

.side-card-name {
  font-weight: 660;
  font-size: 16px;
}

.blue--br-highlight {
  border-right: 4px solid rgb(21, 123, 218);
}
 
.light-blue--bg {
    background-color: rgba(0, 100, 200, 0.1);

}
</style>
