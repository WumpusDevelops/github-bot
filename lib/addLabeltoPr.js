const { Request: { get, post }} = require('snek-node');
const OWNER = "DiscordManager";
const REPO = "github-bot-testing"
module.exports = async (prnumber) => {
const { body: data } = await post(`https://api.github.com/repos/${OWNER}/${REPO}/issues/${prnumber}/labels`)
.set("Authorization", `token ${process.env.GITHUB_TOKEN}`)
.send(["language"]);
return data;
};