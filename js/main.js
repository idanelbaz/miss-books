import appHeader from '../js/cmp/header.cmp.js';
import theRoutes from '../js/pages/routes.js'

const myRouter = new VueRouter({ routes: theRoutes })

var app = new Vue({
    el: '#app',
    mounted() {
        console.log('App has been Mounted!');
    },
    template: `
      <div>
    <app-header></app-header>
    <router-view></router-view>
    </div>
    `,

    data: {

    },

    computed: {

    },
    methods: {


    },
    components: {
        appHeader,
    },
    router: myRouter
})