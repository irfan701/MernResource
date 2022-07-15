import * as Swal from "sweetalert2";
import store from "../../redux/store/store";
import {RemoveTodo} from "../../redux/state/todo/todoSlice";

export function TodoDeleteAlert(i) {

    Swal.fire({
        title: 'Do you want to delete?',
        showCancelButton: true,
        confirmButtonText: 'Delete',
    }).then((result) => {
        if (result.isConfirmed) {
            store.dispatch(RemoveTodo(i))
            Swal.fire('Deleted!', '', 'success')
        }
    })
}