<template>
    <form>
        <v-text-field
                v-model="emailData.email"
                :counter="10"
                label="Email"
                required
        ></v-text-field>

    </form>
</template>

<script>
    /* eslint-disable */
    export default {
        name: "emailForm",
        data: () => ({
            emailData: {
                email: ''
            }
        }),
        watch: {
            'emailData': {
                handler: function (val) {
                    this.$emit('emailFormData', val)
                },
                deep: true
            }
        }
    }
</script>

<style scoped>

</style>
