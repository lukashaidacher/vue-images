<template>
    <v-layout row wrap>
        <v-flex v-for="image in allImages" :key="image.id" xs3 offset-xs1>
            <v-card class="card">
                <v-card-media :src="image.link" height="300px">
                </v-card-media>
            </v-card>
        </v-flex>
    </v-layout>
</template>


<script>
    import {mapActions, mapGetters} from 'vuex';

    export default {
        name: 'ImageList',

        methods: mapActions(['fetchImages', 'isLoggedIn']),
        computed: mapGetters(['allImages']),

        created() {
            this.fetchImages();
        }
    }
</script>

<style scoped>
    .card {
        margin-top: 30px;
    }
</style>
