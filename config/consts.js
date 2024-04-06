// Текстовые комманды

const MAIN_COMMANDS= {
    start: "/start",
    newticket: "Новое обращение",
    newticketcommand: "/newticket"
}

const TICKET_CATEGORY = {
    c_1c: "Проблема с 1С",
    c_pc: "Компьютеры и оргтехника",
    c_email_internet_telephone: "Почта, Интернет, Телефония"
}

const TiCKET_CONTEXT = {
    send: "Отправить обращение"
}

const COMMANDS = {
    //back: "В главное меню"
    back: "Отмена"
}

module.exports = {
    TICKET_CATEGORY,
    TiCKET_CONTEXT,
    MAIN_COMMANDS,
    COMMANDS
}