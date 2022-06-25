import React, {useEffect, useState} from 'react';
import axios from "axios";

const Listing = () => {
    const [todo, SetTodo] = useState([])

    useEffect(() => {

        axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
            SetTodo(response.data)
        }).catch((error) => {

        })
    }, [])

    const DeleteEvent = (id) => {
        alert(id)
    }
    const EditEvent = (id) => {
        alert(id)
    }
    const DetailsEvent = (id) => {
        alert(id)
    }

    const myList = todo.map((child, index) => {
        return (
            <tr>
                <td>{child['userId']}</td>
                <td>{child['id']}</td>
                <td>{child['title']}</td>
                <td>
                    <button onClick={EditEvent.bind(this, child.id)} className="btn btn-secondary">Edit</button>
                    <button onClick={DeleteEvent.bind(this, child.id)} className="btn btn-danger">Delete</button>
                    <button onClick={DetailsEvent.bind(this, child.id)} className="btn btn-primary">Details</button>
                </td>

            </tr>
        );

    });

    return (
        <div>
            <h2>Listing</h2>
            <div className="container">
                <div className="row">
                    <table className="table table-bordered">

                        <tr>
                            <th>User Id</th>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Action</th>
                        </tr>
                        <tbody>
                        {myList}
                        </tbody>

                    </table>
                </div>
            </div>


        </div>
    );
};

export default Listing;