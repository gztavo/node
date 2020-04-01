global.SALT_KEY = 'd0582144-c35a-40c9-9976-635b7f821403';
global.EMAIL_TMPL= 'Olá, <strong>{0}</strong> seja bem vindo à Node Store !';

module.exports = {
    connectionString: process.env.MONGO_URL,
    sendGridKey: process.env.SENDGRIDKEY, //npm install sendgrid --save
    containerConnectionString: process.env.CONTAINERCONNECTIONSTRING
}
