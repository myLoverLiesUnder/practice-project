<template>
    <v-footer class="pa-3"
              color="cyan"
              dark
              app
              fixed>
        <b>Version</b> 1.0.0
        <v-spacer></v-spacer>
        <div>&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>

</style>
