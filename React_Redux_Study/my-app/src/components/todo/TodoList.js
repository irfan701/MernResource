import React from 'react';
import {useSelector} from "react-redux";

const TodoList = () => {

    const todoItems=useSelector((state)=>state.todo.value)

    return (
        <>
         <div className="container-fluid">
             <div className="row">
                 <div className="col-12">
                     <table className='table table-striped table-responsive'>
                         <thead>
                         <tr>
                             <th>No</th>
                             <th>Task Name</th>
                             <th>Edit</th>
                             <th>Remove</th>

                         </tr>

                         </thead>
                         <tbody>

                         {

                             todoItems.map((item,i)=>{
                                 return (
                                     <tr key={i.toString()}>
                                         <td>{i+1}</td>
                                         <td>{item}</td>
                                         <td><button className='btn btn-sm btn-primary'>Edit</button></td>
                                         <td><button className='btn btn-sm btn-danger'>Remove</button></td>

                                     </tr>
                                 )
                             })
                         }


                         </tbody>
                     </table>
                 </div>
             </div>
         </div>
        </>
    );
};

export default TodoList;