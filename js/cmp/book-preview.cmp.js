'use strict'
import eventBus from '../pages/event-bus.js';
import { bookService } from '../services/book.service.js'

export default {
    template: `
    <section >
    <div @click ="checkBook">
            <div class="book-preview">
            
                <img  class="profile-img" :src="book.thumbnail" />
                <br> {{book.title}} ,
                 price: {{book.listPrice.amount}}
                  {{book.listPrice.currency}}
                  <br>
                  <span class="is-book-own">{{checkIfBook}}</span>
                 </div>
                 
            </div>
            
    </div>
    </section>
    `,
    name: 'book-preview',
    data() {
        return {
            isExisted: null,
        }
    },
    props: ['book'],
    methods: {
        checkBook() {
            if (bookService.checkIfBookNew(this.book)) this.$router.push({ path: '/book/' + this.book.id })
            else {
                bookService.sendBookToPro(this.book);
                eventBus.$emit('show-msg', { txt: 'Book Added' });
            }
        }

    },
    computed: {
        checkIfBook() {
            if (bookService.checkIfBookNew(this.book)) return '  📗 book is yours';
            else return '';
        }
    },
    components: {

    },

    created() {

    }

}