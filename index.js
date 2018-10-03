require("dotenv").config();

const app = require("express")();
const getPullRequest = require("./lib/getPullRequest")

const createCommentonPullrequest = async () => {
    let languagePR;
    const pr = await getPullRequest(1);
    if(pr.title.toLowerCase().includes("language")) languagePR = true
    require("./lib/createComment")(1, `Thanks for creating this pull request, **${pr.user.login}**! \nThank for the language pull request!\nI will add a language label and one of our staff will check this pull request!"`);
    require("./lib/addLabeltoPr")(1)
};
createCommentonPullrequest();

/* app.post("/pulladded", async (req, res) => {
    const pr = await Client.pullRequests.get({owner: "DiscordManager", repo: "github-bot-testing", number: "1"});
    console.log(pr);
    res.end();
});

app.listen(8000); */