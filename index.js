const { setupBot } = require('./bot');

(async function()
{
    try {
        
        await setupBot().launch();

        console.log('</ Бот успешно запущен >')

    } catch (error) {
        console.log('Ошибка запуска ', error)
    }
}())