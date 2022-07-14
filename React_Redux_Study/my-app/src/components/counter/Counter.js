import React, {useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, setCustom} from "../../redux/state/counter/counterSlice";

const Counter = () => {
    const myNumber=useRef()
    const count=useSelector((state)=>state.counter.value)
    const dispatch=useDispatch()


    return (
        <>

            <div className='card'>
                <div className="card-header bg-warning">
                    <h4>My Counter App</h4>
                </div>
                <div className="card-body">
                        <h2>{count}</h2>
                    <div className='my-4'>
                        <button onClick={()=>dispatch(increment())} className='btn btn-success'>Increase</button>
                        <button onClick={()=>dispatch(decrement())} className='mx-2 btn btn-danger'>Decrease</button>

                    </div>
                    
                    <br/>

                    <input ref={myNumber} type="number" className="w-50 form-control my-2"/>
                    <button onClick={()=>dispatch(setCustom(myNumber.current.value))} className='w-50 my-2 btn btn-danger'>Set Custom</button>

                </div>
            </div>
        </>
    );
};

export default Counter;