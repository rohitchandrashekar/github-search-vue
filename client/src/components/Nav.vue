
<template>
 <nav class="navbar navbar-dark bg-dark">
    <router-link class="spacing" v-for="routes in links" 
      v-bind:key="routes.id"
      :to="`${routes.page}`"><span class="navbar-brand mb-0 h2">{{routes.text}}</span></router-link>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      links: [
        {
          id: 0,
          text: 'Github Search',
          page:'/'
        },
        {
          id: 1,
          text: 'Github Reports',
          page:'/reports'
        }
      ]
    }
  }
}
</script>
<style>
.spacing {
  margin-right: 10px;
}