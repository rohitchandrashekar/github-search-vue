<template>
  <div class="hello">
    <div class="row justify-content-center">
      <div class="col-lg-6">
        <div class="card bg-light shadow-sm mb-3 rounded" style="margin-top: 2%">
          <div class="card-body">
            <h5 class="card-title">Enter Details</h5>

            <form>
              <div class="form-group">
                <md-field>
                  <label>Search text</label>
                  <md-input
                    v-model="searchtext"
                    v-on:keyup.enter="setFocus"
                  ></md-input>
                </md-field>
              </div>

              <div class="form-group">
                <div>
                  <md-radio id="topic" value="Topic" v-model="picked" class="md-primary">Search By Topic</md-radio>
                  <md-radio id="language" value="Language" v-model="picked" class="md-primary">Search By Language</md-radio>
                </div>
              </div>
            </form>

            <button class="btn btn-outline-dark" v-on:click="sendReq">Submit</button>
          </div>
        </div>
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col-lg-12">
        <div class="spinner" v-if="loading">
          <div class="rect1"></div>
          <div class="rect2"></div>
          <div class="rect3"></div>
          <div class="rect4"></div>
          <div class="rect5"></div>
          <div class="rect6"></div>
        </div>
        <div class="row">
        <Card
          v-for="(repo , index) in repos"
          :key="index"
          v-bind:repo="repo"
          v-bind:index="index"
        ></Card>
        </div>
        <h5 v-if="empty" style="margin: 2%;">No Repositories</h5>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Card from "./Card.vue";
export default {
  name: "Data",
  components: {
    Card
  },
  data() {
    return {
      searchtext: "",
      picked: "",
      repos: [],
      grandTotal: 0,
      success: true,
      empty: false,
      loading: false,
       pageOfItems: [],
       repoItems:[],
      url: "http://localhost:3000/"
    };
  },
  methods: {
    sendReq: function () {
      this.picked === 'Topic' ? this.getReposByTopic() : this.getReposByLanguage()
    },
    getReposByLanguage: function () {
      var that = this;
      this.loading = true;
      this.empty = false;
      axios.get(`${this.url}searchByLanguage?language=${this.searchtext}`)
        .then(function (response) {
          // console.log(response.data);
          var data = response.data;
          console.log(data);
          that.repos = data;
          //that.repoItems = [...Array(that.repos).keys()].map(i => ({ id: (i+1), name: 'Item ' + (i+1) }));
          that.grandTotal = 0;
          that.success = true;
          that.loading = false;
          if (response.length === 0) {
            that.empty = true;
          }
          // console.log(data);
        })
        .catch(function (error) {
          console.log(error);
          that.success = false;
          that.loading = false;
          that.empty = false;
        });
    },
    getReposByTopic: function () {
      var that = this;
      this.loading = true;
      this.empty = false;
      axios.get(`${this.url}searchByTopic?topic=${this.searchtext}`)
        .then(function (response) {
          // console.log(response.data);
          var data = response.data;
          console.log(data);
          that.repos = data;
          //that.repoItems = [...Array(that.repos).keys()].map(i => ({ id: (i+1), name: 'Item ' + (i+1) }));
          that.grandTotal = 0;
          that.success = true;
          that.loading = false;
          if (response.length === 0) {
            that.empty = true;
          }
          // console.log(data);
        })
        .catch(function (error) {
          console.log(error);
          that.success = false;
          that.loading = false;
          that.empty = false;
        });
    },
    // onChangePage(repos) {
    //         // update page of items
    //         this.pageOfItems = repos;
    //     },
    setFocus: function () {
      this.$refs.search.focus();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.alert-warning {
  color: inherit;
}
.alert-success {
  color: inherit;
}
.spinner {
  margin: 100px auto;
  width: 60px;
  height: 50px;
  text-align: center;
  font-size: 10px;
}
.spinner > div {
  background-color: #333;
  height: 100%;
  width: 6px;
  display: inline-block;
  margin: 2px;

  -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;
  animation: sk-stretchdelay 1.2s infinite ease-in-out;
}
.spinner .rect2 {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}
.spinner .rect3 {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}
.spinner .rect4 {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}
.spinner .rect5 {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}
.spinner .rect6 {
  -webkit-animation-delay: -0.7s;
  animation-delay: -0.7s;
}
@-webkit-keyframes sk-stretchdelay {
  0%,
  40%,
  100% {
    -webkit-transform: scaleY(0.4);
  }
  20% {
    -webkit-transform: scaleY(1);
  }
}
@keyframes sk-stretchdelay {
  0%,
  40%,
  100% {
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1);
    -webkit-transform: scaleY(1);
  }
}
</style>