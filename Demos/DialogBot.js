var builder = require('botbuilder');

var connector = new builder.ConsoleConnector().listen();
var bot = new builder.UniversalBot(connector);
bot.dialog('/',[
    function(session){
    builder.Prompts.text(session,'Please enter your name');
},
function(session,result){
    session.send('Hello,' + result.response);
}


]);