require("dotenv").config();

const app = require("express")();
const getPullRequest = require("./lib/getPullRequest");
const getPackageJsonVersion = require("./lib/getPackageJsonVersion");
const createCommit = require("./lib/createCommit")

const { base64encode } = require('nodejs-base64');

const createCommentonPullrequest = async () => {
    //const pr = await getPullRequest(1);
    //require("./lib/createComment")(1, `Thanks for creating this pull request, **${pr.user.login}**! \nThank for the language pull request!\nI will add a language label and one of our staff will check this pull request!"`);
    //require("./lib/addLabeltoPr")(1);
};
//createCommentonPullrequest();

const prMerge = async () => {
    const data = await getPackageJsonVersion();
    const bumpedversion = require("./lib/bumpVersion")(data.version);
    let content = { version: bumpedversion };
    let contentencrypted = base64encode(JSON.stringify(content));
    await createCommit("package.json", contentencrypted, data.sha);
}; 

prMerge();

app.post("/pulladded", async (req, res) => {
    const pr = await Client.pullRequests.get({owner: "DiscordManager", repo: "github-bot-testing", number: "1"});
    console.log(pr);
    res.end();
});

app.listen(8000);