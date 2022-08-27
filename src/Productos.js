import { Component } from "react";
import './productos.css'

const lista = [
    {
        id: 1,
        descripcion: "Jarron las Americas N:5",
        precio: 200000,
    },
    {
        id: 2,
        descripcion: "Escultura doble Yo N.3",
        precio: 300,
    },
    {
        id: 3,
        descripcion: "Morral Quinchana N.2",
        precio: 400,
  
    }
];

class Productos extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lista,
        };
        this.Eliminar = this.Eliminar.bind(this);
    }
    Eliminar(id){
        const isNotId = item => item.id !== id;
        const listaActualizada = this.state.lista.filter(isNotId);
        this.setState({lista:listaActualizada});
    }
    render() {
        return (
            <div>
                <h2 className="main-title">Calzado en La Nube</h2>
                <div className="content-style">
                    <table className="table-style">
                        <tr> 
                        <th>Productos</th>
                        <th>Precio</th>
                        <th>Eliminar</th>
                        </tr>
                        {
                            this.state.lista.map(item =>
                               /*  <div key={item.id}> */
                                    <tr>
                                    <td>{item.descripcion}</td>
                                    <td>{item.precio}</td>
                                    <td><img src="delete.png" alt="Delete" className="cursor-style" onClick={() => this.Eliminar(item.id)}></img></td>
                                </tr>
                            /*     </div> *//*oe*/
                                )
                        }
                    </table>
                </div>
            </div>
        )
    }
}

export default Productos;