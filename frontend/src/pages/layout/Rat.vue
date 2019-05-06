<template>
    <div>
        <input type="hidden" name="rat" v-for="(item,index) in GENERIC_LIST"
               :key="index" :id="item" :value="getParam(item)">
        <input type="hidden" name="rat" id="ratCustomParams" :value="JSON.stringify(ratCustomParams)">
    </div>
</template>

<script>
    /* eslint-disable */
    export default {
        name: "Rat",
        props: {
            siteSection: String,
            pageName: String,
            ratCustomParams: {
                type: Object
            }
        },
        data() {
            return {
                ratData: {},
                ACCOUNT_ID: '999',
                SVC_ID: '999',
                PAGE_LAYOUT: 'resp',
                GENERIC_LIST: [
                    'ratAccountId',
                    'ratSvcId',
                    'ratSitSection',
                    'ratPageName',
                    'ratPageType',
                    'ratItemId',
                    'ratItemGenre',
                    'ratSinglePage'
                ]
            }
        },
        mounted: function () {
            this.ratData = {
                ratAccountId: this.ACCOUNT_ID,
                ratSvcId: this.SVC_ID,
                ratPageLayout: this.PAGE_LAYOUT,
                ratSitSection: this.siteSection,
                ratPageName: this.pageName,
                ratCustomParams: this.ratCustomParams,
                ratSinglePage: true
            };
            let event = document.createEvent('Event');
            event.initEvent('SINGLE_PAGE_LOAD', true, true);
            document.dispatchEvent(event);
        },
        methods: {
            getParam(key) {
                return this.ratData[key]
            }
        }
    }
    /* eslint-enable */
</script>

<style scoped>

</style>
