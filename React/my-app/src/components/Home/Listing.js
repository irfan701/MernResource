import React, {useEffect, useState} from 'react';
import axios from "axios";

const Listing = () => {
    const[todo, SetTodo] = useState([])

    useEffect(() => {

        axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
            SetTodo(response.data)
        }).catch((error) => {

        })
    },[])

    const myList = todo.map((child,index)=>{
        return (
            <tr>
                <td>{child['userId']}</td>
                <td>{child['id']}</td>
                <td>{child['title']}</td>
                <td>{child['completed']}</td>

            </tr>
            );

    });

    return (
        <div>
            <h2>Listing</h2>
            <table>
                {myList}
            </table>

        </div>
    );
};

export default Listing;