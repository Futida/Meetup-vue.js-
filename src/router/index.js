import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Meetups from '../components/Meetup/Meetups.vue'
import CreateMeetup from '../components/Meetup/CreateMeetup.vue'
import Profile from '../components/User/Profile.vue'
import Signin from '../components/User/Signin.vue'
import Signup from '../components/User/Signup.vue'



const routes = [
    { path: '/', component: Home },
    { path: '/meetups', component: Meetups },
    { path: '/meetup/new', component: CreateMeetup },
    { path: '/profile', component: Profile },
    { path: '/signin', component: Signin },
    { path: '/signup', component: Signup },
    { path: '/*', redirect: '/' },
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router
