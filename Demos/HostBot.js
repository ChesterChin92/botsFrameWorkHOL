var builder = require('botbuilder');
var restify = require('restify');

// var connector = new builder.ConsoleConnector().listen();
var connector = new builder.ChatConnector();

var bot = new builder.UniversalBot(connector);
bot.dialog('/',[
    function(session){
    builder.Prompts.text(session,'Please enter your name');
},
function(session,result){
    session.send('Hello,' + result.response);
}


]);

//Start the server and listen/
restify.se
var server = restify.createServer();
server.listen(process.env.port||process.env.PORT||3978,function(){
    console.log('%s listening to %s',server.name,server.url);
});
server.post('/api/messages',connector.listen());