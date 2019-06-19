'use strict'
import bookReadMore from '../cmp/read-more.cmp.js';
import { bookService } from '../services/book.service.js'
import bookReview from '../cmp/book-review.cmp.js';
import bookShowReview from '../cmp/book-show-review.cmp.js';




export default {
    template: `
    <section class="details" >
            <div v-if="book" class="book-details">
            <div class = "details-data"> 
                <h2  v-bind:class="checkPrice"> Book title: {{book.title}} </h2>
                <h2> Book authors: {{book.authors}} </h2>
                <h2 v-bind:descToShow="checkDescLength"> Book description: {{descToShow}}  <button @click = "changeShow" v-if="isDescLong" class="read-more">Read more...</button></h2>
                <book-read-more v-if="showMore" :txt="descNotShow" > </book-read-more>
                <h2> Book language: {{book.language}} </h2>
                <h2> Book Price: {{book.listPrice.amount}} {{book.listPrice. currency}} </h2>
                <h2 v-bind:pageCount="checkPages" > Book Number of pages: {{book.pageCount}} , {{pageCount}} </h2>
                <h2 v-bind:publishDate="checkPublishDate"> Book published Date: {{book.publishedDate}} , {{publishedDate}} </h2>
                <img :src="book.thumbnail"/>
                <img v-if="isOnSale" src=" https://media0.giphy.com/media/3o84TVleroFo3DvGMw/giphy.gif?cid=790b76115d07c100675a30784d760d42&rid=giphy.gif"  class="on-sale" >
                </div>
                 
                
            </div>
        <book-review @bookReview="getReview"></book-review>
        <book-show-review v-if="bookReviews" :reviews="bookReviews" @currReviewId="deleteCurrReview"  > </book-show-review>
        
            <router-link to="/book">Back</router-link>
        </section>
    `,
    name: 'detailsCmp',
    data() {
        return {
            book: null,
            pageCount: '',
            publishedDate: '',
            isOnSale: false,
            descToShow: '',
            descNotShow: '',
            isDescLong: false,
            showMore: false,
            bookReviews: [],


        }
    },



    methods: {
        changeShow() {
            this.showMore = !this.showMore;
        },
        getReview(review) {
            bookService.saveReview(review, this.book.id);
        },
        deleteCurrReview(currReviewId) {
            this.bookReviews.splice(currReviewId, 1);
            bookService.deleteReview(currReviewId, this.book.id);
        },

    },
    computed: {
        checkPages() {
            if (this.book.pageCount > 500) this.pageCount = 'Long reading';
            else if (this.book.pageCount > 200 && this.book.pageCount < 500) this.pageCount = 'Decent Reading';
            else if (this.book.pageCount < 100) this.pageCount = 'Light Reading';
        },
        checkPublishDate() {
            const currYear = new Date().getFullYear();
            if (currYear - this.book.publishedDate > 10) this.publishedDate = 'Veteran Book';
            if (currYear - this.book.publishedDate <= 1) this.publishedDate = 'New Book';
        },
        checkPrice() {
            if (this.book.listPrice.amount < 20) return 'green';
            else if (this.book.listPrice.amount > 150) return 'red';
        },
        checkDescLength() {
            if (this.book.description.length >= 100) {
                this.descToShow = this.book.description.substr(0, 100);
                this.descNotShow = this.book.description.substr(100, this.book.description.length)
                this.isDescLong = true;
            }
        },



    },


    components: {
        bookReadMore,
        bookReview,
        bookShowReview,
    },

    created() {
        const bookId = this.$route.params.theBookId;
        bookService.getById(bookId)
            .then(book => {
                this.book = book
                if (this.book.listPrice.isOnSale === false) this.isOnSale = false;
                else this.isOnSale = true;
            })
        bookService.getReviews(bookId)
            .then(review => this.bookReviews = review);

    },


}