const { Telegraf, Scenes } = require('telegraf')
const { session } = require('telegraf/session')
const { MAIN_COMMANDS } = require('./config/consts');
require('dotenv').config({path: './config/.env'});

const bot = new Telegraf(process.env.BOT_TOKEN);
const { newticket } = require('./controllers/newTicketScene')
const { contextTicket } = require('./controllers/contextTicketScene')
const { mainMenu } = require('./controllers/mainMenuScene')
const { adminChatMenu } = require('./controllers/adminChatMenuScene')
const { acceptTicket } = require('./controllers/acceptTicketScene')
const stage = new Scenes.Stage([newticket, mainMenu, contextTicket, adminChatMenu, acceptTicket]);

const setupBot = () => {
    bot.use(session());
    bot.use(stage.middleware());
    bot.use((ctx,next) => {
        //console.log(ctx);
        ctx.session.BASE_PATH = process.env.BASE_PATH;
        ctx.session.ADMIN_CHATID = process.env.ADMIN_CHATID;
        ctx.session.bot = bot;
        return next()
    });

    bot.start(async ctx=>{
        await ctx.reply('HI');
        if(ctx.chat.type === 'supergroup')
            ctx.scene.enter('adminChatMenu');
        else
            ctx.scene.enter('mainMenu');
    });
    bot.hears(MAIN_COMMANDS.newticket, Scenes.Stage.enter("newticket"));
    bot.hears(MAIN_COMMANDS.newticketcommand,  Scenes.Stage.enter("newticket"));
    return bot;
}

module.exports = {
    setupBot
}