<template>
    <div>
        <h1>list</h1>
        <v-btn fab dark color="indigo" @click="create()">
            <v-icon dark>add</v-icon>
        </v-btn>
        <Rat :siteSection="siteSection" :pageName="pageName" :ratCustomParams="ratCustomParams"></Rat>
    </div>
</template>

<script>
    import Rat from '@/pages/layout/Rat'
    import { trackClick } from "../../libs/ratUtils";

    export default {
        name: "list",
        components: { Rat },
        data() {
            return {
                siteSection: "EXAMPLE_LIST",
                pageName: "listPage",
                ratCustomParams: {}
            }
        },
        methods: {
            create() {
                this.ratCustomParams = this.$store.state.rat.ratCustomParams;
                let ratCustomParams = { a: '123' };
                this.$store.commit('changeRatCustomParams', ratCustomParams);
                this.$router.push('/example/create');
                trackClick("go_to_create", ratCustomParams);
            }
        }
    }
</script>

<style scoped>

</style>
