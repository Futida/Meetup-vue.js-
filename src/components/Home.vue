<template>
    <v-container mt-1>
        <v-layout row wrap class="mb-2">
            <v-flex xs12 sm6 class="text-xs-center text-sm-right">
                <v-btn dark large router to="/meetups" class="light-blue lighten-1">Explore Meetups</v-btn>
            </v-flex>
            <v-flex xs12 sm6 class="text-xs-center text-sm-left">
                <v-btn dark large router to="/meetup/new" class="light-blue lighten-1">Organize Meetups</v-btn>
            </v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex xs-12>
                <v-carousel style="cursor: pointer" :cycle=false>
                    <v-carousel-item v-for="meetup in meetups"
                                     :src="meetup.imageUrl"
                                     :key="meetup.id"
                                     @click="onLoadMeetup(meetup.id)">
                        <div class="title">
                            {{ meetup.title }}
                        </div>
                    </v-carousel-item>
                </v-carousel>
            </v-flex>
        </v-layout>
    </v-container>
</template>


<script>
    export default {
        computed:{
          meetups(){
              return this.$store.getters.FEATURED_MEETUPS
          }
        },
        methods: {
            onLoadMeetup(id) {
                this.$router.push('/meetups/' + id)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .title {
        position: absolute;
        bottom: 50px;
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
        font-size: 2em;
        padding: 20px;
    }
</style>


