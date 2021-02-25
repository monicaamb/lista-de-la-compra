const URL_API_PRODUCTOS = 'https://api.airtable.com/v0/appT1GU1S46Jit5D1/Productos?maxRecords=3&view=Grid%20view';
const URL_API_BORRAR = 'https://api.airtable.com/v0/appT1GU1S46Jit5D1/Productos?records[]=recDjqX6iQ38tU7u1';
const URL_API_UPDATE = 'https://api.airtable.com/v0/appT1GU1S46Jit5D1/Productos';

const AUTHORIZATION = 'Bearer keyC6SNxSpXpc852b';



new Vue({
    el: '#app',
    data: {
        productos: [],
        productoActualizar: []
    },
    mounted: function () {
        this.obtenerProductos();
    },
    methods: {
        obtenerProductos: function () {
            fetch(URL_API_PRODUCTOS, {
                headers: {
                    'Authorization': AUTHORIZATION
                }
            })
                .then(function (response) {
                    return response.json();
                })
                .then((json) => {
                    this.productos = json.records;
                });

        },
        borrarProducto: function (id) {
            //Borramos del API
            fetch(URL_API_BORRAR.concat(id), {
                headers: {
                    'Authorization': AUTHORIZATION
                },
                method: 'DELETE'
            });
            //Borramos del local
            this.productos = this.productos.filter(producto => {
                return producto.id !== id
            });
        },
        actualizarAdquiridoEnAPI: function (id, checked) {
            //Actualizamos en API
            fetch(URL_API_UPDATE, {
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': AUTHORIZATION
                },
                method: 'PATCH',
                body: JSON.stringify({
                    "records": [
                        {
                            "id": id,
                            "fields": {
                                "Adquirido": checked
                            }
                        }
                    ]
                })
            })
            //Actualizamos en Local
            this.productos = this.productos.map((producto) => {
                if (producto.id === id) {
                let miProducto = producto;
                miproducto.fields.Adquirido = checked;
                } else {
                    return producto;
                }
            });
        }
    }
})
