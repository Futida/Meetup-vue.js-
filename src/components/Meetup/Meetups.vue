<template>
    <v-container mt-1>
        <v-layout row wrap
                  v-for="meetup in meetups"
                  :key="meetup.id"
                  mb-2>
            <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
                <v-card class="cyan lighten-4">
                    <v-container fluid>
                        <v-layout row>
                            <v-flex xs5 sm5 md4 lg3>
                                <v-card-media
                                        :src="meetup.imageUrl"
                                        height="150px"
                                ></v-card-media>
                            </v-flex>
                            <v-flex xs6 sm6 md5 lg4>
                                <v-card-title primary-title>
                                    <div>
                                        <h4 class="indigo--text mb-0">{{ meetup.title }}</h4>
                                        <div class="indigo--text">{{ meetup.date }}</div>
                                    </div>
                                </v-card-title>
                                <v-card-actions>
                                    <v-btn flat :to="'/meetups/' + meetup.id">
                                        <v-icon left light>arrow_forward</v-icon>
                                        view meetup
                                    </v-btn>
                                </v-card-actions>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        computed: {
            meetups() {
                return this.$store.getters.LOADED_MEETUPS
            }
        }
    }
</script>