'use strict'


export default {
    template: `
    <section class="book-filter">
    <p class="price">Book price </p>
    <input @input="emitFilter" v-model = "filterBy.currPrice" value= "125" type="range" name="points" min="fromPrice" max="250">
    <input class="search-name" type="text" v-model="filterBy.txt" @input="emitFilter"  placeholder="search by name" autofocus/>
    <p class="show-num" name="points">{{filterBy.currPrice}}</p>
        </section>
    `,
    data() {
        return {
            filterBy: {
                txt: '',
                currPrice: 125,
            },
            fromPrice: 0,
            toPrice: Infinity,


        }

    },

    methods: {
        emitFilter() {
            this.$emit('set-filter', this.filterBy);
        }
    },
    computed: {

    },
    components: {

    },
    created() {

    }

}