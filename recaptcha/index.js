const fetch = require('isomorphic-fetch');
module.exports = async function (context, req) {
  const url = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.G_RECAPTCHA}&response=${req.body.tokenRecaptcha}`;

    await fetch(url, {
      method: 'post'
    })
    .then(response => response.json())
    .then(result => {
      console.log('token >>>>>>>>>>>>>>>>>>>>> ', req.body.tokenRecaptcha, ' <<<<<<<<<<<<<<<<<<')
      context.res = {
        body: result
      };
    });
    // console.log('\n\nresult >>>>>>>>>>>>>>>>>>>>> \n\n', req.body, '\n\n <<<<<<<<<<<<<<<<<<\n\n\n')


}