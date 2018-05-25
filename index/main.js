"use strict";

module.exports.landingPage = (event, context, callback) => {
  
  let response = {
    statusCode: 200,
    body: JSON.stringify('To infiniti and beyond!')
  };
  callback(null, response);
};
