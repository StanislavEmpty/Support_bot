const { adminMainMenu, mainMenu, newTicketMenu, contextTicketMenu, acceptTicketMenu } = require("../utils/buttons")

const mainmenuAdminCommand = ctx => ctx.reply('Я готов отправлять в этот чат тикеты', {
    ...adminMainMenu
});

const mainmenuCommand = ctx => ctx.reply('Жду ваших обращений', {
    ...mainMenu
});

const newticketCommand = ctx => ctx.reply('Укажите категорию', {
    ...newTicketMenu
});

const contextTicketCommand = ctx => ctx.reply('Хорошо, опишите вашу проблему', {
    ...contextTicketMenu
});

const acceptTicketCommand = ctx => ctx.reply('Все верно? Отправляем в техподдержку?', {
    ...acceptTicketMenu
});

module.exports = {
    newticketCommand,
    mainmenuCommand,
    contextTicketCommand,
    mainmenuAdminCommand,
    acceptTicketCommand
}