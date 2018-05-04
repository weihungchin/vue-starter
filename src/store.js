import Vue from "vue";
import Vuex from "vuex";
import firebase from "./firebase";
import "firebase/firestore";

Vue.use(Vuex);
Vue.use(firebase);

export default new Vuex.Store({
  state: {
    _allApplicantProfile: []
  },
  getters: {
    allApplicantProfile: function(state) {
      console.log(state._allApplicantProfile);
      return state._allApplicantProfile;
    }
  },
  mutations: {
    updateAllApplicantProfile: function(state, val) {
      state._allApplicantProfile = [...val];
    }
  },
  actions: {
    getFirebaseDatabase: function(context) {
      firebase.database
        .collection("applicantProfile")
        .onSnapshot(function(querySnapshot) {
          let profileList = [];
          querySnapshot.forEach(function(doc) {
            const id = doc.id;
            profileList.push({ ...doc.data(), id });
          });
          console.log(profileList);
          context.commit("updateAllApplicantProfile", profileList);
        });
    }
  }
});
