const urlModel = require("../models/urlModel");
const validUrl = require("valid-url");
const shortId = require("shortid");
const redis = require("redis")
const { promisify } = require("util");
const { parse } = require("path");


const redisClient = redis.createClient(
  15761,
  "redis-15761.c212.ap-south-1-1.ec2.cloud.redislabs.com",
  { no_ready_check: true }
);
redisClient.auth("3vUgnLs1mJPku1BP0WukknGyDsQk4Xge", function (err) {
  if (err) throw err
})

redisClient.on("connect", async function () {
  console.log("connected to redis")
})

const SET_ASYNC = promisify(redisClient.SETEX).bind(redisClient);
const GET_ASYNC = promisify(redisClient.GET).bind(redisClient)



const makeShortUrl = async function (req, res) {
  try {
    let data = req.body;
    if (Object.keys(data).length == 0)
      return res.status(400).send({ status: false, message: "please put a url" });
    if (typeof(data.longUrl )!= "string")
      return res.status(400).send({ status: false, message: "url must be in string" });
    if (!data.longUrl || data.longUrl== "")
      return res.status(400).send({ status: false, message: "URL can't be empty" });
    if (!validUrl.isUri(data.longUrl.trim()))
      return res.status(400).send({ status: false, message: "please put a  valid url" });



    let findDataInCache= await GET_ASYNC(data.longUrl);
    if(findDataInCache) return res.status(200).send({status:true,data:JSON.parse(findDataInCache)})



    let findUrl = await urlModel.findOne({ longUrl: data.longUrl }).select({ longUrl: 1, shortUrl: 1, urlCode: 1, _id: 0 });


    if (findUrl) { 
      await SET_ASYNC(data.longUrl,60,JSON.stringify(findUrl))
      return res.status(200).send({ status: true, data: findUrl })};
    
    data.urlCode = shortId.generate();
    data.shortUrl = `localhost:3000/${data.urlCode}`;

    let newShortedUrl = await urlModel.create(data);
    let {urlCode,shortUrl,longUrl}= newShortedUrl


    await SET_ASYNC(data.longUrl,60,JSON.stringify({urlCode,shortUrl,longUrl}));

    

    return res.status(201).send({ status: true, data: {longUrl,shortUrl,urlCode} });
  } catch (error) {
    return res.status(500).send({ satus: false, message: error.message });
  }
};

const reDirect = async function (req, res) {
  try {
    let data = req.params.urlCode;
    if (!data) return res.status(400).send({ status: false, message: "Invalid request" })
    let validShortId = shortId.isValid(data);
    if (!validShortId) return res.status(400).send({ status: false, message: "invalid url code" });

    let findDataInCache= await GET_ASYNC(data);

    if(findDataInCache) {
      let newCache=findDataInCache.replace('"','');
      return res.status(302).redirect(newCache)};

    let findUrl = await urlModel.findOne({ urlCode: data }).select({ longUrl: 1, _id: 0 });

    if (!findUrl) return res.status(404).send("can't find url code");
    
    await SET_ASYNC(data,30,JSON.stringify(findUrl.longUrl));

    return res.status(302).redirect(findUrl.longUrl);
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

module.exports = { makeShortUrl, reDirect };








