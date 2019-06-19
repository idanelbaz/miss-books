function getGoogleBook(value = '') {
    var prmRes = axios.get(`https://www.googleapis.com/books/v1/volumes?printType=books&q=${value}&key=AIzaSyCrVxVPta_TOsFatlYL7vOx_stAJNlV8ws`)
    var prmAns = prmRes.then((res) => {
        return res.data;
    })
    return prmAns;
}



export default {
    getGoogleBook
}