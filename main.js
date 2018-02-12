const app = new Vue({
    el: '#app',
    template: '#ejemplo',
    data : {
        cursos: [
            {nombre: 'jose', apellido: 'perez'},
            {nombre: 'manuel', apellido: 'gonzalez'},
            {nombre: 'esteban', apellido: 'estrada'}
        ],
        message: 'Hola Mundo',
        img: "https://vuejs.org/images/logo.png",
        mostrar: true
    },
    methods: {
        toggleMostrar: function (){
            this.mostrar = !this.mostrar
        }
    }
})