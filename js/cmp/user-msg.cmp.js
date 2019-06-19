import eventBus from '../pages/event-bus.js';
var timeout;

export default {
    template: `
        <section class="user-msg" :class="msg.type" v-if="msg">
            
            <h3>{{msg.txt}}</h3>
            <button @click="closeMsg">x</button>
        </section>
    `,
    data() {
        return {
            msg: null
        }
    },
    created() {
        eventBus.$on('show-msg', (msg) => {
            this.msg = msg
            if (timeout) clearTimeout(timeout)
            timeout = setTimeout(() => this.msg = null, 3000)
        })
    },
    methods: {
        closeMsg() {
            this.msg = null;
        }
    }
}