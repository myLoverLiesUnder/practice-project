<template>
    <div>
        <h1>create</h1>
        <name-form @nameFormData="getName"></name-form>
        <email-form @emailFormData="getEmail"></email-form>
        <select-form @selectFormData="getSelect"></select-form>
        <v-btn
                color="success"
                @click="save"
        >
            Submit
        </v-btn>
        <v-btn fab dark color="teal" @click="list()">
            <v-icon dark>list</v-icon>
        </v-btn>
    </div>
</template>

<script>
    /* eslint-disable */
    import EmailForm from "../pageComponents/emailForm";
    import NameForm from "../pageComponents/nameForm";
    import SelectForm from "../pageComponents/selectForm";

    export default {
        name: "create",
        components: { SelectForm, NameForm, EmailForm },
        data() {
            return {
                formData: {
                    nameFormData: {},
                    emailFormData: {},
                    selectFormData: {}
                },
            }
        },
        methods: {
            list() {
                this.$router.push('/example/list')
            },
            getName(value) {
                this.formData.nameFormData = value
            },
            getEmail(value) {
                this.formData.emailFormData = value
            },
            getSelect(value) {
                this.formData.selectFormData = value
            },
            save() {

            }
        }
    }
    /* eslint-enable */
</script>

<style scoped>

</style>
