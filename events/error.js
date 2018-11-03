module.exports = async (bot, error) => {
  bot.logger.log(`An error event was sent by Discord.js: \n${JSON.stringify(error)}`, "error");
};