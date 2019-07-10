<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <form>
        <v-select
                v-model="selectData.select"
                :items="items"
                :rules="[v => !!v || 'Item is required']"
                label="Item"
        ></v-select>
        <v-dialog v-model="dialog" scrollable width="600px">
            <template v-slot:activator="{ on }">
                <v-text-field
                        v-on="on"
                        v-model="selectData.model"
                        label="Modal"
                        required
                ></v-text-field>
            </template>
            <v-card>
                <v-card-title>Select Country</v-card-title>
                <v-divider></v-divider>
                <v-text-field
                        v-model="search"
                        label="Search Country"
                        flat
                        solo-inverted
                        clearable
                ></v-text-field>
                <v-card-text style="height: 300px;">
                    <v-radio-group v-model="dialogm1" column>
                        <v-radio label="Bahamas, The" value="bahamas"></v-radio>
                        <v-radio label="Bahrain" value="bahrain"></v-radio>
                        <v-radio label="Bangladesh" value="bangladesh"></v-radio>
                        <v-radio label="Barbados" value="barbados"></v-radio>
                        <v-radio label="Belarus" value="belarus"></v-radio>
                        <v-radio label="Belgium" value="belgium"></v-radio>
                    </v-radio-group>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="green darken-1" flat @click="dialog = false">Close</v-btn>
                    <v-btn color="green darken-1" flat @click="modalSave">Save</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-combobox
                @click="getData"
                v-model="select"
                :loading="loading"
                :items="autoItems"
                item-text="Description"
                item-value="API"
                return-object
                hide-no-data
                hide-selected
                cache-items
                :value-comparator="check"
                label="First"
        ></v-combobox>
    </form>
</template>

<script>
    /* eslint-disable */
    export default {
        name: "selectForm",
        data: () => ({
            dialog: false,
            dialogm1: '',
            search: null,
            selectData: {
                select: '',
                model: ''
            },
            items: [
                'Item 1',
                'Item 2',
                'Item 3',
                'Item 4'
            ],
            loading: false,
            autoItems: [],
            select: null,
            select2: null,
            loading2: false,
        }),
        watch: {
            'selectData': {
                handler: function (val) {
                    this.$emit('selectFormData', val)
                },
                deep: true
            }
        },
        methods: {
            check: function () {
                console.log(this.select)
                return this.autoItems.includes(this.select)
            },
            modalSave: function () {
                this.selectData.model = this.dialogm1;
                this.dialog = false
            },
            getData: function () {
                if (this.autoItems.length > 0) return;
                this.loading = true;
                fetch('https://api.publicapis.org/entries')
                    .then(res => res.json())
                    .then(res => {
                        const { entries } = res;
                        this.autoItems = entries;
                    })
                    .catch(err => {
                        console.log(err)
                    })
                    .finally(() => (this.loading = false))
            }
        }
    }
</script>

<style scoped>

</style>
