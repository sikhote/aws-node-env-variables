'use strict';

module.exports.test = (event, context, callback) => {
  console.log('COMPANY_NAME', process.env.COMPANY_NAME);

  const response = {
    statusCode: 200,
    body: JSON.stringify({}),
  };

  callback(null, response);
};
