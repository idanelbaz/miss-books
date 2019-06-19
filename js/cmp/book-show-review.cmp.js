import { bookService } from '../services/book.service.js'
import eventBus from '../pages/event-bus.js';

export default {
    template: `
   
    <section class="book-show-review">
    <h1> Past Reviews </h1>
        <ul  v-for= "currReview in reviews">
                <li>Reviewer name:  {{currReview.userName}} </li>
                <li>Rate:  {{currReview.rate}} </li>
                <li>Date of create:  {{currReview.date}} </li>
                <li>The full review:   {{currReview.txtReview}} </li>
                <button @click="deleteReview(currReview.id)">Delete Review</button>
        </ul>
        </section>
    `,
    data() {
        return {}

    },
    props: ['reviews'],
    methods: {
        deleteReview(reviewId) {
            eventBus.$emit('show-msg', { txt: 'Review Deleted', type: 'delete' });
            let currReviewId = this.reviews.findIndex(review => {
                return review.id === reviewId;
            })
            this.$emit('currReviewId', currReviewId);



        }
    },
    computed: {

    },
    components: {

    },
    created() {

    }

}