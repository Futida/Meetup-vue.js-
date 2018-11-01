import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations';
import actions from './actions';
import getters from './getters';

Vue.use(Vuex);

const state = {
    loadedMeetups: [
        {
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/84/New_York_City_skyline.jpg',
            id: 'weqw wqee ew434',
            title: 'Meetup in New York',
            date: '2017-12-29'
        },
        {
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Kazan_Cathedral%2C_Moscow.jpg',
            id: 'weqw wqee ewe43434',
            title: 'Meetup in Moscow',
            date: '2017-12-30'
        }
    ],
    user: [
        {
            id: '233213123',
            registeredMeetups: ['ewrwerewrwerwe']
        }
    ]
};

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})