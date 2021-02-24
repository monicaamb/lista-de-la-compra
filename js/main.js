
    new Vue({
    el: '#app',
    data: {
        productos: []
},
    mounted: function() {

},
    methods: {
        obtenerProductos: function() {
            fetch(URL_, {
            headers: {
        }
        })
            .then(function(response) {
            return response.json();
        })
            .then((json) => {
                this.pedidos = json.;
            }
}
    }

