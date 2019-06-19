'use strict'
import bookPreview from '../cmp/book-preview.cmp.js';


export default {
    template: `
    <section class="books-list">
            <book-preview v-if= "books"  v-for= "currBook in books " :key="currBook.id"  :book = "currBook" ></book-preview>
        </section>
    `,
    data() {
        return {

        }
    },
    props: ['books'],
    methods: {
        selectBook(bookId) {
            this.$emit('book-selected', bookId)
        },

    },
    computed: {

    },
    components: {
        bookPreview,
    },
    created() {

    }

}