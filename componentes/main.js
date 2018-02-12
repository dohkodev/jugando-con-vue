Vue.component('videoclub',{
    props: ['image','title'],
    template: ``
})

const app = new Vue({
    el: '#app',
    data: { 
        movies: [
            {title:'Matrix', img: 'https://lh3.googleusercontent.com/TQp6Lb2rArWLcWaUkXyBfecjm8DWrk00rbpU_Z5h3Xe6RNC2Oc3QfHCTi96tud31urnYUeK027Ft' },
            {title:'5to Elemento', img: 'https://imgpv.com/images/2014/04/04/elquintoelemento19971.jpg' },
            {title:'Alien Isolation', img: 'http://deeragaming.net/wp-content/uploads/2014/03/alien-isolation-wallpaper.jpg' }
        ]
    },
    template: `
    <div>
        <videoclub
            v-for="(movie, index) in movies"
            :key="index"
            :title="movie.title"
            :image="movie.img"
        ></videoclub>
    </div>
    `
})