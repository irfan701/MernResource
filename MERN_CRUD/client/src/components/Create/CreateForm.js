import React, {useRef} from 'react';


const CreateForm = () => {

    let product_name, product_code, img, unit_price, qty, total_price = useRef()

    const SaveData = () => {
        let product_name = product_name.value;
        let product_code = product_code.value;
        let img = img.value;
        let unit_price = unit_price.value;
        let qty = qty.value;
        let total_price = total_price.value;

        console.log(product_name)
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