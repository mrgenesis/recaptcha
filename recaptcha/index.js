const fetch = require('isomorphic-fetch');
module.exports = async function (context, req) {
  const url = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.G_RECAPTCHA}&response=${req.body.tokenRecaptcha}`;

    await fetch(url, {
      method: 'post'
    })
    .then(response => response.json())
    .then(result => {
      context.res = {
        body: result
      };
    })
    .catch(err => {
      context.log(err);
      context.res = {
        status: 501,
        body: { Error: 'Tente mais tarde.' }
      }
    });
}