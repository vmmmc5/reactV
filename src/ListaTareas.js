import React, {Component} from "react";

//construir un arreglo generar un estado de dicho arreglo y llamarlo desde el constructor.
//el arreglo tendra dos atributos un atributo llamado acción y un atributo llamado 
//done.
class ListaTareas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "Victor",
            todoItems: [{
                accion: "he he epa colombia",
                done: false,
            },
            {
                accion: "Comer",
                done: false,
            }],
            newItemText: "",
        }
    }
    UpdateNewTextValue = (event) => {
        this.setState({newItemText: event.target.value});
    }
    CreateNewTodo = () =>{
        if (!this.state.todoItems
            .find(item => item.accion === this.state.newItemText)) {
                this.setState({
                    todoItems: [...this.state.todoItems,{
                        accion: this.state.newItemText, 
                        done: false
                    }],
                });
        }
    }
    ToggleTodo = (todo) => this.setState({todoItems:
                    this.state.todoItems.map(item => item.accion === todo.accion
                        ? {...item, done: !item.done} : item) });
    todoTableRows = () => this.state.todoItems.map(item =>
                    <tr key={item.accion}>
                        <td>{item.accion}</td>
                        <td>
                            <input type="checkbox" checked={item.done} onChange={ () => this.ToggleTodo(item)}></input>
                        </td>
                    </tr>
        );
    render(){
        return(
          <div >
            <h4 className="bg-primary text-white text-center p-2">Lista Tareas de {this.state.username} ._.   {this.state.todoItems.filter(t=> !t.done).length} Cosa(s) por Hacer </h4>
            <div className="container-fluid">
                <div className="my-1">
                    <input className="form-control" value={this.state.newItemText} onChange={ this.UpdateNewTextValue }></input>
                    <button className="btn btn-primary mt-1" onClick={this.CreateNewTodo}>ADD</button>
                </div>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>descripcion</th>
                        </tr>
                    </thead>
                    <tbody>{this.todoTableRows() }</tbody>
                </table>
            </div>
          </div>
        );
      }

}
export default ListaTareas;