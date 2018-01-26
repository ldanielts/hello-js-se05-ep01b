const CryptoJS = require("crypto-js") // o node acha ele sozinho


function gibberish (word){
  // https://stackoverflow.com/questions/11889329/word-array-to-string
  return CryptoJS.SHA256(word).toString(CryptoJS.enc.Base64)
}

template = "Oi, %s";

module.exports = { template, gibberish};