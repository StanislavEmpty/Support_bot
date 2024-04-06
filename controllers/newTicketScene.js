const { Scenes } = require("telegraf");
const { newticketCommand } = require('./command')
const { COMMANDS, TICKET_CATEGORY } = require('../config/consts')

const newticket = new Scenes.BaseScene('newticket');
newticket.enter(newticketCommand)
newticket.hears(COMMANDS.back, Scenes.Stage.enter('mainMenu'));

newticket.on('message', async ctx=> {
    if(!ctx.message.text)
        return await ctx.reply('Я не понимаю вас. Выберите категорию!');
    if(ctx.message.text.startsWith('/'))
        return await ctx.reply("Это похоже на команду... Выберите другую категорию!");
    for(const key in TICKET_CATEGORY) {
        if (Object.hasOwnProperty.call(TICKET_CATEGORY, key)) {
            const element = TICKET_CATEGORY[key];
            if(element === ctx.message.text)
            {
                ctx.session.user = ctx.message.from;
                ctx.session.category = ctx.message.text;
                return ctx.scene.enter('contextTicket');
            }
        }
    }
    await ctx.reply('Я не знаю такой категории. Попробуйте выбрать другую!');
})

module.exports={
    newticket
}