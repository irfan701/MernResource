import React, {useRef} from 'react';
import {SuccessToast,ErrorToast, isEmpty} from "../../helper/ValidationHelper";
import {Create} from "../../api/CrudServices";



const CreateForm = () => {

    let product_name, product_code, img, unit_price, qty, total_price = useRef()

    const SaveData = () => {
        let Product_Name = product_name.value;
        let Product_Code = product_code.value;
        let Product_Img = img.value;
        let Unit_Price = unit_price.value;
        let Product_Qty = qty.value;
        let Total_Price = total_price.value;

        //alert(Product_Name)

        if(isEmpty(Product_Name)) ErrorToast("Product Name Required")
        else if(isEmpty(Product_Code)) ErrorToast("Product Code Required")
        else if(isEmpty(Product_Img))ErrorToast("Product Image Required")
        else if(isEmpty(Unit_Price))ErrorToast("Product Unit Price Required")
        else if(isEmpty(Product_Qty))ErrorToast("Product Qty Required")
        else if(isEmpty(Total_Price))ErrorToast("Product Price Required")
        else{

            Create(Product_Name, Product_Code, Product_Img, Unit_Price, Product_Qty, Total_Price).then (result =>{
                    if(result===true){
                       SuccessToast("Data Save Success")
                    }else{
                        ErrorToast("Request Failed Try Again!")
                    }
                })
        }

    }

    return (
        <>
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
                        <button onClick={SaveData} className="btn btn-success w-100">Save</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreateForm;