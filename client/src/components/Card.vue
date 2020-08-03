<template>
    <div class="card rounded col-md-4" style="text-align:left">
        <md-card>
            <md-card-header>
                <md-card-header-text>
                <div class="md-title" style="text-overflow: ellipsis;">{{repo.name}}</div>
                <div class="md-subhead">{{repo.fullName}}</div>
                <div class="md-subhead">{{repo.url}}</div>
            </md-card-header-text>
            </md-card-header>
        </md-card>
    </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['repo', 'index']
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