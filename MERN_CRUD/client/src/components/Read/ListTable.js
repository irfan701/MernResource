import React, {useEffect, useState} from 'react';
import {Delete, Read} from "../../api/CrudServices";
import {SuccessToast, ErrorToast, isEmpty} from "../../helper/ValidationHelper";


const ListTable = () => {

    let [dataList, setDataList] = useState([]);

    const cdm=()=>{
        Read().then(result => {
            setDataList(result)
        })
    }

    useEffect(() => {
      cdm()
    }, [])



    const DeleteItem = (id) => {
        console.log(id)
        Delete(id).then((result) => {
            if (result === true) {
                SuccessToast('Data Delete Success')
                cdm()
            } else {
                ErrorToast('Request Fail Try Again')
            }
        })
    }

    const UpdateItem = () => {


    }


    let myList = dataList.map((item, i) => {

        return (
            <tr>
                <td>{item.product_name}</td>
                <td>{item.product_code}</td>
                <td>
                    <img src={item.img} alt="" className="list-img"/>

                </td>
                <td>{item.unit_price}</td>
                <td>{item.qty}</td>
                <td>{item.total_price}</td>
                <td>
                    <button onClick={UpdateItem} className="btn btn-primary mx-1">Update</button>
                </td>
                <td>
                    <button onClick={DeleteItem.bind(this, item._id)} className="btn btn-danger mx-1">Delete</button>
                </td>
            </tr>
        )

    })
    if (dataList.length > 0) {
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

                            <tbody>
                            {myList}
                            </tbody>
                        </table>
                    </div>
                </div>

            </>
        );
    } else {
        return <div>

        </div>
    }
};

export default ListTable;