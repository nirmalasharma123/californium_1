
 const mid1= function ( req, res, next) {
 let headder=req.headers

   if(!(headder["isfreeappuser"])){
   return  res.send("error 'isFreeAppUser' is not present ")
   }
   req.body.isFreeAppUser = headder["isfreeappuser"]
   next()
}
module.exports.midw=mid1

// const isHeaderChecker = function(req, res, next) {
//     if(req.headers["isfreeappuser"]){
//         req.body.isFreeAppUser = req.headers["isfreeappuser"]
//        next()
//     }else{
//         res.send("The request is missing a mandatory header") 
//     }
// }

// module.exports.isHeaderChecker =isHeaderChecker



