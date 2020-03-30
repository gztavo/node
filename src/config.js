global.SALT_KEY = 'd0582144-c35a-40c9-9976-635b7f821403';
global.EMAIL_TMPL= 'Olá, <strong>{0}</strong> seja bem vindo à Node Store !';

module.exports = {
    connectionString:'mongodb+srv://gustavo:gustavo@cluster0-5wayn.mongodb.net/test?retryWrites=true&w=majority',
    sendGridKey: '', //npm install sendgrid --save
    containerConnectionString: 'DefaultEndpointsProtocol=https;AccountName=nodebackend;AccountKey=7GruLk8CJ7gfywcTHyHPb4O93oNcRsZ6yFrtT6b+mRk4TtFZjEcf5ixbQmf5EVPk3Yvh3oEzpuDwnqi8SliRng==;BlobEndpoint=https://nodebackend.blob.core.windows.net/;QueueEndpoint=https://nodebackend.queue.core.windows.net/;TableEndpoint=https://nodebackend.table.core.windows.net/;FileEndpoint=https://nodebackend.file.core.windows.net/;' //npm install azure-storage@2.1.0 --save
}
