import React, {useEffect, useRef, useState} from 'react';
import axios from "axios";


const HomeBanner = (props) => {

    const [color, setColor] = useState('RED');

    const NewColor = () => {
        setColor("BLUE")
    }


    const [todo, setTodo] = useState('')

    useEffect(() => {
        //API //COMPONENT LOAD HOYLE AUTO CALL HOBEY

        // alert("AUTO CALL")
        axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {

            // alert(response.status)
            // alert(response.data)
            setTimeout(() => {
                setTodo(response.data)
            }, 3000)

        }).catch((error) => {

        })

    });


    let UserName = useRef()
    let Password = useRef();

    const SubmitForm = () => {
        let a = UserName.current.value;
        let b = Password.current.value;

        let c = document.getElementById('user').value;

        alert(a)
        alert(b)
        alert(c)


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

            <hr/>

            <p>useRef (DOM MANIPULATION)</p>

            <input ref={UserName} id="user" type="text" placeholder="User Name"/>
            <input ref={Password} type="text" placeholder="Password"/>
            <button onClick={SubmitForm}>Submit</button>


            <hr/>

            <p>useEffect(This Method works,when First Time Page is Mount/Load)</p>
            <p>{JSON.stringify(todo)}</p>

        </div>

    );
};

export default HomeBanner;