<template>
    <div class="login-page">
        <div class="login-content">
            <v-card class="elevation-12" v-if="isLogin">
                <v-toolbar dark color="blue-grey">
                    <v-toolbar-title>Login</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn small flat @click="switchLogin">New account</v-btn>
                </v-toolbar>
                <v-card-text>
                    <v-form ref="loginForm" lazy-validation v-model="loginValid">
                        <v-text-field v-model="username" prepend-icon="person" name="login" label="Login"
                                      type="text" :rules="usernameRules" required></v-text-field>
                        <v-text-field v-model="password" prepend-icon="lock" name="password" label="Password"
                                      id="password" :rules="passwordRules"
                                      type="password" required></v-text-field>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn dark color="blue-grey" @click="login">Login</v-btn>
                </v-card-actions>
            </v-card>
            <v-card class="elevation-12" v-if="!isLogin">
                <v-toolbar dark color="blue-grey">
                    <v-toolbar-title>Register</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn small flat @click="switchLogin">Back to Login</v-btn>
                </v-toolbar>
                <v-card-text>
                    <v-form ref="registerForm" v-model="registerValid">
                        <v-text-field v-model="username" prepend-icon="person" name="login"
                                      label="Login" :rules="usernameRules" type="text"></v-text-field>
                        <v-text-field v-model="password" prepend-icon="lock" name="password"
                                      label="Password" id="password" type="password"
                                      :rules="passwordRules"></v-text-field>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn dark color="blue-grey" @click="register">Register</v-btn>
                </v-card-actions>
            </v-card>
        </div>
        <Alert :message="message" :message-type="messageType" :alert="alert" @alertChange="alertChange"></Alert>
    </div>
</template>

<script>
    /* eslint-disable */
    import { login, register } from "../libs/api";
    import Alert from "./layout/Alert";

    export default {
        name: "login",
        components: { Alert },
        data: () => ({
            alert: false,
            message: '',
            messageType: '',
            isLogin: true,
            loginValid: true,
            registerValid: true,
            username: '',
            usernameRules: [
                v => !!v || 'Username is required'
            ],
            password: '',
            passwordRules: [
                v => !!v || 'Password is required'
            ]
        }),
        methods: {
            switchLogin() {
                this.isLogin = !this.isLogin;
                this.isLogin ? this.$refs.registerForm.reset() : this.$refs.loginForm.reset();
            },
            alertChange(value) {
                this.alert = value
            },
            login() {
                if (this.$refs.loginForm.validate()) {
                    login({
                        username: this.username,
                        password: this.password
                    }).then(res => {
                        if (!res.errorMsg) {
                            localStorage.setItem("currentUser", JSON.stringify(res));
                            this.$router.push('home');
                        } else {
                            this.message = res.errorMsg;
                            this.messageType = 'error';
                            this.alert = true;
                        }
                    })
                }
            },
            register() {
                if (this.$refs.registerForm.validate()) {
                    register({
                        username: this.username,
                        password: this.password
                    }).then(res => {
                        if (!res.errorMsg) {
                            localStorage.setItem("currentUser", JSON.stringify(res));
                            this.$router.push('home');
                        } else {
                            this.message = res.errorMsg;
                            this.messageType = 'error';
                            this.alert = true;
                        }
                    })
                }
            }
        }
    }
</script>

<style scoped>
    .login-page {
        width: 100%;
        height: 100%;
        position: fixed;
        background-image: url("../assets/img/login-bg.jpg");
        background-size: cover;
        background-position: center;
    }

    .login-content {
        top: 20%;
        right: calc((100% - 400px) / 2);
        position: absolute;
        width: 400px;
    }
</style>
