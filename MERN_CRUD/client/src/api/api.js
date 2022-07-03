import axios from "axios";

export const Create = (product_name, product_code, img, unit_price, qty, total_price) => {
    let URL = '/api/v1/CreateData'
    let PostBody = {
        "product_name": product_name,
        "product_code": product_code,
        "img": img,
        "unit_price": unit_price,
        "qty": qty,
        "total_price": total_price
    }
    return axios.post(URL, PostBody).then((res) => {
        if (res.status === 200) {
            return true
        } else {
            return false
        }

    }).catch((err) => {
        console.log(err)
        return false

    })
};

export default function Read() {
    let URL = '/api/v1/ReadData'
    return axios.get(URL).then((res) => {

        if (res.status === 200) {
            return res.data['data']
        } else {
            return false
        }
    }).catch((err) => {
        console.log(err)
        return false
    })
}

export function Update(id) {
    let URL = '/api/v1/UpdateData' + id
    let PostBody = {
        "product_name": product_name,
        "product_code": product_code,
        "img": img,
        "unit_price": unit_price,
        "qty": qty,
        "total_price": total_price
    }
    return axios.post(URL, PostBody).then((res) => {
        if (res.status === 200) {
            return true
        } else {
            return false
        }

    }).catch((err) => {
        console.log(err)
        return false

    })
}

export function Delete(id) {
    let URL = '/api/v1/DeleteData' + id
    return axios.get(URL).then((res) => {
        if (res.status === 200) {
            return true
        } else {
            return false
        }

    }).catch((err) => {
        console.log(err)
        return false
    })
}
