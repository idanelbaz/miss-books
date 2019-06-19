'use strict'

import { bookService } from '../services/book.service.js'
import bookList from './book-list.cmp.js';






export default {
    template: `
    <section class="add-book" >
    <img class="about-app-img" src="img/add-book.png" alt="">
          <input @input="doFilter" type="text" v-model="filterBy.txt"  placeholder="search a book" autofocus/>
          <book-list v-if ="booksToShow" :books="booksToShow" @book-selected="getSelectedBook"></book-list>
        </section>
    `,
    name: 'addBookCmp',
    data() {
        return {
            filterBy: {
                txt: '',
            },
            booksToShow: null,
        }
    },

    methods: {
        getSelectedBook() {

        },
        doFilter() {
            bookService.getGoogleBook(this.filterBy.txt)
                .then(books => {
                    console.log(books)
                    this.booksToShow = books;
                })
        }

    },
    computed: {


    },
    components: {
        bookList,
    },

    created() {

    },


}