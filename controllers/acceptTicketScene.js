const { Scenes } = require("telegraf");
const { acceptTicketCommand } = require('./command')
const { TiCKET_ACCEPT } = require('../config/consts')

const acceptTicket = new Scenes.BaseScene('acceptTicket');
acceptTicket.enter(ctx=>{
    acceptTicketCommand(ctx);
 })
 acceptTicket.hears(TiCKET_ACCEPT.send, async ctx=> {
    //send
    if(ctx.session.ADMIN_CHATID){
        let message = 'Создано новое обращение\n';
        message += `Категория: <i>${ctx.session.category}</i>\n`;
        message += `Описание: <i>${ctx.session.text}</i>`;
        await ctx.session.bot.telegram.sendMessage(ctx.session.ADMIN_CHATID, message, { parse_mode:'HTML'});
        ctx.session.photos.forEach(async photo => {
            await ctx.session.bot.telegram.sendPhoto(ctx.session.ADMIN_CHATID, {url:photo.href}, {
                caption: `<i>${photo.caption}</i>`,
                parse_mode:'HTML'
            })
        });
    }
    await ctx.reply("Успешно отправлено!")
    ctx.scene.enter('mainMenu');
})

module.exports={
    acceptTicket
}