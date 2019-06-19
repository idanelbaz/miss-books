import { utilService } from '../services/util.service.js'
import eventBus from '../pages/event-bus.js';

export default {
    template: `
    <section class="book-review">
        <h1>Write your own Review </h1>
    <form @submit.prevent="saveBookReview">
        <input v-model.trim="review.userName" autofocus type="text" placeholder="Enter full name">
        <select v-model="review.rate">
                <option value="1">Rate</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
        </select>
        <input v-model="review.date"  type="date" placeholder="review.date">
        <textarea v-model="review.txtReview" name="message" rows="10" cols="30"></textarea>
        <button>Save</button>
    </form>
   
        </section>
    `,
    data() {
        return {
            review: {
                userName: 'Books Reader',
                rate: 0,
                date: moment().format('YYYY-MM-DD'),
                txtReview: 'Write your review...',
                id: utilService.makeId(),
            }

        }
    },
    props: ['book'],
    methods: {
        saveBookReview() {
            eventBus.$emit('show-msg', { txt: 'Review Added' });
            const reviewToSend = {...this.review }
            this.$emit('bookReview', reviewToSend);
            this.review.userName = 'Books Reader';
            this.review.rate = 0;
            this.review.date = moment().format('YYYY-MM-DD');
            this.review.txtReview = 'Write your review...';


        }
    },
    computed: {

    },
    components: {

    },
    created() {

    }

}