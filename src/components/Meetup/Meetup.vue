<template>
    <v-container mt-1>
        <v-layout row wrap>
            <v-flex xs12>
                <v-card>
                    <v-card-title>
                        <h5 class="primary--text">{{ meetup.title }}</h5>
                    </v-card-title>
                    <v-card-media
                            :src="meetup.imageUrl"
                            height="350px">
                    </v-card-media>
                    <v-card-text>
                        <div class="purple--text">{{ meetup.date }}</div>
                        <div>Some description</div>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn dark class="red">Register</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        props:['id'],
        computed: {
            meetup() {
                return this.$store.getters.LOADED_MEETUP(this.id)
            }
        }
    }
</script>