const { Scenes } = require("telegraf");
const { mainmenuCommand } = require('./command')
const { MAIN_COMMANDS } = require('../config/consts')

const mainMenu = new Scenes.BaseScene('mainMenu');
mainMenu.enter(ctx=>{
    mainmenuCommand(ctx);
})

mainMenu.hears(MAIN_COMMANDS.newticket, Scenes.Stage.enter("newticket"));
mainMenu.hears(MAIN_COMMANDS.newticketcommand,  Scenes.Stage.enter("newticket"));
mainMenu.on('message', async ctx => {
    if(ctx.message.text?.startsWith(MAIN_COMMANDS.start))
    {
        await ctx.reply('HI');
        return ctx.scene.enter('mainMenu');
    }
    await ctx.reply("Я вас не понимаю!");
});

module.exports={
    mainMenu
}