<template>
      <div class="side-card-container">
             <v-tabs
        color="cyan"
        slot="extension"
        v-model="tab"
        grow
      > <v-tabs-slider color="yellow"></v-tabs-slider>
        <v-tab v-for="item in items" :key="item" style = "cursor:pointer">
          {{ item }}
        </v-tab>
      </v-tabs>

        <div class = "side-card-list-wrapper">
       
        <v-tabs-items v-model="tab">
        <v-tab-item v-for="item in items" :key="item">
           <v-card color="cyan lighten-2" class="gray--text">
              <v-container fluid grid-list-lg >
                <v-layout row align-center>
                  <v-flex xs5 order-xs2 >
                    <div class = "side-desc-wrapper">
                        <v-layout column>
                            <v-flex style = "padding-bottom:0">
                                 <div class="side-desc-title">Supermodel</div>
                            </v-flex>
                            <v-flex style = "padding:0">
                                <div class="side-desc-icon-wrapper">
                                    <v-icon>person</v-icon>Jessica Jones
                                </div>
                            </v-flex>
                            <v-flex style = "padding:0">
                                <div class="side-desc-icon-wrapper">
                                    <v-icon>date_range</v-icon>12/12/2012
                                </div>
                            </v-flex>
                        </v-layout>
                    </div>
                  </v-flex>
                  <v-flex xs3 order-xs1 >
                      <img class = "avatar" src="https://picsum.photos/50/50/?image=996" alt="thumbnail">
                  </v-flex>
                  <v-flex xs4 order-xs3>
                    <div style = "float:left">
                      <div class = "side-desc-circle"></div>
                      <div class = "side-desc-status">Not Shortlisted</div>
                    </div>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>

              <v-card color="cyan lighten-2" class="gray--text">
              <v-container fluid grid-list-lg >
                <v-layout row align-center>
                  <v-flex xs5 order-xs2 >
                    <div class = "side-desc-wrapper">
                        <v-layout column>
                            <v-flex style = "padding-bottom:0">
                                 <div class="side-desc-title">Supermodel</div>
                            </v-flex>
                            <v-flex style = "padding:0">
                                <div class="side-desc-icon-wrapper">
                                    <v-icon>person</v-icon>Jessica Jones
                                </div>
                            </v-flex>
                            <v-flex style = "padding:0">
                                <div class="side-desc-icon-wrapper">
                                    <v-icon>date_range</v-icon>12/12/2012
                                </div>
                            </v-flex>
                        </v-layout>
                    </div>
                  </v-flex>
                  <v-flex xs3 order-xs1>
                      <img class = "avatar" src="https://picsum.photos/50/50/?image=996" alt="thumbnail">
                  </v-flex>
                  <v-flex xs4 order-xs3>
                    <div style = "float:left">
                      <div class = "side-desc-circle"></div>
                      <div class = "side-desc-status">Hired</div>
                    </div>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
        </v-tab-item>
        </v-tabs-items> 
        </div>
     
        </div> 
</template>

<script>
export default {
  name: "ApplicantSideBar",
  data() {
    return {
      tab: null,
      items: ["web", "shopping", "videos"],
      text:
        "LLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    };
  }
};
</script>

<style lang = "scss" scoped>
$tabOffset: 52px;

.container {
  padding: 0 !important;
}
.container,
.side-card-container {
  height: calc(100% - #{$tabOffset});
}
.tabs__container,
.tabs__container--grow {
  cursor: pointer !important;
}
.side-card-list-wrapper {
  height: 100%;
  overflow: auto;
  border-right: 1px solid rgb(206, 205, 205);
}
.avatar {
  height: 50px;
  border-radius: 50%;
  margin-left: 20px;
  float: left;
  margin-top: -8px;
}
.side-desc-wrapper {
  height: 125px;
  padding: 20px 0 0 0;
}
.side-desc-title {
  font-size: 18px;
  float: left;
}
.side-desc-icon-wrapper {
  float: left;
}
.side-desc-icon-wrapper > i {
  padding-right: 10px;
}

.side-desc-circle {
  width: 14px;
  height: 14px;
  background: red;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}
.side-desc-circle,
.side-desc-status {
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
}
</style>
