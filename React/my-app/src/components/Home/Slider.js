import React, {Component} from 'react';
import axios from "axios";

class Slider extends Component {

    constructor() {
        super();
        this.state={
            color:"RED",
            todo:[]

        }
    }

    MyClick=()=>{
      let a=this.MyText.value;
      alert(a)
    }

    componentDidMount() {

        axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
             this.setState({todo:response.data})
        }).catch((error)=>{

        })
    }
    ActionBtn=(id)=>{
        alert(id)
    }

    render() {

        const myList=this.state.todo.map((item,index)=>{
            return (
                <tr>
                    <td>{item.userId}</td>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>
                        <button onClick={this.ActionBtn.bind(this,item.id)}>DELETE</button>
                    </td>

                </tr>

            )
        })

        return (
            <div className="container">
                <h4>Chapter 1: this.props</h4>

                <p>{this.props.title}</p>
                <p>{this.props.subtitle}</p>
                <hr/>
                <h4>Chatpter 2: this.state</h4>
                {this.state.color}
                <button onClick={()=>this.setState({color:"blue"})}>BLUE</button>

                <hr/>

                <h4>Chapter 3: ref input</h4>
                <input ref={(input)=>{this.MyText=input}} type="text"/>
                <button onClick={this.MyClick}>Click ME</button>

                <h4>Chapter 4: CDM</h4>

                <table className="table table-bordered">
                    <tbody>
                        {myList}
                    </tbody>
                </table>

            </div>
        );
    }
}

export default Slider;