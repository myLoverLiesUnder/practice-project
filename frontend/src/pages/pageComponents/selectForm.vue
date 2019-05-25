<template>
    <form>
        <v-select
                v-model="selectData.select"
                :items="items"
                :rules="[v => !!v || 'Item is required']"
                label="Item"
        ></v-select>
    </form>
</template>

<script>
    /* eslint-disable */
    export default {
        name: "selectForm",
        data: () => ({
            selectData: {
                select: ''
            },
            items: [
                'Item 1',
                'Item 2',
                'Item 3',
                'Item 4'
            ],
        }),
        watch: {
            'selectData': {
                handler: function (val) {
                    this.$emit('selectFormData', val)
                },
                deep: true
            }
        }
    }
</script>

<style scoped>

</style>
