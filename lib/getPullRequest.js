const { Request: { get, post }} = require('snek-node');
const OWNER = "DiscordManager";
const REPO = "github-bot-testing"
module.exports = async (prnumber) => {
const { body: data } = await get(`https://api.github.com/repos/${OWNER}/${REPO}/pulls/${prnumber}`)
console.log(data);
return data;
};