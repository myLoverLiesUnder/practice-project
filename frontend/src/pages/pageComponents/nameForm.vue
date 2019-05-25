<template>
    <form>
        <v-text-field
                v-model="nameData.name"
                :counter="10"
                label="Name"
                required
        ></v-text-field>
    </form>
</template>

<script>
    /* eslint-disable */
    export default {
        name: "nameForm",
        data: () => ({
            nameData: {
                name: ''
            }
        }),
        watch: {
            'nameData': {
                handler: function (val) {
                    this.$emit('nameFormData', val)
                },
                deep: true
            }
        },
        methods: {}
    }
</script>

<style scoped>

</style>
