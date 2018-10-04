const { put } = require("snekfetch");
module.exports = async (file, content, sha) => {
    const { body: data } = await put(`https://api.github.com/repos/${process.env.OWNER}/${process.env.REPO}/contents/${file}`)
    .set("Authorization", `token ${process.env.GITHUB_TOKEN}`)
    .send({ message: "Patch version", content: content, sha: sha });
    return data;
};