<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
            <v-flex xs4>
                <v-card>
                    <v-img
                            src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                            aspect-ratio="2.75"
                    ></v-img>

                    <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                        </div>
                    </v-card-title>

                    <v-card-actions>
                        <v-btn flat color="orange">Share</v-btn>
                        <v-btn flat color="orange">Explore</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
            <v-flex xs4>
                <div class="addArea">
                    <i class="material-icons">
                        add
                    </i>
                </div>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    /* eslint-disable */
    export default {
        name: "list",
        data() {
            return {
                date: null,
                menu: false
            }
        },
        watch: {
            menu(val) {
                val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
            }
        },
        methods: {
            create() {
                this.ratCustomParams = this.$store.state.rat.ratCustomParams;
                let ratCustomParams = { a: '123' };
                this.$store.commit('changeRatCustomParams', ratCustomParams);
                this.$router.push('/example/create');
            },
            save(date) {
                this.$refs.menu.save(date)
                this.$refs.picker.activePicker = 'YEAR'
                this.menu = false;
            }
        }
    }
</script>

<style scoped>
    .addArea {
        border: 3px dashed darkgray;
        width: 100%;
        height: 100%;
        cursor: pointer;
        position: relative;
    }

    .addArea > i {
        font-size: 40px;
        position: absolute;
        top: calc((100% - 40px) / 2);
        right: calc((100% - 40px) / 2);
    }

</style>
