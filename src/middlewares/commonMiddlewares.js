const moment=require('moment')
const mid1= function ( req, res, next) {
    let currentdate=moment().format("YYYY-MM-DD HH:mm:ss")
    let ip=req.ip
    let url=req.path
console.log(`current date is ${currentdate}, ip is ${ip},${url}`);
    next()
}
module.exports.mid1= mid1

