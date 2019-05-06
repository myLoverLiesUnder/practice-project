<template>
    <div>
        <app-header></app-header>
        <app-sidebar></app-sidebar>
        <div class="app-content">
            <router-view></router-view>
        </div>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Header from './layout/Header'
    import Footer from './layout/Footer'
    import Sidebar from './layout/Sidebar'

    export default {
        name: "Content",
        components: {
            'app-header': Header,
            'app-footer': Footer,
            'app-sidebar': Sidebar
        }
    }
</script>

<style scoped>
    .app-content {
        position: relative;
        margin: 74px 10px 10px 240px;
    }
</style>
