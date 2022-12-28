const jwt= require('jsonwebtoken')
const authenticate = async function(req, res, next) {
    let headder=req.headers["x-auth-token"];
    if(!headder) return res.send({satus:false,msg:"important hedder"})
    //let tokenvarification=  await jwt.verify(headder,"it's a singnature")
    next()
}


const authorise =async function(req, res, next) {
    let userid=req.params.userId;
    let token=req.headers["x-auth-token"];
    let validToken=await jwt.verify(token,"it's a secreat br");
    if(validToken.user!=userid) return res.send ({status:false,msg:"invalid user"})
    next()
}
module.exports.md1=authenticate;
module.exports.md2=authorise;