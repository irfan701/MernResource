const jwt = require('jsonwebtoken');

const UsersModel = require('./../models/UsersModel')

//Registration
exports.registration = (req, res) => {
    let reqBody = req.body
    UsersModel.create(reqBody, (err, data) => {
        if (err) {
            res.status(400).json({status: "Fail", data: err})
        } else {
            res.status(200).json({status: "Success", data: data})
        }
    })

}

exports.login = (req, res) => {
    let reqBody = req.body;
    UsersModel.aggregate([
        {$match: reqBody},
        {$project: {_id: 0, first_name: 1, last_name: 1, email: 1, mobile: 1,photo:1}}
    ], (err, data) => {
        if (err) {
            res.status(400).json({status: "Fail", data: err})
        } else {

            if(data.length>0){
                let payload={exp: Math.floor(Date.now() / 1000) + (60 * 60), data: data[0]['email'] }
                let token=jwt.sign(payload, 'SecretKey12345789')
                res.status(200).json({status: "Success",token:token, data: data[0]})
            }else{
                res.status(401).json({status: "Unauthorized"})
            }



        }
    })
}