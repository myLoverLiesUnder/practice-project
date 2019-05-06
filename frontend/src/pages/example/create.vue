<template>
    <div>
        <h1>create</h1>
        <v-btn fab dark color="teal" @click="list()">
            <v-icon dark>list</v-icon>
        </v-btn>
        <Rat :siteSection="siteSection" :pageName="pageName" :ratCustomParams="ratCustomParams"></Rat>
    </div>
</template>

<script>
    /* eslint-disable */
    import Rat from '@/pages/layout/Rat'

    export default {
        name: "create",
        components: { Rat },
        data() {
            return {
                siteSection: "EXAMPLE_CREATE",
                pageName: "createPage",
                ratCustomParams: {}
            }
        },
        beforeMount: function () {
            this.ratCustomParams = this.$store.state.rat.ratCustomParams;
        },
        methods: {
            list() {
                this.$router.push('/example/list')
            }
        }
    }
    /* eslint-enable */
</script>

<style scoped>

</style>
