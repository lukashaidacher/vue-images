<template>
    <v-toolbar>
        <v-btn icon class="hidden-xs-only">
            <v-icon>image</v-icon>
        </v-btn>
        <v-toolbar-title>VueJS Images Browser</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items v-if="isLoggedIn">
            <v-btn flat dark to="/">Gallery</v-btn>
            <v-btn flat dark to="/upload">Upload</v-btn>
            <v-btn flat dark @click="logout">Logout</v-btn>
        </v-toolbar-items>
        <v-toolbar-items v-else>
            <v-btn flat dark @click="login">Login</v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';

    export default {
        name: 'AppHeader',

        computed: mapGetters(['isLoggedIn']),
        methods: mapActions(['login', 'logout'])
    }
</script>
