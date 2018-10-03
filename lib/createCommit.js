const { put } = require("snekfetch");
const OWNER = "ManagerGitBot";
const REPO = "manager-lang"
module.exports = async (file, content, sha) => {
    const { body: data } = await put(`https://api.github.com/repos/${OWNER}/${REPO}/contents/${file}`)
    .set("Authorization", `token ${process.env.GITHUB_TOKEN}`)
    .send({ message: "Patch version", content: content, sha: sha });
    return data;
};