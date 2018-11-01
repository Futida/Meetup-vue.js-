export default {
    LOADED_MEETUPS: (state) => {
        return state.loadedMeetups.sort((meetupA, meetupB) => {
            return meetupA.date > meetupB.date
        })
    },
    FEATURED_MEETUPS: (state, getters) => {
        return getters.LOADED_MEETUPS.slice(0, 5)
    },
    LOADED_MEETUP: (state) => {
        return (meetupId) => {
            return state.loadedMeetups.find((meetup) => {
                return meetup.id === meetupId
            })
        }
    }
}