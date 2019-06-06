<template>
    <form>
        <v-text-field
                v-model="emailData.email"
                :counter="10"
                label="Email"
                required
        ></v-text-field>
        <v-flex xs11 sm5>
            <v-menu
                    ref="monthMenu"
                    v-model="monthMenu"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    :return-value.sync="monthDate"
                    lazy
                    transition="scale-transition"
                    offset-y
                    full-width
                    max-width="290px"
                    min-width="290px"
            >
                <template v-slot:activator="{ on }">
                    <v-text-field
                            v-model="monthDate"
                            prepend-icon="event"
                            readonly
                            v-on="on"
                    ></v-text-field>
                </template>
                <v-date-picker
                        ref="monthPicker"
                        v-model="monthDate"
                        :max="new Date().toISOString().substr(0, 10)"
                        min="1950-01-01"
                        type="month"
                        @change="saveMonth"
                ></v-date-picker>
            </v-menu>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex xs11 sm5>
            <v-menu
                    ref="dateMenu"
                    v-model="dateMenu"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    :return-value.sync="date"
                    lazy
                    transition="scale-transition"
                    offset-y
                    full-width
                    max-width="290px"
                    min-width="290px"
            >
                <template v-slot:activator="{ on }">
                    <v-text-field
                            v-model="date"
                            prepend-icon="event"
                            readonly
                            v-on="on"
                    ></v-text-field>
                </template>
                <v-date-picker
                        no-title
                        ref="datePicker"
                        v-model="date"
                        :min="currentMonth + '-01'"
                        :max="currentMonth + '-31'"
                        @change="saveDate"
                ></v-date-picker>
            </v-menu>
        </v-flex>
    </form>
</template>

<script>
    /* eslint-disable */
    export default {
        name: "emailForm",
        data: () => ({
            emailData: {
                email: ''
            },
            monthDate: '',
            currentMonth: new Date().toISOString().substr(0, 7),
            monthMenu: false,
            dateMenu: false,
            date: ''
        }),
        watch: {
            'emailData': {
                handler: function (val) {
                    this.$emit('emailFormData', val)
                },
                deep: true
            },
            monthMenu(val) {
                val && setTimeout(() => (this.$refs.monthPicker.activePicker = 'YEAR'))
            },
            dateMenu(val) {
                val && setTimeout(() => (this.$refs.datePicker.activePicker = 'DATE'))
            }
        },
        methods: {
            saveMonth(monthDate) {
                console.log(new Date().toISOString().substr(0, 10))
                this.monthDate = monthDate;
                this.$refs.monthMenu.save(monthDate);
                this.date = this.monthDate + "-01";
                this.currentMonth = monthDate;
            },
            saveDate(date) {
                this.$refs.dateMenu.save(date);
                this.monthDate = this.currentMonth;
            }
        },
    }
</script>

<style scoped>

</style>
