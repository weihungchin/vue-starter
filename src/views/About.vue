<template>
  <v-app id="inspire" :dark = "!lightTheme">
    <v-navigation-drawer
      fixed
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
      v-model="drawer"
    >
      <v-list dense>
        <template v-for="item in items">
          <v-layout
            row
            v-if="item.heading"
            align-center
            :key="item.heading"
          >
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-flex>
          </v-layout>
          <v-list-group
            v-else-if="item.children"
            v-model="item.model"
            :key="item.text"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon=""
          >
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile
              v-for="(child, i) in item.children"
              :key="i"
            >
              <v-list-tile-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ child.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
          <v-list-tile v-else :key="item.text">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      color="blue darken-3"
      flat
      dark
      app
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      fixed
    >
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">EMS</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
       <v-btn icon @click = "lightTheme = !lightTheme">
        <v-icon >lightbulb_outline</v-icon>
      </v-btn>
      
      <v-btn icon>
        <v-icon>notifications</v-icon>
      </v-btn>
      <v-btn icon large>
        <v-avatar size="32px" tile>
          <img
            src="https://vuetifyjs.com/static/doc-images/logo.svg"
            alt="Vuetify"
          >
        </v-avatar>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
    
        <v-layout justify-center align-center>
           <v-container fluid grid-list-md>
             <v-layout row wrap class = "pb-3" >
               <v-flex  v-bind="{ [`xs12`] : $vuetify.breakpoint.smAndUp}">
                  <!-- <v-text-field
                    clearable
                    flat
                    solo-inverted
                    prepend-icon="search"
                    label="Search"
                    @keyup.enter.native = "onSearch"
                    v-model = "searchModel"
                  ></v-text-field> -->
                   <v-select
                      label="Search"
                      chips
                      tags
                      solo
                      prepend-icon="search"
                      append-icon=""
                      clearable
                      flat
                      v-model = "searchModel"
                      @keyup.enter.native = "onSearch"
                    >
                      <template slot="selection" slot-scope="data">
                        <v-chip
                          flat
                          close
                          @input="onRemoveSearchTag(data.item)"
                        >
                          <strong>{{ data.item }}</strong>&nbsp;
                        </v-chip>
                      </template>
                    </v-select>
               </v-flex>

                   <!-- <v-chip close color="red" text-color="white"
                    v-for="tag in searchTags"
                    :key="tag.id"
                    @input = "onRemoveSearchTag(tag)"
                    v-model = "tag.show"
                  >{{tag.value}}</v-chip>   -->
             </v-layout>
         
            <v-layout row wrap align-content-start> 
                <v-flex>Sort by</v-flex>
                <v-flex v-for = "item in sortCriteria" :key = "item.label"><span style = "cursor:pointer" @click = "onSort(item)">{{item.label}}<v-icon>{{item.icon}}</v-icon></span> </v-flex>
                <v-spacer class = "hidden-sm-and-down"></v-spacer>
            </v-layout>

            <v-layout row wrap>
            <v-flex
              v-bind="{ [`xs12`] : $vuetify.breakpoint.xsOnly, [`sm6`] : $vuetify.breakpoint.smOnly, [`md4`] : $vuetify.breakpoint.mdOnly, [`lg3`] : $vuetify.breakpoint.lgAndUp}"
              v-for="card in cards"
              :key="card.title"
            >
              <v-card flat>
                <v-card-media
                  :src="card.src"
                >
                  <v-avatar
                    size="100px"
                    class="grey lighten-4"
                     style = "margin:50px auto 0 auto"
                  >
                    <img src="https://picsum.photos/100/100/?image=1011" alt="avatar">
                </v-avatar>
                  <!-- <v-container fill-height fluid>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline white--text" v-text="card.title"></span>
                      </v-flex>
                    </v-layout>
                  </v-container> -->
                </v-card-media>
                 <v-card-title primary-title class = "text-xs-center">
                  <div style = "margin:0 auto">
                    <div class="title">Top western road trips</div>
                    <div class="grey--text text--darken-1">1,000 miles of wonder</div>
                    <div class="grey--text">200 unique experiences</div>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn icon>
                    <v-icon>more_vert</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
            </v-layout>
           </v-container>
        

         
        </v-layout>
      </v-container>
    </v-content>
    <!-- <v-btn
      fab
      bottom
      right
      color="pink"
      dark
      fixed
      @click.stop="dialog = !dialog"
    >
      <v-icon>add</v-icon>
    </v-btn> -->
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
export default {
  mounted() {
    console.log(this.$vuetify.breakpoint);
  },
  data: () => ({
    lightTheme: true,
    searchModel: [],
    sample: [
      { icon: "contacts", text: "Employees" },
      { icon: "history", text: "Frequently contacted" },
      { icon: "content_copy", text: "Duplicates" },
      {
        icon: "keyboard_arrow_up",
        "icon-alt": "keyboard_arrow_down",
        text: "Labels",
        model: true,
        children: [{ icon: "add", text: "Create label" }]
      },
      {
        icon: "keyboard_arrow_up",
        "icon-alt": "keyboard_arrow_down",
        text: "More",
        model: false,
        children: [
          { text: "Import" },
          { text: "Export" },
          { text: "Print" },
          { text: "Undo changes" },
          { text: "Other contacts" }
        ]
      },
      { icon: "settings", text: "Settings" },
      { icon: "chat_bubble", text: "Send feedback" },
      { icon: "help", text: "Help" },
      { icon: "phonelink", text: "App downloads" },
      { icon: "keyboard", text: "Go to the old version" }
    ],
    dialog: false,
    drawer: null,
    items: [{ icon: "contacts", text: "Employees" }],
    cards: [
      {
        title: "Pre-fab homes",
        src: "/static/doc-images/cards/house.jpg",
        flex: 3
      },
      {
        title: "Favorite road trips",
        src: "/static/doc-images/cards/road.jpg",
        flex: 3
      },
      {
        title: "Best airlines",
        src: "/static/doc-images/cards/plane.jpg",
        flex: 3
      },
      {
        title: "The Best airlines",
        src: "/static/doc-images/cards/plane.jpg",
        flex: 3
      },
      {
        title: "Lorem ipsum",
        src: "/static/doc-images/cards/plane.jpg",
        flex: 3
      },
      {
        title: "Hello World",
        src: "/static/doc-images/cards/plane.jpg",
        flex: 3
      }
    ],
    searchTags: [],
    sortCriteria: [
      {
        label: "Name",
        icon: "arrow_drop_up",
        selected: true,
        reverse: false
      },
      {
        label: "Position",
        icon: "",
        selected: false,
        reverse: false
      },
      {
        label: "Department",
        icon: "",
        selected: false,
        reverse: false
      },
      {
        label: "Supervisor",
        icon: "",
        selected: false,
        reverse: false
      }
    ]
  }),
  props: {
    source: String
  },
  methods: {
    onSearch: function(event) {
      if (this.searchModel) {
        const obj = {
          value: this.searchModel,
          id: Math.round(Math.random() * 123456789),
          show: true
        };
        this.searchTags = [obj, ...this.searchTags];
      }
      console.log(event);
      console.log(this.searchModel);
    },
    onRemoveSearchTag: function(tag) {
      console.log(this.searchModel);
      this.searchModel.splice(this.searchModel.indexOf(tag), 1);
      this.searchModel = [...this.searchModel];

      // this.searchTags = this.searchTags.filter(item => {
      //   return item.id !== tag.id;
      // });
      // console.log(tag);
    },
    onSort(target) {
      this.sortCriteria = this.sortCriteria.map(item => {
        if (item.label === target.label) {
          item.selected = true;
          item.reverse = !item.reverse;
          item.icon = item.reverse ? "arrow_drop_down" : "arrow_drop_up";
        } else {
          item.selected = false;
          item.icon = "";
        }

        return item;
      });
      console.log(target);
    }
  }
};
</script>
