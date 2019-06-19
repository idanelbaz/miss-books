import userMsg from '../cmp/user-msg.cmp.js';

export default {
    name: 'AppHeader',
    template: `
            <header class="header">
                <nav>
                    <router-link  to="/">Home</router-link> | 
                    <router-link to="/book">Books</router-link> |
                    <router-link to="/about">About</router-link> |
                    <router-link to="/addBook">Add Book</router-link> 
                </nav>
                <img src="./img/banner.png" >
                <user-msg></user-msg>
            </header>    
    
    `,
    data() {
        return {

        }
    },
    created() {

    },
    methods: {

    },
    components: {
        userMsg
    }
}