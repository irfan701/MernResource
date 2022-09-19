import axios from "axios";
import {ErrorToast, SuccessToast} from "../helper/FormHelper";
import store from "../redux/store/store";
import {HideLoader, ShowLoader} from "../redux/state-slice/settings-slice";
import {getToken, setToken, setUserDetails} from "../helper/SessionHelper";
import {SetCanceledTask, SetCompletedTask, SetNewTask, SetProgressTask} from "../redux/state-slice/task-slice";
import {SetSummary} from "../redux/state-slice/summary-slice";
import {SetProfile} from "../redux/state-slice/profile-slice";

const BaseUrl="https://mern-task-manager-irfan.herokuapp.com/api/v1";

const AxiosHeader={headers:{"token":getToken()}}

export function  NewTaskRequest(title,description) {
    store.dispatch(ShowLoader())
    let URL=BaseUrl+"/createTask"
    let PostBody={title:title, description:description,status:'new'}

    return axios.post(URL,PostBody,AxiosHeader).then(res=>{
        store.dispatch(HideLoader())
        if (res.status===200){
            SuccessToast('New Task Is Created !')
            return true

        }else{
            ErrorToast('Something Went Wrong !')
            return false
        }
    }).catch(err=>{
        store.dispatch(HideLoader())
        ErrorToast("Something Went Wrong !");
        return false;
    })

}


export function  TaskListByStatus(Status) {
    store.dispatch(ShowLoader())
    let URL=BaseUrl+"/listTaskByStatus/"+Status

    return axios.get(URL,AxiosHeader).then(res=>{
        store.dispatch(HideLoader())
        if (res.status===200){
            if(Status==='new')              store.dispatch(SetNewTask(res.data['data']))
            else if (Status==='completed')  store.dispatch(SetCompletedTask(res.data['data']))
            else if (Status==='canceled')   store.dispatch(SetCanceledTask(res.data['data']))
            else if (Status==='progress')   store.dispatch(SetProgressTask(res.data['data']))

        }else{
            ErrorToast('Something Went Wrong !')
            return false
        }
    }).catch(err=>{
        store.dispatch(HideLoader())
        ErrorToast("Something Went Wrong !");
        return false;
    })

}


export function SummaryRequest() {
    store.dispatch(ShowLoader())
    let URL=BaseUrl+"/taskStatusCount"

    return axios.get(URL,AxiosHeader).then(res=>{
        store.dispatch(HideLoader())
        if (res.status===200){
            store.dispatch(SetSummary(res.data['data']))

        }else{
            ErrorToast('Something Went Wrong !')
        }
    }).catch(err=>{
        store.dispatch(HideLoader())
        ErrorToast("Something Went Wrong !");
    })

}

export function DeleteRequest(id){

    store.dispatch(ShowLoader())
    let URL=BaseUrl+"/deleteTask/"+id;
    return axios.get(URL,AxiosHeader).then((res)=>{

        store.dispatch(HideLoader())
        if(res.status===200){
            SuccessToast("Delete Successful")
            return true;
        }
        else{
            ErrorToast("Something Went Wrong")
            return false;
        }
    }).catch((err)=>{
        ErrorToast("Something Went Wrong")
        store.dispatch(HideLoader())
        return false;
    });
}

export function UpdateStatusRequest(id,status){
    store.dispatch(ShowLoader())
    let URL=BaseUrl+"/updateTaskStatus/"+id+"/"+status;
    return axios.get(URL,AxiosHeader).then((res)=>{
        store.dispatch(HideLoader())
        if(res.status===200){
            SuccessToast("Status Updated")
            return true;
        }
        else{
            ErrorToast("Something Went Wrong")
            return false;
        }
    }).catch((err)=>{
        ErrorToast("Something Went Wrong")
        store.dispatch(HideLoader())
        return false;
    });
}

export function GetProfileDetails(){
    store.dispatch(ShowLoader())
    let URL=BaseUrl+"/profileDetails";
    axios.get(URL,AxiosHeader).then((res)=>{

        store.dispatch(HideLoader())
        if(res.status===200){
            store.dispatch(SetProfile(res.data['data'][0]))
        }
        else{
            ErrorToast("Something Went Wrong")
        }
    }).catch((err)=>{
        ErrorToast("Something Went Wrong")
        store.dispatch(HideLoader())
    });
}


export function ProfileUpdateRequest(email,firstName,lastName,mobile,password,photo){

    store.dispatch(ShowLoader())

    let URL=BaseUrl+"/profileUpdate";

    let PostBody={email:email,firstName:firstName,lastName:lastName,mobile:mobile,password:password,photo:photo}
    let UserDetails={email:email,firstName:firstName,lastName:lastName,mobile:mobile,photo:photo}

    return axios.post(URL,PostBody,AxiosHeader).then((res)=>{
        store.dispatch(HideLoader())
        if(res.status===200){

            SuccessToast("Profile Update Success")
            setUserDetails(UserDetails)

            return true;
        }
        else{
            ErrorToast("Something Went Wrong")
            return  false;
        }
    }).catch((err)=>{
        ErrorToast("Something Went Wrong")
        store.dispatch(HideLoader())
        return false;
    });
}



export function RegistrationRequest(email,firstName,lastName,mobile,password,photo) {
    store.dispatch(ShowLoader())
    let URL=BaseUrl+"/registration"
    let PostBody={email:email, first_name:firstName, last_name:lastName, mobile:mobile, password:password,photo:photo}


   return axios.post(URL,PostBody).then(res=>{
       store.dispatch(HideLoader())
       if (res.status===200){
           if (res.data['status']==='fail'){
               if (res.data['data']['keyPattern']['email']===1){
                   ErrorToast('Email Already Exists !')
                   return false
               }else{
                   ErrorToast('Something Went Wrong !')
                   return false
               }
           }
           else{
               SuccessToast('Registration Success !')
               return true
           }
       }else{
           SuccessToast('Registration Success !')
           return false
       }
    }).catch(err=>{
       store.dispatch(HideLoader())
        ErrorToast("Something Went Wrong !");
        return false;
    })
}
export function LoginRequest(email,password) {
    store.dispatch(ShowLoader())
    let URL=BaseUrl+"/login"
    let PostBody={email:email, password:password}
    return axios.post(URL,PostBody).then(res=>{
        store.dispatch(HideLoader())
        if (res.status===200){
            setToken(res.data['token'])
            setUserDetails(res.data['data'])
            SuccessToast('Login Success !')
            return true

        }else{
            ErrorToast('Invalid Email or Password !')
            return false
        }
    }).catch(err=>{
        store.dispatch(HideLoader())
        ErrorToast("Something Went Wrong !");
        return false;
    })
}