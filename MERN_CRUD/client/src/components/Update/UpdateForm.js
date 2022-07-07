import React, {useEffect, useRef} from 'react';
import FullScreenLoader from "../Common/FullScreenLoader";
import {ErrorToast, isEmpty, SuccessToast} from "../../helper/ValidationHelper";
import {Create,ReadById} from "../../api/CrudServices";


const UpdateForm = (props) => {


    let product_name, product_code, img, unit_price, qty, total_price,Loader = useRef()

    useEffect(()=>{
        ReadById(props.id).then((result)=>{
            alert(JSON.stringify(result))
        })
    });


    const UpdateData = () => {
        let Product_Name = product_name.value;
        let Product_Code = product_code.value;
        let Product_Img = img.value;
        let Unit_Price = unit_price.value;
        let Product_Qty = qty.value;
        let Total_Price = total_price.value;

        //alert(Product_Name)

        if (isEmpty(Product_Name)) ErrorToast("Product Name Required")
        else if (isEmpty(Product_Code)) ErrorToast("Product Code Required")
        else if (isEmpty(Product_Img)) ErrorToast("Product Image Required")
        else if (isEmpty(Unit_Price)) ErrorToast("Product Unit Price Required")
        else if (isEmpty(Product_Qty)) ErrorToast("Product Qty Required")
        else if (isEmpty(Total_Price)) ErrorToast("Product Price Required")
        else {
            Loader.classList.remove('d-none')
            Create(Product_Name, Product_Code, Product_Img, Unit_Price, Product_Qty, Total_Price).then(result => {
                Loader.classList.add('d-none')
                if (result === true) {
                    SuccessToast("Data Save Success")
                    product_name.value = '';
                    product_code.value = '';
                    img.value = '';
                    unit_price.value = '';
                    qty.value = '';
                    total_price.value = '';


                } else {
                    ErrorToast("Request Failed Try Again!")
                }
            })
        }

    }

    return (
    <>
        {/*//     <h2>{props.id}</h2>*/}
        <div className="container">
            <div className="row">

                <div className="col-md-4 p-2">
                    <label>Product Name</label>
                    <input type="text" ref={(input) => product_name = input}
                           className="form-control form-control-sm"/>
                </div>

                <div className="col-md-4 p-2">
                    <label>Product Code</label>
                    <input type="text" ref={(input) => product_code = input}
                           className="form-control form-control-sm"/>
                </div>

                <div className="col-md-4 p-2">
                    <label>IMG</label>
                    <input type="text" ref={(input) => img = input} className="form-control form-control-sm"/>
                </div>

                <div className="col-md-4 p-2">
                    <label>Unit Price</label>
                    <input type="text" ref={(input) => unit_price = input}
                           className="form-control form-control-sm"/>
                </div>

                <div className="col-md-4 p-2">
                    <label>Qty</label>
                    <input type="text" ref={(input) => qty = input} className="form-control form-control-sm"/>
                </div>

                <div className="col-md-4 p-2">
                    <label>Total Price</label>
                    <input type="text" ref={(input) => total_price = input}
                           className="form-control form-control-sm"/>
                </div>


            </div>
            <br/>
            <div className="row">
                <div className="col-md-4 p-2">
                    <button onClick={UpdateData} className="btn btn-success w-100">Save</button>
                </div>
            </div>
        </div>



        <div className='d-none' ref={(div) =>Loader=div}>
            <FullScreenLoader/>
        </div>
    </>

    );
};

export default UpdateForm;