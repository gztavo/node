global.SALT_KEY = 'd0582144-c35a-40c9-9976-635b7f821403';
global.EMAIL_TMPL= 'Olá, <strong>{0}</strong> seja bem vindo à Node Store !';

module.exports = {
    connectionString:'mongodb://localhost:27017/',
    sendGridKey: '', //npm install sendgrid --save
    containerConnectionString: 'SUA CONNECTION STRING' //npm install azure-storage@2.1.0 --save
}
