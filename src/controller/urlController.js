const urlModel = require("../models/urlModel");
const validUrl = require("valid-url");
const shortId = require("shortid");


const makeShortUrl = async function (req, res) {
  try {
    let data = req.body;
    let longUrl = data.longUrl.trim();
    if (Object.keys(data).length == 0)
      return res.status(400).send({ status: false, message: "please put a url" });
    if (typeof longUrl != "string")
      return res.status(400).send({ status: false, message: "url must be in string" });
    if (!longUrl || longUrl == "")
      return res.status(400).send({ status: false, message: "URL can't be empty" });
    if (!validUrl.isUri(longUrl))
      return res.status(400).send({ status: false, message: "please put a  valid url" });
    let findUrl = await urlModel.findOne({ longUrl: longUrl }).select({ longUrl: 1, shortUrl: 1, urlCode: 1, _id: 0 });
    if (findUrl) return res.status(200).send({ satus: true, data: findUrl });
    data.urlCode = shortId.generate();
    data.shortUrl = `localhost:3000/${data.urlCode}`;

    let newShortedUrl = await urlModel.create(data);

    return res.status(201).send({ status: true, data: newShortedUrl });
  } catch (error) {
    return res.status(500).send({ satus: false, message: error.message });
  }
};

const reDirect = async function (req, res) {
  try {
    let data = req.params.urlCode;
    if(!data) return res.status(400).send({status:false,message:"Invalid request"})
    let validShortId = shortId.isValid(data);
    if (!validShortId) return res.status(400).send({ status: false, message: "invalid url code" });
    let findUrl = await urlModel.findOne({ urlCode: data });
    if (!findUrl) return res.status(404).send("can't find url code");

    return res.status(302).redirect(findUrl.longUrl);
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

module.exports = { makeShortUrl,reDirect};