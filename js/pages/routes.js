import homepage from './home-page.cmp.js';
import bookApp from './book-app.js';
import about from './about.cmp.js';
import bookDetails from './book-details.cmp.js';
import addBook from '../pages/add-book.cmp.js';


export default [
    { path: '/', component: homepage },
    { path: '/book', component: bookApp },
    { path: '/about', component: about },
    { path: '/book/:theBookId', component: bookDetails },
    { path: '/addBook', component: addBook },
]