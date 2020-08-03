<template>
     <div class="card rounded col-md-12" style="text-align:left">
    <md-table>
      <md-table-row>
        <md-table-head md-numeric>ID</md-table-head>
        <md-table-head>Criteria</md-table-head>
        <md-table-head>Key</md-table-head>
        <md-table-head>Value</md-table-head>
      </md-table-row>

      <md-table-row  v-for="(repo , index) in reports"
          :key="index"
          v-bind:repo="repo"
          v-bind:index="index">
        <md-table-cell md-numeric></md-table-cell>
        <md-table-cell>{{repo.searchCriteria}}</md-table-cell>
        <md-table-cell>{{repo.searchKey}}</md-table-cell>
        <md-table-cell>{{repo.searchValue}}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: 'Table',
  props: ['reports', 'index']
}
</script>

<style scoped>

.alert-warning{
  color: inherit
}
.alert-success{
  color: inherit
}
</style>