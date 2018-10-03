const { Request: { get, post }} = require('snek-node');
const { base64decode } = require('nodejs-base64');
const OWNER = "ManagerGitBot";
const REPO = "manager-lang"
module.exports = async () => {
const { body: data } = await get(`https://api.github.com/repos/${OWNER}/${REPO}/contents/package.json`)
const decoded = base64decode(data.content);
const jsondata = JSON.parse(decoded);
return { version: jsondata.version, sha: data.sha };
};