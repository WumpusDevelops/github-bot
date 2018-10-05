const { Request: { get, post }} = require('snek-node');
module.exports = async (prnumber) => {
const { body: data } = await post(`https://api.github.com/repos/${process.env.OWNER}/${process.env.REPO}/issues/${prnumber}/labels`
.set("Authorization", `token ${process.env.GITHUB_TOKEN}`)
.send(["language"]);
return data;
};