import React, {useState} from 'react';

const HomeBanner = (props) => {

    const[color,setColor]=useState('RED');

    const NewColor=()=>{
        setColor("BLUE")
    }

    return (
        <div>
            <p>PROPS LESSON</p>
            <h2>Home Banner</h2>
            <h3>{props.title}</h3>
            <h4>{props.subtitle}</h4>

            <hr/>

            <p>{props.jsonObj.name}</p>
            <p>{props.jsonObj.age}</p>


            <hr/>

        <p>STATE LESSON</p>
            <p>{color}</p>
            <button onClick={NewColor}>Change Color</button>
        </div>
    );
};

export default HomeBanner;