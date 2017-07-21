<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12 sm6 class="text-xs-center text-sm-right">
                <v-btn dark large router to="/meetups" class="light-blue lighten-1">Explore Meetups</v-btn>
            </v-flex>
            <v-flex xs12 sm6 class="text-xs-center text-sm-left">
                <v-btn dark large router to="/meetup/new" class="light-blue lighten-1">Organize Meetups</v-btn>
            </v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex xs-12>
                <v-carousel>
                    <v-carousel-item v-for="(item,i) in ['1','2','3']"
                                     :src="item"
                                     :key="i">
                    </v-carousel-item>
                </v-carousel>
            </v-flex>
        </v-layout>
    </v-container>
</template>


<script>
    export default{}
</script>

<style></style>