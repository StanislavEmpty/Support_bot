const { Scenes } = require("telegraf");
const { contextTicketCommand } = require('./command')
const { COMMANDS, MAIN_COMMANDS, TiCKET_CONTEXT } = require('../config/consts')

const contextTicket = new Scenes.BaseScene('contextTicket');
contextTicket.enter(async ctx=>{
    contextTicketCommand(ctx);
    ctx.session.photos = [];
    ctx.session.text='';
})
contextTicket.hears(COMMANDS.back, Scenes.Stage.enter('mainMenu'));
contextTicket.hears(TiCKET_CONTEXT.send, async ctx=> {
    //send
    console.log(ctx.session)
    if(!ctx.session.text){
        return await ctx.reply("Заполните хотя бы какое-то описание");
    }
    await ctx.reply("Пройдемся по вашему обращению...");
    await ctx.reply(`Категория: <i>${ctx.session.category}</i>`,{ parse_mode:'HTML'})
    if(ctx.session.text)
    {
        await ctx.reply(`Описание: <i>${ctx.session.text}</i>`, { parse_mode:'HTML'})
    }
    ctx.session.photos.forEach(async photo => {
        await ctx.replyWithPhoto({url:photo.href}, {
            caption: `<i>${photo.caption}</i>`,
            parse_mode:'HTML'
        })
    });
})

contextTicket.on('text', async ctx=> {
    if(ctx.message.text.startsWith('/'))
        return await ctx.reply("Вы не закончили предыдущее обращение. Вернитесь в главное меню, если хотите начать новое!");
    ctx.session.text += `\n${ctx.message.text}`;
})

contextTicket.on('photo', async ctx=>{
        let photo = await ctx.telegram.getFile(ctx.message.photo[ctx.message.photo.length - 1].file_id);
        ctx.session.photos.push({
            href:(await ctx.telegram.getFileLink(photo)).href,
            caption: ctx.message.caption ? ctx.message.caption : ''
        });
  })
  
module.exports={
    contextTicket
}