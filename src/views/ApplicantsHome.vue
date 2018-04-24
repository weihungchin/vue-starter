<template>
  <v-container fluid>
    <v-layout style = "height:100%">
      <v-flex xs12 sm5 md4>
        <v-card flat color="green darken-4" style = "z-index:1">   
          <v-card-text>#2</v-card-text>
        </v-card>
        <ApplicantSideBar/>
      </v-flex>
      <v-flex sm7 md8>
        <v-card dark tile flat color="red darken-4">
          <v-card-text>#2</v-card-text>
        </v-card>
        
        <div class = "detail-wrapper">
            <v-card flat class = "detail-section right-border">
                <v-layout row style = "padding:10px">
                    <v-flex xs5 style = "text-align:left">Primary Skills</v-flex>
                    <v-flex xs1 style = "text-align:left">:</v-flex>
                    <v-flex xs6 style = "text-align:left"> 
                     <v-text-field
                    name="input-1-3"
                    label="Primary Skills"
                    single-line
                    ></v-text-field>
                    </v-flex>
                </v-layout>

                <v-layout row style = "padding:10px">
                    <v-flex xs5 style = "text-align:left">Secondary Skills</v-flex>
                    <v-flex xs1 style = "text-align:left">:</v-flex>
                    <v-flex xs6 style = "text-align:left"> <div style = "float:left; text-align:left">Label Value Long value that is extremely long long long </div></v-flex>
                </v-layout>

                <v-layout row style = "padding:10px">
                    <v-flex xs5 style = "text-align:left">Years of Experience</v-flex>
                    <v-flex xs1 style = "text-align:left">:</v-flex>
                    <v-flex xs6 style = "text-align:left"> <div style = "float:left; text-align:left">Label Value Long value that is extremely long long long </div></v-flex>
                </v-layout>

            </v-card>
             <v-card flat class = "detail-section" v-if = "showDetail">
                <v-layout row style = "padding:10px">
                    <v-flex xs5 style = "text-align:left">Channel</v-flex>
                    <v-flex xs1 style = "text-align:left">:</v-flex>
                    <v-flex xs6 style = "text-align:left"> <div style = "float:left; text-align:left">Label Value Long value that is extremely long long long </div></v-flex>
                </v-layout>

                <v-layout row style = "padding:10px">
                    <v-flex xs5 style = "text-align:left">Recruiter</v-flex>
                    <v-flex xs1 style = "text-align:left">:</v-flex>
                    <v-flex xs6 style = "text-align:left"> <div style = "float:left; text-align:left">Label Value Long value that is extremely long long long </div></v-flex>
                </v-layout>

                <v-layout row style = "padding:10px">
                    <v-flex xs5 style = "text-align:left">Date Applied</v-flex>
                    <v-flex xs1 style = "text-align:left">:</v-flex>
                    <v-flex xs6 style = "text-align:left"> <div style = "float:left; text-align:left">Label Value Long value that is extremely long long long </div></v-flex>
                </v-layout>

            </v-card>

             <div class = "detail-row">
                 <v-card flat class = "detail-section" v-if = "showDetail">
                <v-layout row style = "padding:10px">
                    <v-flex xs5 style = "text-align:left">Company</v-flex>
                    <v-flex xs1 style = "text-align:left">:</v-flex>
                    <v-flex xs6 style = "text-align:left"> <div style = "float:left; text-align:left">Label Value Long value that is extremely long long long </div></v-flex>
                </v-layout>

                <v-layout row style = "padding:10px">
                    <v-flex xs5 style = "text-align:left">Remuneration</v-flex>
                    <v-flex xs1 style = "text-align:left">:</v-flex>
                    <v-flex xs6 style = "text-align:left"> <div style = "float:left; text-align:left">Label Value Long value that is extremely long long long </div></v-flex>
                </v-layout>

                <v-layout row style = "padding:10px">
                    <v-flex xs5 style = "text-align:left">Benefits</v-flex>
                    <v-flex xs1 style = "text-align:left">:</v-flex>
                    <v-flex xs6 style = "text-align:left"> <div style = "float:left; text-align:left">Label Value Long value that is extremely long long long </div></v-flex>
                </v-layout>

                 <v-layout row style = "padding:10px">
                    <v-flex xs5 style = "text-align:left">Reason for Leaving</v-flex>
                    <v-flex xs1 style = "text-align:left">:</v-flex>
                    <v-flex xs6 style = "text-align:left"> <div style = "float:left; text-align:left">Label Value Long value that is extremely long long long </div></v-flex>
                </v-layout>

            </v-card>

             <v-card flat class = "detail-section" v-if = "showDetail">
                <v-layout row style = "padding:10px">
                    <v-flex xs5 style = "text-align:left">University</v-flex>
                    <v-flex xs1 style = "text-align:left">:</v-flex>
                    <v-flex xs6 style = "text-align:left"> <div style = "float:left; text-align:left">Label Value Long value that is extremely long long long </div></v-flex>
                </v-layout>

                <v-layout row style = "padding:10px">
                    <v-flex xs5 style = "text-align:left">Studies</v-flex>
                    <v-flex xs1 style = "text-align:left">:</v-flex>
                    <v-flex xs6 style = "text-align:left"> <div style = "float:left; text-align:left">Label Value Long value that is extremely long long long </div></v-flex>
                </v-layout>
            </v-card>

             </div>
             
             <div class = "detail-row">
                 <v-card flat class = "detail-section" v-if = "showDetail">
                <v-layout row style = "padding:10px">
                    <v-flex xs5 style = "text-align:left">Expected Salary</v-flex>
                    <v-flex xs1 style = "text-align:left">:</v-flex>
                    <v-flex xs6 style = "text-align:left"> <div style = "float:left; text-align:left">Label Value Long value that is extremely long long long </div></v-flex>
                </v-layout>

                <v-layout row style = "padding:10px">
                    <v-flex xs5 style = "text-align:left">Follow Up Date</v-flex>
                    <v-flex xs1 style = "text-align:left">:</v-flex>
                    <v-flex xs6 style = "text-align:left"> <div style = "float:left; text-align:left">Label Value Long value that is extremely long long long </div></v-flex>
                </v-layout>
            </v-card>

             <v-card flat class = "detail-section" v-if = "showDetail">
                <v-layout row style = "padding:10px">
                    <v-flex xs5 style = "text-align:left">Rejection Reason</v-flex>
                    <v-flex xs1 style = "text-align:left">:</v-flex>
                    <v-flex xs6 style = "text-align:left"> <div style = "float:left; text-align:left">Label Value Long value that is extremely long long long </div></v-flex>
                </v-layout>

                <v-layout row style = "padding:10px">
                    <v-flex xs5 style = "text-align:left">Remark</v-flex>
                    <v-flex xs1 style = "text-align:left">:</v-flex>
                    <v-flex xs6 style = "text-align:left"> <div style = "float:left; text-align:left">Label Value Long value that is extremely long long long </div></v-flex>
                </v-layout>
            </v-card>
             </div>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
 

</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import ApplicantSideBar from "@/components/TheApplicantSideBar.vue";

export default {
  name: "applicants-home",
  components: {
    HelloWorld,
    ApplicantSideBar
  },
  data() {
    return {
      showDetail: true
    };
  },
  methods: {
    test: function() {
      this.showDetail = !this.showDetail;
      console.log("click");
    }
  }
};
</script>

<style lang = "scss" scoped>
$tabOffset: 52px;

.container {
  padding: 0 !important;
  height: calc(100% - #{$tabOffset});
}

@media (min-width: 1100px) {
  .applicant-detail-wrapper {
    display: flex;
    flex-direction: row;
  }
  .detail-section {
    width: 50%;
    float: left;
    border-top: 1px solid gray;
  }
  .right-border {
    border-right: 1px solid gray;
  }
}

@media (max-width: 1100px) {
  .applicant-detail-wrapper {
    display: flex;
    flex-direction: column;
  }
  .detail-section {
    width: 100%;
    float: left;
    border-top: 1px solid gray;
  }
  .right-border {
    border-right: none;
  }
}

.detail-row {
  clear: both;
}

.input-group {
  height: 30px;
  margin-top: -20px;
}
</style>
