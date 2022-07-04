import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class ValidationHelper{

    isEmpty(value){

        if (value.length===0){
            return true
        }else{
            return false
        }

    }

    SuccessToast(msg){
        toast.success(msg, {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

    }

    ErrorToast(msg){

        toast.error(msg, {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }




}
export const {isEmpty,SuccessToast,ErrorToast}=new ValidationHelper()


