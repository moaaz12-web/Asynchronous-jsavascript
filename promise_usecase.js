const API_KEY = '?&api_key=f536ce9a181c3ab1e48ec40c2747b4cd'
const BASE_URL = 'https://api.themoviedb.org/3'
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;

const SEARCH_URL = BASE_URL + '/search/movie?' + API_KEY;

const IMG_URL = 'https://image.tmdb.org/t/p/w500';


// !API_URL='https://api.themoviedb.org/3/movie/popular?&api_key=f536ce9a181c3ab1e48ec40c2747b4cd&language=en-US&page=1'

// !NOTE
function getMovies(url) {
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results);
    })
}

function getMovies(url) {
    fetch(url).then((res)=>{
        return res.json()
    }).then((data)=>{
        console.log(data.results)
    })
}
// !The above functions are both equivalent. We just used 
//! a shorter arrow function at the upper one and a longer one at the bottom one.

// !NOTE END




// async function getMovies(url) {
//     let response = await fetch(url);
//     let res = response.json()
//     res.then(data => {
//         showMovies(data.results)
//         console.log(data.results)
//     })
// }

getMovies(API_URL)


