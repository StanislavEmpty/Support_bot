const { mainMenu, newTicketMenu, contextTicketMenu } = require("../utils/buttons")

const mainmenuCommand = ctx => ctx.reply('Жду ваших обращений', {
    ...mainMenu
});

const newticketCommand = ctx => ctx.reply('Укажите категорию', {
    ...newTicketMenu
});

const contextTicketCommand = ctx => ctx.reply('Хорошо, опишите вашу проблему', {
    ...contextTicketMenu
});

module.exports = {
    newticketCommand,
    mainmenuCommand,
    contextTicketCommand
}