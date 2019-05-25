<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div>
        <h1>list</h1>
        <v-btn fab dark color="indigo" @click="create()">
            <v-icon dark>add</v-icon>
        </v-btn>
        <v-menu
                ref="menu"
                v-model="menu"
                :close-on-content-click="false"
                :nudge-right="40"
                lazy
                transition="scale-transition"
                offset-y
                full-width
                min-width="290px"
        >
            <template v-slot:activator="{ on }">
                <v-text-field
                        v-model="date"
                        label="Birthday date"
                        prepend-icon="event"
                        readonly
                        v-on="on"
                ></v-text-field>
            </template>
            <v-date-picker
                    ref="picker"
                    v-model="date"
                    :max="new Date().toISOString().substr(0, 10)"
                    min="1950-01-01"
                    @change="save"
                    no-title
            ></v-date-picker>
        </v-menu>
    </div>
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

</style>
