import React, {useEffect, useState} from 'react';
import {Read} from "../../api/CrudServices";


const ListTable = () => {

    let [dataList,setDataList]=useState([]);

    useEffect(()=>{
        Read().then(result =>{
            setDataList(result)
            console.log(result)
        })
    },[])


    return (
        <>
            <div className="container">
                <div className="row">
                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Product Code</th>
                            <th>Img</th>
                            <th>Unit Price</th>
                            <th>Qty</th>
                            <th>Total Price</th>
                        </tr>
                        </thead>
                    </table>
                </div>
            </div>

        </>
    );
};

export default ListTable;