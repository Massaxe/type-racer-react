const axios = require("axios");

function GetQuote() {
  return new Promise((resolve, reject) => {
    axios
      .get("https://andruxnet-random-famous-quotes.p.mashape.com/?count=1", {
        headers: {
          "X-Mashape-Key": "PXX2PsceBCmshGGtJC5uUCtrYN0Np1mBIR2jsnyCExT38UStSf",
          Accept: "application/json"
        }
      })
      .then(data => {
        resolve(data);
      })
      .catch(err => reject(err));
  });
}

export default GetQuote;
