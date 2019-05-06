<template>
    <div class="alert">
        <v-alert
                v-model="currentAlert"
                :color="messageType"
                dismissible
        >
            {{message}}
        </v-alert>
    </div>
</template>

<script>
    /* eslint-disable */
    export default {
        name: "Alert",
        props: {
            message: String,
            messageType: String,
            alert: Boolean
        },
        //将父组件中传入的值保存
        data() {
            return {
                currentAlert: this.alert
            }
        },
        //实现vue双向绑定
        watch: {
            alert(value) {
                this.currentAlert = value
            },
            currentAlert(value){
                //当前值发生变化会向父组件发出通知
                this.$emit("alertChange",value);
            }
        }
    }
</script>

<style scoped>
    .alert {
        width: 300px;
        position: absolute;
        right: 0;
        bottom: 0;
    }
</style>
