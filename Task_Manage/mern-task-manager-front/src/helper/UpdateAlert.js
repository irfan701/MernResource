import Swal from "sweetalert2";
import {UpdateStatusRequest} from "../APIRequest/APIRequest";
;

export function UpdateToDO(id,status){
    return Swal.fire({
        title: 'Change Status',
        input: 'select',
        inputOptions: {new: 'New', completed: 'Completed', progress: 'Progress', canceled: 'Canceled'},
        inputValue:status,
    }).then((result)=>{
        return UpdateStatusRequest(id, result.value).then((res)=>{
            return res;
        })
    })
}