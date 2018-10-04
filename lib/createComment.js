const { Request: { get, post }} = require('snek-node');
module.exports = async (prnumber, text) => {
const { body: data } = await post(`https://api.github.com/repos/${process.env.OWNER}/${process.env.REPO}/issues/${prnumber}/comments`)
.set("Authorization", `token ${process.env.GITHUB_TOKEN}`)
.send({ body: text});
return data;
};