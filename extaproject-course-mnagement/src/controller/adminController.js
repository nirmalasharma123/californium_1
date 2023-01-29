const courseModel=require("../model/courseModel");
const validator=require("../validator/validator");
const validate=require("validator")

const creatCourse=async function(req,res){
    
    try{
    if(Object.keys(req.body).length==0) return res.status(400).send({status:false,message:"please provide details in request body"})
     let data=req.body;
     let{title, description, videoUrl, topics , duration, category}=data;

    if(!title||title=="") return res.status(400).send({status:false,message:"please provide title"});
    if(typeof title !="string") return res.status(400).send({status:false,message:"please provide name in  tile"});
    if(!validate.isAlpha(title)) return res.status(400).send({status:false,message:"please provide valid title"}); 
    let findOneTitle=await courseModel.findOne({title:title});
    if(findOneTitle) return res.status(400).send({status:false,message:"title is already presnt"})


    if(!description||description=="") return res.status(400).send({status:false,message:"please provide description"});
    if(typeof description !="string") return res.status(400).send({status:false,message:"please provide description in string"});
    
    if(!videoUrl||videoUrl=="") return res.status(400).send({status:false,message:"please provide url"});
    if(typeof videoUrl !="string") return res.status(400).send({status:false,message:"please provide url in string"});
    //if(findOneTitle.vedioUrl==videoUrl) return res.status(400).send({status:false,message:"vedioUrl is already presnt"})

    if(!validate.isURL(videoUrl)) return res.status(400).send({status:false,message:"please provide proper url"});

    if(!topics||topics=="") return res.status(400).send({status:false,message:"please provide topics"});
    //if(typeof  topics!="string") return res.status(400).send({status:false,message:"please provide topics in string"});
    //req.body.topics=topics.trim().split(",");



    if(!duration||duration=="") return res.status(400).send({status:false,message:"please provide duration"});
    if(typeof  duration!="string") return res.status(400).send({status:false,message:"please provide duration in string"});

    if(!category||category=="") return res.status(400).send({status:false,message:"please provide category"});
    if(typeof  category!="string") return res.status(400).send({status:false,message:"please provide category in  tile"});
    if(!validator.isValidateName(category)) return res.status(400).send({status:false,message:"please provide  valid category"});


    let creatCourse=  await courseModel.create(data);

    return res.status(201).send({status:true,data:creatCourse})}
    catch(error){
        return res.status(500).send({status:false,message:error.message})
    }
};

const updateCourse=async function(rq,res){
let



}



module.exports={creatCourse}
//title, description, video Url, topics array, duration, category,