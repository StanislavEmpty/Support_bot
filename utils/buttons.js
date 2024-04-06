const { Markup } = require('telegraf')
const { COMMANDS, MAIN_COMMANDS, TICKET_CATEGORY, TiCKET_CONTEXT } = require("../config/consts")

const mainMenu = 
    Markup.keyboard([
        [MAIN_COMMANDS.newticket]
    ]).resize();

const newTicketMenu = 
    Markup.keyboard([
        [TICKET_CATEGORY.c_1c],
        [TICKET_CATEGORY.c_pc],
        [TICKET_CATEGORY.c_email_internet_telephone],
        [COMMANDS.back]
    ]).resize();

const contextTicketMenu = 
    Markup.keyboard([
        [TiCKET_CONTEXT.send],
        [COMMANDS.back]
    ]).resize();

module.exports = {
    mainMenu,
    newTicketMenu,
    contextTicketMenu
}