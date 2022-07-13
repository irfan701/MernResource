import React from 'react';
import {useSelector} from "react-redux";

const Counter = () => {

    const count=useSelector((state)=>state.counter.value)

    return (
        <>

            <div className='card'>
                <div className="card-header bg-warning">
                    <h4>My Counter App</h4>
                </div>
                <div className="card-body">
                        <h2>{count}</h2>
                    <div className='my-4'>
                        <button className='btn btn-success'>Increase</button>
                        <button className='mx-2 btn btn-danger'>Decrease</button>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Counter;