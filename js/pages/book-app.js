import { bookService } from '../services/book.service.js'
import bookDetails from './book-details.cmp.js';
import bookList from './book-list.cmp.js';
import bookFilter from '../cmp/book-filter.cmp.js';



export default {
    template: `
    <section class="book-app">
    <img class="book-app-img" src="img/book-app.png" alt="">
        <book-filter v-if="!selectedBook" class="book-filter-cont" @set-filter="setFilterOn" ></book-filter>
        <book-list :books="booksForDisplay"  @book-selected="getSelectedBook"   v-if="!selectedBook">
        </book-list>
        <book-details  v-if="selectedBook"  v-bind:book="selectedBook"></book-details>
       
    </section>
`,
    data() {
        return {
            books: [],
            filter: null,
            selectedBook: null,


        }
    },
    methods: {
        getSelectedBook(currBookId) {
            this.selectedBook = this.books.filter(book => {
                return book.id === currBookId;
            });
            console.log(this.selectedBook)
        },

        goBack() {
            this.selectedBook = null;
        },
        setFilterOn(filter) {
            this.filter = filter;
        }
    },
    computed: {
        booksForDisplay() {
            let filterBooks;
            if (!this.filter) return this.books;
            else {
                filterBooks = this.books.filter(book => book.title.includes(this.filter.txt))
                return filterBooks.filter(book => book.listPrice.amount <= this.filter.currPrice);
            }

        }
    },
    components: {
        bookFilter,
        bookList,
        bookDetails,
    },
    created() {
        console.log('app was created')
        bookService.query()
            .then(books => {
                this.books = books;

                console.log(this.books)
            })

    }
}