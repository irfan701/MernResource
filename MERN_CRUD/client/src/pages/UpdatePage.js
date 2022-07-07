import React from 'react';
import UpdateForm from "../components/Update/UpdateForm";
import {useParams} from "react-router-dom";

const UpdatePage = () => {

    let params=useParams()
    //alert(JSON.stringify(params))
    return (
        <>
            <UpdateForm id={params['id']}/>
        </>
    );
};

export default UpdatePage;