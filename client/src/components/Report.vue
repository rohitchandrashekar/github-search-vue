<template>
  <div class="hello">
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
          <Table v-bind:reports="reports"/>
        </div>
        <h5 v-if="empty" style="margin: 2%;">No Repositories</h5>
      </div>
    </div>
  </div>
</template>
<script>
import Table from "./Table.vue";
import axios from "axios";
export default {
   name: "Report",
  components: {
    Table
  },
  data() {
      return  {
          reports: [1,2,3,5,67,1],
          success: true,
          empty: false,
          loading: false,
          url: "http://localhost:3000/"
      }
  },
  methods: {
      getReports: function () {
      var that = this;
      this.loading = true;
      this.empty = false;
      axios.get(`${this.url}searchReport`)
        .then(function (response) {
          // console.log(response.data);
          var data = response.data;
          console.log(data);
          that.reports = data;
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
    }
  },
  beforeMount(){
    this.getReports()
 },  
}
</script>
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
