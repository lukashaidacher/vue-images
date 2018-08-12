<template>
    <v-app dark>
        <AppHeader></AppHeader>
        <v-content>
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </v-content>
        <AppFooter></AppFooter>
    </v-app>
</template>

<script>
    import AppHeader from './components/AppHeader';
    import AppFooter from './components/AppFooter';

    export default {
        name: 'App',

        components: {
            AppHeader,
            AppFooter
        }
    }
</script>